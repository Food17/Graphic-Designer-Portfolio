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
          <div className="relative aspect-[4/5] overflow-hidden border border-border bg-muted">
            {project.coverImage ? (
              <img
                src={project.coverImage}
                alt={project.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.02]"
              />
            ) : (
              <div className="flex h-full flex-col justify-between p-5 md:p-7">
                <div className="flex items-start justify-between gap-4">
                  <span className="bg-primary px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary-foreground">
                    {project.category}
                  </span>
                  <span className="text-sm text-muted-foreground">{project.year}</span>
                </div>

                <div className="border border-border/80 bg-background/30 p-6 md:p-8">
                  <p className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Cover image</p>
                  <p className="mt-3 font-display text-3xl font-black uppercase leading-none tracking-tight md:text-4xl">
                    {project.title}
                  </p>
                  <p className="mt-3 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    Image slot ready
                  </p>
                </div>
              </div>
            )}
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
