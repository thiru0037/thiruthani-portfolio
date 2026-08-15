import type { NavLink, SocialLink } from "@/types/content";

export const siteConfig = {
  name: "Thiruthani Ravichandran",
  title: "Thiruthani Ravichandran — Senior Product Manager",
  description:
    "Senior Product Manager with 15 years in enterprise software and 7+ years in SaaS product leadership, specializing in AI-enabled data governance, platform integrations, and GenAI-powered product experiences.",
  url: "https://thiruthani.dev",
};

// Prefixed with "/" (not bare "#...") so these still resolve correctly when
// clicked from a different route (e.g. /blog or /case-studies/[slug]) rather
// than only working while already on the home page.
export const navLinks: NavLink[] = [
  { label: "About", href: "/#about" },
  { label: "Case Studies", href: "/#case-studies" },
  { label: "Experience", href: "/#experience" },
  { label: "AI & Platform", href: "/#ai-platform" },
  { label: "Skills", href: "/#skills" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/#contact" },
];

export const socialLinks: SocialLink[] = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/thiruthani/" },
  { label: "Email", href: "mailto:thiru.workz@gmail.com" },
];
