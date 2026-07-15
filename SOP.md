# SOP — How this draft was produced

Short version for the compare-and-finalize session, per the task's
acceptance criteria ("Kirk writes a short SOP describing how his output is
produced, so it can be merged into the finalized template").

## Stack

Next.js (App Router) + TypeScript + Tailwind CSS — Elynox's standard
front-end stack. No component library beyond hand-rolled primitives in
`components/ui/` — kept dependency-free on purpose so it's easy to compare
against Art's draft and merge the winners without untangling library choices.

## Process

1. **Pulled reference material.** Loaded `staging.elynox.ai/brand` (Design
   System v3.1) directly in-browser to eyeball the canonical color palette,
   gradient treatment, and typography pattern. Note: the guide runs a heavy
   fog/motion canvas that made automated text/DOM scraping unreliable under
   time pressure — colors were read visually off the rendered page, not
   copied from source, so **treat hex values as approximate** until someone
   confirms against the guide's Color System section directly.
2. **Set brand tokens once, at the Tailwind config layer** (`tailwind.config.ts`),
   rather than hardcoding colors/fonts in components. Anything downstream
   (buttons, cards, gradients) references `brand.*` tokens so swapping in
   verified hex codes later is a one-file change, not a find-and-replace
   across components.
3. **Built the component toolkit bottom-up**: primitives first (Button,
   Input, Card, Accordion, Logo placeholder), then composed them into the
   three required surfaces (homepage, login, doc page) rather than building
   each page as one-off markup. This is what makes it a "toolkit" instead of
   a "site" per the task's acceptance criteria.
4. **Flagged every guess inline** rather than presenting placeholders as
   final — see `BRAND_KIT.md` for the running list of what needs verification
   (exact hex codes, real typeface name, real logo SVG, final tagline/positioning
   copy).

## What's NOT done (scope cut for time)

- No auth backend on the login page — form validates client-side and shows a
  placeholder error state on submit.
- No motion/animation layer — the brand guide has a whole "Motion System"
  section (fog effects, hover-responsive icons, card transitions) that isn't
  represented here at all. Explicitly out of scope for tonight's pass.
- Colors/type are unverified estimates, not extracted values (see above).
- No automated tests.

## Merge notes for the compare-and-finalize session

Pairs with the Brand Kit box (`86e285r1e`) and Microsite box (`86e27d0cc`) in
Track 2. Whoever finalizes should treat `tailwind.config.ts` + `BRAND_KIT.md`
as the merge point for color/type decisions, and `components/ui/` as the
merge point for component API decisions (props, variants) between this draft
and Art's.
