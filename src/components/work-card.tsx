import { Link } from "@tanstack/react-router";
import type { Project } from "@/data/projects";
import { Reveal } from "@/components/reveal";

export function WorkCard({
  project,
  index = 0,
}: {
  project: Project;
  index?: number;
}) {
  return (
    <Reveal delay={index * 0.08}>
      <article className="group block">
        <Link to="/work/$slug" params={{ slug: project.slug }} className="block">
          <div className="relative aspect-[4/5] overflow-hidden bg-muted p-8 transition-colors group-hover:bg-card md:p-10">
            <div className="flex h-full flex-col justify-between border border-border p-6 md:p-8">
              <div className="flex items-start justify-between gap-4">
                <span className="bg-primary px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary-foreground">
                  {project.category}
                </span>
                <span className="text-sm text-muted-foreground">{project.year}</span>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{project.client}</p>
                <h3 className="mt-3 font-display text-4xl font-black uppercase leading-none tracking-tight transition-colors group-hover:text-primary md:text-5xl">
                  {project.title}
                </h3>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
              </div>
            </div>
          </div>
        </Link>
        <div className="mt-4 flex items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">{project.roles.join(" · ")}</p>
          <a
            href={project.behanceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 text-xs font-bold uppercase tracking-widest text-foreground transition-colors hover:text-primary"
          >
            View more details ↗
          </a>
        </div>
      </article>
    </Reveal>
  );
}
