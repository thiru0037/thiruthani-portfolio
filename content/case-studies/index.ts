import type { CaseStudy } from "@/types/content";
import { bigid } from "./bigid";
import { document360 } from "./document360";

export const caseStudies: CaseStudy[] = [bigid, document360];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((study) => study.slug === slug);
}

export function getCaseStudySlugs(): string[] {
  return caseStudies.map((study) => study.slug);
}
