export const company = {
  name: "Strive Technology Group",
  shortName: "Strive",
  url: "https://strivetg.com",
  email: "contact@strivetg.com",
  calendlyUrl: "https://calendly.com/contact-strivetg/30min",
  positioning:
    "A founder-led technology partner that helps growing service businesses replace outdated websites, unclear reporting, and manual processes with reliable web, data, and automation systems.",
  description:
    "Web, data, and automation systems for growing service businesses.",
} as const;

export const navigation = [
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "How We Work", href: "/#how-we-work" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const servicePillars = [
  {
    number: "01",
    id: "get-found",
    eyebrow: "Get found and convert",
    title: "A credible digital front door",
    description:
      "Build or improve the website and search foundations people use to discover, evaluate, and contact your business.",
    capabilities: [
      "Website strategy and development",
      "Conversion-path and content structure",
      "Technical search foundations",
      "Managed hosting and upkeep options",
    ],
  },
  {
    number: "02",
    id: "understand-growth",
    eyebrow: "Understand what works",
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
    eyebrow: "Remove repetitive work",
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
    title: "Fit call",
    description:
      "Clarify the business problem, context, and whether Strive is the right partner.",
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
    title: "Ownership without lock-in",
    description:
      "Clients own their domain, data, content, and fully paid custom deliverables; reusable Strive systems remain Strive IP.",
  },
  {
    title: "Evidence over promises",
    description:
      "Recommendations are tied to the available baseline, and results are not published without support and permission.",
  },
  {
    title: "A usable handoff",
    description:
      "Work concludes with reasonable access, documentation, and export or transition support defined in the agreement.",
  },
] as const;

export const faqs = [
  {
    question: "What kinds of businesses are a good fit?",
    answer:
      "Strive is designed for small businesses that need a clearer web presence, more useful measurement, or a practical way to reduce repetitive work. The fit call is used to confirm the problem and whether the required expertise is a match.",
  },
  {
    question: "What happens before a project starts?",
    answer:
      "A project starts with discovery and a written scope. The scope should identify the desired outcome, deliverables, exclusions, responsibilities, review points, timing assumptions, and commercial terms before work begins.",
  },
  {
    question: "How is pricing determined?",
    answer:
      "Pricing is based on the problem, scope, dependencies, and level of ongoing support. Strive does not publish a universal range until the owner has approved representative pricing that can be honored.",
  },
  {
    question: "Who owns the website and project work?",
    answer:
      "After full payment, the client owns its domain, data, content, and the custom deliverables identified in the agreement. Strive retains pre-existing intellectual property, reusable libraries, templates, methods, and general know-how. Any separately licensed product is identified explicitly.",
  },
  {
    question: "Is ongoing support required?",
    answer:
      "No blanket support requirement is represented on this site. Hosting, maintenance, monitoring, and improvement work can be scoped as recurring services. Ending support does not remove ownership of fully paid custom deliverables.",
  },
  {
    question: "How are results measured?",
    answer:
      "The relevant baseline and measurement method are agreed during discovery. Strive avoids universal performance promises because outcomes depend on the offer, market, traffic, operations, and client decisions as well as the technology.",
  },
  {
    question: "How does Strive approach automation and AI?",
    answer:
      "The process begins with the workflow and its risks. Automation is introduced where it can reduce repeat work without hiding important decisions, and human review remains part of the design when judgment or sensitive information is involved.",
  },
  {
    question: "What happens at the end of an engagement?",
    answer:
      "The agreed deliverables are handed over with reasonable access and documentation. Export, transition assistance, hosting changes, and any continuing licenses should be made explicit in the project agreement.",
  },
] as const;

export const publicRoutes = [
  "/",
  "/services",
  "/work",
  "/about",
  "/faq",
  "/contact",
  "/consultation",
  "/privacy",
  "/terms",
] as const;
