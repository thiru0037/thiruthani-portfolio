import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { CapabilityCard } from "@/components/ui/capability-card";
import { platformCapabilities } from "@/content/platform-capabilities";

export function PlatformIntegrationWork() {
  return (
    <section className="border-b border-border">
      <Container className="flex flex-col gap-10 py-20">
        <SectionHeading
          eyebrow="Platform, Data & Integrations"
          title="Comfortable at the systems layer"
          description="Product decisions made at the API and data-integration level, not just the UI layer."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {platformCapabilities.map((capability) => (
            <CapabilityCard key={capability.title} {...capability} />
          ))}
        </div>
      </Container>
    </section>
  );
}
