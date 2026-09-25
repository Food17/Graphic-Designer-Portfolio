import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-7xl px-5 py-12 md:px-10">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-display text-3xl font-black uppercase tracking-tight">Let's make something <span className="text-primary">loud.</span></p>
            <p className="mt-2 text-sm text-muted-foreground">Graphic & brand identity design, available for new projects.</p>
          </div>
          <nav className="flex flex-wrap gap-6 text-sm font-medium uppercase tracking-widest">
            <Link to="/" className="text-muted-foreground transition-colors hover:text-primary">Home</Link>
            <Link to="/work" className="text-muted-foreground transition-colors hover:text-primary">Work</Link>
            <Link to="/about" className="text-muted-foreground transition-colors hover:text-primary">About</Link>
            <Link to="/contact" className="text-muted-foreground transition-colors hover:text-primary">Contact</Link>
          </nav>
        </div>
        <div className="mt-10 flex flex-col gap-2 border-t border-border pt-6 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
          <p>© 2026 Mustapha Adesanya. All rights reserved.</p>
          <p>Designed & built with intent.</p>
        </div>
      </div>
    </footer>
  );
}
