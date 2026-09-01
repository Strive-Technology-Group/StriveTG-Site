# Strive Reference Fidelity Correction Report

Date: August 31, 2026  
Branch: `feat/strive-editorial-design-20260831`  
Corrective implementation: `f73e0d5` (`feat: correct editorial color composition and motion`)  
First editorial implementation: `be3d7ec`  
Pre-correction evidence/handoff: `dc63b64`

This report documents the corrective pass requested after the first editorial adaptation. It is the authoritative handoff for color, composition, and motion. The reference company’s identity, copy, images, navigation signature, loader, and proprietary assets were not copied.

## 1. Root causes of the first adaptation gap

The first adaptation had already removed the centered SaaS hero, waves, five generic service rows, repeated white cards, Inter-only hierarchy, and navy-and-white page composition. The failure was narrower, but material:

1. **The primary signal was intentionally adapted too far.** Runtime CSS rendered `#c9f04b` rather than the supplied `#2bee4b`, and the alternate wash rendered `#e8f2e8` rather than the supplied echo green.
2. **The homepage structure was editorial but not sufficiently reference-informed.** The hero was an asymmetric two-column serif composition with one separate diagram. It did not reproduce the reference’s useful rhythm of monumental rows interrupted by inline media.
3. **Motion was effectively absent.** Browser evidence showed `animation: none` on the hero, diagram, CTA, dark section, and closing band. Existing transitions were short generic button and underline changes.
4. **Dormant Tailwind definitions contradicted the runtime design system.** Tailwind 3 still exposed legacy navy, blue, teal, purple, gradients, and generic `fade`, `slide`, `float`, `glow`, and gradient-shift animations. They were largely unused, but they were a real future drift risk.
5. **Non-page brand surfaces retained old colors.** The Open Graph image, favicon, and light wordmark source still carried navy or the adapted lime.
6. **The typography itself did load correctly.** The problem was not an accidental fallback; it was that the first hero used the display serif too uniformly and did not create enough grotesque/serif contrast.

## 2. Token and CSS conflicts repaired

The only runtime token source remains [`apps/web/app/design-tokens.css`](./apps/web/app/design-tokens.css). Tailwind 3 maps to those semantic variables and contains no separate palette, gradients, or generic animation library.

| Conflict | Before | Corrected |
| --- | --- | --- |
| Primary signal | `#c9f04b` | `#2bee4b` |
| Alternate wash | `#e8f2e8` | `var(--strive-echo)` / `#c4e4c9` |
| Supporting diagram green | Unspecified | `#93b799` |
| True ink | Unspecified | `#000000` |
| Tailwind colors | Navy plus blue/teal/purple accents | Semantic `strive.*` variables only |
| Tailwind imagery | Five gradient utilities | Removed |
| Tailwind motion | Fade, slide, float, glow, gradient shift | Removed |
| Open Graph | Navy / adapted lime | Press black / exact signal |
| Favicon and light wordmark | Legacy navy | Press black / bone white |
| Logo rendering | Color baked into separate SVG variants | Real wordmark shape used as a mask; canonical ink tokens supply rendered color |

Tailwind is version 3, so the supplied Tailwind 4 `@theme` file was not pasted into the project and Tailwind was not upgraded. No incompatible syntax was introduced.

## 3. Actual rendered color values

These values were captured from computed browser styles in the local production build. The Playwright release test now asserts the same evidence on every run.

| Semantic role | Canonical value | Browser evidence |
| --- | --- | --- |
| Canvas | `#fafffa` | `rgb(250, 255, 250)` on `body` |
| Primary ink | `#121613` | `rgb(18, 22, 19)` on type and the ink section |
| True ink | `#000000` | Exact computed root token, reserved for high-contrast detail |
| Secondary dark | `#232924` | `rgb(35, 41, 36)` on the dark commitments surface and hero inserts |
| Muted text | `#516254` | Exact computed root token on secondary copy |
| Inverse muted | `#c8d2c8` | Exact computed root token on ink surfaces |
| Primary signal | `#2bee4b` | `rgb(43, 238, 75)` on the primary CTA and consultation band |
| Supporting green | `#93b799` | Exact computed root token in system fragments |
| Echo green | `#c4e4c9` | Exact computed root token and soft editorial surface |

The automated computed-style scan found no rendered `rgb(10, 37, 64)` legacy navy. No second saturated accent or CSS gradient is defined.

## 4. Font-loading evidence and licensing

- Browser `document.fonts.status`: `loaded`.
- `document.fonts.check("400 16px inter")`: `true`.
- `document.fonts.check("400 64px instrumentSerif")`: `true`.
- Body/UI computed family begins with `inter, "inter Fallback"`.
- Editorial rows and display headings computed family begins with `instrumentSerif, "instrumentSerif Fallback"`.
- At 1440px, the mixed-face hero resolves to 144px type; at 1024px it resolves to 102.912px; at 390px it resolves to 56.94px; at 375px it resolves to 54.75px.
- Inter regular/medium/semibold and Instrument Serif regular/italic are self-hosted with their SIL Open Font License notices. No reference commercial font or remote runtime font request is used.

Inter is a deliberate local grotesque choice, not a silent browser fallback. Instrument Serif supplies the high-contrast editorial display character. The hero now alternates those voices instead of applying the serif uniformly.

## 5. Motion specification

The complete element-by-element specification is [`STRIVE_MOTION_SPEC.md`](./STRIVE_MOTION_SPEC.md). It records the trigger, initial/final state, duration, delay, stagger, easing, origin, scroll relationship, mobile behavior, reduced-motion alternative, and reproduce/adapt/reject decision for every required interaction.

The live reference was inspected on desktop and mobile for initial load, hero sequencing, inline imagery, navigation, button and link transitions, scroll-linked sections, the dark transition, closing behavior, mobile recomposition, and menu behavior. Observed computed transitions included 300ms menu/button changes, 400ms image translation, 500ms link/arrow changes, a 3s repeating scroll cue, and a 20s footer marquee. Strive uses only the behavior that improves hierarchy and comprehension.

## 6. Motion implemented and rejected

Implemented or adapted:

- four clipped hero rows with 70ms sequencing;
- three original system fragments revealed through directional masks;
- rule expansion from a left origin;
- one-shot type masks for major statements;
- one-shot row masks for ledgers and service matrices;
- diagram mask and connection activation;
- 260–280ms CTA lift, shadow, arrow, and text-link feedback;
- 240ms navigation active rule;
- 300ms mobile-menu panel mask with short link sequencing;
- a passive, animation-frame-throttled viewport check with no added animation dependency;
- full completed-state fallback for reduced motion.

Rejected:

- the multi-second 0–100 loading screen;
- copied circular/curved page wipe;
- continuously cycling photography;
- autoplay media;
- 20-second footer marquee;
- 3-second repeating scroll cue;
- scroll-scrubbed font morphs and pinned cinematic scenes;
- parallax, bouncing, floating, cursor effects, and generic page-wide `fadeInUp`.

## 7. Before-and-after screenshots

Pre-correction first adaptation:

- [Desktop hero baseline](./docs/fidelity-correction/screenshots/before/home-1440-hero.png)
- [Mobile first-adaptation baseline](./docs/editorial-design/screenshots/after/home-mobile.png)

Corrected homepage:

- [1440 × 1000 hero](./docs/fidelity-correction/screenshots/pass-2/home-1440-hero.png)
- [1024 × 900 hero](./docs/fidelity-correction/screenshots/pass-2/home-1024-hero.png)
- [390 × 844 hero](./docs/fidelity-correction/screenshots/pass-2/home-390-hero.png)
- [375 × 812 hero](./docs/fidelity-correction/screenshots/pass-2/home-375-hero.png)
- [1440 services](./docs/fidelity-correction/screenshots/pass-2/home-1440-services.png)
- [390 services](./docs/fidelity-correction/screenshots/pass-2/home-390-services.png)
- [1440 dark section](./docs/fidelity-correction/screenshots/pass-2/home-1440-dark.png)
- [390 dark section](./docs/fidelity-correction/screenshots/pass-2/home-390-dark.png)
- [1440 CTA/footer transition](./docs/fidelity-correction/screenshots/pass-2/home-1440-closing.png)
- [390 CTA/footer transition](./docs/fidelity-correction/screenshots/pass-2/home-390-closing.png)
- [1440 full page](./docs/fidelity-correction/screenshots/pass-2/home-1440-full.png)
- [390 full page](./docs/fidelity-correction/screenshots/pass-2/home-390-full.png)

The `pass-1` directory retains the first material refinement pass. The `pass-2` directory is authoritative.

## 8. Desktop and mobile visual comparison

Desktop uses four broad typographic rows, three inline system fragments, a three-column proposition/action rail, a broadsheet service matrix, and a side-by-side dark system statement. Mobile preserves the same identity rather than converting the page to generic cards:

- type remains mixed grotesque/serif and fluid rather than becoming ordinary mobile headings;
- system fragments remain integrated with the statement;
- the operating commitments use a 2 × 2 ledger;
- service rows collapse into numbered ruled records;
- the dark statement and system diagram stack without losing contrast;
- the primary CTA ends at 770px on the 390 × 844 viewport and 784px on the 375 × 812 viewport;
- there is zero horizontal overflow at every tested release width.

Desktop/mobile route captures for Services, Work, About, FAQ, Contact, Consultation, Privacy, and Terms are stored in:

- [`docs/fidelity-correction/screenshots/routes/desktop`](./docs/fidelity-correction/screenshots/routes/desktop)
- [`docs/fidelity-correction/screenshots/routes/mobile`](./docs/fidelity-correction/screenshots/routes/mobile)

Every captured route reported one visible H1, completed masthead motion, and zero overflow.

## 9. Material visual-iteration changes

### Pass 1

- enforced the exact nine-color baseline;
- removed Tailwind palette, gradient, and generic-motion drift;
- rebuilt the hero from a two-column serif/diagram layout into four mixed-face rows with original presence, insight, and operations fragments;
- replaced separate colored logo variants with token-colored wordmark masking;
- added paper texture, line/mask/diagram motion, CTA behavior, and mobile-menu choreography;
- updated the Open Graph image and favicon.

### Pass 2

- corrected the unsupported-observer fallback after browser evidence showed lower statements could remain clipped;
- replaced it with a small passive viewport check that cannot gate server-rendered content;
- tightened the mobile trust ledger from four tall rows to a 2 × 2 editorial register;
- shortened a crowded mobile insert label;
- added visible diagram connectors and their activation sequence;
- removed the last unused centered-CTA legacy selector;
- recaptured every required viewport and all inner-route mastheads.

## 10. Remaining limitations

- Approved founder name, biography, portrait, profile link, and image rights are still needed.
- No verified case study, result metric, testimonial, or client imagery exists; the site correctly uses original diagrams instead.
- Privacy and Terms remain clearly marked working drafts requiring owner facts and qualified legal review.
- No Lighthouse or real-user Core Web Vitals score is claimed without a production-like measurement environment.
- The reference’s complex scroll-scrubbed scenes are intentionally not reproduced because they would add weight, reading delay, and identity-copy risk.
- A fresh registry security audit could not be transmitted from this environment without explicit authorization to disclose dependency metadata. The dependency manifests and lockfile were not changed in this correction; the prior handoff’s production audit passed. Build, assets, link, browser, accessibility, and behavior gates were rerun locally.

## 11. Build, accessibility, performance, and test results

| Gate | Result |
| --- | --- |
| `pnpm --filter web lint` | Pass, zero warnings |
| `pnpm --filter web check-types` | Pass |
| `pnpm --filter web build` | Pass, 15/15 static pages/resources generated |
| `pnpm --filter web check:assets` | Pass, 5 files / 44,877 bytes |
| `pnpm --filter web test` | Pass, 28/28 Playwright tests |
| Axe WCAG A/AA sweep | Zero serious or critical findings across all public routes |
| Internal links | Pass |
| Responsive overflow | Pass at 1440, 1024, 768, 390, and 375 across all public routes |
| Exact computed palette | Pass |
| Local font loading | Pass |
| Editorial reveal/fallback | Pass |
| Reduced motion | Pass; completed content, effectively zero duration, no autoplay media |
| Mobile navigation | Pass; state, Escape, body lock, and focus restoration |
| Consultation dialog | Pass; click-to-load, focus, Escape, success state |

Production build output remains 105kB maximum first-load JavaScript with 102kB shared. No animation library, autoplay media, remote font request, dependency, or gradient payload was added. The only new visual asset is an original 452-byte paper texture.

## 12. Changed files, originality, and repository state

Primary implementation files:

- `apps/web/app/design-tokens.css`
- `apps/web/tailwind.config.js`
- `apps/web/app/globals.css`
- `apps/web/app/page.tsx`
- `apps/web/app/components/Editorial.tsx`
- `apps/web/app/components/EditorialMasthead.tsx`
- `apps/web/app/components/MotionObserver.tsx`
- `apps/web/app/components/Navigation.tsx` behavior preserved; CSS motion corrected
- `apps/web/app/components/Footer.tsx`
- `apps/web/app/components/Logo.tsx`
- `apps/web/app/opengraph-image.tsx`
- `apps/web/public/favicon.svg`
- `apps/web/public/paper-texture.svg`
- `apps/web/tests/site.spec.ts`
- `STRIVE_DESIGN_TRANSLATION.md`
- `STRIVE_MOTION_SPEC.md`

The result differs from the source reference through Strive’s real wordmark, technology-consultancy proposition, original system fragments, service matrix, ownership/evidence language, accessible navigation, useful consultation band, dark footer, and deliberately reduced motion scope. It contains no source name, copy, “N” signature, photography, investment terminology, proprietary asset, exact navigation, exact footer, or one-to-one page sequence.

Nothing was pushed, merged, or deployed. Work exists only on the local branch and was verified with a local production preview at `http://localhost:3000`.
