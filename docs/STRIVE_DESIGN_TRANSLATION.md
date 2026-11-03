# Strive Editorial Design Translation

This document translates the attached `DESIGN.md`, `tokens.json`, `variables.css`, and `theme.css` references into an original visual system for Strive Technology Group. The reference describes design intent; it is not copied into runtime code and does not override Strive's credibility, accessibility, legal, or performance requirements.

## Interpretation

The useful idea in the reference is an editorial broadsheet rhythm: porcelain paper, navy ink, one restrained teal accent, monumental serif statements, small grotesque labels, flat sections, hairline rules, and documentary inserts. For Strive, that grammar becomes a technical field journal rather than an investment publication.

Strive's version should feel like a careful technical partner documenting a system in public:

- large statements establish the business problem;
- small labels identify decisions, phases, and operating layers;
- rules and registration marks provide structure;
- diagrams replace unavailable photography and fabricated product screens;
- the accent behaves like a signal or annotation, not decoration;
- dark sections connect customer-facing systems to the operations behind them.

## Authority reconciliation

| Reference source | Runtime treatment                                                                                   |
| ---------------- | --------------------------------------------------------------------------------------------------- |
| `DESIGN.md`      | Primary source for visual character, hierarchy, composition, and restraint                          |
| `tokens.json`    | Source checked for exact values and token descriptions                                              |
| `variables.css`  | Used as a comparison representation; not copied into runtime                                        |
| `theme.css`      | Not imported because the repository uses Tailwind 3 and does not support Tailwind 4 `@theme` syntax |

The runtime has one canonical source of truth: `apps/web/app/design-tokens.css`. It uses Strive-specific semantic names so reference-company vocabulary does not leak through the application.

## Token mapping

| Role                 | Strive semantic token     | Strive value                           | Use                                         |
| -------------------- | ------------------------- | -------------------------------------- | ------------------------------------------- |
| Porcelain            | `--strive-canvas`         | `#f7f9f8`                              | Primary page canvas                         |
| Deep navy            | `--strive-ink`            | `#152b3a`                              | Primary text and editorial dark surface     |
| True ink             | `--strive-true-ink`       | `#000000`                              | High-contrast technical detail              |
| Secondary navy       | `--strive-dark`           | `#1d3b47`                              | Secondary dark surface                      |
| Slate                | `--strive-muted`          | `#526675`                              | Secondary text on porcelain and pale teal   |
| Mist                 | `--strive-inverse-muted`  | `#cedbde`                              | Supporting text on dark surfaces            |
| Deep teal            | `--strive-signal`         | `#0b7074`                              | Primary actions and status badges           |
| White                | `--strive-on-signal`      | `#ffffff`                              | Text on deep teal                           |
| Light teal           | `--strive-signal-inverse` | `#86cfca`                              | Highlights and focus rings on dark surfaces |
| Surface-aware accent | `--strive-highlight`      | Teal on light; light teal on dark      | Diagram marks and editorial highlights      |
| Muted teal           | `--strive-support`        | `#7c9fa4`                              | Secondary technical-diagram detail          |
| Pale teal            | `--strive-echo`           | `#e8f0ef`                              | Alternate page tint and closing intake band |
| Alternate wash       | `--strive-wash`           | `var(--strive-echo)`                   | Pale teal surface alias                     |
| Hairline             | `--strive-border`         | `rgba(21, 43, 58, 0.22)`               | Structural rules                            |
| Keyboard focus       | `--strive-focus`          | Deep teal on light; light teal on dark | Visible focus indication                    |

The owner selected the porcelain, navy, and teal direction on November 3,
2026 after reviewing the color study. This supersedes the earlier bronze
palette. Most surfaces remain light; navy anchors the typography and dark
sections, while teal is reserved for actions and deliberate details.

Primary buttons carry white text, with a measured contrast ratio of 5.86:1.
Supporting text has at least 5.16:1 contrast on porcelain and the pale teal
wash. Dark-surface highlights use the lighter teal rather than the action
color. The closing intake band and confirmation use the pale wash so the
accent remains restrained. Primary actions retain a subtle neutral shadow.

The decorative STG monogram panels were removed from both Home and About.
The responsibility sections now pair the main copy with a ruled definition
list of operating principles. They require no stock image or placeholder.

## Typography

The named commercial/reference faces—TWK Lausanne, PP Mondwest, and Editorial New—are not present in the repository and are not assumed licensed.

Strive uses two local substitutes:

- **Inter** for UI, navigation, micro-labels, buttons, and readable body copy.
- **Instrument Serif** for monumental display statements and selected editorial pull lines.

Both families are distributed under the SIL Open Font License 1.1 in the official Google Fonts repository. Their font files and corresponding license notices are stored locally, and loaded through `next/font/local`; the browser makes no third-party font request.

The system does not reproduce the reference's literal 165–295px scale. Display sizes use `clamp()` with art-directed maxima, readable line-height, and breakpoint-specific wrapping. Long-form legal and FAQ pages use restrained serif mastheads and comfortable sans-serif body measure.

## Principle-to-component mapping

| Reference principle       | Strive translation                                                                                                    |
| ------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| Monumental editorial hero | Four mixed-face type rows with three original inline system inserts and an immediate project-brief action             |
| Small-caps navigation     | Compact uppercase Inter labels with a signal rule for current state                                                   |
| Inline photo tiles        | Original CSS/HTML system diagrams and annotated interface fragments; no stock people or fake project imagery          |
| Teal annotation           | Deep teal for actions and small status marks, with light teal highlights on navy surfaces                             |
| Broadsheet grid           | Numbered sections, asymmetric columns, baseline rules, narrow annotations, and wide reading fields                    |
| Flat surfaces             | Cards replaced by ruled rows, matrices, definition lists, and editorial columns                                       |
| Press-black interruption  | A decisive dark statement connecting visible customer systems with operational systems                                |
| Category tags             | `MicroLabel` component for section numbers, context, and technical categories                                         |
| Editorial mastheads       | Shared `EditorialMasthead` for every inner route with controlled route-specific composition                           |
| Quiet closing band        | Useful Strive project-brief band with expectations and two real contact paths; no empty 640px band or copied monogram |
| Dark footer               | Original Strive footer with wordmark, navigation, contact, policy links, truth note, and dynamic year                 |

## Homepage composition

The page sequence is Strive-specific rather than a one-to-one reference copy:

1. Editorial navigation and asymmetric hero
2. Four verifiable operating signals
3. Numbered “what businesses outgrow” diagnostic ledger
4. Three-layer service matrix
5. Dark connective statement and technical system diagram
6. Evidence-ready problem-solving method
7. Six-phase engagement ledger
8. Direct-accountability profile without a fabricated founder identity
9. Ownership and handoff commitments
10. Focused FAQ
11. Functional pale-teal project-intake band
12. Dark editorial footer

## Inner-page system

- Services uses a matrix and scoped-deliverable ledger, not a SaaS card catalogue.
- Work uses repeatable problem patterns and an evidence standard, not fictional case studies.
- About uses company principles and direct accountability; founder identity is published only with a complete approved package.
- FAQ uses ruled disclosure rows and a readable text measure.
- Contact leads with the project brief, keeps direct email as a fallback, and conditionally exposes only an approved business telephone number.
- Start a Project uses a numbered editorial brief with flat fields, hairline rules, visible focus, and accessible success and error states.
- Privacy and Terms use a quieter document masthead, wide margins, numbered sections, and explicit legal-review notices.

## Accessibility adaptations

- Body line-height is increased beyond the reference's literal `1.0–1.2` values.
- Muted colors are used only where their contrast is appropriate.
- Deep teal actions carry white text. Highlights on navy use the light teal variant.
- Display typography scales down before wrapping becomes awkward or causes overflow.
- Focus indicators use deep teal on light surfaces and light teal on navy surfaces.
- Navigation and form interactions retain keyboard behavior, visible state, focus management, and accessible error summaries.
- Motion follows `STRIVE_MOTION_SPEC.md`: clipped type, media masks, rule growth, diagram activation, and restrained interface transitions, all completed immediately under `prefers-reduced-motion`.

## Performance adaptations

- No autoplay video or decorative client-side animation library is introduced.
- Technical inserts are CSS/HTML and add no image payload.
- Fonts are local and limited to one grotesque family in three required weights plus one regular/italic display serif.
- Server-rendered content, provider-confirmed form delivery, and the public-asset budget remain release requirements.

## Explicit differences from the source reference

- Strive's logo and wordmark remain intact; no reference wordmark underline or “N” signature is copied.
- The porcelain, navy, and teal palette is the owner-selected Strive direction and supersedes the initial highlighter baseline.
- The page sequence follows Strive's customer journey and ownership model, not an investment-site sequence.
- Original system diagrams replace the reference photography treatment because no approved Strive photography exists.
- The closing pale-teal band is short, useful, and directs visitors to the first-party project brief rather than empty brand theater.
- Navigation remains fully visible on desktop and uses Strive's accessible compact menu on mobile.
- Display sizes are materially smaller than the reference maxima to protect clarity, CTA visibility, and responsive behavior.
- The reference's multi-second loader, cycling photography, marquee, continuous scroll cue, and scroll-scrubbed font morphs are rejected.
- Legal and FAQ pages prioritize reading comfort instead of monumental type.
- No investment language, source-company content, identifying layout signature, proprietary asset, or exact footer treatment is reproduced.

## Owner assets still needed

The site can launch honestly without fabricated inserts or a founder-led claim. Founder identity remains an optional credibility improvement and requires an approved name, role, biography, photograph, and professional link. Real project imagery or evidence-backed case-study material may later replace selected diagrams. Requirements and publication controls are recorded in `OWNER_LAUNCH_DECISIONS.md`.
