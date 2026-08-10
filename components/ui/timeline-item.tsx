import type { ExperienceEntry } from "@/types/content";

export function TimelineItem({
  entry,
  isLast = false,
}: {
  entry: ExperienceEntry;
  isLast?: boolean;
}) {
  return (
    <li className="relative pl-8 sm:pl-10">
      <span
        aria-hidden="true"
        className="absolute left-0 top-1.5 h-2.5 w-2.5 rounded-full border-2 border-accent bg-background"
      />
      {!isLast && (
        <span
          aria-hidden="true"
          className="absolute left-[4.5px] top-4 bottom-[-2.5rem] w-px bg-border"
        />
      )}
      <div className="flex flex-col gap-1 pb-10">
        <span className="font-mono text-xs uppercase tracking-wide text-muted-foreground">
          {entry.dateRange} &middot; {entry.location}
        </span>
        <h3 className="text-lg font-semibold text-foreground">{entry.role}</h3>
        <p className="font-mono text-sm text-accent">{entry.company}</p>
        <ul className="mt-2 flex flex-col gap-2 text-sm leading-relaxed text-muted-foreground">
          {entry.bullets.map((bullet) => (
            <li key={bullet} className="flex gap-2">
              <span aria-hidden="true" className="text-accent">
                &#8226;
              </span>
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
}
