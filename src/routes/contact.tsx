import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { Reveal } from "@/components/reveal";
import { supabase } from "@/integrations/supabase/client";

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

const projectTypes = ["Brand identity", "Packaging", "Art direction", "Print & type", "Other"];
const budgets = ["Under $2k", "$2k – $5k", "$5k – $10k", "$10k – $25k", "$25k+", "Not sure yet"];
const timelines = ["ASAP", "Within 1 month", "1–3 months", "3+ months", "Flexible"];

const inquirySchema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(100),
  email: z.string().trim().email("Enter a valid email").max(255),
  company: z.string().trim().max(150).optional(),
  project_type: z.string().min(1, "Choose a project type"),
  budget: z.string().min(1, "Choose a budget range"),
  timeline: z.string().min(1, "Choose a timeline"),
  message: z.string().trim().min(10, "Tell me a bit more (10+ characters)").max(3000),
});

const fieldClass =
  "w-full border border-border bg-card/40 px-4 py-3 text-base text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary";
const labelClass = "mb-2 block text-xs uppercase tracking-[0.2em] text-muted-foreground";

function InquiryForm() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const raw = Object.fromEntries(new FormData(form).entries());
    const parsed = inquirySchema.safeParse({
      ...raw,
      company: String(raw.company ?? ""),
    });
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        const key = String(issue.path[0]);
        if (!errs[key]) errs[key] = issue.message;
      }
      setErrors(errs);
      return;
    }
    setErrors({});
    setStatus("sending");
    const { company, ...rest } = parsed.data;
    const { error } = await supabase
      .from("inquiries")
      .insert({ ...rest, company: company || null });
    if (error) {
      setStatus("error");
      return;
    }
    form.reset();
    setStatus("sent");
  }

  if (status === "sent") {
    return (
      <div className="border border-primary/60 bg-card/40 p-8">
        <p className="font-display text-2xl font-black uppercase">
          Message <span className="text-primary">received.</span>
        </p>
        <p className="mt-3 text-muted-foreground">
          Thanks for the details — I'll get back to you soon.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 text-xs font-medium uppercase tracking-widest text-primary"
        >
          Send another →
        </button>
      </div>
    );
  }

  const err = (k: string) =>
    errors[k] ? <p className="mt-1 text-sm text-primary">{errors[k]}</p> : null;

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-6 md:grid-cols-2">
      <div>
        <label className={labelClass} htmlFor="name">Name</label>
        <input id="name" name="name" maxLength={100} className={fieldClass} />
        {err("name")}
      </div>
      <div>
        <label className={labelClass} htmlFor="email">Email</label>
        <input id="email" name="email" type="email" maxLength={255} className={fieldClass} />
        {err("email")}
      </div>
      <div className="md:col-span-2">
        <label className={labelClass} htmlFor="company">Company (optional)</label>
        <input id="company" name="company" maxLength={150} className={fieldClass} />
      </div>
      {[
        { id: "project_type", label: "Project type", options: projectTypes },
        { id: "budget", label: "Budget", options: budgets },
        { id: "timeline", label: "Timeline", options: timelines },
      ].map((f) => (
        <div key={f.id} className={f.id === "project_type" ? "md:col-span-2" : ""}>
          <label className={labelClass} htmlFor={f.id}>{f.label}</label>
          <select id={f.id} name={f.id} defaultValue="" className={fieldClass}>
            <option value="" disabled>Select…</option>
            {f.options.map((o) => (
              <option key={o} value={o} className="bg-background">{o}</option>
            ))}
          </select>
          {err(f.id)}
        </div>
      ))}
      <div className="md:col-span-2">
        <label className={labelClass} htmlFor="message">Design needs</label>
        <textarea
          id="message"
          name="message"
          rows={6}
          maxLength={3000}
          placeholder="Tell me about the project, goals and what you need designed."
          className={fieldClass}
        />
        {err("message")}
      </div>
      <div className="md:col-span-2">
        <button
          type="submit"
          disabled={status === "sending"}
          className="bg-primary px-8 py-4 font-display text-sm font-bold uppercase tracking-widest text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-60"
        >
          {status === "sending" ? "Sending…" : "Send inquiry →"}
        </button>
        {status === "error" && (
          <p className="mt-3 text-sm text-primary">
            Something went wrong sending your inquiry. Please try again.
          </p>
        )}
      </div>
    </form>
  );
}

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
