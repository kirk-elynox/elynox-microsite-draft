# Elynox Microsite Draft (Kirk's independent pass)

Draft for ClickUp task `86e28necf` — "Kirk — Independent draft: Brand Kit +
Microsite Delivery templates (+ SOP)". See `SOP.md` for how this was built
and what's unverified, `BRAND_KIT.md` for the brand token/narrative draft.

## Run it

```bash
npm install
npm run dev
```

Then visit:
- `/` — homepage
- `/login` — login screen
- `/docs` — doc page with FAQ accordion

## Structure

```
app/
  page.tsx          Homepage
  login/page.tsx     Login screen
  docs/page.tsx       Doc page + FAQ
  layout.tsx          Root layout
  globals.css          Tailwind entry
components/ui/
  Button.tsx  Input.tsx  Card.tsx  Accordion.tsx  Nav.tsx  Logo.tsx
tailwind.config.ts    Brand tokens (colors, gradient, fonts)
BRAND_KIT.md          Brand Kit MVP: colors, type, logo, narrative/tagline
SOP.md                 How this was produced + what's unverified
```
