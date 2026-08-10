import type { MetadataRoute } from "next";
import { siteConfig } from "@/content/site-config";
import { getCaseStudySlugs } from "@/content/case-studies";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: MetadataRoute.Sitemap = [
    {
      url: siteConfig.url,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    ...getCaseStudySlugs().map((slug) => ({
      url: `${siteConfig.url}/case-studies/${slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];

  return routes;
}
