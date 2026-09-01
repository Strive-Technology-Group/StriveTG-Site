# Strive Editorial Design Translation

This document translates the attached `DESIGN.md`, `tokens.json`, `variables.css`, and `theme.css` references into an original visual system for Strive Technology Group. The reference describes design intent; it is not copied into runtime code and does not override Strive's credibility, accessibility, legal, or performance requirements.

## Interpretation

The useful idea in the reference is an editorial broadsheet rhythm: warm paper, dark ink, one highlighter accent, monumental serif statements, small grotesque labels, flat sections, hairline rules, and documentary inserts. For Strive, that grammar becomes a technical field journal rather than an investment publication.

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

| Reference idea    | Strive semantic token    | Strive value             | Adaptation                                                                 |
| ----------------- | ------------------------ | ------------------------ | -------------------------------------------------------------------------- |
| Bone White        | `--strive-canvas`        | `#fafffa`                | Preserved as the paper-like page canvas                                    |
| Press Black       | `--strive-ink`           | `#121613`                | Primary text and editorial dark surface                                    |
| True Ink          | `--strive-true-ink`      | `#000000`                | Reserved exact black for high-contrast technical detail                    |
| Slate Verdant     | `--strive-dark`          | `#232924`                | Secondary ink surface and dark structural detail                           |
| Newsprint Gray    | `--strive-muted`         | `#516254`                | Captions and secondary copy; usage remains contrast-aware                  |
| Muted Sage        | `--strive-inverse-muted` | `#c8d2c8`                | Supporting text on dark surfaces                                           |
| Highlighter Green | `--strive-signal`        | `#2bee4b`                | Exact visual baseline; restricted to actions, rules, and system signals    |
| Supporting Green  | `--strive-support`       | `#93b799`                | Secondary technical-diagram information only                              |
| Echo Green        | `--strive-echo`           | `#c4e4c9`                | Alternate paper tint and quiet diagram detail                             |
| Alternate wash    | `--strive-wash`          | `var(--strive-echo)`     | Semantic alias; no duplicate literal value                                |
| Hairline ink      | `--strive-border`        | `rgba(18, 22, 19, 0.24)` | Structural rules without card chrome                                       |
| Signal shadow     | `--strive-signal-shadow` | green-tinted shadow      | Used only on the primary action                                            |

Only `--strive-signal` is saturated. There are no gradients and no second bright brand color.

## Typography

The named commercial/reference faces—TWK Lausanne, PP Mondwest, and Editorial New—are not present in the repository and are not assumed licensed.

Strive uses two local substitutes:

- **Inter** for UI, navigation, micro-labels, buttons, and readable body copy.
- **Instrument Serif** for monumental display statements and selected editorial pull lines.

Both families are distributed under the SIL Open Font License 1.1 in the official Google Fonts repository. Their font files and corresponding license notices are stored locally, and loaded through `next/font/local`; the browser makes no third-party font request.

The system does not reproduce the reference's literal 165–295px scale. Display sizes use `clamp()` with art-directed maxima, readable line-height, and breakpoint-specific wrapping. Long-form legal and FAQ pages use restrained serif mastheads and comfortable sans-serif body measure.

## Principle-to-component mapping

| Reference principle         | Strive translation                                                                                                   |
| --------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| Monumental editorial hero   | Four mixed-face type rows with three original inline system inserts and an immediate fit-call action                 |
| Small-caps navigation       | Compact uppercase Inter labels with a signal rule for current state                                                  |
| Inline photo tiles          | Original CSS/HTML system diagrams and annotated interface fragments; no stock people or fake project imagery         |
| Green highlighter           | Exact highlighter baseline used for the primary CTA, active rules, small status marks, and closing consultation band |
| Broadsheet grid             | Numbered sections, asymmetric columns, baseline rules, narrow annotations, and wide reading fields                   |
| Flat surfaces               | Cards replaced by ruled rows, matrices, definition lists, and editorial columns                                      |
| Press-black interruption    | A decisive dark statement connecting visible customer systems with operational systems                               |
| Category tags               | `MicroLabel` component for section numbers, context, and technical categories                                        |
| Editorial mastheads         | Shared `EditorialMasthead` for every inner route with controlled route-specific composition                          |
| Full-bleed accent signature | Useful Strive consultation band with expectations and two real contact paths; no empty 640px band or copied monogram |
| Dark footer                 | Original Strive footer with wordmark, navigation, contact, policy links, truth note, and dynamic year                |

## Homepage composition

The page sequence is Strive-specific rather than a one-to-one reference copy:

1. Editorial navigation and asymmetric hero
2. Four verifiable operating signals
3. Numbered “what businesses outgrow” diagnostic ledger
4. Three-layer service matrix
5. Dark connective statement and technical system diagram
6. Evidence-ready problem-solving method
7. Six-phase engagement ledger
8. Founder-led accountability profile without a fabricated portrait
9. Ownership and handoff commitments
10. Focused FAQ
11. Functional signal-color consultation band
12. Dark editorial footer

## Inner-page system

- Services uses a matrix and scoped-deliverable ledger, not a SaaS card catalogue.
- Work uses repeatable problem patterns and an evidence standard, not fictional case studies.
- About uses an accountable editorial profile awaiting approved founder materials.
- FAQ uses ruled disclosure rows and a readable text measure.
- Contact uses two clear paths—email and booking—without a fake form or response promise.
- Consultation isolates the click-to-load Calendly dialog and explains the third-party boundary.
- Privacy and Terms use a quieter document masthead, wide margins, numbered sections, and explicit legal-review notices.

## Accessibility adaptations

- Body line-height is increased beyond the reference's literal `1.0–1.2` values.
- Muted colors are used only where their contrast is appropriate.
- Signal green always carries dark text; it is not used as small text on the paper canvas.
- Display typography scales down before wrapping becomes awkward or causes overflow.
- Focus indicators remain visible on paper, ink, and signal surfaces.
- Navigation and dialogs retain keyboard behavior, Escape handling, focus restoration, and body scroll locking.
- Motion follows `STRIVE_MOTION_SPEC.md`: clipped type, media masks, rule growth, diagram activation, and restrained interface transitions, all completed immediately under `prefers-reduced-motion`.

## Performance adaptations

- No autoplay video or decorative client-side animation library is introduced.
- Technical inserts are CSS/HTML and add no image payload.
- Fonts are local and limited to one grotesque family in three required weights plus one regular/italic display serif.
- Existing static rendering, click-to-load Calendly behavior, and public-asset budget remain release requirements.

## Explicit differences from the source reference

- Strive's logo and wordmark remain intact; no reference wordmark underline or “N” signature is copied.
- The exact highlighter baseline is used, but its placement and semantics are Strive-specific rather than copied.
- The page sequence follows Strive's customer journey and ownership model, not an investment-site sequence.
- Original system diagrams replace the reference photography treatment because no approved Strive photography exists.
- The closing accent band is short, useful, and contains consultation information rather than empty brand theater.
- Navigation remains fully visible on desktop and uses Strive's accessible compact menu on mobile.
- Display sizes are materially smaller than the reference maxima to protect clarity, CTA visibility, and responsive behavior.
- The reference's multi-second loader, cycling photography, marquee, continuous scroll cue, and scroll-scrubbed font morphs are rejected.
- Legal and FAQ pages prioritize reading comfort instead of monumental type.
- No investment language, source-company content, identifying layout signature, proprietary asset, or exact footer treatment is reproduced.

## Owner assets still needed

The site can launch honestly without fabricated inserts, but the founder-led profile will become more credible with an approved founder name, role, biography, photograph, and professional link. Real project imagery or evidence-backed case-study material may later replace selected diagrams. Requirements and publication controls remain in `CONTENT_REQUIRED.md`.
