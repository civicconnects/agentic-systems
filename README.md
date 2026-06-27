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
- The current `/request-pre-assessment` and `/contact` forms remain preview-only and do not deliver leads to a production destination.

Local testing instructions:

1. Run `npm run dev -- --hostname 127.0.0.1 --port 3000`.
2. Open `/request-pre-assessment`.
3. Confirm required fields and the no-PHI checkbox block incomplete submission.
4. Submit valid preview data and confirm the browser reaches `/thank-you-pre-assessment`.
5. Open `/thank-you-pre-assessment` directly in a clean session and confirm the guarded state appears.

Production deployment prerequisites:

- Founder approval for production deployment.
- Founder approval for a future lead delivery destination.
- Confirmed no PHI is requested, stored, or transmitted.

Failure behavior and recovery:

- Incomplete or invalid form entries remain on `/request-pre-assessment` and use browser validation.
- Honeypot submissions show an inline error and do not redirect.
- There is no production storage, email, webhook, or third-party lead delivery in this branch.
- Do not wire delivery until Founder approval identifies the website-owned destination and required guardrails.

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
