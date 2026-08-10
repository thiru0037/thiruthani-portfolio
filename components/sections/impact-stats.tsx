import { Container } from "@/components/ui/container";
import { StatTile } from "@/components/ui/stat-tile";
import { impactStats } from "@/content/profile";

export function ImpactStats() {
  return (
    <section aria-label="Impact highlights" className="border-b border-border">
      <Container className="py-14">
        <div className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 lg:grid-cols-6">
          {impactStats.map((stat) => (
            <StatTile key={stat.label} value={stat.value} label={stat.label} />
          ))}
        </div>
      </Container>
    </section>
  );
}
