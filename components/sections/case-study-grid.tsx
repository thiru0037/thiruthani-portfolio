import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { CaseStudyTile } from "@/components/case-study/case-study-tile";
import { caseStudies } from "@/content/case-studies";

export function CaseStudyGrid() {
  return (
    <section id="case-studies" className="border-b border-border scroll-mt-16">
      <Container className="flex flex-col gap-10 py-20">
        <SectionHeading
          eyebrow="Case Studies"
          title="Flagship product ownership"
          description="The two most metric-dense roles, expanded into full context, decisions, and outcomes."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {caseStudies.map((study) => (
            <CaseStudyTile key={study.slug} study={study} />
          ))}
        </div>
      </Container>
    </section>
  );
}
