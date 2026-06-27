# AI Hub Agency Website Redesign

Branch: `feature/pre-assessment-funnel-and-form-routing`

## Current Gate Status

- Founder homepage UAT: approved.
- Founder final UAT: approved.
- Production deployment: complete.
- Production branch merge: complete.
- Live URL: `https://www.ai-hub.agency/`.
- Rollback tag: `production-backup-20260622-pre-sentinel`.
- Production deployment commits:
  - `c29a598` - approved Sentinel healthcare redesign.
  - `8b95e4d` - Cloudflare redirects artifact.
  - `f6e70f3` - framework-level production redirects.

## Redesign Positioning

The redesign is Sentinel-first and healthcare-specific:

- Primary offer: AI Hub Sentinel.
- Primary audience: medical and dental practices.
- Primary CTA: HIPAA Cyber Risk Pre-Assessment.
- Supporting services: AI Receptionist / Voice AI and Website and Automation Builds.

The site must not claim to provide legal advice or guarantee HIPAA compliance. Forms must not request patient information or protected health information.

## Local Preview

```bash
npm run dev -- --hostname 127.0.0.1 --port 3000
```

Preview URL:

```text
http://127.0.0.1:3000/
```

## Validation Commands

```bash
npm run lint
npm run build
```

## Deployment Rule

Founder final approval was given before production deployment on June 22, 2026. Future production changes still require explicit approval before deployment.

## Pre-Assessment Funnel Import

- Imported ZIP source: `ai-hub-sentinel-funnel-updated-phone.zip`.
- Adapted landing page route: `/request-pre-assessment`.
- Adapted thank-you route: `/thank-you-pre-assessment`.
- Thank-you page is `noindex, nofollow` and is guarded behind a browser submission flag set only after a successful lead endpoint response.
- The ZIP phone number `918-409-2361` matches the phone number already used on the site.
- The current `/contact` form remains preview-only and does not deliver leads to a real destination.

## Pre-Assessment Lead Delivery

`POST /api/preassessment-lead` is the only approved delivery path for `/request-pre-assessment`.

The route:

- Validates and sanitizes required fields server-side.
- Rejects honeypot submissions.
- Applies an in-memory public form rate limit.
- Creates a Cold Caller CRM lead through a server-side CRM API endpoint.
- Sends an internal notification email to `info@ai-hub.agency` through Resend.
- Returns `201` only after both CRM and email delivery return successful HTTP responses.
- Returns `400` for invalid requests, `429` for rate-limited requests, and `500` when CRM or email delivery fails.
- Logs structured delivery events without logging submitted form contents.

Lead destination and field mapping:

- CRM endpoint: `COLD_CALLER_CRM_LEADS_ENDPOINT`.
- CRM payload shape: `{ source: "ai-hub-sentinel-pre-assessment", lead: { ... } }`.
- `lead.business_name` <- `practice_name`.
- `lead.contact_first_name` <- `first_name`.
- `lead.contact_last_name` <- `last_name`.
- `lead.decision_maker_name` <- first and last name.
- `lead.phone_number` <- `phone`.
- `lead.email` <- `work_email`.
- `lead.business_category` <- `practice_type`.
- `lead.city` / `lead.state` <- submitted city/state.
- `lead.lead_source` <- `Website`.
- `lead.lead_status` <- `New Lead`.
- `lead.interest_level` <- `Warm`.
- `lead.notes_summary` <- locations, best call time, selected concern, landing page, UTM values, and no-PHI acknowledgement.

Required environment variables:

- `COLD_CALLER_CRM_LEADS_ENDPOINT`: secure server-side CRM lead creation endpoint.
- `COLD_CALLER_CRM_API_KEY`: bearer token for the CRM endpoint, if required.
- `RESEND_API_KEY`: Resend API key for internal notification email.
- `PREASSESSMENT_NOTIFICATION_FROM`: verified sender address for notification email.
- `PREASSESSMENT_NOTIFICATION_TO`: internal recipient address. Defaults to `info@ai-hub.agency`.

Optional environment variables:

- `PREASSESSMENT_RATE_LIMIT_WINDOW_MS`: rate limit window. Defaults to `600000`.
- `PREASSESSMENT_RATE_LIMIT_MAX`: allowed submissions per client key per window. Defaults to `5`.
- `RESEND_API_URL`: non-production override for local/mock email tests. Defaults to `https://api.resend.com/emails`.

Local testing instructions:

1. Start local mock CRM and email endpoints, or point env vars to approved non-production services.
2. Set `COLD_CALLER_CRM_LEADS_ENDPOINT` to the mock or staging CRM endpoint.
3. Set `RESEND_API_KEY`, `PREASSESSMENT_NOTIFICATION_FROM`, and `PREASSESSMENT_NOTIFICATION_TO` for a safe non-production email test.
4. Run `npm run dev -- --hostname 127.0.0.1 --port 3000`.
5. Submit `/request-pre-assessment` and confirm the browser reaches `/thank-you-pre-assessment` only after both delivery steps return success.

Production deployment prerequisites:

- Founder approval for production deployment.
- Approved Cold Caller CRM lead creation endpoint and token installed as production secrets.
- Verified Resend sender domain and production email key installed as production secrets.
- Confirmed internal recipient access for `info@ai-hub.agency`.
- Confirmed no PHI is requested, stored, or transmitted.
- Confirmed rate limit values fit production traffic expectations.

Failure behavior and recovery:

- Invalid or spammy submissions return `400` and keep the user on the request page.
- Rate-limited submissions return `429` and keep the user on the request page.
- CRM or email delivery failures return `500`, keep the user on the request page, and log the failing delivery stage without form contents.
- Do not manually redirect users to the thank-you page unless CRM creation and internal notification delivery are both confirmed.
- If CRM succeeds and email fails, recover by checking structured logs, confirming whether the CRM lead exists, then sending the internal notification manually from the accepted CRM lead record before retrying or reprocessing.

## Post-Deployment Validation

Validated live production:

- Homepage.
- AI Hub Sentinel page.
- HIPAA Cyber Risk Pre-Assessment page.
- Contact form surface and no-PHI notice.
- Main navigation.
- Footer links.
- Sitemap and robots.
- HTTP `301` redirects from retired routes.
