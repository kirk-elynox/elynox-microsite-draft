# Elynox Brand Kit — MVP Draft (Kirk's independent pass)

Status: **colors + typography verified** against the real Elynox BrandKit
Figma file (`Slide-Deck-Designs`, "Color System" + "Typography" sections) —
replaces the eyeballed `staging.elynox.ai/brand` guesses from the first pass.
Logo/marks and final copy are still open (see below).

## Colors

Implemented in `tailwind.config.ts` as `brand.*`. Figma's three-layer system:
Canonical (top-line brand swatches), Core & Supporting (editorial), Neutrals
(utility/text). Token names stay role-based rather than literal color names.

| Token | Value | Figma name / layer | Use |
|---|---|---|---|
| `brand-night` | `#111111` | Night — Canonical | Dark background (hero, nav, primary buttons) |
| `brand-ink-soft` | `#2E1A57` | Deep Violet — Core | Cards/surfaces on dark |
| `brand-paper` | `#FAF9FC` | Paper — Neutral | Light content section background |
| `brand-ink` | `#1A1420` | Ink — Neutral | Primary text & headings on light backgrounds |
| `brand-violet` | `#4B2E83` | Elynox Violet — Core | Primary accent, hover/focus states |
| `brand-muted` | `#6B6478` | Slate Violet — Neutral | Secondary/muted text |
| `brand-mist` | `#E7E3ED` | Mist — Neutral | Dividers, borders, subtle fills |
| `brand-pink` | `#E94F9C` | Elynox Pink — Core | Eyebrow labels, accent text |
| `brand-phlox` / `brand-electric` / `brand-digital-phlox` | `#D000FF` / `#8A00FF` / `#E115FE` | Phlox / Electric Violet / Digital Phlox — Canonical | 3-stop headline gradient |

Retired from the first draft (not part of the real kit): `brand-magenta`,
`brand-sage`, `brand-amber`.

## Typography

Verified from Figma's "Three Families, Five Roles" section:

- **Gothic A1** — headlines & UI (buttons, nav, labels). `font-display` / `font-sans`.
- **Lora** — editorial body copy (long-form, proposal text). `font-serif`.
- **JetBrains Mono** — labels & metadata (eyebrows, small caps tags). `font-mono`.

All three loaded via `next/font/google` in `app/layout.tsx` as CSS variables
wired into `tailwind.config.ts`.

## Logo & Marks

Wordmark: "ELYNOX" in a small bird/phoenix glyph + all-caps sans wordmark,
white on dark. Not yet extracted as an asset — this draft uses a text-based
placeholder (`components/ui/Logo.tsx`) rather than a raster/SVG mark. Pull the
real SVG mark from the guide's "Logo & Marks" section before merging.

## Brand Narrative / Positioning / Tagline

Draft, needs a pass from whoever owns messaging (flagging rather than
guessing on final copy):

- **Tagline (draft)**: "Design systems that ship, not just document."
- **Positioning (draft)**: Elynox turns client engagements into a reusable,
  authenticity-audited design system — one canonical source of truth for
  color, type, motion, and component behavior — so proposals, microsites, and
  product surfaces stay provably on-brand instead of drifting per-project.
- **Voice**: direct, technical-but-plain, shows-don't-tells ("all demos are
  real" ethos carried over from the guide itself).

This section is the least confident part of the draft — treat as a starting
point for discussion, not final copy.
