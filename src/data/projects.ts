export type Project = {
  slug: string;
  title: string;
  client: string;
  category: string;
  year: string;
  roles: string[];
  description: string;
  outcome: string;
  behanceUrl: string;
};

export const projects: Project[] = [
  {
    slug: "poster-designs-property-planet",
    title: "Poster Designs",
    client: "Property Planet",
    category: "Poster Designs",
    year: "2026",
    roles: ["Poster Design", "Visual Design"],
    description: "A poster design collection created for Property Planet, focused on clear visual communication, strong hierarchy, and promotional impact.",
    outcome: "A focused set of poster designs ready to view as a complete project on Behance.",
    behanceUrl: "https://www.behance.net/gallery/256253935/Poster-Designs-(Poperty-Planet)",
  },
  {
    slug: "brand-identity-sweetcrumbs-creation",
    title: "Brand Identity Design",
    client: "Sweetcrumbs Creation",
    category: "Brand Identity",
    year: "2026",
    roles: ["Brand Identity", "Visual Identity"],
    description: "A brand identity design project for Sweetcrumbs Creation, bringing the brand together through a considered visual identity system.",
    outcome: "A cohesive identity presentation showcasing the visual direction and brand system.",
    behanceUrl: "https://www.behance.net/gallery/256250709/Brand-Identity-Design-(Sweetcrumbs-Creation)",
  },
  {
    slug: "visual-designs-mssn-gaposa",
    title: "Visual Designs",
    client: "MSSN GAPOSA",
    category: "Visual Designs",
    year: "2026",
    roles: ["Visual Design", "Graphic Design"],
    description: "A visual design collection for MSSN GAPOSA, developed to communicate ideas and campaigns through strong graphic compositions.",
    outcome: "A collection of visual design work presented together as a Behance project.",
    behanceUrl: "https://www.behance.net/gallery/256249153/Visual-Designs-(MSSN-GAPOSA)",
  },
  {
    slug: "flyer-designs-property-planet",
    title: "Flyer Designs",
    client: "Property Planet",
    category: "Flyer Designs",
    year: "2026",
    roles: ["Flyer Design", "Print Design"],
    description: "A flyer design collection for Property Planet, created for promotional communication with clear messaging and strong visual presence.",
    outcome: "A focused collection of flyer designs presented as a complete Behance project.",
    behanceUrl: "https://www.behance.net/gallery/256243479/Flyer-designs-(Property-Planet)",
  },
];

export function getProject(slug: string | undefined) {
  return projects.find((p) => p.slug === slug);
}

export const projectCategories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];
