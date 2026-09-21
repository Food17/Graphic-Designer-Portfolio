export function Marquee({ items }: { items: string[] }) {
  // Two identical halves so the -50% translate loops seamlessly.
  const half = [...items, ...items];

  return (
    <div className="overflow-hidden border-y border-border bg-primary py-4">
      <div className="marquee-track flex w-max items-center whitespace-nowrap">
        {[...half, ...half].map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-8 pr-8 font-display text-lg font-bold uppercase tracking-wider text-primary-foreground md:text-xl"
          >
            {item}
            <span aria-hidden className="text-base">
              ✦
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
