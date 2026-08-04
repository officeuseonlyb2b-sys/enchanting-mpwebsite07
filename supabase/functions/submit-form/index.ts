import { createClient } from 'npm:@supabase/supabase-js@2'
import { corsHeaders } from 'npm:@supabase/supabase-js@2/cors'

/**
 * Anti-spam gateway for every public form on the site.
 *
 * Runs the full validation suite server-side (never trusting the client),
 * logs rejections with a reason, and only then hands the payload off to the
 * existing transactional-email flow (internal notification + user auto-reply).
 */

const MIN_FILL_SECONDS = 5
const RATE_LIMIT_MAX = 3
const RATE_LIMIT_WINDOW_MIN = 10
const DUPLICATE_WINDOW_MIN = 30

const DISPOSABLE_DOMAINS = new Set([
  'mailinator.com', 'yopmail.com', 'guerrillamail.com', 'guerrillamail.net',
  'sharklasers.com', '10minutemail.com', '10minutemail.net', 'tempmail.com',
  'temp-mail.org', 'trashmail.com', 'throwawaymail.com', 'getnada.com',
  'dispostable.com', 'maildrop.cc', 'fakeinbox.com', 'mailnesia.com',
  'mytemp.email', 'moakt.com', 'emailondeck.com', 'spamgourmet.com',
  'discard.email', 'mailcatch.com', 'tempinbox.com', 'grr.la', 'spam4.me',
  'inboxbear.com', 'mohmal.com', 'einrot.com', 'byom.de', 'tmail.ws',
])

const FAKE_LOCALPARTS = new Set([
  'test', 'testing', 'asdf', 'asdfasdf', 'qwerty', 'qwertyuiop', 'abc',
  'abcd', 'abcde', 'xxx', 'xxxx', 'aaa', 'aaaa', 'noemail', 'no', 'none',
  'fake', 'fakeemail', 'dummy', 'nobody', 'null', 'undefined', 'spam',
])

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, 'Content-Type': 'application/json' },
  })

/** Escape HTML so nothing user-supplied can execute inside an email body. */
function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

/** Strip control chars + tags, collapse whitespace, cap length, escape HTML. */
function sanitize(value: unknown, maxLen = 2000): string {
  if (typeof value !== 'string') return ''
  const cleaned = value
    // deno-lint-ignore no-control-regex
    .replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, '')
    .replace(/<[^>]*>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .slice(0, maxLen)
  return escapeHtml(cleaned)
}

async function sha256(input: string): Promise<string> {
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(input))
  return Array.from(new Uint8Array(buf)).map((b) => b.toString(16).padStart(2, '0')).join('')
}

function isGibberish(value: string): boolean {
  const v = value.toLowerCase().replace(/\s+/g, '')
  if (!v) return true
  if (/^(.)\1{2,}$/.test(v)) return true // xxxx, aaaa
  if (/(qwerty|asdf|zxcv|qazwsx|wasd|hjkl|poiuy)/.test(v)) return true
  const vowels = (v.match(/[aeiou]/g) || []).length
  if (v.length >= 6 && vowels === 0) return true
  if (/(.)\1{3,}/.test(v)) return true
  return false
}

function validateName(name: string): string | null {
  if (name.length < 3) return 'Please enter your full name (at least 3 characters).'
  if (!/^[A-Za-z][A-Za-z .'-]*$/.test(name)) return 'Name may only contain letters and spaces.'
  if (/\d/.test(name)) return 'Name may only contain letters and spaces.'
  if (isGibberish(name)) return 'Please enter a valid name.'
  return null
}

function validateEmail(email: string): string | { reason: string; message: string } | null {
  const e = email.toLowerCase()
  if (!/^[^\s@]+@[^\s@]+\.[a-z]{2,}$/i.test(e)) return 'Please enter a valid email address.'
  const [local, domain] = e.split('@')
  if (DISPOSABLE_DOMAINS.has(domain)) {
    return { reason: 'Disposable Email', message: 'Please use a permanent email address.' }
  }
  if (FAKE_LOCALPARTS.has(local) || isGibberish(local)) {
    return 'Please enter a valid email address.'
  }
  return null
}

function validatePhone(phone: string): string | null {
  const digits = phone.replace(/\D/g, '').replace(/^0+/, '').replace(/^91(?=\d{10}$)/, '')
  if (!/^[6-9]\d{9}$/.test(digits)) return 'Please enter a valid 10-digit Indian mobile number.'
  return null
}

function validateMessage(message: string): string | null {
  const m = message.trim()
  if (m.length < 10) return 'Please write a message of at least 10 characters.'
  if (/(.)\1{5,}/.test(m)) return 'Your message looks like spam. Please rewrite it.'
  const urls = m.match(/(https?:\/\/|www\.)/gi) || []
  if (urls.length > 1) return 'Please remove links from your message.'
  const words = m.split(/\s+/)
  const gibberishWords = words.filter((w) => w.length > 5 && isGibberish(w)).length
  if (words.length > 0 && gibberishWords / words.length > 0.5) {
    return 'Your message looks like spam. Please rewrite it.'
  }
  return null
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') return new Response(null, { headers: corsHeaders })
  if (req.method !== 'POST') return json({ error: 'Method not allowed' }, 405)

  const supabaseUrl = Deno.env.get('SUPABASE_URL')
  const serviceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')
  if (!supabaseUrl || !serviceKey) {
    console.error('Missing Supabase environment configuration')
    return json({ error: 'Server configuration error' }, 500)
  }
  const supabase = createClient(supabaseUrl, serviceKey)

  const ip =
    req.headers.get('cf-connecting-ip') ||
    (req.headers.get('x-forwarded-for') || '').split(',')[0].trim() ||
    'unknown'

  let body: Record<string, unknown>
  try {
    body = await req.json()
  } catch {
    return json({ error: 'Invalid JSON in request body' }, 400)
  }

  const formName = sanitize(body.formName, 100) || 'Website Form'
  const fullName = sanitize(body.fullName, 100)
  const email = sanitize(body.email, 255).toLowerCase()
  const phone = sanitize(body.phone, 30)
  const message = sanitize(body.message, 2000)
  const messageHash = await sha256(`${email}|${phone}|${message}`)

  const reject = async (reason: string, userMessage: string, status = 400) => {
    console.warn('Form submission rejected', { reason, formName, ip, email })
    await supabase.from('form_submission_log').insert({
      form_name: formName,
      full_name: fullName || null,
      email: email || null,
      phone: phone || null,
      message_hash: messageHash,
      ip_address: ip,
      status: 'rejected',
      reason,
      metadata: { userAgent: req.headers.get('user-agent')?.slice(0, 300) ?? null },
    })
    return json({ ok: false, error: userMessage, reason }, status)
  }

  // 2. Honeypot — a real user never fills a hidden field
  if (typeof body.website === 'string' && body.website.trim().length > 0) {
    return await reject('Honeypot Triggered', 'Submission blocked.', 400)
  }

  // 3. Time validation — forms completed impossibly fast are bots
  const elapsedMs = Number(body.elapsedMs)
  if (!Number.isFinite(elapsedMs) || elapsedMs < MIN_FILL_SECONDS * 1000) {
    return await reject(
      'Too Fast',
      'That was too quick — please take a moment and submit again.',
      400,
    )
  }

  // 9. Rate limiting — max 3 submissions per IP per 10 minutes
  if (ip !== 'unknown') {
    const since = new Date(Date.now() - RATE_LIMIT_WINDOW_MIN * 60_000).toISOString()
    const { count } = await supabase
      .from('form_submission_log')
      .select('id', { count: 'exact', head: true })
      .eq('ip_address', ip)
      .eq('status', 'accepted')
      .gte('created_at', since)
    if ((count ?? 0) >= RATE_LIMIT_MAX) {
      return await reject(
        'Rate Limit',
        'Too many submissions. Please try again in a few minutes.',
        429,
      )
    }
  }

  // 1. Cloudflare Turnstile — verified server-side, tokens are single use
  const turnstileSecret = Deno.env.get('TURNSTILE_SECRET_KEY')
  if (turnstileSecret) {
    const token = typeof body.turnstileToken === 'string' ? body.turnstileToken : ''
    if (!token) {
      return await reject('Turnstile Failed', 'Verification failed. Please refresh and try again.', 403)
    }
    try {
      const form = new FormData()
      form.append('secret', turnstileSecret)
      form.append('response', token)
      if (ip !== 'unknown') form.append('remoteip', ip)
      const verifyRes = await fetch(
        'https://challenges.cloudflare.com/turnstile/v0/siteverify',
        { method: 'POST', body: form },
      )
      const verify = await verifyRes.json()
      if (!verify.success) {
        console.warn('Turnstile verification failed', verify['error-codes'])
        return await reject('Turnstile Failed', 'Verification failed. Please refresh and try again.', 403)
      }
    } catch (err) {
      console.error('Turnstile verification error', err)
      return await reject('Turnstile Failed', 'Verification failed. Please try again.', 403)
    }
  }

  // 4. Name
  const nameError = validateName(fullName)
  if (nameError) return await reject('Invalid Name', nameError, 400)

  // 5. Email
  const emailResult = validateEmail(email)
  if (typeof emailResult === 'string') return await reject('Invalid Email', emailResult, 400)
  if (emailResult) return await reject(emailResult.reason, emailResult.message, 400)

  // 6. Phone (only when supplied — several forms keep it optional)
  if (phone) {
    const phoneError = validatePhone(phone)
    if (phoneError) return await reject('Invalid Phone', phoneError, 400)
  }

  // 7. Message (only when supplied)
  if (message) {
    const messageError = validateMessage(message)
    if (messageError) return await reject('Spam Message', messageError, 400)
  }

  // 8. Duplicate detection — same email + phone + message within 30 minutes
  const dupSince = new Date(Date.now() - DUPLICATE_WINDOW_MIN * 60_000).toISOString()
  const { data: dup } = await supabase
    .from('form_submission_log')
    .select('id')
    .eq('message_hash', messageHash)
    .eq('status', 'accepted')
    .gte('created_at', dupSince)
    .limit(1)
  if (dup && dup.length > 0) {
    return await reject(
      'Duplicate Submission',
      'We already received this enquiry. Our team will contact you shortly.',
      409,
    )
  }

  // Passed every check — log as accepted, then run the existing email flow.
  await supabase.from('form_submission_log').insert({
    form_name: formName,
    full_name: fullName,
    email,
    phone: phone || null,
    message_hash: messageHash,
    ip_address: ip,
    status: 'accepted',
  })

  const rawExtras =
    body.extraFields && typeof body.extraFields === 'object'
      ? (body.extraFields as Record<string, unknown>)
      : {}
  const extraFields: Record<string, string> = {}
  for (const [k, v] of Object.entries(rawExtras)) {
    const clean = sanitize(v, 500)
    if (clean) extraFields[sanitize(k, 80)] = clean
  }

  const templateData = {
    formName,
    fullName,
    email,
    phone: phone || undefined,
    destination: sanitize(body.destination, 120) || undefined,
    packageName: sanitize(body.packageName, 200) || undefined,
    travelDate: sanitize(body.travelDate, 60) || undefined,
    travelers: sanitize(body.travelers, 60) || undefined,
    message: message || undefined,
    submittedAt: sanitize(body.submittedAt, 100) || new Date().toISOString(),
    pageUrl: sanitize(body.pageUrl, 300) || undefined,
    extraFields,
  }

  const idempotencyBase = sanitize(body.idempotencyBase, 200) || `${formName}-${email}-${Date.now()}`
  const autoReplyTemplate = sanitize(body.autoReplyTemplate, 80) || 'inquiry-auto-reply'

  const sendEmail = (payload: Record<string, unknown>) =>
    fetch(`${supabaseUrl}/functions/v1/send-transactional-email`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${serviceKey}`,
      },
      body: JSON.stringify(payload),
    })

  try {
    const notifyRes = await sendEmail({
      templateName: 'inquiry-notification',
      recipientEmail: 'info@enchantingmp.com',
      idempotencyKey: `notify-${idempotencyBase}`,
      templateData,
    })
    if (!notifyRes.ok) {
      const detail = await notifyRes.text()
      console.error('Notification email failed', notifyRes.status, detail)
      return json({ ok: false, error: 'Something went wrong. Please try again.' }, 502)
    }

    // Auto-reply is best-effort; never fail the submission on it.
    sendEmail({
      templateName: autoReplyTemplate,
      recipientEmail: email,
      idempotencyKey: `reply-${idempotencyBase}`,
      templateData: { fullName, formName },
    }).catch((err) => console.error('Auto-reply email failed', err))

    return json({ ok: true })
  } catch (err) {
    console.error('Form submission failed', err)
    return json({ ok: false, error: 'Something went wrong. Please try again.' }, 500)
  }
})
