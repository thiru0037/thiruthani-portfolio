import { notFound } from "next/navigation";
import { CaseStudyDialog } from "@/components/case-study/case-study-dialog";
import { CaseStudyContent } from "@/components/case-study/case-study-content";
import { getCaseStudy } from "@/content/case-studies";

export default async function InterceptedCaseStudyModal({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const study = getCaseStudy(slug);

  if (!study) notFound();

  return (
    <CaseStudyDialog>
      <CaseStudyContent study={study} />
    </CaseStudyDialog>
  );
}
