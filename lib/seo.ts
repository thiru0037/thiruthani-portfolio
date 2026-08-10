import type { Metadata } from "next";
import { siteConfig } from "@/content/site-config";

export function buildMetadata({
  title,
  description,
  path = "",
}: {
  title?: string;
  description?: string;
  path?: string;
}): Metadata {
  const resolvedTitle = title ?? siteConfig.title;
  const resolvedDescription = description ?? siteConfig.description;
  const url = `${siteConfig.url}${path}`;

  return {
    title: resolvedTitle,
    description: resolvedDescription,
    alternates: { canonical: url },
    openGraph: {
      title: resolvedTitle,
      description: resolvedDescription,
      url,
      siteName: siteConfig.name,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: resolvedTitle,
      description: resolvedDescription,
    },
  };
}
