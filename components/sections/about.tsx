import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { profile } from "@/content/profile";
import { strengths } from "@/content/skills";

export function About() {
  return (
    <section id="about" className="border-b border-border scroll-mt-16">
      <Container className="grid gap-12 py-20 md:grid-cols-[1.2fr_1fr]">
        <div className="flex flex-col gap-6">
          <SectionHeading eyebrow="About" title="Enterprise product leadership, grounded in execution" />
          <p className="leading-relaxed text-muted-foreground">{profile.summary}</p>
          <p className="text-sm text-muted-foreground">{profile.education}</p>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="font-mono text-xs uppercase tracking-[0.14em] text-muted-foreground">
            Core strengths
          </h3>
          <div className="flex flex-wrap gap-2">
            {strengths.map((strength) => (
              <Badge key={strength}>{strength}</Badge>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
