# Portfolio Website — Graphic & Brand Identity Designer

A multi-page portfolio with bold typography, animations, and transitions. You provide final text and images; I build the structure first with realistic placeholders you can swap.

## Step 1 — Design direction (before building)

Because you asked for a mix of styles, I'll generate 3 fully rendered design previews (e.g. one leaning editorial-minimal, one dark gallery, one bold & expressive) and you pick the one to build. Whichever you pick, the site blends: restrained layout + high-contrast moments + expressive color/motion.

## Step 2 — Site structure

```text
/                 Home — hero with your name & role, selected work teaser, marquee strip
/work             Work — filterable project gallery (branding, identity, packaging…)
/work/$slug       Project detail — image gallery, brief, role, outcome
/about            About — bio, skills, experience, downloadable résumé section
/contact          Contact — email form or mailto, social links
```

- Home is the current placeholder route, fully rewritten.
- Each page gets its own SEO metadata (title, description, social preview tags).
- Shared header with animated nav and a footer in the root layout.

## Step 3 — Animations & transitions

- Page transitions: smooth fade/slide between routes.
- Scroll reveals: sections and images animate in as you scroll.
- Hero motion: staggered text entrance, subtle parallax on imagery.
- Work cards: image zoom + label slide on hover; cursor-follow accent where it fits the chosen direction.
- Motion library: Motion for React (respecting reduced-motion settings).

## Step 4 — Content management

- All projects live in one central data file (title, slug, category, client, year, description, image list). Swapping in your real text and images later means editing one file — no page-by-page changes.
- You send text + images in chat; I upload images to CDN hosting and wire them in.

## Step 5 — Placeholder images

Until your files arrive, I generate on-brand placeholder project images (brand mockups, packaging, posters) so the site looks finished from day one.

## Technical notes

- TanStack Start (React 19) + Tailwind CSS v4; design tokens defined once in the global stylesheet.
- Project detail routes use dynamic `$slug` routes driven by the central data file; unknown slugs show a styled 404.
- No backend/database needed — pure static-friendly frontend, so it's fast to publish.
