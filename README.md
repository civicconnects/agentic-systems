# AI Hub Agency Website Redesign

Branch: `redesign/sentinel-healthcare`

## Current Gate Status

- Founder homepage UAT: approved.
- Production deployment: blocked until explicit Founder final approval.
- Production branch merge: blocked until explicit Founder final approval.
- Current remaining work: full-site QA and Founder final deployment approval.

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

Do not deploy to `www.ai-hub.agency`, merge to production, or replace the live site until Founder final approval is explicitly given.
