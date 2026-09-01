# Strive Technology Group Website

This repository contains the public marketing website for Strive Technology Group, a founder-led technology partner for growing service businesses. The site explains three connected outcomes: helping a business get found and convert, understand what is working, and remove repetitive work.

The public copy intentionally avoids unverified client results, testimonials, certifications, guarantees, pricing, support promises, and team claims. See [`CONTENT_REQUIRED.md`](./CONTENT_REQUIRED.md) for facts and proof the owner still needs to approve, and [`LEGAL_REVIEW_REQUIRED.md`](./LEGAL_REVIEW_REQUIRED.md) before treating the policy drafts as final.

## What is implemented

- Nine statically rendered public routes: `/`, `/services`, `/work`, `/about`, `/faq`, `/contact`, `/consultation`, `/privacy`, and `/terms`
- A custom not-found page, generated sitemap and robots rules
- Route-specific metadata, canonical URLs, Open Graph/Twitter metadata, and a generated social image
- Truth-based Organization, Service, and FAQ structured data
- One responsive design system built with React, Next.js, and CSS
- Accessible desktop/mobile navigation, skip navigation, visible focus styles, and reduced-motion handling
- A click-to-load Calendly dialog with keyboard containment, Escape close, focus restoration, origin-validated completion handling, and an email fallback
- Automated route, link, accessibility, interaction, overflow, reduced-motion, and asset-budget checks
- Security headers and a production dependency set with no known audit findings at the time of this handoff

The application does **not** include a CMS, database, authentication, customer portal, analytics tracker, first-party contact form, payment system, or background API. Email and Calendly are the only lead paths.

## Technology

- Next.js 15.5.24, App Router
- React and React DOM 19.1.9
- TypeScript 5.9
- Plain global CSS with a small token/component system
- Turborepo and pnpm 9
- ESLint 9
- Playwright 1.62 and Axe for browser/accessibility tests

The site uses a system font stack and does not make a browser request to Google Fonts. The only intentional third-party browser integration is Calendly, and it loads after the visitor chooses to open the scheduler.

## Repository structure

```text
strivetg/
├── apps/
│   └── web/
│       ├── app/                  # Routes, server components, and design system
│       │   ├── components/       # Shared UI and isolated Calendly client component
│       │   ├── lib/company.ts    # Canonical public company facts and reusable claims
│       │   └── ...               # Public routes and SEO generators
│       ├── public/               # Intentional light/dark logo variants and favicon
│       ├── scripts/              # Asset-budget check
│       └── tests/                # Playwright and Axe release checks
├── packages/
│   ├── eslint-config/            # Shared lint configuration
│   └── typescript-config/        # Shared TypeScript configuration
├── docs/redesign/                # Before/after and route/viewport visual evidence
├── CONTENT_REQUIRED.md           # Owner-supplied facts and proof still needed
├── LEGAL_REVIEW_REQUIRED.md      # Policy decisions requiring counsel/owner approval
└── WEBSITE_AUDIT_AND_REDESIGN_REPORT.md
```

## Local development

Requirements: Node.js 20.9 or newer and pnpm 9.

```bash
pnpm install --frozen-lockfile
pnpm dev
```

The web application is available at `http://localhost:3000`.

Useful commands:

```bash
pnpm lint          # ESLint; warnings fail the gate
pnpm check-types   # TypeScript without output
pnpm build         # Production build
pnpm check:assets  # Public-asset budget and forbidden-video check
pnpm test          # Playwright route, link, Axe, interaction, and layout checks
pnpm audit --prod  # Production dependency advisories
pnpm verify        # Run every release gate above
```

Run `pnpm exec playwright install chromium` once if the Playwright browser is not already installed.

## Content architecture

Public company facts, navigation, service pillars, engagement steps, trust commitments, and FAQ answers are centralized in `apps/web/app/lib/company.ts`. Change shared claims there so pages and structured data remain consistent.

Static route content stays server-rendered. Client-side JavaScript is limited to interactions that need it: the responsive navigation and Calendly dialog.

## Contact and booking behavior

- `contact@strivetg.com` is rendered as a direct `mailto:` path.
- The site deliberately does not ship a nonfunctional contact form.
- Calendly is not loaded globally. The iframe is inserted only after booking intent.
- Loading Calendly introduces Calendly's own privacy, cookie, and subprocessor behavior; the page offers email as an alternative.
- The site does not state a response-time guarantee.

## Security and release notes

The application defines a Content Security Policy and other browser security headers in `apps/web/next.config.js`. The policy allows Calendly frames only from the required origins. Strict Transport Security is intentionally not enabled in repository configuration until HTTPS behavior for the production hostname and all relevant subdomains is confirmed.

Do not infer formal compliance, penetration testing, uptime guarantees, Core Web Vitals results, or a Lighthouse score from the automated checks in this repository.

## Deployment checklist

Before production release:

1. Review and approve every item in `CONTENT_REQUIRED.md`.
2. Have qualified counsel review `LEGAL_REVIEW_REQUIRED.md`, `/privacy`, and `/terms`.
3. Confirm the canonical production hostname is `https://strivetg.com` and decide whether `www` redirects to it.
4. Confirm `contact@strivetg.com` and the configured Calendly event are controlled, monitored, and correct.
5. Re-run `pnpm install --frozen-lockfile` and `pnpm verify` on the release commit.
6. Preview the production deployment and check all nine routes, the 404, email links, sitemap, robots file, social image, and Calendly booking path.
7. Confirm security headers in the deployed response and add HSTS only after HTTPS/subdomain readiness is verified.
8. Obtain explicit owner approval before publishing any biography, portrait, testimonial, case study, metric, pricing, office location, phone number, or external profile.

This repository is private and proprietary unless the owner documents a different license.
