/**
 * Google Sheets integration via Google Apps Script Web App.
 *
 * How it works:
 * 1. A Google Apps Script is deployed as a Web App (see /google-apps-script.js)
 * 2. This module posts form data to a Next.js API route
 * 3. The API route forwards the payload to the Apps Script URL
 * 4. The Apps Script writes a row to the designated Google Sheet
 *
 * Environment variable required:
 *   GOOGLE_SCRIPT_URL — the /exec URL from your deployed Apps Script Web App
 */

export type FormType =
  | "contact"
  | "strategy-audit"
  | "playbook-download"
  | "careers"
  | "newsletter";

export interface LeadPayload {
  formType: FormType;
  name?: string;
  email: string;
  company?: string;
  revenue?: string;
  challenge?: string;
  message?: string;
  role?: string;
  experience?: string;
  sourcePage?: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
}

/**
 * Send a lead payload to the /api/lead route.
 * Returns { ok: true } on success or throws with an error message.
 */
export async function submitLead(payload: LeadPayload): Promise<{ ok: true }> {
  const res = await fetch("/api/lead", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    let message = "Submission failed. Please try again.";
    try {
      const body = await res.json();
      if (body?.error) message = body.error;
    } catch {
      // ignore parse errors
    }
    throw new Error(message);
  }

  return { ok: true };
}

/**
 * Read UTM parameters from the current URL (client-side only).
 */
export function getUtmParams(): {
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
} {
  if (typeof window === "undefined") return {};
  const params = new URLSearchParams(window.location.search);
  return {
    utmSource: params.get("utm_source") ?? undefined,
    utmMedium: params.get("utm_medium") ?? undefined,
    utmCampaign: params.get("utm_campaign") ?? undefined,
  };
}
