import { Nav } from "@/components/ui/Nav";
import { Accordion } from "@/components/ui/Accordion";

const faqs = [
  {
    question: "What's in this draft?",
    answer:
      "A Brand Kit MVP (colors, type, logo placeholder, narrative) plus a Microsite Delivery component toolkit: login screen, homepage, this doc page, buttons, forms, and this FAQ accordion.",
  },
  {
    question: "Is this the final brand kit?",
    answer:
      "No — colors and typography are eyeballed from staging.elynox.ai/brand and flagged in BRAND_KIT.md as needing verification against the source guide.",
  },
  {
    question: "What happens next?",
    answer:
      "This draft compares against Art's independent draft; the best pieces of both get merged into the finalized Brand Kit + Microsite template.",
  },
];

export default function DocsPage() {
  return (
    <>
      <Nav />
      <main className="mx-auto max-w-3xl px-6 py-16">
        <p className="font-mono text-xs font-semibold uppercase tracking-[0.3em] text-brand-pink">Docs</p>
        <h1 className="mt-3 text-3xl font-extrabold text-brand-ink">Component toolkit reference</h1>
        <p className="mt-4 text-brand-muted">
          This page is a live sample of the doc-page pattern: heading, body copy,
          and an FAQ accordion — the same component used for real documentation
          content once this template is finalized.
        </p>

        <h2 className="mt-12 text-sm font-semibold uppercase tracking-wide text-brand-ink/60">FAQ</h2>
        <div className="mt-4">
          <Accordion items={faqs} />
        </div>
      </main>
    </>
  );
}
