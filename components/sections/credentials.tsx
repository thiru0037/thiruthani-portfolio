import { Award, Mic, GraduationCap } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Card } from "@/components/ui/card";
import { certifications, achievements } from "@/content/certifications";
import { education } from "@/content/education";

export function Credentials() {
  return (
    <section className="border-b border-border">
      <Container className="grid gap-6 py-20 sm:grid-cols-3">
        <Card className="flex flex-col gap-3">
          <GraduationCap className="h-5 w-5 text-accent" aria-hidden="true" />
          <h3 className="text-sm font-medium text-foreground">Education</h3>
          <p className="text-sm text-muted-foreground">
            {education.degree}
            <br />
            {education.institution}
            <br />
            {education.dateRange}
          </p>
        </Card>

        <Card className="flex flex-col gap-3">
          <Award className="h-5 w-5 text-accent" aria-hidden="true" />
          <h3 className="text-sm font-medium text-foreground">Certifications</h3>
          <ul className="flex flex-col gap-1 text-sm text-muted-foreground">
            {certifications.map((cert) => (
              <li key={cert.name}>
                {cert.name} &mdash; {cert.issuer}, {cert.year}
              </li>
            ))}
          </ul>
        </Card>

        <Card className="flex flex-col gap-3">
          <Mic className="h-5 w-5 text-accent" aria-hidden="true" />
          <h3 className="text-sm font-medium text-foreground">Recognition</h3>
          <ul className="flex flex-col gap-1 text-sm text-muted-foreground">
            {achievements.map((achievement) => (
              <li key={achievement.text}>{achievement.text}</li>
            ))}
          </ul>
        </Card>
      </Container>
    </section>
  );
}
