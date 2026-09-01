export const serviceNeededOptions = [
  {
    value: "website-strategy-development",
    label: "Website strategy and development",
  },
  {
    value: "reporting-data-visibility",
    label: "Reporting and data visibility",
  },
  { value: "workflow-automation", label: "Workflow automation" },
  {
    value: "ongoing-technology-support",
    label: "Ongoing technology support",
  },
  { value: "not-sure", label: "Not sure yet" },
] as const;

export const timingOptions = [
  { value: "as-soon-as-practical", label: "As soon as practical" },
  { value: "one-to-three-months", label: "Within 1–3 months" },
  { value: "three-to-six-months", label: "Within 3–6 months" },
  { value: "more-than-six-months", label: "More than 6 months" },
  { value: "exploring", label: "Exploring / not sure yet" },
] as const;

export const investmentOptions = [
  { value: "under-5k", label: "Under $5,000" },
  { value: "5k-10k", label: "$5,000–$10,000" },
  { value: "10k-25k", label: "$10,000–$25,000" },
  { value: "25k-50k", label: "$25,000–$50,000" },
  { value: "50k-plus", label: "$50,000+" },
  { value: "guidance", label: "Need guidance" },
] as const;

export const contactMethodOptions = [
  { value: "email", label: "Email" },
  { value: "telephone", label: "Telephone" },
] as const;

export const projectBriefLimits = {
  fullName: 100,
  workEmail: 254,
  companyName: 160,
  companyWebsite: 300,
  projectGoal: 2_400,
  existingSystems: 1_000,
  telephone: 40,
  heardAbout: 200,
  sourcePage: 200,
} as const;

export type ProjectBrief = {
  fullName: string;
  workEmail: string;
  companyName: string;
  companyWebsite: string;
  serviceNeeded: (typeof serviceNeededOptions)[number]["value"];
  projectGoal: string;
  existingSystems: string;
  desiredTiming: (typeof timingOptions)[number]["value"];
  expectedInvestment: (typeof investmentOptions)[number]["value"];
  preferredContact: "" | (typeof contactMethodOptions)[number]["value"];
  telephone: string;
  heardAbout: string;
  sourcePage: string;
};

export type ProjectBriefField = keyof ProjectBrief;

export type ProjectBriefValidation =
  | { success: true; data: ProjectBrief }
  | {
      success: false;
      errors: Partial<Record<ProjectBriefField, string>>;
    };

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const serviceValues = new Set<string>(
  serviceNeededOptions.map(({ value }) => value),
);
const timingValues = new Set<string>(timingOptions.map(({ value }) => value));
const investmentValues = new Set<string>(
  investmentOptions.map(({ value }) => value),
);
const contactValues = new Set<string>(
  contactMethodOptions.map(({ value }) => value),
);

function inputRecord(value: unknown): Record<string, unknown> {
  if (!value || typeof value !== "object" || Array.isArray(value)) return {};
  return value as Record<string, unknown>;
}

function rawString(record: Record<string, unknown>, field: string) {
  const value = record[field];
  return typeof value === "string" ? value : "";
}

function cleanText(value: string) {
  const normalized = value
    .normalize("NFKC")
    .replace(/\r\n?/g, "\n")
    .split("")
    .filter((character) => {
      const code = character.charCodeAt(0);
      return (
        character === "\n" || character === "\t" || (code >= 32 && code !== 127)
      );
    })
    .join("");
  return normalized.trim();
}

function validateText(
  record: Record<string, unknown>,
  field: ProjectBriefField,
  label: string,
  limit: number,
  errors: Partial<Record<ProjectBriefField, string>>,
  required = true,
) {
  const raw = rawString(record, field);
  const value = cleanText(raw);
  if (required && !value) {
    errors[field] = `${label} is required.`;
  } else if (raw.length > limit || value.length > limit) {
    errors[field] =
      `${label} must be ${limit.toLocaleString()} characters or fewer.`;
  }
  return value;
}

function normalizeWebsite(value: string) {
  if (!value) return "";
  const candidate = /^[a-z][a-z\d+.-]*:/i.test(value)
    ? value
    : `https://${value}`;
  try {
    const url = new URL(candidate);
    if (url.protocol !== "http:" && url.protocol !== "https:") return null;
    return url.toString();
  } catch {
    return null;
  }
}

export function optionLabel(
  options: readonly { value: string; label: string }[],
  value: string,
) {
  return options.find((option) => option.value === value)?.label ?? value;
}

export function validateProjectBrief(input: unknown): ProjectBriefValidation {
  const record = inputRecord(input);
  const errors: Partial<Record<ProjectBriefField, string>> = {};

  const fullName = validateText(
    record,
    "fullName",
    "Full name",
    projectBriefLimits.fullName,
    errors,
  );
  const workEmail = validateText(
    record,
    "workEmail",
    "Work email",
    projectBriefLimits.workEmail,
    errors,
  ).toLowerCase();
  if (workEmail && !emailPattern.test(workEmail)) {
    errors.workEmail = "Enter a valid work email address.";
  }

  const companyName = validateText(
    record,
    "companyName",
    "Company name",
    projectBriefLimits.companyName,
    errors,
    false,
  );
  const companyWebsiteInput = validateText(
    record,
    "companyWebsite",
    "Company website",
    projectBriefLimits.companyWebsite,
    errors,
    false,
  );
  const normalizedWebsite = normalizeWebsite(companyWebsiteInput);
  if (companyWebsiteInput && !normalizedWebsite) {
    errors.companyWebsite = "Enter a valid http or https website address.";
  } else if (!companyName && !normalizedWebsite) {
    errors.companyName = "Enter a company name or website.";
    errors.companyWebsite = "Enter a company name or website.";
  }

  const serviceNeeded = cleanText(rawString(record, "serviceNeeded"));
  if (!serviceValues.has(serviceNeeded)) {
    errors.serviceNeeded = "Choose the service needed.";
  }

  const projectGoal = validateText(
    record,
    "projectGoal",
    "Project goal",
    projectBriefLimits.projectGoal,
    errors,
  );
  const existingSystems = validateText(
    record,
    "existingSystems",
    "Existing systems",
    projectBriefLimits.existingSystems,
    errors,
    false,
  );

  const desiredTiming = cleanText(rawString(record, "desiredTiming"));
  if (!timingValues.has(desiredTiming)) {
    errors.desiredTiming = "Choose the desired timing.";
  }

  const expectedInvestment = cleanText(rawString(record, "expectedInvestment"));
  if (!investmentValues.has(expectedInvestment)) {
    errors.expectedInvestment = "Choose an expected investment range.";
  }

  const preferredContact = cleanText(rawString(record, "preferredContact"));
  if (preferredContact && !contactValues.has(preferredContact)) {
    errors.preferredContact = "Choose email or telephone.";
  }

  const telephone = validateText(
    record,
    "telephone",
    "Telephone number",
    projectBriefLimits.telephone,
    errors,
    preferredContact === "telephone",
  );
  if (telephone) {
    const digits = telephone.replace(/\D/g, "");
    if (
      !/^[+()\d\s.-]+$/.test(telephone) ||
      digits.length < 7 ||
      digits.length > 15
    ) {
      errors.telephone = "Enter a valid telephone number.";
    }
  }

  const heardAbout = validateText(
    record,
    "heardAbout",
    "How you heard about Strive",
    projectBriefLimits.heardAbout,
    errors,
    false,
  );
  const sourcePage = validateText(
    record,
    "sourcePage",
    "Source page",
    projectBriefLimits.sourcePage,
    errors,
    false,
  );
  const safeSourcePage =
    sourcePage.startsWith("/") && !sourcePage.startsWith("//")
      ? sourcePage
      : "/start-a-project";

  if (Object.keys(errors).length) return { success: false, errors };

  return {
    success: true,
    data: {
      fullName,
      workEmail,
      companyName,
      companyWebsite: normalizedWebsite ?? "",
      serviceNeeded: serviceNeeded as ProjectBrief["serviceNeeded"],
      projectGoal,
      existingSystems,
      desiredTiming: desiredTiming as ProjectBrief["desiredTiming"],
      expectedInvestment:
        expectedInvestment as ProjectBrief["expectedInvestment"],
      preferredContact: preferredContact as ProjectBrief["preferredContact"],
      telephone,
      heardAbout,
      sourcePage: safeSourcePage,
    },
  };
}
