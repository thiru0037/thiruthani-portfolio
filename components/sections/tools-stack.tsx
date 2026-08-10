import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { Badge } from "@/components/ui/badge";
import { toolsAndFrameworks } from "@/content/skills";

export function ToolsStack() {
  return (
    <section id="skills" className="border-b border-border scroll-mt-16">
      <Container className="flex flex-col gap-10 py-20">
        <SectionHeading
          eyebrow="Tools & Frameworks"
          title="Fluent across the modern PM and AI-build stack"
        />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {toolsAndFrameworks.map((group) => (
            <div key={group.category} className="flex flex-col gap-3">
              <h3 className="text-sm font-medium text-foreground">{group.category}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <Badge key={item}>{item}</Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
