import { Nav } from "@/components/ui/Nav";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

const features = [
  {
    title: "One canonical source",
    body: "Color, type, motion, and component behavior live in one place instead of drifting per project.",
  },
  {
    title: "Ships as a link",
    body: "Proposals and microsites go out as a navigable link, not an email attachment + Google Doc.",
  },
  {
    title: "Authenticity-audited",
    body: "Every page cross-checks against the vault's canonical brief so published content matches source material.",
  },
];

export default function HomePage() {
  return (
    <>
      <Nav />

      <section className="bg-brand-night px-6 py-24 text-white">
        <div className="mx-auto max-w-3xl text-center">
          <p className="font-mono text-xs font-semibold uppercase tracking-[0.3em] text-brand-pink">
            Microsite Delivery — MVP
          </p>
          <h1 className="mt-4 bg-brand-gradient bg-clip-text text-4xl font-extrabold text-transparent md:text-5xl">
            Design systems that ship, not just document.
          </h1>
          <p className="mt-5 text-brand-muted">
            A repeatable path that turns an authenticity-audited PRD + one-page
            proposal into a navigable 3–5 page microsite.
          </p>
          <div className="mt-8 flex justify-center gap-3">
            <Button
              href="/proposal"
              variant="primary"
              className="border border-white/15 bg-brand-ink-soft text-white hover:border-white/30 hover:bg-brand-ink-soft/70"
            >
              View the proposal
            </Button>
            <Button
              href="/docs"
              variant="secondary"
              className="border border-white/10 bg-black/30 text-white hover:border-white/25 hover:bg-black/40"
            >
              See the docs
            </Button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <Card key={feature.title}>
              <h3 className="text-base font-semibold text-brand-ink">{feature.title}</h3>
              <p className="mt-2 text-sm text-brand-muted">{feature.body}</p>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}
