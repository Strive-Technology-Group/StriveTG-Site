type ApprovedTelephone = {
  display: string;
  e164: string;
  href: `tel:${string}`;
  businessHours?: string;
};

type CompanyProfile = {
  name: string;
  shortName: string;
  url: string;
  email: string;
  telephone: ApprovedTelephone | null;
  positioning: string;
  description: string;
};

export const company: CompanyProfile = {
  name: "Strive Technology Group",
  shortName: "Strive",
  url: "https://www.strivetg.com",
  email: "contact@strivetg.com",
  // Publish only a dedicated, owner-approved business number.
  telephone: null,
  positioning:
    "A technology partner for growing small and midsize service businesses, combining websites, reporting, and practical automation with applied AI research and development.",
  description:
    "Digital systems for growing service businesses, plus applied AI research and development through experimentation, prototyping, and evaluation.",
} as const;

export const navigation = [
  { label: "Services", href: "/services" },
  { label: "Approach", href: "/approach" },
  { label: "Research", href: "/research" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
] as const;

export const appliedAI = {
  title: "Applied AI Research & Development",
  tagline: "Engineering intelligent systems beyond conventional automation.",
  introduction:
    "Strive Technology Group brings an engineering-led approach to artificial intelligence, combining machine learning research with practical software development.",
  description:
    "Our technical interests span agentic AI, multimodal learning, efficient machine learning architectures, and trustworthy AI systems. We focus on turning complex technical problems into measurable, reliable solutions through experimentation, prototyping, and rigorous evaluation.",
} as const;

export const researchFocusAreas = [
  {
    id: "agentic-ai",
    title: "Agentic AI",
    description:
      "Explore systems that plan, use tools, and coordinate tasks, with explicit boundaries, human review, and evaluation of failure cases.",
  },
  {
    id: "multimodal-learning",
    title: "Multimodal learning",
    description:
      "Investigate how text, images, and other data types can work together, guided by the problem and the quality of the available data.",
  },
  {
    id: "efficient-architectures",
    title: "Efficient ML architectures",
    description:
      "Examine model and system designs that balance useful performance with compute, latency, and resource requirements.",
  },
  {
    id: "trustworthy-ai",
    title: "Trustworthy AI systems",
    description:
      "Evaluate reliability, limitations, oversight, and behavior across representative inputs and difficult cases.",
  },
] as const;

export const researchSteps = [
  {
    number: "01",
    title: "Define the question",
    description:
      "Clarify the technical problem, available data, constraints, and what a useful result would look like.",
  },
  {
    number: "02",
    title: "Establish a baseline",
    description:
      "Choose a practical point of comparison and agree on the measures that will guide the experiment.",
  },
  {
    number: "03",
    title: "Build a focused prototype",
    description:
      "Test the central idea with a bounded implementation before committing to a larger system.",
  },
  {
    number: "04",
    title: "Evaluate and decide",
    description:
      "Compare results, inspect failure cases, document limitations, and use the evidence to choose the next step.",
  },
] as const;

export const servicePillars = [
  {
    number: "01",
    id: "get-found",
    eyebrow: "Websites and search",
    title: "A credible digital front door",
    description:
      "Build or improve the website and search foundations people use to discover, evaluate, and contact your business.",
    capabilities: [
      "Website strategy and development",
      "Content structure and inquiry paths",
      "Technical search foundations",
      "Managed hosting and upkeep options",
    ],
  },
  {
    number: "02",
    id: "understand-growth",
    eyebrow: "Reporting and analytics",
    title: "Reporting you can act on",
    description:
      "Connect the signals that matter so decisions are based on a useful view of activity, not disconnected dashboards.",
    capabilities: [
      "Measurement planning",
      "Analytics implementation",
      "Focused dashboards and reporting",
      "Data-quality and tracking reviews",
    ],
  },
  {
    number: "03",
    id: "remove-repetition",
    eyebrow: "Workflow automation",
    title: "Practical automation with guardrails",
    description:
      "Map repeatable work, choose the right level of automation, and keep people in control where judgment matters.",
    capabilities: [
      "Workflow discovery and prioritization",
      "System and tool integrations",
      "Focused AI-assisted workflows",
      "Documentation and handoff",
    ],
  },
] as const;

export const engagementSteps = [
  {
    number: "01",
    title: "Project brief",
    description:
      "Share the business problem, current context, desired outcome, and timing for review.",
  },
  {
    number: "02",
    title: "Discovery",
    description:
      "Review the current experience, systems, constraints, and available evidence.",
  },
  {
    number: "03",
    title: "Scope",
    description:
      "Define outcomes, responsibilities, exclusions, milestones, and commercial terms in writing.",
  },
  {
    number: "04",
    title: "Build",
    description:
      "Work in reviewable increments with decisions and changes kept visible.",
  },
  {
    number: "05",
    title: "Validate",
    description:
      "Check the agreed requirements, content, accessibility, performance, and operational handoff.",
  },
  {
    number: "06",
    title: "Launch and support",
    description:
      "Release with documentation, ownership clarity, and optional support scoped separately.",
  },
] as const;

export const trustCommitments = [
  {
    title: "Scope before build",
    description:
      "Objectives, boundaries, responsibilities, and decision points are written down before delivery begins.",
  },
  {
    title: "Ownership defined in writing",
    description:
      "The scope identifies client assets, transferred deliverables, reusable systems, third-party licenses, and access responsibilities.",
  },
  {
    title: "Decisions backed by evidence",
    description:
      "Recommendations connect the available baseline, business objective, technical tradeoffs, and validation method.",
  },
  {
    title: "Handoff planned from the start",
    description:
      "Access, documentation, ownership, and transition needs are identified in the scope instead of left until launch.",
  },
] as const;

export const faqs = [
  {
    question: "What kinds of businesses are a good fit?",
    answer:
      "Strive works with growing small and midsize service businesses that need a clearer web presence, more useful reporting, or a practical way to reduce repetitive work. The project brief is used to understand the problem, current systems, and whether Strive's capabilities match the need.",
  },
  {
    question: "What happens before a project starts?",
    answer:
      "A project starts with discovery and a written scope. The scope should identify the desired outcome, deliverables, exclusions, responsibilities, review points, timing assumptions, and commercial terms before work begins.",
  },
  {
    question: "How is pricing determined?",
    answer:
      "Pricing follows the business problem, agreed deliverables, dependencies, responsibilities, and level of ongoing involvement. Those details are set out in a written proposal for the specific engagement.",
  },
  {
    question: "Do I have to sign a long-term contract?",
    answer:
      "Initial projects use a written project agreement for the approved scope. Eligible ongoing monthly services do not require a long-term commitment; the renewal date, billing period, and cancellation terms are stated before the service begins.",
  },
  {
    question: "Can I cancel an ongoing service?",
    answer:
      "For an eligible monthly service, you may cancel before the next renewal and future recurring charges will stop according to the agreement. The agreement also defines the effective date, treatment of the active billing period, committed third-party costs, and offboarding responsibilities.",
  },
  {
    question: "What happens if I stop a project before completion?",
    answer:
      "Initial projects are different from monthly services. The approved project agreement governs notice, payment for completed work and work already in progress, nonrecoverable committed costs, any refund treatment, and what is transferred or handed off after required payment.",
  },
  {
    question: "What do I own after the engagement?",
    answer:
      "The written agreement identifies client-provided assets, custom deliverables, reusable Strive materials, third-party licenses, account access, and transfer responsibilities. Review those terms before work begins so ownership and any license conditions are explicit.",
  },
  {
    question: "Is ongoing support required?",
    answer:
      "No. Ongoing hosting, maintenance, monitoring, or improvement work is optional and defined separately when it is relevant. Its written scope identifies the systems covered, included work, responsibilities, communication channel, and service boundaries.",
  },
  {
    question: "How are results measured?",
    answer:
      "Discovery identifies the business decision, available baseline, data source, measurement method, and factors outside the technical work. The result is a project-specific validation plan rather than a universal performance promise.",
  },
  {
    question: "How does Strive approach automation and AI?",
    answer:
      "The process begins with the workflow and its risks. Automation is introduced where it can reduce repeat work without hiding important decisions, and human review remains part of the design when judgment or sensitive information is involved.",
  },
  {
    question: "Does Strive take on AI research and development projects?",
    answer:
      "Strive's applied AI research and development combines machine learning exploration with practical software engineering. Technical interests include agentic AI, multimodal learning, efficient machine learning architectures, and trustworthy AI systems. A research engagement defines the question, prototype, evaluation criteria, and deliverables in writing; findings and limitations guide the next step.",
  },
  {
    question: "What happens during offboarding?",
    answer:
      "Offboarding follows the written scope. It can include the effective end date, final covered period, agreed deliverables, account access, documentation, exports, third-party subscriptions, and access removal. Migration or transition work beyond the included handoff is scoped separately.",
  },
] as const;

export const publicRoutes = [
  "/",
  "/services",
  "/approach",
  "/research",
  "/about",
  "/faq",
  "/contact",
  "/start-a-project",
  "/privacy",
  "/terms",
] as const;
