import { Hero } from "@/components/sections/hero";
import { ImpactStats } from "@/components/sections/impact-stats";
import { About } from "@/components/sections/about";
import { CaseStudyGrid } from "@/components/sections/case-study-grid";
import { ExperienceTimeline } from "@/components/sections/experience-timeline";
import { AIGenAIWork } from "@/components/sections/ai-genai-work";
import { PlatformIntegrationWork } from "@/components/sections/platform-integration-work";
import { ToolsStack } from "@/components/sections/tools-stack";
import { Credentials } from "@/components/sections/credentials";

export default function Home() {
  return (
    <main id="main-content">
      <Hero />
      <ImpactStats />
      <About />
      <CaseStudyGrid />
      <ExperienceTimeline />
      <AIGenAIWork />
      <PlatformIntegrationWork />
      <ToolsStack />
      <Credentials />
    </main>
  );
}
