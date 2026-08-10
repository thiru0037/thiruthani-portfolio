import { ArrowDown } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { profile } from "@/content/profile";

export function Hero() {
  return (
    <section className="border-b border-border">
      <Container className="flex flex-col items-start gap-10 py-20 sm:py-28 md:flex-row md:items-center md:justify-between">
        <div className="flex max-w-2xl flex-col gap-6">
          <span className="font-mono text-xs uppercase tracking-[0.14em] text-accent">
            {profile.availability}
          </span>
          <h1 className="text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
            {profile.name}
          </h1>
          <p className="text-balance text-xl text-muted-foreground">
            Senior Product Manager — Enterprise SaaS, AI &amp; Data Governance
          </p>
          <p className="max-w-xl text-balance leading-relaxed text-muted-foreground">
            {profile.summary}
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Button href="#case-studies" variant="primary">
              View case studies
              <ArrowDown className="h-4 w-4" aria-hidden="true" />
            </Button>
            <Button href="/resume.pdf" download variant="secondary">
              Download resume
            </Button>
          </div>
        </div>

        <Avatar name={profile.name} size={144} />
      </Container>
    </section>
  );
}
