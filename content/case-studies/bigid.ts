import type { CaseStudy } from "@/types/content";

export const bigid: CaseStudy = {
  slug: "bigid",
  company: "BigID",
  role: "Sr. Product Manager — AI Data Governance & Integrations",
  location: "Chennai, India",
  dateRange: "01/2025 – 05/2026",
  tagline:
    "Owned the roadmap for an enterprise metadata interoperability platform serving 40+ customers, and defined where GenAI and semi-agentic workflows fit into governance operations.",
  tags: ["Data Governance", "Platform / API", "GenAI & AI Agents", "Enterprise SaaS"],
  context:
    "BigID's enterprise customers needed interoperability across governance and catalog tools rather than a single closed system — metadata, lineage, and policy had to move reliably between platforms like Alation, Collibra, MS Purview, and ServiceNow CMDB.",
  ownership: [
    "Owned product strategy and roadmap for the Metadata Exchange Hub, enabling enterprise-wide interoperability across governance and catalogs serving 40+ enterprise customers.",
    "Defined and shipped an integration framework supporting bi-directional metadata sync, lineage propagation, and policy enforcement for environments processing 100K+ metadata objects across columns, labels, tags, and policy attributes.",
    "Defined GenAI/LLM and semi-agentic workflow opportunities for metadata intelligence — automated mapping recommendations, workflow validation, and minimal integration setup.",
  ],
  approach: [
    "Partnered with architecture and engineering teams on scalable platform capabilities and API-driven integrations across Alation, Collibra, MS Purview, and ServiceNow CMDB.",
    "Performed forward-deployed product management with enterprise customers to diagnose blockers and quantify workflow pain points directly, rather than relying solely on secondhand requirements.",
  ],
  outcomes: [
    { value: "40+", label: "enterprise customers on the platform" },
    { value: "50%", label: "reduction in average customer integration time" },
    { value: "100K+", label: "metadata objects per environment supported" },
  ],
};
