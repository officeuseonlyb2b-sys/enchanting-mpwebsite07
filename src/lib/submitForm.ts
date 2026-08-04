import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { getTurnstileToken } from "@/lib/turnstile";

/**
 * Global form submission helper.
 *
 * All submissions go through the `submit-form` edge function, which runs the
 * full anti-spam suite server-side (Turnstile, honeypot, timing, name/email/
 * phone/message validation, duplicate detection, rate limiting, logging) and
 * then triggers the unchanged email flow:
 *  1. Internal notification to info@enchantingmp.com
 *  2. Branded auto-reply to the user
 */

export interface FormSubmission {
  formName: string;          // e.g. "Contact Form", "Tour Inquiry"
  fullName: string;
  email: string;
  phone?: string;
  destination?: string;
  packageName?: string;
  travelDate?: string;
  travelers?: string;
  message?: string;
  /** Any additional structured fields to include in the notification email. */
  extraFields?: Record<string, string | undefined>;
  /** Optional override for the user auto-reply template (defaults to 'inquiry-auto-reply'). */
  autoReplyTemplate?: string;
  /** Honeypot value — must stay empty. Populated automatically by forms that render it. */
  website?: string;
}

const baseSchema = z.object({
  formName: z.string().min(1).max(100),
  fullName: z.string().trim().min(2, "Please enter your name").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  phone: z.string().trim().max(30).optional().or(z.literal("")),
  destination: z.string().max(120).optional(),
  packageName: z.string().max(200).optional(),
  travelDate: z.string().max(60).optional(),
  travelers: z.string().max(60).optional(),
  message: z.string().max(2000).optional(),
});

// Simple client-side rapid-submit guard (per form name)
const lastSubmitAt = new Map<string, number>();
const RATE_LIMIT_MS = 4000;

// Timestamp of when the page (and therefore the forms on it) loaded.
const pageLoadedAt = Date.now();

// Meta Pixel: dedupe Lead events per submission
const firedLeadEvents = new Set<string>();
declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void;
  }
}

function trackMetaLead(dedupeKey: string) {
  if (typeof window === "undefined") return;
  if (firedLeadEvents.has(dedupeKey)) return;
  firedLeadEvents.add(dedupeKey);
  try {
    if (typeof window.fbq !== "undefined") {
      window.fbq("track", "Lead", { value: 100, currency: "INR" });
    }
  } catch (e) {
    console.warn("Meta Pixel Lead event failed:", e);
  }
}

export async function submitForm(
  data: FormSubmission
): Promise<{ ok: boolean; error?: string }> {
  // Honeypot — bots fill hidden fields, humans never do
  if (data.website && data.website.trim().length > 0) {
    return { ok: false, error: "Submission blocked." };
  }

  // Validation
  const parsed = baseSchema.safeParse(data);
  if (!parsed.success) {
    const first = parsed.error.issues[0]?.message || "Invalid form data";
    return { ok: false, error: first };
  }

  // Rate limit
  const now = Date.now();
  const last = lastSubmitAt.get(data.formName) ?? 0;
  if (now - last < RATE_LIMIT_MS) {
    return { ok: false, error: "Please wait a moment before submitting again." };
  }
  lastSubmitAt.set(data.formName, now);

  const submittedAt = new Date().toLocaleString("en-IN", {
    dateStyle: "full",
    timeStyle: "short",
    timeZone: "Asia/Kolkata",
  });

  const cleanExtras = Object.fromEntries(
    Object.entries(data.extraFields ?? {}).filter(([, v]) => v && v.trim().length)
  ) as Record<string, string>;

  const idempotencyBase = `${data.formName}-${data.email}-${now}`;

  try {
    const turnstileToken = await getTurnstileToken();

    const { data: result, error } = await supabase.functions.invoke("submit-form", {
      body: {
        formName: data.formName,
        fullName: data.fullName.trim(),
        email: data.email.trim(),
        phone: data.phone?.trim() || undefined,
        destination: data.destination?.trim() || undefined,
        packageName: data.packageName?.trim() || undefined,
        travelDate: data.travelDate?.trim() || undefined,
        travelers: data.travelers?.trim() || undefined,
        message: data.message?.trim() || undefined,
        submittedAt,
        pageUrl: typeof window !== "undefined" ? window.location.href : undefined,
        extraFields: cleanExtras,
        idempotencyBase,
        autoReplyTemplate: data.autoReplyTemplate,
        website: data.website ?? "",
        elapsedMs: now - pageLoadedAt,
        turnstileToken,
      },
    });

    // Non-2xx responses surface as FunctionsHttpError; read the server reason.
    if (error) {
      let serverMessage = "";
      const ctx = (error as { context?: Response }).context;
      if (ctx && typeof ctx.json === "function") {
        try {
          const payload = await ctx.json();
          serverMessage = payload?.error || "";
        } catch {
          /* ignore */
        }
      }
      lastSubmitAt.delete(data.formName);
      return {
        ok: false,
        error: serverMessage || "Something went wrong. Please try again.",
      };
    }

    if (!result?.ok) {
      lastSubmitAt.delete(data.formName);
      return { ok: false, error: result?.error || "Something went wrong. Please try again." };
    }

    // Meta Pixel Lead event — fired only after a successful submission
    trackMetaLead(idempotencyBase);

    return { ok: true };
  } catch (err: any) {
    console.error("Form submission failed:", err);
    lastSubmitAt.delete(data.formName); // allow retry on failure
    return { ok: false, error: err?.message || "Something went wrong. Please try again." };
  }
}

/** Convenience wrapper that handles toast notifications. */
export async function submitFormWithToast(data: FormSubmission) {
  const result = await submitForm(data);
  if (result.ok) {
    toast.success("Thank you! Your inquiry has been submitted successfully.");
  } else {
    toast.error(result.error || "Something went wrong. Please try again.");
  }
  return result;
}
