import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { CapabilityCard } from "@/components/ui/capability-card";
import { aiCapabilities } from "@/content/ai-capabilities";

export function AIGenAIWork() {
  return (
    <section id="ai-platform" className="border-b border-border scroll-mt-16">
      <Container className="flex flex-col gap-10 py-20">
        <SectionHeading
          eyebrow="AI & GenAI Product Work"
          title="AI product ownership, not just AI-adjacent"
          description="Direct ownership of RAG search quality and semi-agentic workflow decisions, plus daily fluency with modern AI build tools."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {aiCapabilities.map((capability) => (
            <CapabilityCard key={capability.title} {...capability} />
          ))}
        </div>
      </Container>
    </section>
  );
}
