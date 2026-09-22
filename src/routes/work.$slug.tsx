import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "motion/react";
import { getProject, projects } from "@/data/projects";
import { Reveal } from "@/components/reveal";

export const Route = createFileRoute("/work/$slug")({
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Project not found" }, { name: "robots", content: "noindex" }],
      };
    }
    const { project } = loaderData;
    return {
      meta: [
        { title: `${project.title} — Case Study | Mustapha Adesanya` },
        { name: "description", content: project.description.slice(0, 155) },
        { property: "og:title", content: `${project.title} — Case Study` },
        { property: "og:description", content: project.description.slice(0, 155) },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  notFoundComponent: ProjectNotFound,
  component: ProjectDetail,
});

function ProjectNotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <h1 className="font-display text-5xl font-black uppercase">Project not found</h1>
      <p className="mt-4 text-muted-foreground">
        This case study doesn't exist — it may have been renamed or removed.
      </p>
      <Link
        to="/work"
        className="mt-8 bg-primary px-6 py-3 font-display text-sm font-bold uppercase tracking-widest text-primary-foreground transition-colors hover:bg-primary/90"
      >
        ← Back to work
      </Link>
    </div>
  );
}

function ProjectDetail() {
  const { project } = Route.useLoaderData();
  const idx = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(idx + 1) % projects.length];

  return (
    <article className="pb-28">
      {/* Header */}
      <header className="mx-auto max-w-7xl px-5 pt-14 md:px-10">
        <Link
          to="/work"
          className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground transition-colors hover:text-primary"
        >
          ← All work
        </Link>
        <div className="mt-6 flex flex-wrap items-center gap-3 text-xs font-semibold uppercase tracking-widest">
          <span className="bg-primary px-3 py-1 text-primary-foreground">{project.category}</span>
          <span className="text-muted-foreground">{project.year}</span>
        </div>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mt-4 font-display text-[clamp(3rem,9vw,7.5rem)] font-black uppercase leading-[0.95] tracking-tight"
        >
          {project.title}
        </motion.h1>
      </header>

      {/* Meta */}
      <section className="mx-auto mt-10 grid max-w-7xl gap-8 border-y border-border px-5 py-8 sm:grid-cols-3 md:px-10">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Client</p>
          <p className="mt-2 font-medium">{project.client}</p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Role</p>
          <p className="mt-2 font-medium">{project.roles.join(", ")}</p>
        </div>
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Year</p>
          <p className="mt-2 font-medium">{project.year}</p>
        </div>
      </section>

      {/* Cover */}
      <div className="mx-auto mt-12 max-w-7xl px-5 md:px-10">
        <Reveal>
          <img
            src={project.cover}
            alt={`${project.title} — brand identity`}
            width={1200}
            height={1504}
            className="w-full object-cover"
          />
        </Reveal>
      </div>

      {/* Copy */}
      <section className="mx-auto mt-16 grid max-w-7xl gap-12 px-5 md:grid-cols-2 md:px-10">
        <Reveal>
          <h2 className="font-display text-sm font-bold uppercase tracking-[0.25em] text-primary">
            The brief
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-foreground/90">{project.description}</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-display text-sm font-bold uppercase tracking-[0.25em] text-primary">
            The outcome
          </h2>
          <p className="mt-5 border-l-2 border-primary pl-5 text-lg leading-relaxed text-muted-foreground">
            {project.outcome}
          </p>
        </Reveal>
      </section>

      {/* Gallery */}
      <div className="mx-auto mt-16 grid max-w-7xl gap-8 px-5 md:px-10">
        {project.images.map((img, i) => (
          <Reveal key={i} className={i % 2 === 1 ? "md:w-4/5 md:self-end" : ""}>
            <img
              src={img}
              alt={`${project.title} — detail ${i + 1}`}
              loading="lazy"
              width={1200}
              height={1504}
              className="w-full object-cover"
            />
          </Reveal>
        ))}
      </div>

      {/* Next project */}
      <Link
        to="/work/$slug"
        params={{ slug: next.slug }}
        className="group mt-24 block border-y border-border py-16 text-center transition-colors hover:bg-card"
      >
        <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Next project</p>
        <p className="mt-4 font-display text-5xl font-black uppercase tracking-tight transition-colors group-hover:text-primary md:text-7xl">
          {next.title} <span aria-hidden className="text-primary">→</span>
        </p>
      </Link>
    </article>
  );
}
