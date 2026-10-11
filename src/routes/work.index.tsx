import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { projectCategories, projects } from "@/data/projects";
import { WorkCard } from "@/components/work-card";
import { Reveal } from "@/components/reveal";

export const Route = createFileRoute("/work/")({
  head: () => ({
    meta: [
      { title: "Work — Mustapha Adesanya" },
      {
        name: "description",
        content: "Selected branding, packaging and art direction projects by Mustapha Adesanya.",
      },
      { property: "og:title", content: "Work — Mustapha Adesanya" },
      {
        property: "og:description",
        content: "Selected branding, packaging and art direction projects.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: WorkIndex,
});

function WorkIndex() {
  const [active, setActive] = useState("All");
  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <div className="mx-auto max-w-7xl px-5 pb-28 pt-16 md:px-10">
      <Reveal>
        <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">The archive</p>
        <h1 className="mt-3 font-display text-5xl font-black uppercase tracking-tight md:text-7xl">
          Work<span className="text-primary">.</span>
        </h1>
      </Reveal>

      {/* Filters */}
      <Reveal delay={0.1} className="mt-10 flex flex-wrap gap-2">
        {projectCategories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-4 py-2 text-xs font-semibold uppercase tracking-widest transition-colors ${
              active === cat
                ? "bg-primary text-primary-foreground"
                : "border border-border text-muted-foreground hover:border-primary hover:text-foreground"
            }`}
          >
            {cat}
          </button>
        ))}
      </Reveal>

      <motion.div layout className="mt-14 grid gap-10 md:grid-cols-2">
        <AnimatePresence mode="popLayout">
          {filtered.map((p, i) => (
            <motion.div
              key={p.slug}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <WorkCard project={p} index={i % 2} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
