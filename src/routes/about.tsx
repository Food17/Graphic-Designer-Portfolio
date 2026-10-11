import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/reveal";
import { Marquee } from "@/components/marquee";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Mustapha Adesanya" },
      {
        name: "description",
        content: "Graphic and brand identity designer specializing in bold visual systems, packaging and art direction.",
      },
      { property: "og:title", content: "About — Mustapha Adesanya" },
      {
        property: "og:description",
        content: "Graphic and brand identity designer specializing in bold visual systems.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: About,
});

const skills = [
  "Brand Identity",
  "Logo Design",
  "Packaging",
  "Art Direction",
  "Typography",
  "Print & Editorial",
  "Motion Basics",
  "Design Systems",
];

const experience = [
  { role: "Independent Designer", place: "Freelance", period: "2022 — Now" },
  { role: "Senior Graphic Designer", place: "Studio (placeholder)", period: "2020 — 2022" },
  { role: "Graphic Designer", place: "Agency (placeholder)", period: "2018 — 2020" },
];

function About() {
  return (
    <div>
      <div className="mx-auto max-w-7xl px-5 pb-24 pt-16 md:px-10">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Behind the work</p>
          <h1 className="mt-3 font-display text-5xl font-black uppercase tracking-tight md:text-7xl">
            About<span className="text-primary">.</span>
          </h1>
        </Reveal>

        <div className="mt-14 grid gap-14 md:grid-cols-[3fr_2fr]">
          <Reveal>
            <p className="text-2xl font-medium leading-snug md:text-3xl">
              I'm Mustapha — a graphic designer obsessed with{" "}
              <span className="text-primary">bold identities</span> that make brands impossible
              to ignore.
            </p>
            <div className="mt-8 space-y-5 text-lg leading-relaxed text-muted-foreground">
              <p>
                I work across brand identity, packaging and art direction — building visual
                systems that are as disciplined as they are loud. Every project starts with
                strategy and ends with craft: grid, type, colour and print.
              </p>
              <p>
                Over the years I've designed for coffee roasters, radio stations, fintech
                startups and ceramics studios — different industries, same brief: make the brand
                unforgettable.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="font-display text-sm font-bold uppercase tracking-[0.25em] text-primary">
              Capabilities
            </h2>
            <ul className="mt-5 flex flex-wrap gap-2">
              {skills.map((s) => (
                <li
                  key={s}
                  className="border border-border px-3 py-1.5 text-xs font-semibold uppercase tracking-widest text-muted-foreground"
                >
                  {s}
                </li>
              ))}
            </ul>

            <h2 className="mt-12 font-display text-sm font-bold uppercase tracking-[0.25em] text-primary">
              Experience
            </h2>
            <ul className="mt-5 divide-y divide-border border-y border-border">
              {experience.map((e) => (
                <li key={e.role} className="flex items-baseline justify-between gap-4 py-4">
                  <div>
                    <p className="font-medium">{e.role}</p>
                    <p className="text-sm text-muted-foreground">{e.place}</p>
                  </div>
                  <p className="shrink-0 text-sm text-muted-foreground">{e.period}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>

      <Marquee items={["Brand Identity", "Packaging", "Art Direction", "Typography"]} />

      <section className="mx-auto max-w-7xl px-5 py-24 text-center md:px-10">
        <Reveal>
          <p className="text-lg text-muted-foreground">Want the full story?</p>
          <Link
            to="/contact"
            className="group mt-4 inline-block font-display text-[clamp(2.5rem,8vw,6rem)] font-black uppercase leading-none tracking-tight"
          >
            <span className="transition-colors group-hover:text-primary">Get in touch</span>{" "}
            <span aria-hidden className="text-primary inline-block transition-transform group-hover:translate-x-3">
              →
            </span>
          </Link>
        </Reveal>
      </section>
    </div>
  );
}
