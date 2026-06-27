import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

type LeadSubmission = {
  first_name: string;
  last_name: string;
  practice_name: string;
  work_email: string;
  phone: string;
  practice_type: string;
  locations: string;
  city: string;
  state: string;
  best_time: string;
  concern: string;
  no_phi_consent: string;
  company_website: string;
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
  utm_term: string;
  utm_content: string;
  gclid: string;
  landing_page: string;
  submitted_at: string;
};

const RATE_LIMIT_WINDOW_MS = Number(process.env.PREASSESSMENT_RATE_LIMIT_WINDOW_MS || 10 * 60 * 1000);
const RATE_LIMIT_MAX = Number(process.env.PREASSESSMENT_RATE_LIMIT_MAX || 5);
const rateBuckets = new Map<string, { count: number; resetAt: number }>();

const requiredFields: Array<keyof LeadSubmission> = [
  "first_name",
  "last_name",
  "practice_name",
  "work_email",
  "phone",
  "practice_type",
  "locations",
  "city",
  "state",
  "best_time",
  "no_phi_consent",
];

const allowedPracticeTypes = new Set([
  "Dental Practice",
  "Orthodontic Practice",
  "Oral Surgery Practice",
  "Pediatric Dental Practice",
  "Chiropractic Practice",
  "Private Medical Practice",
  "Multi-Location Healthcare Group",
  "Other Healthcare Practice",
]);

const allowedLocations = new Set(["1", "2-3", "4-9", "10+"]);
const allowedBestTimes = new Set(["Morning", "Midday", "Afternoon", "Any time during business hours"]);
const allowedConcerns = new Set([
  "",
  "HIPAA security risk",
  "Ransomware or cyberattack concern",
  "Patient-data protection",
  "Staff email or phishing risk",
  "Device and system visibility",
  "Backups and recovery",
  "Not sure, need guidance",
]);

function json(status: number, body: Record<string, unknown>) {
  return NextResponse.json(body, { status });
}

function clientKey(request: NextRequest) {
  const forwardedFor = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  return forwardedFor || request.headers.get("x-real-ip") || "unknown";
}

function isRateLimited(key: string) {
  const now = Date.now();
  const bucket = rateBuckets.get(key);
  if (!bucket || bucket.resetAt <= now) {
    rateBuckets.set(key, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return false;
  }

  bucket.count += 1;
  return bucket.count > RATE_LIMIT_MAX;
}

function logEvent(event: string, details: Record<string, unknown> = {}) {
  console.info(JSON.stringify({ event, route: "/api/preassessment-lead", ...details }));
}

function logError(event: string, details: Record<string, unknown> = {}) {
  console.error(JSON.stringify({ event, route: "/api/preassessment-lead", ...details }));
}

function clean(value: unknown, maxLength = 250) {
  if (typeof value !== "string") return "";
  return value
    .replace(/<[^>]*>/g, " ")
    .replace(/[\u0000-\u001f\u007f]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, maxLength);
}

function normalizePhone(value: string) {
  return value.replace(/[^\d+().\-\s]/g, "").slice(0, 50);
}

function validatePayload(input: Record<string, unknown>): { ok: true; submission: LeadSubmission } | { ok: false; errors: string[] } {
  const submission: LeadSubmission = {
    first_name: clean(input.first_name, 100),
    last_name: clean(input.last_name, 100),
    practice_name: clean(input.practice_name, 200),
    work_email: clean(input.work_email, 200).toLowerCase(),
    phone: normalizePhone(clean(input.phone, 50)),
    practice_type: clean(input.practice_type, 100),
    locations: clean(input.locations, 20),
    city: clean(input.city, 100),
    state: clean(input.state, 50).toUpperCase(),
    best_time: clean(input.best_time, 100),
    concern: clean(input.concern, 120),
    no_phi_consent: clean(input.no_phi_consent, 10),
    company_website: clean(input.company_website, 200),
    utm_source: clean(input.utm_source, 120),
    utm_medium: clean(input.utm_medium, 120),
    utm_campaign: clean(input.utm_campaign, 120),
    utm_term: clean(input.utm_term, 120),
    utm_content: clean(input.utm_content, 120),
    gclid: clean(input.gclid, 180),
    landing_page: clean(input.landing_page, 500),
    submitted_at: clean(input.submitted_at, 80),
  };

  const errors: string[] = [];
  if (submission.company_website) errors.push("spam");
  for (const field of requiredFields) {
    if (!submission[field]) errors.push(field);
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(submission.work_email)) errors.push("work_email");
  if (submission.phone.replace(/\D/g, "").length < 10) errors.push("phone");
  if (!allowedPracticeTypes.has(submission.practice_type)) errors.push("practice_type");
  if (!allowedLocations.has(submission.locations)) errors.push("locations");
  if (!allowedBestTimes.has(submission.best_time)) errors.push("best_time");
  if (!allowedConcerns.has(submission.concern)) errors.push("concern");
  if (submission.no_phi_consent !== "yes") errors.push("no_phi_consent");

  if (errors.length > 0) return { ok: false, errors };
  return { ok: true, submission };
}

function emailText(submission: LeadSubmission) {
  return [
    "New AI Hub Sentinel pre-assessment request",
    "",
    `Name: ${submission.first_name} ${submission.last_name}`,
    `Practice: ${submission.practice_name}`,
    `Email: ${submission.work_email}`,
    `Phone: ${submission.phone}`,
    `Practice type: ${submission.practice_type}`,
    `Locations: ${submission.locations}`,
    `City/State: ${submission.city}, ${submission.state}`,
    `Best time to call: ${submission.best_time}`,
    `Concern: ${submission.concern || "Not provided"}`,
    `Landing page: ${submission.landing_page || "Not provided"}`,
    `UTM source: ${submission.utm_source || "Not provided"}`,
    `UTM medium: ${submission.utm_medium || "Not provided"}`,
    `UTM campaign: ${submission.utm_campaign || "Not provided"}`,
    `UTM term: ${submission.utm_term || "Not provided"}`,
    `UTM content: ${submission.utm_content || "Not provided"}`,
    `GCLID: ${submission.gclid || "Not provided"}`,
    "",
    "No-PHI acknowledgement: yes",
    "Reminder: do not request or transmit patient information or PHI in follow-up.",
  ].join("\n");
}

async function sendNotificationEmail(submission: LeadSubmission) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.PREASSESSMENT_NOTIFICATION_FROM;
  const to = process.env.PREASSESSMENT_NOTIFICATION_TO || "info@ai-hub.agency";
  if (!apiKey || !from) throw new Error("missing_email_config");

  const endpoint = process.env.RESEND_API_URL || "https://api.resend.com/emails";
  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      subject: `New AI Hub Sentinel pre-assessment request: ${submission.practice_name}`,
      text: emailText(submission),
    }),
  });

  if (!response.ok) throw new Error(`email_${response.status}`);
  return response;
}

export async function POST(request: NextRequest) {
  const requestId = crypto.randomUUID();
  const key = clientKey(request);

  if (isRateLimited(key)) {
    logEvent("preassessment_rate_limited", { requestId });
    return json(429, { error: "Too many requests. Please wait before trying again." });
  }

  let raw: unknown;
  try {
    raw = await request.json();
  } catch {
    logEvent("preassessment_invalid_json", { requestId });
    return json(400, { error: "Invalid request." });
  }

  if (!raw || typeof raw !== "object" || Array.isArray(raw)) {
    logEvent("preassessment_invalid_shape", { requestId });
    return json(400, { error: "Invalid request." });
  }

  const validation = validatePayload(raw as Record<string, unknown>);
  if (!validation.ok) {
    logEvent("preassessment_validation_failed", {
      requestId,
      errorCount: validation.errors.length,
      spam: validation.errors.includes("spam"),
    });
    return json(400, { error: "Please review the form and try again." });
  }

  try {
    await sendNotificationEmail(validation.submission);
    logEvent("preassessment_email_succeeded", { requestId });
    const response = json(201, { ok: true });
    response.cookies.set("sentinelPreAssessmentSubmitted", "true", {
      maxAge: 300,
      path: "/thank-you-pre-assessment",
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
    });
    return response;
  } catch (error) {
    logError("preassessment_email_failed", {
      requestId,
      reason: error instanceof Error ? error.message : "unknown",
    });
    return json(500, { error: "Email delivery failed." });
  }
}
