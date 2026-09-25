import auroraCover from "@/assets/projects/aurora-cover.jpg";
import auroraDetail from "@/assets/projects/aurora-detail.jpg";
import pulseCover from "@/assets/projects/pulse-cover.jpg";
import pulseDetail from "@/assets/projects/pulse-detail.jpg";

export type Project = {
  slug: string;
  title: string;
  client: string;
  category: string;
  year: string;
  roles: string[];
  description: string;
  outcome: string;
  cover: string;
  images: string[];
};

export const projects: Project[] = [
  {
    slug: "aurora-coffee",
    title: "Aurora Coffee",
    client: "Aurora Specialty Coffee Roasters",
    category: "Brand Identity",
    year: "2025",
    roles: ["Brand Identity", "Print Design"],
    description: "A full identity for a specialty coffee roaster that wanted a warm, crafted visual language. The system is built on a rising sun mark, natural materials, and a confident accent that works across print and digital applications.",
    outcome: "The identity was rolled out across packaging, cafe signage, and merchandise as a cohesive visual system.",
    cover: auroraCover,
    images: [auroraCover, auroraDetail],
  },
  {
    slug: "pulse-fm",
    title: "Pulse FM",
    client: "Pulse FM Radio Network",
    category: "Poster & Flyer Designs",
    year: "2025",
    roles: ["Poster Design", "Flyer Design", "Print"],
    description: "A poster and flyer design system for a youth radio network. The layouts use strong typography, energetic composition, and a flexible visual structure for events and promotions.",
    outcome: "The design system creates a consistent look across event posters, promotional flyers, and social campaign materials.",
    cover: pulseCover,
    images: [pulseCover, pulseDetail],
  },
];

export function getProject(slug: string | undefined) {
  return projects.find((p) => p.slug === slug);
}

export const projectCategories = ["All", ...Array.from(new Set(projects.map((p) => p.category)))];
