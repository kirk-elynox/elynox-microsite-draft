import { AnchorHTMLAttributes, ButtonHTMLAttributes, forwardRef } from "react";
import Link from "next/link";

type Variant = "primary" | "secondary" | "ghost" | "cta" | "muted";

interface ButtonOwnProps {
  variant?: Variant;
  // When set, renders as a Next.js Link instead of a <button> — same visual
  // styles either way, so CTAs can navigate without a separate component.
  href?: string;
}

type ButtonProps = ButtonOwnProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "href"> &
  Pick<AnchorHTMLAttributes<HTMLAnchorElement>, "target" | "rel">;

const variantStyles: Record<Variant, string> = {
  // Matching shadow-and-glow treatment to cta/muted below, so the whole
  // family reads as one refreshed system instead of "the new ones" plus
  // two that never got touched.
  primary:
    "bg-brand-night text-white shadow-sm shadow-black/20 hover:bg-brand-violet hover:shadow-lg hover:shadow-brand-violet/30 focus-visible:ring-brand-violet",
  // Dark fill (not the old white/light default) so this reads correctly
  // whether it sits on a light section or a dark one, without every call
  // site needing its own override.
  secondary:
    "bg-brand-ink-soft text-white border border-white/10 shadow-sm shadow-black/10 hover:bg-brand-violet hover:border-white/20 hover:shadow-lg hover:shadow-brand-violet/30 focus-visible:ring-brand-violet",
  ghost:
    "bg-transparent text-brand-ink hover:bg-brand-ink-soft hover:text-white focus-visible:ring-brand-ink",
  // Loudest variant — the canonical gradient plus a matching glow, for the
  // one action per page that should win the eye first.
  cta:
    "bg-brand-gradient text-white shadow-md shadow-brand-electric/30 hover:shadow-lg hover:shadow-brand-electric/40 hover:brightness-110 focus-visible:ring-brand-electric",
  // Quietest variant — always visibly present (unlike ghost, which is bare
  // until hovered) but deliberately low-contrast for tertiary actions.
  muted:
    "bg-brand-mist/70 text-brand-ink hover:bg-brand-mist focus-visible:ring-brand-muted",
};

// Slimmer vertical padding, wider horizontal — reads as a pill rather than a
// rounded rectangle, and gives longer labels room to breathe. whitespace-nowrap
// keeps a long label on one line (widening the pill) instead of wrapping and
// losing the shape. Shape/sizing lives here rather than per-variant, since
// color is the only thing that should differ between variants. The subtle
// scale on press/hover is gated to `enabled:` so disabled buttons stay inert.
const baseStyles =
  "inline-flex items-center justify-center whitespace-nowrap rounded-full px-10 py-1.5 text-sm font-semibold tracking-wide" +
  " transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2" +
  " enabled:hover:scale-[1.02] enabled:active:scale-[0.98]" +
  " disabled:cursor-not-allowed disabled:opacity-50";

// forwardRef so this composes cleanly with form libraries / focus management
// later — cheap to add now, annoying to retrofit.
export const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  ({ variant = "primary", className = "", disabled, children, href, target, rel, ...props }, ref) => {
    const classes = `${baseStyles} ${variantStyles[variant]} ${className}`;

    if (href) {
      return (
        <Link
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          target={target}
          rel={rel}
          className={classes}
        >
          {children}
        </Link>
      );
    }

    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        disabled={disabled}
        className={classes}
        {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";
