import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

// ─── Validation schema ────────────────────────────────────────────────────────

const leadSchema = z.object({
  formType: z.enum([
    "contact",
    "strategy-audit",
    "playbook-download",
    "careers",
    "newsletter",
  ]),
  name: z.string().optional(),
  email: z.string().email(),
  company: z.string().optional(),
  revenue: z.string().optional(),
  challenge: z.string().optional(),
  message: z.string().optional(),
  role: z.string().optional(),
  experience: z.string().optional(),
  sourcePage: z.string().optional(),
  utmSource: z.string().optional(),
  utmMedium: z.string().optional(),
  utmCampaign: z.string().optional(),
});

// ─── POST /api/lead ───────────────────────────────────────────────────────────

export async function POST(req: NextRequest) {
  // 1. Parse + validate body
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const parsed = leadSchema.safeParse(body);
  if (!parsed.success) {
    const message = parsed.error.issues.map((i) => i.message).join("; ");
    return NextResponse.json({ error: message }, { status: 422 });
  }

  const data = parsed.data;

  // 2. Forward to Google Apps Script Web App
  const scriptUrl = process.env.GOOGLE_SCRIPT_URL;
  if (!scriptUrl) {
    // During local dev without the env var configured, log and succeed silently
    console.warn("[lead] GOOGLE_SCRIPT_URL is not set — skipping sheet write.");
    return NextResponse.json({ ok: true });
  }

  const payload = {
    timestamp: new Date().toISOString(),
    formType: data.formType,
    name: data.name ?? "",
    email: data.email,
    company: data.company ?? "",
    revenue: data.revenue ?? "",
    primaryChallenge: data.challenge ?? "",
    message: data.message ?? "",
    role: data.role ?? "",
    experience: data.experience ?? "",
    sourcePage: data.sourcePage ?? req.headers.get("referer") ?? "",
    utmSource: data.utmSource ?? "",
    utmMedium: data.utmMedium ?? "",
    utmCampaign: data.utmCampaign ?? "",
  };

  try {
    const resp = await fetch(scriptUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!resp.ok) {
      console.error("[lead] Apps Script returned", resp.status);
      return NextResponse.json(
        { error: "Could not save submission. Please try again." },
        { status: 502 }
      );
    }
  } catch (err) {
    console.error("[lead] fetch to Apps Script failed:", err);
    return NextResponse.json(
      { error: "Network error. Please try again." },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
