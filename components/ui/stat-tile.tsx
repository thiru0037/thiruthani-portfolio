import type { StatHighlight } from "@/types/content";

export function StatTile({ value, label }: StatHighlight) {
  return (
    <div className="flex flex-col gap-1 border-t border-border pt-4">
      <span className="font-mono text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        {value}
      </span>
      <span className="text-sm text-muted-foreground">{label}</span>
    </div>
  );
}
