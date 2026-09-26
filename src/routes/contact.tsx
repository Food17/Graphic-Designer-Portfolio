import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/reveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | Mustapha Adesanya" },
      { name: "description", content: "Get in touch with Mustapha Adesanya for graphic design projects." },
    ],
  }),
  component: Contact,
});

const EMAIL = "giwamoon17@gmail.com";
const BEHANCE_URL = "https://www.behance.net/mustaphadesanya";

const socials = [
  { label: "Instagram", href: "#" },
  { label: "Behance", href: BEHANCE_URL },
  { label: "LinkedIn", href: "#" },
  { label: "Dribbble", href: "#" },
];

function Contact() {
  return (
    <div className="mx-auto flex min-h-[75vh] max-w-7xl flex-col justify-center px-5 py-20 md:px-10">
      <Reveal>
        <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Available for new projects</p>
        <h1 className="mt-4 font-display text-[clamp(3rem,10vw,8rem)] font-black uppercase leading-[0.95] tracking-tight">
          Let's make
          <br />
          something <span className="text-primary">loud.</span>
        </h1>
      </Reveal>
      <Reveal delay={0.1} className="mt-12">
        <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(EMAIL)}`} target="_blank" rel="noopener noreferrer" aria-label={`Email ${EMAIL} in Gmail`} className="group inline-flex items-center gap-4 bg-primary px-8 py-5 font-display text-lg font-bold uppercase tracking-widest text-primary-foreground transition-colors hover:bg-primary/90 md:text-xl">
          {EMAIL}
          <span aria-hidden className="transition-transform group-hover:translate-x-2">→</span>
        </a>
      </Reveal>
      <Reveal delay={0.2} className="mt-16 border-t border-border pt-8">
        <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Elsewhere</p>
        <div className="mt-4 flex flex-wrap gap-x-8 gap-y-3">
          {socials.map((s) => (
            <a key={s.label} href={s.href} target={s.label === "Behance" ? "_blank" : undefined} rel={s.label === "Behance" ? "noopener noreferrer" : undefined} className="text-sm font-medium uppercase tracking-widest text-muted-foreground transition-colors hover:text-primary">
              {s.label} ↗
            </a>
          ))}
        </div>
      </Reveal>
    </div>
  );
}
