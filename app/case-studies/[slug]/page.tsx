import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { CaseStudyContent } from "@/components/case-study/case-study-content";
import { getCaseStudy, getCaseStudySlugs } from "@/content/case-studies";
import { buildMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return getCaseStudySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);

  if (!study) return buildMetadata({});

  return buildMetadata({
    title: `${study.company} Case Study | Thiruthani Ravichandran`,
    description: study.tagline,
    path: `/case-studies/${study.slug}`,
  });
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = getCaseStudy(slug);

  if (!study) notFound();

  return (
    <main id="main-content" className="py-16 sm:py-20">
      <Container className="max-w-3xl">
        <Link
          href="/#case-studies"
          className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          Back to all case studies
        </Link>
        <CaseStudyContent study={study} />
      </Container>
    </main>
  );
}
