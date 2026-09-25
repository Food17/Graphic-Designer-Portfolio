import { Link, useRouterState } from "@tanstack/react-router";
import { useState } from "react";

const links = [
  { to: "/", label: "Home" },
  { to: "/work", label: "Work" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);

  const linkClass = (to: string) =>
    \`text-sm font-medium uppercase tracking-widest transition-colors \${to === "/" ? (pathname === "/" ? "text-primary" : "text-muted-foreground hover:text-foreground") : (pathname.startsWith(to) ? "text-primary" : "text-muted-foreground hover:text-foreground")}\`;

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:px-10">
        <Link to="/" className="font-display text-sm font-bold uppercase tracking-widest" onClick={() => setOpen(false)}>
          Mustapha Adesanya
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => <Link key={l.to} to={l.to} className={linkClass(l.to)}>{l.label}</Link>)}
        </nav>
        <button className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen((v) => !v)}>
          <span className={\`h-0.5 w-6 bg-foreground transition-transform \${open ? "translate-y-1 rotate-45" : ""}\`} />
          <span className={\`h-0.5 w-6 bg-foreground transition-transform \${open ? "-translate-y-1 -rotate-45" : ""}\`} />
        </button>
      </div>
      {open && (
        <nav className="border-t border-border bg-background px-5 py-4 md:hidden">
          {links.map((l) => <Link key={l.to} to={l.to} className="block py-3 font-display text-2xl font-bold uppercase" onClick={() => setOpen(false)}>{l.label}</Link>)}
        </nav>
      )}
    </header>
  );
}
