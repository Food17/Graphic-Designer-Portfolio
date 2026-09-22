import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/reveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Mustapha Adesanya" },
      {
        name: "description",
        content: "Get in touch for brand identity, packaging and art direction projects.",
      },
      { property: "og:title", content: "Contact — Mustapha Adesanya" },
      { property: "og:description", content: "Get in touch for branding and design projects." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contact,
});

// TODO: replace with the real email address.
const EMAIL = "hello@example.com";

const socials = [
  { label: "Instagram", href: "#" },
  { label: "Behance", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "Dribbble", href: "#" },
];

function Contact() {
  return (
    <div className="mx-auto flex min-h-[75vh] max-w-7xl flex-col justify-center px-5 py-20 md:px-10">
      <Reveal>
        <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
          Available for new projects
        </p>
        <h1 className="mt-4 font-display text-[clamp(3rem,10vw,8rem)] font-black uppercase leading-[0.95] tracking-tight">
          Let's make
          <br />
          something <span className="text-primary">loud.</span>
        </h1>
      </Reveal>

      <Reveal delay={0.1} className="mt-12">
        <a
          href={`mailto:${EMAIL}`}
          className="group inline-flex items-center gap-4 bg-primary px-8 py-5 font-display text-lg font-bold uppercase tracking-widest text-primary-foreground transition-colors hover:bg-primary/90 md:text-xl"
        >
          {EMAIL}
          <span aria-hidden className="transition-transform group-hover:translate-x-2">
            →
          </span>
        </a>
      </Reveal>

      <Reveal delay={0.2} className="mt-16 border-t border-border pt-8">
        <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Elsewhere</p>
        <div className="mt-4 flex flex-wrap gap-x-8 gap-y-3">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              className="text-sm font-medium uppercase tracking-widest text-muted-foreground transition-colors hover:text-primary"
            >
              {s.label} ↗
            </a>
          ))}
        </div>
      </Reveal>
    </div>
  );
}
