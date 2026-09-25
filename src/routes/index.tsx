import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useReducedMotion } from "motion/react";
import { Reveal } from "@/components/reveal";
import { WorkCard } from "@/components/work-card";
import { Marquee } from "@/components/marquee";
import { projects } from "@/data/projects";
import profileImage from "@/assets/profile-image";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Mustapha Adesanya | Graphic & Brand Identity Designer" },
      { name: "description", content: "Portfolio of Mustapha Adesanya, a graphic designer creating clear, expressive visual identities and poster designs." },
      { property: "og:title", content: "Mustapha Adesanya | Graphic & Brand Identity Designer" },
      { property: "og:description", content: "Graphic design, brand identity, poster and flyer design by Mustapha Adesanya." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

function Home() {
  const reduce = useReducedMotion();
  const featured = projects.slice(0, 3);

  return (
    <div>
      <section className="relative overflow-hidden px-5 pb-20 pt-14 md:px-10 md:pt-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <motion.p initial={reduce ? false : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-6 text-xs uppercase tracking-[0.25em] text-muted-foreground md:text-sm">
              Graphic Designer | Portfolio 2026
            </motion.p>
            <motion.h1 initial={reduce ? false : { opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }} className="font-display text-[clamp(3.2rem,10vw,8.5rem)] font-black uppercase leading-[0.92] tracking-tight">
              Mustapha <span className="text-primary">Adesanya.</span>
            </motion.h1>
            <motion.p initial={reduce ? false : { opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} className="mt-7 max-w-2xl text-xl leading-relaxed text-foreground/90 md:text-2xl">
              I am a graphic designer focused on brand identity, poster and flyer design, and visual communication. I create purposeful visuals that help brands communicate with clarity and character.
            </motion.p>
            <motion.p initial={reduce ? false : { opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
              Welcome to my portfolio. Explore selected projects, see how I approach visual problems, and get in touch for design work.
            </motion.p>
            <motion.div initial={reduce ? false : { opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }} className="mt-8">
              <Link to="/work" className="group inline-flex items-center gap-3 bg-primary px-6 py-4 font-display text-sm font-bold uppercase tracking-widest text-primary-foreground transition-colors hover:bg-primary/90">
                View selected work <span aria-hidden className="transition-transform group-hover:translate-y-1">↓</span>
              </Link>
            </motion.div>
          </div>
          <motion.div initial={reduce ? false : { opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="relative mx-auto w-full max-w-md lg:max-w-none">
            <div className="absolute inset-4 bg-primary/20 blur-3xl" aria-hidden />
            <div className="relative overflow-hidden border border-border bg-card">
              <img src={profileImage} alt="Mustapha Adesanya" className="aspect-[4/5] w-full object-cover object-top" />
            </div>
          </motion.div>
        </div>
      </section>

      <Marquee items={["Brand Identity", "Poster & Flyer Design", "Typography", "Print Design", "Visual Communication"]} />

      <section className="mx-auto max-w-7xl px-5 py-24 md:px-10">
        <div className="flex items-end justify-between gap-6">
          <Reveal><h2 className="font-display text-4xl font-black uppercase tracking-tight md:text-6xl">Selected <span className="text-primary">Work</span></h2></Reveal>
          <Link to="/work" className="hidden shrink-0 text-sm font-medium uppercase tracking-widest text-muted-foreground transition-colors hover:text-primary md:inline-block">All projects →</Link>
        </div>
        <div className="mt-12 grid gap-10 md:grid-cols-2">
          {featured.map((p, i) => <WorkCard key={p.slug} project={p} index={i} />)}
        </div>
      </section>

      <section className="border-y border-border bg-card/40">
        <div className="mx-auto grid max-w-7xl gap-px px-5 py-20 md:grid-cols-2 md:px-10">
          <Reveal className="border-border/60 p-6 md:border-r">
            <p className="font-display text-sm font-bold text-primary">01</p>
            <h3 className="mt-3 font-display text-xl font-bold uppercase">Brand Identity</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">Identity systems that make a brand clear, consistent, and recognizable.</p>
          </Reveal>
          <Reveal delay={0.08} className="border-border/60 p-6">
            <p className="font-display text-sm font-bold text-primary">02</p>
            <h3 className="mt-3 font-display text-xl font-bold uppercase">Poster & Flyer Design</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">Attention focused layouts for campaigns, events, promotions, and print communication.</p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-28 text-center md:px-10">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Have a project in mind?</p>
          <Link to="/contact" className="group mt-6 inline-block font-display text-[clamp(2.5rem,8vw,6rem)] font-black uppercase leading-none tracking-tight">
            <span className="transition-colors group-hover:text-primary">Let's talk</span>{" "}
            <span aria-hidden className="inline-block text-primary transition-transform group-hover:translate-x-3">→</span>
          </Link>
        </Reveal>
      </section>
    </div>
  );
}
