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
      <Link to="/work/$slug" params={{ slug: project.slug }} className="group block">
        <div className="relative aspect-[4/5] overflow-hidden bg-muted">
          <img
            src={project.cover}
            alt={project.title}
            loading="lazy"
            width={1200}
            height={1504}
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
          />
          <span className="absolute left-4 top-4 bg-primary px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary-foreground">
            {project.category}
          </span>
        </div>
        <div className="mt-4 flex items-baseline justify-between gap-4">
          <h3 className="font-display text-2xl font-bold uppercase tracking-tight transition-colors group-hover:text-primary">
            {project.title}
          </h3>
          <span className="shrink-0 text-sm text-muted-foreground">{project.year}</span>
        </div>
        <p className="mt-1 text-sm text-muted-foreground">{project.client}</p>
      </Link>
    </Reveal>
  );
}
