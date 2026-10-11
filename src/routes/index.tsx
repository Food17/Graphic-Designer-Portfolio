import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useReducedMotion } from "motion/react";
import { Reveal } from "@/components/reveal";
import { WorkCard } from "@/components/work-card";
import { Marquee } from "@/components/marquee";
import { projects } from "@/data/projects";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mustapha Adesanya — Graphic & Brand Identity Designer" },
      {
        name: "description",
        content:
          "Bold brand identities, packaging and art direction. Selected work by graphic designer Mustapha Adesanya.",
      },
      { property: "og:title", content: "Mustapha Adesanya — Graphic & Brand Identity Designer" },
      {
        property: "og:description",
        content: "Bold brand identities, packaging and art direction. Selected work and case studies.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

const heroLines = [
  { text: "GRAPHIC &", primary: false },
  { text: "BRAND", primary: true },
  { text: "IDENTITY", primary: false },
];

const services = [
  { n: "01", title: "Brand Identity", copy: "Logos, systems and guidelines that give brands a voice worth listening to." },
  { n: "02", title: "Packaging", copy: "Shelf-ready packaging that survives the real world — and wins on it." },
  { n: "03", title: "Art Direction", copy: "Campaign concepts, photography direction and visual worlds." },
  { n: "04", title: "Print & Type", copy: "Posters, editorial and type-driven design with a hand in the craft." },
];

function Home() {
  const reduce = useReducedMotion();
  const featured = projects.slice(0, 3);

  return (
    <div>
      {/* Hero */}
      <section className="relative flex min-h-[92vh] flex-col justify-end overflow-hidden px-5 pb-12 pt-28 md:px-10">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-32 right-[-12%] h-[520px] w-[520px] rounded-full bg-primary/25 blur-[140px]"
        />
        <div className="mx-auto w-full max-w-7xl">
          <motion.p
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-6 flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-muted-foreground md:text-sm"
          >
            <span className="inline-block h-2 w-2 rounded-full bg-primary" />
            Mustapha Adesanya — Portfolio 2026
          </motion.p>
          <h1 className="font-display text-[clamp(3.2rem,12vw,10rem)] font-black uppercase leading-[0.92] tracking-tight">
            {heroLines.map((line, i) => (
              <span key={line.text} className="block overflow-hidden">
                <motion.span
                  className={`block ${line.primary ? "text-primary" : ""}`}
                  initial={reduce ? false : { y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                >
                  {line.text}
                </motion.span>
              </span>
            ))}
          </h1>
          <div className="mt-10 flex flex-wrap items-end justify-between gap-8">
            <motion.p
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="max-w-md text-lg text-muted-foreground"
            >
              I design bold, cinematic identities for brands that refuse to whisper —
              from logo systems to packaging and campaigns.
            </motion.p>
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65 }}
            >
              <Link
                to="/work"
                className="group inline-flex items-center gap-3 bg-primary px-6 py-4 font-display text-sm font-bold uppercase tracking-widest text-primary-foreground transition-colors hover:bg-primary/90"
              >
                View selected work
                <span aria-hidden className="transition-transform group-hover:translate-y-1">
                  ↓
                </span>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <Marquee
        items={[
          "Brand Identity",
          "Packaging",
          "Art Direction",
          "Typography",
          "Print Design",
          "Visual Systems",
        ]}
      />

      {/* Selected work */}
      <section className="mx-auto max-w-7xl px-5 py-24 md:px-10">
        <div className="flex items-end justify-between gap-6">
          <Reveal>
            <h2 className="font-display text-4xl font-black uppercase tracking-tight md:text-6xl">
              Selected <span className="text-primary">Work</span>
            </h2>
          </Reveal>
          <Link
            to="/work"
            className="story-link hidden shrink-0 text-sm font-medium uppercase tracking-widest text-muted-foreground transition-colors hover:text-primary md:inline-block"
          >
            All projects →
          </Link>
        </div>
        <div className="mt-12 grid gap-10 md:grid-cols-3">
          {featured.map((p, i) => (
            <WorkCard key={p.slug} project={p} index={i} />
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="border-y border-border bg-card/40">
        <div className="mx-auto grid max-w-7xl gap-px px-5 py-20 md:grid-cols-2 md:px-10 lg:grid-cols-4">
          {services.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.08} className="border-border/60 p-6 md:border-r md:last:border-r-0">
              <p className="font-display text-sm font-bold text-primary">{s.n}</p>
              <h3 className="mt-3 font-display text-xl font-bold uppercase">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.copy}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-5 py-28 text-center md:px-10">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Have a project in mind?</p>
          <Link
            to="/contact"
            className="group mt-6 inline-block font-display text-[clamp(2.5rem,8vw,6rem)] font-black uppercase leading-none tracking-tight"
          >
            <span className="transition-colors group-hover:text-primary">Let's talk</span>{" "}
            <span aria-hidden className="text-primary transition-transform inline-block group-hover:translate-x-3">
              →
            </span>
          </Link>
        </Reveal>
      </section>
    </div>
  );
}
