import { Card } from "@/components/ui/card";
import type { CapabilityHighlight } from "@/types/content";

export function CapabilityCard({ title, description, source }: CapabilityHighlight) {
  return (
    <Card className="flex flex-col gap-3">
      <h3 className="text-lg font-semibold text-foreground">{title}</h3>
      <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
      <span className="mt-auto pt-2 font-mono text-xs uppercase tracking-wide text-accent">
        {source}
      </span>
    </Card>
  );
}
