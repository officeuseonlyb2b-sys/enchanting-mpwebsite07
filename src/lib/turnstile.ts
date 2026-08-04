/**
 * Cloudflare Turnstile helper.
 *
 * Renders an invisible ("interaction-only") widget off-screen so no existing
 * form UI changes; a visible challenge only appears if Cloudflare decides the
 * visitor needs one. If no site key is configured, token generation is skipped
 * and the server simply won't enforce Turnstile.
 */

export const TURNSTILE_SITE_KEY: string =
  (import.meta.env.VITE_TURNSTILE_SITE_KEY as string | undefined) || "";

const SCRIPT_SRC =
  "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";

declare global {
  interface Window {
    turnstile?: {
      render: (el: HTMLElement, opts: Record<string, unknown>) => string;
      remove: (id: string) => void;
    };
  }
}

let scriptPromise: Promise<void> | null = null;

function loadScript(): Promise<void> {
  if (window.turnstile) return Promise.resolve();
  if (scriptPromise) return scriptPromise;
  scriptPromise = new Promise<void>((resolve, reject) => {
    const s = document.createElement("script");
    s.src = SCRIPT_SRC;
    s.async = true;
    s.defer = true;
    s.onload = () => resolve();
    s.onerror = () => {
      scriptPromise = null;
      reject(new Error("Failed to load Turnstile"));
    };
    document.head.appendChild(s);
  });
  return scriptPromise;
}

/** Returns a fresh single-use Turnstile token, or "" when unavailable. */
export async function getTurnstileToken(timeoutMs = 15000): Promise<string> {
  if (!TURNSTILE_SITE_KEY || typeof window === "undefined") return "";
  try {
    await loadScript();
  } catch {
    return "";
  }
  if (!window.turnstile) return "";

  const container = document.createElement("div");
  container.style.position = "fixed";
  container.style.bottom = "0";
  container.style.right = "0";
  container.style.zIndex = "2147483647";
  document.body.appendChild(container);

  let widgetId: string | undefined;
  const cleanup = () => {
    try {
      if (widgetId && window.turnstile) window.turnstile.remove(widgetId);
    } catch {
      /* noop */
    }
    container.remove();
  };

  return new Promise<string>((resolve) => {
    const finish = (token: string) => {
      clearTimeout(timer);
      cleanup();
      resolve(token);
    };
    const timer = setTimeout(() => finish(""), timeoutMs);
    try {
      widgetId = window.turnstile!.render(container, {
        sitekey: TURNSTILE_SITE_KEY,
        appearance: "interaction-only",
        size: "flexible",
        callback: (token: string) => finish(token),
        "error-callback": () => finish(""),
        "timeout-callback": () => finish(""),
      });
    } catch {
      finish("");
    }
  });
}
