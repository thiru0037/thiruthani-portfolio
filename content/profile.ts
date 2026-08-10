import type { Profile, StatHighlight } from "@/types/content";

export const profile: Profile = {
  name: "Thiruthani Ravichandran",
  title: "Senior Product Manager",
  location: "Chennai, Tamil Nadu, India",
  email: "thiru.workz@gmail.com",
  phone: "+91 99440 23716",
  linkedin: "https://www.linkedin.com/in/thiruthani/",
  education:
    "Master's, Software Engineering — Coimbatore Institute of Technology (2006–2011)",
  summary:
    "15 years in enterprise software, including 10+ years across product ownership, business analysis, solution ownership, and product management, with 7+ years in formal SaaS product leadership. Experienced in building AI-enabled enterprise products across data governance, knowledge management, compliance workflows and platform integrations. Strong fit for AI solution roles requiring product discovery, roadmap strategy & ownership, advanced requirements engineering, Agile delivery, API/platform thinking, and cross-functional execution with engineering, architecture, GTM and customer teams.",
  availability: "Most recently Sr. Product Manager at BigID — open to new opportunities",
};

export const impactStats: StatHighlight[] = [
  { value: "40+", label: "enterprise customers served on flagship platform" },
  { value: "50%", label: "reduction in customer integration time" },
  { value: "20%", label: "MRR growth from AI-powered capability launches" },
  { value: "23%", label: "reduction in product delivery lead time" },
  { value: "37", label: "enterprise feature initiatives delivered" },
  { value: "17M+", label: "records migrated and governed" },
];
