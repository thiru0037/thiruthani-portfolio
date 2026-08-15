export interface Profile {
  name: string;
  title: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  education: string;
  summary: string;
  availability: string;
}

export interface StatHighlight {
  value: string;
  label: string;
}

export interface ExperienceEntry {
  company: string;
  role: string;
  location: string;
  dateRange: string;
  bullets: string[];
}

export interface CaseStudyOutcome {
  value: string;
  label: string;
}

export interface CaseStudy {
  slug: string;
  company: string;
  role: string;
  location: string;
  dateRange: string;
  tagline: string;
  tags: string[];
  context: string;
  ownership: string[];
  approach: string[];
  outcomes: CaseStudyOutcome[];
}

export interface SkillGroup {
  category: string;
  items: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  year: string;
}

export interface Achievement {
  text: string;
}

export interface CapabilityHighlight {
  title: string;
  description: string;
  source: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  label: string;
  href: string;
}

export interface IntroVideo {
  /** YouTube video ID (the part after `v=` in the URL). Null renders nothing. */
  youtubeId: string | null;
  title: string;
  description: string;
}
