import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/reveal";
import { Marquee } from "@/components/marquee";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About | Mustapha Adesanya" },
      { name: "description", content: "About Mustapha Adesanya, a graphic designer focused on brand identity and poster design." },
    ],
  }),
  component: About,
});

const skills = ["Brand Identity", "Logo Design", "Poster Design", "Flyer Design", "Typography", "Print Design", "Visual Communication"];

function About() {
  return (
    <div>
      <div className="mx-auto max-w-7xl px-5 pb-24 pt-16 md:px-10">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">About the designer</p>
          <h1 className="mt-3 font-display text-5xl font-black uppercase tracking-tight md:text-7xl">About<span className="text-primary">.</span></h1>
        </Reveal>
        <div className="mt-14 grid gap-14 md:grid-cols-[3fr_2fr]">
          <Reveal>
            <p className="text-2xl font-medium leading-snug md:text-3xl">
              I am Mustapha Adesanya, a graphic designer focused on <span className="text-primary">clear, expressive visual communication</span>.
            </p>
            <div className="mt-8 space-y-5 text-lg leading-relaxed text-muted-foreground">
              <p>My work covers brand identity, poster and flyer design, typography, and print. I aim to make every design purposeful, readable, and visually distinctive.</p>
              <p>Each project begins with understanding the message and audience, then building a visual direction that supports the goal.</p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-sm font-bold uppercase tracking-[0.25em] text-primary">Capabilities</h2>
            <ul className="mt-5 flex flex-wrap gap-2">
              {skills.map((s) => <li key={s} className="border border-border px-3 py-1.5 text-xs font-semibold uppercase tracking-widest text-muted-foreground">{s}</li>)}
            </ul>
          </Reveal>
        </div>
      </div>
      <Marquee items={["Brand Identity", "Poster Design", "Flyer Design", "Typography"]} />
      <section className="mx-auto max-w-7xl px-5 py-24 text-center md:px-10">
        <Reveal>
          <p className="text-lg text-muted-foreground">Have a project in mind?</p>
          <Link to="/contact" className="group mt-4 inline-block font-display text-[clamp(2.5rem,8vw,6rem)] font-black uppercase leading-none tracking-tight">
            <span className="transition-colors group-hover:text-primary">Get in touch</span>{" "}
            <span aria-hidden className="inline-block text-primary transition-transform group-hover:translate-x-3">→</span>
          </Link>
        </Reveal>
      </section>
    </div>
  );
}
