import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { TimelineItem } from "@/components/ui/timeline-item";
import { experience } from "@/content/experience";

export function ExperienceTimeline() {
  return (
    <section id="experience" className="border-b border-border scroll-mt-16">
      <Container className="flex flex-col gap-10 py-20">
        <SectionHeading
          eyebrow="Experience"
          title="Career trajectory"
          description="From engineering and business analysis into senior enterprise product leadership."
        />
        <ol className="flex flex-col">
          {experience.map((entry, index) => (
            <TimelineItem
              key={entry.company}
              entry={entry}
              isLast={index === experience.length - 1}
            />
          ))}
        </ol>
      </Container>
    </section>
  );
}
