import auroraCover from "@/assets/projects/aurora-cover.jpg";
import auroraDetail from "@/assets/projects/aurora-detail.jpg";
import nordwindCover from "@/assets/projects/nordwind-cover.jpg";
import nordwindDetail from "@/assets/projects/nordwind-detail.jpg";
import pulseCover from "@/assets/projects/pulse-cover.jpg";
import pulseDetail from "@/assets/projects/pulse-detail.jpg";
import terraCover from "@/assets/projects/terra-cover.jpg";
import terraDetail from "@/assets/projects/terra-detail.jpg";
import hexaCover from "@/assets/projects/hexa-cover.jpg";
import hexaDetail from "@/assets/projects/hexa-detail.jpg";

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

/**
 * Central project registry — the single file to edit when swapping in
 * real work. Replace titles, copy and image imports; add new projects
 * by appending an entry and dropping the images into src/assets/projects/.
 */
export const projects: Project[] = [
  {
    slug: "aurora-coffee",
    title: "Aurora Coffee",
    client: "Aurora Specialty Coffee Roasters",
    category: "Brand Identity",
    year: "2025",
    roles: ["Brand Identity", "Packaging", "Print"],
    description:
      "A full identity for a specialty coffee roaster that wanted to feel warm and crafted rather than precious. The system is built on a rising-sun mark, kraft stocks and a confident burnt-orange that cuts through on shelf.",
    outcome:
      "The rebrand rolled out across packaging, café signage and merch in six weeks, and gave the roastery a wholesale-ready identity that still feels handmade.",
    cover: auroraCover,
    images: [auroraCover, auroraDetail],
  },
  {
    slug: "nordwind",
    title: "Nordwind",
    client: "Nordwind Outdoor Apparel",
    category: "Art Direction",
    year: "2024",
    roles: ["Art Direction", "Campaign", "Identity"],
    description:
      "Campaign identity and art direction for an outdoor apparel label built for serious weather. Cold blues, compressed type and documentary photography give the brand a quiet, endurance-driven voice.",
    outcome:
      "The campaign ran across out-of-home, retail and social, lifting seasonal pre-orders and setting the visual language for the following two collections.",
    cover: nordwindCover,
    images: [nordwindCover, nordwindDetail],
  },
  {
    slug: "pulse-fm",
    title: "Pulse FM",
    client: "Pulse FM Radio Network",
    category: "Brand Identity",
    year: "2025",
    roles: ["Brand Identity", "Motion", "Poster Series"],
    description:
      "A loud, gradient-driven identity for a youth radio network. The soundwave mark flexes across posters, app screens and broadcast graphics, turning audio into a colour system you can see.",
    outcome:
      "The identity now anchors the station's on-air graphics, app and event posters — a system loud enough for a music brand but disciplined enough to scale.",
    cover: pulseCover,
    images: [pulseCover, pulseDetail],
  },
  {
    slug: "terra-ceramics",
    title: "Terra Ceramics",
    client: "Terra Ceramics Studio",
    category: "Packaging",
    year: "2023",
    roles: ["Packaging", "Identity", "Print"],
    description:
      "Identity and packaging for a small-batch ceramics studio. Terracotta, sand and raw board echo the clay itself; a blind-embossed mark and wax seal keep every touchpoint tactile.",
    outcome:
      "The packaging system helped the studio move from market stalls into boutique retail, with a boxed set that became their best-selling product line.",
    cover: terraCover,
    images: [terraCover, terraDetail],
  },
  {
    slug: "hexa-finance",
    title: "Hexa Finance",
    client: "Hexa Fintech",
    category: "Brand Identity",
    year: "2024",
    roles: ["Rebrand", "Design System", "Guidelines"],
    description:
      "A ground-up rebrand for a fintech platform that wanted to feel bold instead of beige. A geometric hexagon mark, near-black surfaces and a single electric orange give the product instant recognition.",
    outcome:
      "The rebrand shipped across product UI, pitch material and a 120-page guideline system adopted by every internal team.",
    cover: hexaCover,
    images: [hexaCover, hexaDetail],
  },
];

export function getProject(slug: string | undefined) {
  return projects.find((p) => p.slug === slug);
}

export const projectCategories = [
  "All",
  ...Array.from(new Set(projects.map((p) => p.category))),
];
