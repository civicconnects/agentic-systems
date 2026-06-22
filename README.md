# AI Hub Agency Website Redesign

Branch: `redesign/sentinel-healthcare`

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
