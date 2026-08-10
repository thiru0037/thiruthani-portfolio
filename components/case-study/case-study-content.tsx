import { Badge } from "@/components/ui/badge";
import type { CaseStudy } from "@/types/content";

export function CaseStudyContent({ study }: { study: CaseStudy }) {
  return (
    <article>
      <header className="flex flex-col gap-4 border-b border-border pb-8">
        <span className="font-mono text-xs uppercase tracking-wide text-muted-foreground">
          {study.dateRange} &middot; {study.location}
        </span>
        <h1 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          {study.company}
        </h1>
        <p className="text-lg text-muted-foreground">{study.role}</p>
        <p className="max-w-2xl text-balance leading-relaxed text-muted-foreground">
          {study.tagline}
        </p>
        <div className="flex flex-wrap gap-2 pt-1">
          {study.tags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </div>
      </header>

      <div className="grid gap-10 py-8 sm:grid-cols-3">
        {study.outcomes.map((outcome) => (
          <div key={outcome.label} className="flex flex-col gap-1 border-t border-border pt-4">
            <span className="font-mono text-3xl font-semibold tracking-tight text-foreground">
              {outcome.value}
            </span>
            <span className="text-sm text-muted-foreground">{outcome.label}</span>
          </div>
        ))}
      </div>

      <section className="flex flex-col gap-3 pb-8">
        <h2 className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
          Context
        </h2>
        <p className="leading-relaxed text-foreground">{study.context}</p>
      </section>

      <section className="flex flex-col gap-3 pb-8">
        <h2 className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
          What I owned
        </h2>
        <ul className="flex flex-col gap-3">
          {study.ownership.map((item) => (
            <li key={item} className="flex gap-3 leading-relaxed text-foreground">
              <span aria-hidden="true" className="mt-1 text-accent">
                &#8226;
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="flex flex-col gap-3">
        <h2 className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
          Approach
        </h2>
        <ul className="flex flex-col gap-3">
          {study.approach.map((item) => (
            <li key={item} className="flex gap-3 leading-relaxed text-foreground">
              <span aria-hidden="true" className="mt-1 text-accent">
                &#8226;
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}
