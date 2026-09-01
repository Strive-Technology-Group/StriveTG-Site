# Strive Editorial Redesign Handoff

> This document records the first editorial implementation. The later color, composition, and motion correction is documented in `FIDELITY_CORRECTION_REPORT.md`; where evidence or counts differ, the corrective report is authoritative.

Date: August 31, 2026  
Branch: `feat/strive-editorial-design-20260831`  
Implementation commit: `be3d7ec` (`feat: translate Strive into an editorial design system`)  
Starting commit: `e4582f9` (`docs: add redesign audit, evidence, and release requirements`)

## 1. Design-reference interpretation

The attached reference is treated as an editorial grammar, not a template. Its warm paper canvas, ink surfaces, monumental serif type, grotesque labels, hairline rules, sparse highlighter color, flat construction, and broadsheet pacing become a Strive-specific technical field journal. Original system diagrams stand in for unavailable documentary photography, and the page sequence follows Strive's customer journey rather than the reference company's structure.

The complete principle mapping and source reconciliation are in [`STRIVE_DESIGN_TRANSLATION.md`](./STRIVE_DESIGN_TRANSLATION.md).

## 2. Strive token mapping

The only runtime source of truth is `apps/web/app/design-tokens.css`. The repository remains on Tailwind CSS 3.4.17; no Tailwind 4 `@theme` syntax or framework upgrade was introduced.

| Semantic token            | Value                             | Role                                      |
| ------------------------- | --------------------------------- | ----------------------------------------- |
| `--strive-canvas`         | `#fafffa`                         | Warm paper canvas                         |
| `--strive-ink`            | `#121613`                         | Primary type and press-black surface      |
| `--strive-dark`           | `#232924`                         | Secondary dark editorial surface          |
| `--strive-muted`          | `#516254`                         | Secondary copy on light surfaces          |
| `--strive-inverse-muted`  | `#c8d2c8`                         | Accessible supporting text on dark fields |
| `--strive-signal`         | `#2bee4b`                         | Single saturated Strive action color      |
| `--strive-support`        | `#93b799`                         | Supporting diagram information            |
| `--strive-echo`           | `#c4e4c9`                         | Alternate paper/system-diagram wash       |
| `--strive-wash`           | `var(--strive-echo)`              | Semantic alias with no duplicate literal  |
| `--strive-border`         | `rgba(18, 22, 19, 0.24)`          | Hairline structure                        |
| `--strive-border-inverse` | `rgba(250, 255, 250, 0.26)`       | Hairlines on dark surfaces                |
| `--strive-signal-shadow`  | green-tinted restrained shadow    | Primary action only                       |
| `--strive-display`        | Instrument Serif + serif fallback | Display statements                        |
| `--strive-ui`             | Inter + sans-serif fallback       | Navigation, labels, and body copy         |

## 3. Font choices and licensing basis

- Inter is self-hosted for UI and body text in regular, medium, and semibold weights.
- Instrument Serif is self-hosted for normal and italic display text.
- Both are licensed under the SIL Open Font License 1.1. License notices are stored beside the files.
- Source basis: [Inter OFL in the official Google Fonts repository](https://github.com/google/fonts/blob/main/ofl/inter/OFL.txt), [Instrument Serif metadata in the official Google Fonts repository](https://github.com/google/fonts/blob/main/ofl/instrumentserif/METADATA.pb), and the [Instrument Serif upstream README](https://github.com/Instrument/instrument-serif/blob/main/README.md).
- The reference's named commercial fonts were not downloaded, bundled, or used.
- The subsetted local files are loaded with `next/font/local`; no third-party font request occurs at runtime.

## 4. Changed-file inventory

| Area          | Files and treatment                                                                                                                              |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| Foundation    | `app/design-tokens.css`, `app/globals.css`, `app/layout.tsx`, local font files, and OFL notices                                                  |
| Primitives    | Added `Editorial.tsx` and `EditorialMasthead.tsx`; removed the generic `PageHero.tsx`                                                            |
| Shared shell  | Reworked `Navigation.tsx` and `Footer.tsx` into the paper masthead, signal consultation band, and dark editorial footer                          |
| Homepage      | Rebuilt `app/page.tsx` around an asymmetric hero, problem ledger, three-layer service matrix, dark statement, method, phases, and accountability |
| Inner routes  | Re-composed Services, Work, About, FAQ, Contact, Consultation, Privacy, and Terms with the shared editorial system                               |
| Credibility   | Updated `CONTENT_REQUIRED.md`; unsupported founder, project, result, location, and proof content remains absent                                  |
| Documentation | Updated `README.md`; added `STRIVE_DESIGN_TRANSLATION.md`, this handoff, and the screenshot evidence                                             |
| Tests         | Preserved all release tests and updated the reduced-motion selector for the recomposed hero                                                      |

The feature commit contains 28 changed files, with 2,354 insertions and 1,280 deletions.

## 5. Before-and-after screenshots

Baseline:

- [`before/home-desktop.png`](./docs/editorial-design/screenshots/before/home-desktop.png)
- [`before/home-mobile.png`](./docs/editorial-design/screenshots/before/home-mobile.png)
- [`before/services-desktop.png`](./docs/editorial-design/screenshots/before/services-desktop.png)

Final homepage:

- [`after/home-desktop.png`](./docs/editorial-design/screenshots/after/home-desktop.png)
- [`after/home-mobile.png`](./docs/editorial-design/screenshots/after/home-mobile.png)

## 6. Desktop and mobile route screenshots

The `docs/editorial-design/screenshots/after` directory contains desktop and mobile top-viewport captures for all nine public routes:

| Route        | Desktop                                                                                          | Mobile                                                                                         |
| ------------ | ------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------- |
| Home         | [`home-desktop.png`](./docs/editorial-design/screenshots/after/home-desktop.png)                 | [`home-mobile.png`](./docs/editorial-design/screenshots/after/home-mobile.png)                 |
| Services     | [`services-desktop.png`](./docs/editorial-design/screenshots/after/services-desktop.png)         | [`services-mobile.png`](./docs/editorial-design/screenshots/after/services-mobile.png)         |
| Work         | [`work-desktop.png`](./docs/editorial-design/screenshots/after/work-desktop.png)                 | [`work-mobile.png`](./docs/editorial-design/screenshots/after/work-mobile.png)                 |
| About        | [`about-desktop.png`](./docs/editorial-design/screenshots/after/about-desktop.png)               | [`about-mobile.png`](./docs/editorial-design/screenshots/after/about-mobile.png)               |
| FAQ          | [`faq-desktop.png`](./docs/editorial-design/screenshots/after/faq-desktop.png)                   | [`faq-mobile.png`](./docs/editorial-design/screenshots/after/faq-mobile.png)                   |
| Contact      | [`contact-desktop.png`](./docs/editorial-design/screenshots/after/contact-desktop.png)           | [`contact-mobile.png`](./docs/editorial-design/screenshots/after/contact-mobile.png)           |
| Consultation | [`consultation-desktop.png`](./docs/editorial-design/screenshots/after/consultation-desktop.png) | [`consultation-mobile.png`](./docs/editorial-design/screenshots/after/consultation-mobile.png) |
| Privacy      | [`privacy-desktop.png`](./docs/editorial-design/screenshots/after/privacy-desktop.png)           | [`privacy-mobile.png`](./docs/editorial-design/screenshots/after/privacy-mobile.png)           |
| Terms        | [`terms-desktop.png`](./docs/editorial-design/screenshots/after/terms-desktop.png)               | [`terms-mobile.png`](./docs/editorial-design/screenshots/after/terms-mobile.png)               |

An additional 45 route/viewport captures cover every route at 1440, 1024, 768, 390, and 375 pixels under `docs/editorial-design/screenshots/visual-checks`.

## 7. Components created or consolidated

- `MicroLabel`
- `EditorialRule`
- `SystemDiagram`
- `EditorialMasthead`
- Existing `Button`, `Container`, and `Section` primitives restyled around semantic tokens
- Shared consultation band and editorial footer consolidated in `Footer`
- Existing accessible navigation and Calendly dialog preserved rather than reimplemented

## 8. Old patterns removed

- Generic centered agency hero
- Generic reusable `PageHero`
- Repetitive white service-row presentation
- Card-shadow visual hierarchy
- Redundant per-page closing CTA blocks
- Decorative effects as the primary source of polish
- Any path toward copied reference identity, photography, navigation, or footer signatures

No wave divider, glassmorphism, generic gradient, floating blob, stock employee, autoplay media, or fabricated proof remains or was introduced.

## 9. Accessibility and performance results

- Axe: zero serious or critical findings across all nine public routes after correcting inverse-surface annotation contrast.
- Keyboard: mobile menu state, Escape handling, body lock, and focus restoration pass.
- Booking dialog: click-to-load behavior, Escape handling, completion state, and focus restoration pass.
- Reduced motion: nonessential transitions reduce to effectively zero; no autoplay video or audio exists.
- Responsive: no route exceeds one pixel of layout variance at 1440, 1024, 768, 390, or 375 pixels.
- Primary mobile CTA appears inside the first viewport at 390 pixels.
- Static output: all 15 generated pages/resources completed successfully.
- Maximum route First Load JS: 105 kB, down from the 111 kB baseline.
- Shared First Load JS: 102 kB.
- Public asset budget: unchanged at 46,591 bytes.
- Local emitted font media: approximately 444 kB uncompressed on disk across five subsetted files.
- No animation library, autoplay media, or remote font request was added. The corrective pass adds one original 452-byte paper-texture SVG.

No Lighthouse or real-user Core Web Vitals score was claimed; those require a production-like deployment and measurement environment.

## 10. Build, lint, type-check, and test results

| Gate                | Result                                  |
| ------------------- | --------------------------------------- |
| `pnpm lint`         | Pass, zero warnings                     |
| `pnpm check-types`  | Pass                                    |
| `pnpm build`        | Pass, all static routes generated       |
| `pnpm check:assets` | Pass, 5 public files / 44,877 bytes     |
| `pnpm test`         | Pass, 28 of 28 Playwright tests         |
| Internal links      | Pass                                    |
| Axe WCAG A/AA sweep | Pass on all public routes               |
| Responsive overflow | Pass across 45 route/width combinations |
| `pnpm audit --prod` | Pass, no known vulnerabilities          |

The combined verifier initially reached the workspace's restricted localhost binding at the Playwright stage. The browser suite was rerun with local test-server permission and passed completely; the code, build, asset, and audit gates also passed independently.

## 11. Remaining owner-provided assets needed

- Approved founder name, title, short biography, portrait, alt text, source permission, and professional profile link
- Permissioned project imagery or real documentary company photography, if diagrams should later be replaced
- Evidence-complete case study material, including baseline, scope, measurement method, attribution limits, client permission, and approved public wording
- Legal entity, operating location, hosting/provider, retention, commercial, and support facts listed in `CONTENT_REQUIRED.md`
- Qualified legal review of Privacy and Terms before production publication

No fake portrait or placeholder person was used. The existing typographic founder insert states that approved material is pending.

## 12. How the result differs from the source reference

- It keeps Strive's real wordmark while applying the exact highlighter baseline through Strive-specific semantics and placement.
- It uses a technology-system narrative, not investment terminology or the source page sequence.
- Original diagrams replace source photography and proprietary imagery.
- Navigation, footer, closing band, monogram treatment, and route mastheads are Strive-specific compositions.
- The closing signal band is compact and useful rather than an empty 640-pixel brand field.
- Display sizes are restrained with `clamp()` to protect clarity, accessibility, and mobile CTA visibility.
- Legal and FAQ routes use reading-scale typography.
- No source copy, wordmark, “N” signature, photography, proprietary assets, or one-to-one section layout is present.

## 13. Branch and commit information

- Branch: `feat/strive-editorial-design-20260831`
- Starting point: `e4582f9`
- Implementation: `be3d7ec`
- The screenshot and handoff documentation are committed separately after the implementation so the visual evidence is reviewable without mixing it into runtime code.

## 14. Repository and deployment confirmation

Nothing was pushed, merged, or deployed. The work exists only on the local branch above. A local production preview was used for verification at `http://localhost:3000`.
