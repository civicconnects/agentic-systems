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
- Thank-you page is `noindex, nofollow` and is guarded behind a browser submission flag set only after a successful preview form submission.
- The ZIP phone number `918-409-2361` matches the phone number already used on the site.
- The `/request-pre-assessment` form is self-contained in this AI Hub website project and sends one internal notification email when configured.
- This funnel does not connect to the Cold Caller CRM or any external application.

## Pre-Assessment Email Delivery

`POST /api/preassessment-lead` accepts the pre-assessment form fields and sends one internal notification email through Resend.

Form fields:

- `first_name`
- `last_name`
- `practice_name`
- `work_email`
- `phone`
- `practice_type`
- `locations`
- `city`
- `state`
- `best_time`
- `concern`
- `no_phi_consent`
- Honeypot: `company_website`
- Tracking metadata: UTM fields, `gclid`, `landing_page`, and `submitted_at`

Delivery behavior:

- Required fields are validated server-side.
- Text fields are sanitized before email delivery.
- Honeypot submissions are rejected.
- Basic in-memory rate limiting protects the public form.
- A successful response is returned only after Resend accepts the email.
- No patient information or PHI is requested, stored, or intentionally transmitted.
- No browser code receives API keys or Resend credentials.

Email destination:

- Internal notification recipient defaults to `info@ai-hub.agency`.
- Override with `PREASSESSMENT_NOTIFICATION_TO` only when Founder-approved.

Required environment variables:

- `RESEND_API_KEY`
- `PREASSESSMENT_NOTIFICATION_FROM`
- `PREASSESSMENT_NOTIFICATION_TO`

Optional environment variables:

- `PREASSESSMENT_RATE_LIMIT_WINDOW_MS`
- `PREASSESSMENT_RATE_LIMIT_MAX`
- `RESEND_API_URL` for local mock testing
- `NEXT_PUBLIC_PREASSESSMENT_GOOGLE_ADS_CONVERSION_SEND_TO` for direct Google Ads conversion events when an approved conversion ID/label is available

Local testing instructions:

1. Run `npm run dev -- --hostname 127.0.0.1 --port 3000`.
2. For local delivery testing, set `RESEND_API_URL` to a local mock endpoint and use non-production placeholder secret values.
3. Open `/request-pre-assessment`.
4. Confirm required fields and the no-PHI checkbox block incomplete submission.
5. Submit valid test data and confirm the browser reaches `/thank-you-pre-assessment` only after the mock email endpoint accepts delivery.
6. Open `/thank-you-pre-assessment` directly in a clean session and confirm the guarded state appears.

Production deployment prerequisites:

- Founder approval for production deployment.
- Verified Resend sender/domain.
- Production `RESEND_API_KEY` installed as a server-side secret.
- Production `PREASSESSMENT_NOTIFICATION_FROM` installed as a server-side variable.
- Production `PREASSESSMENT_NOTIFICATION_TO` set to `info@ai-hub.agency` unless Founder approves otherwise.
- Optional approved Google Ads conversion `send_to` value installed as `NEXT_PUBLIC_PREASSESSMENT_GOOGLE_ADS_CONVERSION_SEND_TO`, or a GTM trigger configured from the `sentinel_preassessment_form_success` dataLayer event.
- Confirmed no PHI is requested, stored, or transmitted.

Failure behavior and recovery:

- Incomplete or invalid form entries remain on `/request-pre-assessment` and use browser validation.
- Server validation failures return `400` and keep the visitor on the form.
- Rate-limited submissions return `429` and keep the visitor on the form.
- Resend failures return `500` and keep the visitor on the form.
- Honeypot submissions return `400`, show an inline error, and do not redirect.
- Direct thank-you page access remains guarded unless a form submission succeeds first.

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
