import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Bird,
  Check,
  Component,
  Layers,
  Link2,
  Palette,
  ShieldCheck,
  Sparkles,
  Type,
} from "lucide-react";
import { Nav } from "@/components/ui/Nav";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

const typeFamilies = [
  {
    name: "Gothic A1",
    role: "Display & UI",
    specimenClass: "font-sans",
    description: "Gothic A1 serves as the primary display and UI typeface across all Elynox properties.",
    tint: "bg-brand-violet/5 hover:bg-brand-violet/10",
    ring: "hover:ring-brand-violet/30",
    badge: "bg-brand-violet/10 text-brand-violet",
    watermark: "text-brand-violet",
    rotate: "-rotate-1",
  },
  {
    name: "Lora",
    role: "Editorial Body",
    specimenClass: "font-serif italic",
    description:
      "Lora's calligraphic character structure adds warmth and readability to long-form content. Use for body text, pull quotes, and editorial sections where readers need to settle in.",
    tint: "bg-brand-pink/5 hover:bg-brand-pink/10",
    ring: "hover:ring-brand-pink/30",
    badge: "bg-brand-pink/10 text-brand-pink",
    watermark: "text-brand-pink",
    rotate: "rotate-1",
  },
  {
    name: "JetBrains Mono",
    role: "Labels & Metadata",
    specimenClass: "font-mono",
    description: "Used for Section Label, Research Citation, Brand Marker, and Neutral Metadata.",
    tint: "bg-brand-mist/40 hover:bg-brand-mist/70",
    ring: "hover:ring-brand-ink/20",
    badge: "bg-brand-ink/5 text-brand-ink",
    watermark: "text-brand-ink",
    rotate: "-rotate-2",
  },
];

const whyLucide = [
  "Consistency — same stroke width, grid, and style across every icon.",
  "Tree-shaking — only the icons you import end up in your bundle.",
  "Maintained — bug fixes, accessibility defaults, new icons, no upkeep on your end.",
  "Prop-driven — size, color, strokeWidth as props instead of hand-editing SVGs.",
  "Less to review — one dependency vs. auditing a folder of hand-copied SVGs.",
];

const iconShowcase = [
  { Icon: Palette, name: "Palette" },
  { Icon: Type, name: "Type" },
  { Icon: Component, name: "Component" },
  { Icon: Layers, name: "Layers" },
  { Icon: ShieldCheck, name: "ShieldCheck" },
  { Icon: Link2, name: "Link2" },
  { Icon: Sparkles, name: "Sparkles" },
  { Icon: Bird, name: "Bird" },
];

const logoVariants = [
  {
    src: "/logo.png",
    alt: "Elynox phoenix mark",
    label: "Mark",
  },
  {
    src: "/logo-horizontal.png",
    alt: "Elynox horizontal logo lockup",
    label: "Horizontal lockup",
  },
  {
    src: "/logo-reversed.png",
    alt: "Elynox logo reversed for dark backgrounds",
    label: "On dark backgrounds",
  },
];

export default function ProposalPage() {
  return (
    <>
      <Nav />

      {/* Hero — background built from the canonical Elynox gradient stops
          (Phlox / Electric Violet / Digital Phlox) as soft glows over the
          brand-night base, rather than a flat dark panel. */}
      <section className="relative overflow-hidden bg-brand-night px-6 py-24 text-white">
        <div aria-hidden className="pointer-events-none absolute inset-0">
          <div className="absolute -right-24 -top-32 h-96 w-96 rounded-full bg-brand-phlox/25 blur-[120px]" />
          <div className="absolute -bottom-40 -left-24 h-[28rem] w-[28rem] rounded-full bg-brand-digital-phlox/20 blur-[130px]" />
          <div className="absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 rounded-full bg-brand-electric/20 blur-[110px]" />
        </div>

        <div className="relative mx-auto max-w-3xl text-center">
          <h1 className="text-2xl font-bold tracking-tight md:text-3xl">
            Brand Guidelines and Templates
          </h1>
          <p className="mt-4 font-serif text-base leading-relaxed text-brand-muted md:text-lg">
            Elynox branding runs on a dark, confident canvas lit up with a violet-to-pink
            gradient that always feels engineered, never decorative. Gothic A1 headlines
            carry the authority; Lora body copy carries the warmth. It reads as technical
            but human — precise enough to trust with a system, warm enough to work with as
            people.
          </p>
        </div>
      </section>

      {/* Branding Foundation — section divider, matches the brand kit's own
          section-break treatment. */}
      <section className="bg-brand-paper px-6 py-16 text-center">
        <h2 className="text-2xl font-extrabold uppercase tracking-[0.15em] text-brand-ink md:text-3xl">
          Branding Foundation
        </h2>
      </section>

      {/* 01 - Logo and Usage */}
      <section className="mx-auto max-w-4xl px-6 py-20">
        <p className="font-mono text-xs font-semibold uppercase tracking-[0.3em] text-brand-pink">
          01 - Logo and Usage
        </p>
        <h3 className="mt-3 text-2xl font-bold text-brand-ink">Brand Symbol &amp; Identity</h3>
        <p className="mt-4 font-serif text-base leading-relaxed text-brand-ink/80">
          The mark is a phoenix in flight, rendered in fine stippled linework above the
          Elynox wordmark and the line &ldquo;Go Further.&rdquo; The bird reads as momentum
          and renewal — the lift a team gets when systems, skills, and people work as one.
          Always keep the bird, wordmark, and tagline locked together at their fixed
          proportions.
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {logoVariants.map((variant) => (
            <div key={variant.src}>
              <Card className="flex h-40 items-center justify-center overflow-hidden p-6">
                <Image
                  src={variant.src}
                  alt={variant.alt}
                  width={220}
                  height={220}
                  className="h-full w-full object-contain"
                />
              </Card>
              <p className="mt-2 text-center text-xs font-semibold uppercase tracking-wide text-brand-muted">
                {variant.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 02 - Typography */}
      <section className="mx-auto max-w-4xl px-6 py-20">
        <p className="font-mono text-xs font-semibold uppercase tracking-[0.3em] text-brand-pink">
          02 - Typography
        </p>
        <h3 className="mt-3 text-2xl font-bold text-brand-ink">Three Families, Five Roles</h3>
        <p className="mt-4 font-serif text-base leading-relaxed text-brand-ink/80">
          Typography carries tone before anyone reads a word — weight, rhythm, and pairing
          decide whether a page feels engineered or decorative, technical or human. Three
          families cover five roles between them, so every surface reads as one system
          instead of a fresh decision each time.
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {typeFamilies.map((family) => (
            <div
              key={family.name}
              className={`group relative overflow-hidden rounded-3xl border border-brand-mist p-6
                ${family.tint} ${family.rotate}
                transition-all duration-300 ease-out
                hover:-translate-y-2 hover:rotate-0 hover:shadow-xl hover:ring-2 ${family.ring}`}
            >
              {/* Oversized watermark glyph — decorative, purely visual */}
              <span
                aria-hidden
                className={`pointer-events-none absolute -right-3 -top-6 select-none text-8xl font-bold opacity-[0.08]
                  transition-transform duration-300 ease-out group-hover:scale-110 group-hover:opacity-[0.14]
                  ${family.specimenClass} ${family.watermark}`}
              >
                Aa
              </span>

              <span
                className={`relative inline-block rounded-full px-3 py-1 text-[10px] font-mono font-semibold uppercase tracking-wider ${family.badge}`}
              >
                {family.role}
              </span>

              <p className={`relative mt-4 text-5xl text-brand-ink ${family.specimenClass}`}>Aa</p>
              <p className={`relative mt-1 text-lg font-semibold text-brand-ink ${family.specimenClass}`}>
                {family.name}
              </p>
              <p className="relative mt-3 text-sm leading-relaxed text-brand-muted">
                {family.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 04 - Icon Packs */}
      <section className="bg-brand-paper px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.3em] text-brand-pink">
            04 - Icon Packs
          </p>
          <h3 className="mt-3 text-2xl font-bold text-brand-ink">Icons tells more stories</h3>
          <p className="mt-4 font-serif text-base leading-relaxed text-brand-ink/80">
            An icon reads faster than a word does — it lands before the sentence around it
            finishes, works across languages, and gives a busy interface somewhere to rest
            the eye. Used consistently, icons turn a page of text into something scannable;
            used sloppily, they're just noise with extra steps. That consistency is the
            whole game, which is why the mark matters as much as the meaning.
          </p>

          <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:items-start">
            {/* Why Lucide */}
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-brand-ink">
                Why Lucide
              </p>
              <p className="mt-2 text-sm leading-relaxed text-brand-muted">
                External icon packs beat custom SVGs for a few reasons:
              </p>
              <ul className="mt-4 flex flex-col gap-3">
                {whyLucide.map((reason) => (
                  <li key={reason} className="flex items-start gap-2.5">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-violet/10 text-brand-violet">
                      <Check className="h-3.5 w-3.5" strokeWidth={2.5} />
                    </span>
                    <span className="text-sm leading-relaxed text-brand-ink/80">{reason}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm leading-relaxed text-brand-ink/80">
                For your stack,{" "}
                <code className="rounded bg-brand-ink/5 px-1.5 py-0.5 font-mono text-[13px] text-brand-violet">
                  lucide-react
                </code>{" "}
                is the standard pick since shadcn/ui assumes it.
              </p>
            </div>

            {/* Icon showcase */}
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-brand-ink">
                A few from the set
              </p>
              <div className="mt-4 grid grid-cols-4 gap-3">
                {iconShowcase.map(({ Icon, name }) => (
                  <div
                    key={name}
                    className="group flex flex-col items-center gap-2 rounded-2xl border border-brand-mist bg-white p-4
                      transition-all duration-200 ease-out hover:-translate-y-1 hover:border-brand-violet/30 hover:shadow-md"
                  >
                    <Icon
                      className="h-6 w-6 text-brand-violet transition-transform duration-200 ease-out group-hover:scale-110"
                      strokeWidth={1.5}
                    />
                    <span className="font-mono text-[9px] uppercase tracking-wide text-brand-muted">
                      {name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* From here on, a faded wash of the canonical Elynox colors sits behind
          the content — subtle enough not to fight the white cards, but enough
          to mark this as a distinct part of the page. Fades to transparent at
          the bottom, revealing the plain brand-paper body background. */}
      <div className="bg-gradient-to-b from-brand-violet/10 via-brand-pink/5 to-transparent">
        {/* UI Components — section divider, same treatment as Branding
            Foundation above. */}
        <section className="px-6 py-16 text-center">
          <h2 className="text-2xl font-extrabold uppercase tracking-[0.15em] text-brand-ink md:text-3xl">
            UI Components
          </h2>
        </section>

        {/* 01 - Buttons and Links */}
        <section className="mx-auto max-w-3xl px-6 py-20">
        <p className="font-mono text-xs font-semibold uppercase tracking-[0.3em] text-brand-pink">
          01 - Buttons and Links
        </p>
        <h3 className="mt-3 text-2xl font-bold text-brand-ink">A Small Promise, Pressed.</h3>
        <p className="mt-4 font-serif text-base leading-relaxed text-brand-ink/80">
          A button is a contract in miniature: it names an outcome, then delivers exactly
          that outcome, every time. The label sets the expectation, the color and size set
          the priority, and the hover, focus, and disabled states tell the truth about
          whether it&apos;s ready to be pressed right now. Get those signals right and nobody
          has to think about the button at all — they just press it and move on, which is
          the whole point.
        </p>

        <div className="mt-10 flex flex-col divide-y divide-brand-mist rounded-3xl border border-brand-mist bg-white">
          {/* CTA */}
          <div className="flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold text-brand-ink">CTA</p>
              <p className="mt-1 text-sm text-brand-muted">
                The one action per page that should win the eye first.
              </p>
            </div>
            <Button variant="cta">Start Your Project</Button>
          </div>

          {/* Standard */}
          <div className="flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold text-brand-ink">Standard</p>
              <p className="mt-1 text-sm text-brand-muted">
                Everyday primary and secondary actions, built from the canonical colors.
              </p>
            </div>
            <div className="flex gap-3">
              <Button variant="primary">Save Changes</Button>
              <Button variant="secondary">Cancel</Button>
            </div>
          </div>

          {/* Muted */}
          <div className="flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold text-brand-ink">Muted</p>
              <p className="mt-1 text-sm text-brand-muted">
                Always visible, deliberately quiet — for the tertiary action nobody should
                feel pressured to take.
              </p>
            </div>
            <Button variant="muted">Maybe Later</Button>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold text-brand-ink">Links</p>
              <p className="mt-1 text-sm text-brand-muted">
                No fill, no border — just color and intent doing the work.
              </p>
            </div>
            <div className="flex flex-col items-start gap-2 sm:items-end">
              <Link
                href="/docs"
                className="text-sm font-semibold text-brand-violet underline-offset-4 hover:underline"
              >
                Read the documentation
              </Link>
              <Link
                href="/"
                className="group inline-flex items-center gap-1.5 text-sm font-semibold text-brand-violet"
              >
                Back to the homepage
                <ArrowRight className="h-4 w-4 transition-transform duration-200 ease-out group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
        </section>
      </div>
    </>
  );
}
