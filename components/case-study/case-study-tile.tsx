import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { CaseStudy } from "@/types/content";

export function CaseStudyTile({ study }: { study: CaseStudy }) {
  return (
    <Link
      href={`/case-studies/${study.slug}`}
      className="group flex flex-col gap-5 rounded-xl border border-border bg-surface p-6 transition-colors hover:border-accent sm:p-8"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex flex-col gap-1">
          <span className="font-mono text-xs uppercase tracking-wide text-muted-foreground">
            {study.dateRange}
          </span>
          <h3 className="text-xl font-semibold text-foreground">{study.company}</h3>
          <p className="text-sm text-muted-foreground">{study.role}</p>
        </div>
        <ArrowUpRight
          aria-hidden="true"
          className="h-5 w-5 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
        />
      </div>

      <p className="leading-relaxed text-muted-foreground">{study.tagline}</p>

      <div className="mt-auto flex flex-wrap gap-2 pt-2">
        {study.tags.map((tag) => (
          <Badge key={tag}>{tag}</Badge>
        ))}
      </div>
    </Link>
  );
}
