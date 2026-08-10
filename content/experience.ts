import type { ExperienceEntry } from "@/types/content";

// Supporting roles shown on the career timeline. The two flagship, metric-dense
// roles (BigID, Document360) get full case-study treatment — see content/case-studies.
export const experience: ExperienceEntry[] = [
  {
    company: "Exterro R&D",
    role: "Sr. Business Analyst — Legal GRC Applications",
    location: "Coimbatore, India",
    dateRange: "11/2018 – 01/2022",
    bullets: [
      "Defined product strategy and roadmap for Governance, Risk, and Compliance (GRC) platforms supporting enterprise legal and compliance operations.",
      "Delivered 37 enterprise feature initiatives while balancing customer demand, platform scalability, and engineering capacity.",
      "Developed competitive positioning, battle cards, and market intelligence assets that contributed to closing strategic opportunities worth $90K+.",
      "Led UX modernization initiatives across four enterprise products while achieving WCAG accessibility compliance.",
    ],
  },
  {
    company: "Tata Consultancy Services",
    role: "Trainee → Application Developer → Development Lead → Lead Business Analyst — Insurance & Banking",
    location: "India & Japan",
    dateRange: "09/2011 – 10/2018",
    bullets: [
      "Led large-scale enterprise modernization, migration, and integration initiatives for global insurance and banking customers, including AIG Japan and AIG UK.",
      "Managed migration and governance of 17M+ records across enterprise platforms using secure ETL, data profiling, and reconciliation processes.",
      "Partnered with architecture teams to design end-to-end enterprise systems and data management frameworks supporting mergers and legacy modernization.",
      "Delivered complex data transformation and business rule implementations that improved processing efficiency, data integrity, and operational performance.",
    ],
  },
];
