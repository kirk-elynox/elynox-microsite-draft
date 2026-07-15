import type { Config } from "tailwindcss";

// Brand tokens verified against the real Elynox BrandKit Figma file
// (Slide-Deck-Designs, "Color System" + "Typography" sections) — replaces
// the eyeballed staging.elynox.ai/brand guesses from the first draft.
// Token names stay role-based (ink/night/paper/violet/muted/mist/pink) so
// components read by purpose, not by literal color name.
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          ink: "#1A1420",         // Neutral/Ink — primary text & authority
          night: "#111111",        // Canonical/Night — true dark background (hero, nav, primary buttons)
          "ink-soft": "#2E1A57",   // Core/Deep Violet — card/surface on dark
          paper: "#FAF9FC",         // Neutral/Paper — light content section background
          violet: "#4B2E83",        // Core/Elynox Violet — primary accent, hover/focus
          muted: "#6B6478",          // Neutral/Slate Violet — secondary text
          mist: "#E7E3ED",           // Neutral/Mist — dividers, borders, subtle fills
          pink: "#E94F9C",            // Core/Elynox Pink — accent, eyebrow/label color
          phlox: "#D000FF",            // Canonical/Phlox — gradient stop 1
          electric: "#8A00FF",          // Canonical/Electric Violet — gradient stop 2
          "digital-phlox": "#E115FE",    // Canonical/Digital Phlox — gradient stop 3
        },
      },
      fontFamily: {
        // Gothic A1 for headlines & UI, Lora for editorial body copy,
        // JetBrains Mono for labels/metadata — per Figma's "Three Families,
        // Five Roles" typography section. Loaded via next/font in layout.tsx.
        display: ["var(--font-display)", "ui-sans-serif", "system-ui", "sans-serif"],
        sans: ["var(--font-display)", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(90deg, #D000FF 0%, #8A00FF 55%, #E115FE 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
