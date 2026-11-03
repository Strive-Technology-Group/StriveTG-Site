import AxeBuilder from "@axe-core/playwright";
import { readFile } from "node:fs/promises";
import {
  expect,
  test,
  type APIRequestContext,
  type Page,
} from "@playwright/test";

const routes = [
  "/",
  "/services",
  "/approach",
  "/about",
  "/faq",
  "/contact",
  "/start-a-project",
  "/privacy",
  "/terms",
];
const widths = [1440, 1024, 768, 390, 375, 320];

const projectBrief = (overrides: Record<string, string> = {}) => ({
  fullName: "Jordan Lee",
  workEmail: "jordan@example.com",
  companyName: "Example Service Co",
  companyWebsite: "https://example.com",
  serviceNeeded: "website-strategy-development",
  projectGoal:
    "Replace an outdated website so qualified prospects understand the offer and can inquire.",
  existingSystems: "Next.js website and a CRM.",
  desiredTiming: "exploring",
  expectedInvestment: "guidance",
  preferredContact: "email",
  telephone: "",
  heardAbout: "Professional referral",
  sourcePage: "/start-a-project",
  companyFax: "",
  ...overrides,
});

async function fillProjectBrief(page: Page) {
  await page.getByLabel("Full name").fill("Jordan Lee");
  await page.getByLabel("Work email").fill("jordan@example.com");
  await page.locator("#companyName").fill("Example Service Co");
  await page
    .getByLabel("Service needed")
    .selectOption("website-strategy-development");
  await page
    .getByLabel("What are you trying to accomplish?")
    .fill(
      "Replace an outdated website so qualified prospects understand the offer and can inquire.",
    );
  await page.getByLabel("Desired timing").selectOption("exploring");
  await page.getByLabel("Expected investment range").selectOption("guidance");
  await page.getByLabel("Preferred contact method").selectOption("email");
}

async function providerState(request: APIRequestContext) {
  const response = await request.get("http://127.0.0.1:3101/__test/state");
  expect(response.ok()).toBeTruthy();
  return response.json() as Promise<{
    contacts: { id: string; properties: Record<string, string> }[];
    companies: { id: string; properties: Record<string, string> }[];
    deals: { id: string; properties: Record<string, string> }[];
    emails: {
      id: string;
      key: string;
      to: string[];
      subject: string;
      text: string;
      reply_to: string;
    }[];
    associations: string[];
  }>;
}

test.describe("public routes", () => {
  for (const route of routes) {
    test(`${route} renders one main and one H1`, async ({ page }) => {
      const response = await page.goto(route, {
        waitUntil: "domcontentloaded",
      });
      expect(response?.status()).toBe(200);
      await expect(page.locator("main")).toHaveCount(1);
      await expect(page.locator("h1")).toHaveCount(1);
      await expect(page.locator("h1")).toBeVisible();
    });

    test(`${route} has no serious automated accessibility violations`, async ({
      page,
    }) => {
      await page.goto(route, { waitUntil: "domcontentloaded" });
      const results = await new AxeBuilder({ page })
        .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
        .analyze();
      const serious = results.violations.filter(
        (violation) =>
          violation.impact === "serious" || violation.impact === "critical",
      );
      expect(
        serious,
        serious
          .map((violation) => `${violation.id}: ${violation.help}`)
          .join("\n"),
      ).toEqual([]);
    });
  }

  test("unknown routes return the custom 404", async ({ page }) => {
    const response = await page.goto("/not-a-real-route", {
      waitUntil: "domcontentloaded",
    });
    expect(response?.status()).toBe(404);
    await expect(
      page.getByRole("heading", {
        level: 1,
        name: "This route does not exist.",
      }),
    ).toBeVisible();
  });
});

test("all internal links resolve", async ({ page, request }) => {
  const links = new Set<string>();
  for (const route of routes) {
    await page.goto(route, { waitUntil: "domcontentloaded" });
    const hrefs = await page
      .locator('a[href^="/"]')
      .evaluateAll((anchors) =>
        anchors.map((anchor) => anchor.getAttribute("href")).filter(Boolean),
      );
    hrefs.forEach((href) =>
      links.add(new URL(href as string, "http://local").pathname),
    );
  }
  for (const path of links) {
    const response = await request.get(path);
    expect(response.status(), `${path} should resolve`).toBeLessThan(400);
  }
});

test("legacy Work route redirects permanently to Approach", async ({
  request,
}) => {
  const response = await request.get("/work", { maxRedirects: 0 });
  expect(response.status()).toBe(308);
  expect(response.headers().location).toBe("/approach");
});

test("legacy consultation route redirects permanently to Start a Project", async ({
  request,
}) => {
  const response = await request.get("/consultation", { maxRedirects: 0 });
  expect(response.status()).toBe(308);
  expect(response.headers().location).toBe("/start-a-project");
});

test("public copy does not expose internal readiness language", async ({
  page,
}) => {
  const prohibited = [
    "working draft",
    "approved image pending",
    "no fictional case studies",
    "no founder name",
    "no form backend",
    "unverified client results",
    "book a fit call",
    "calendly",
  ];

  for (const route of routes) {
    await page.goto(route, { waitUntil: "domcontentloaded" });
    const copy = (await page.locator("body").innerText()).toLowerCase();
    for (const phrase of prohibited) {
      expect(copy, `${route} exposes "${phrase}"`).not.toContain(phrase);
    }
  }
});

test("commercial copy separates projects, recurring service, and offboarding without unsupported claims", async ({
  page,
}) => {
  const prohibitedClaims = [
    "cheaper than",
    "more talented than",
    "best agency",
    "risk-free",
    "guaranteed results",
    "cancel anytime",
    "cancel at any time",
  ];

  for (const route of routes) {
    await page.goto(route, { waitUntil: "domcontentloaded" });
    const copy = (await page.locator("body").innerText()).toLowerCase();
    for (const phrase of prohibitedClaims) {
      expect(
        copy,
        `${route} exposes unsupported claim "${phrase}"`,
      ).not.toContain(phrase);
    }
  }

  await page.goto("/services", { waitUntil: "domcontentloaded" });
  await expect(page.getByText("Lean delivery", { exact: true })).toBeVisible();
  await expect(
    page.getByText("Flexible ongoing service", { exact: true }),
  ).toBeVisible();
  await expect(
    page.getByText("Planned handoff", { exact: true }),
  ).toBeVisible();
  await expect(page.locator("main")).toContainText(
    "Initial implementation, optional ongoing service, and expanded work",
  );

  await page.goto("/faq", { waitUntil: "domcontentloaded" });
  const requiredQuestions = [
    "Do I have to sign a long-term contract?",
    "Can I cancel an ongoing service?",
    "What happens if I stop a project before completion?",
    "What do I own after the engagement?",
    "What happens during offboarding?",
  ];
  for (const question of requiredQuestions) {
    await expect(page.getByText(question, { exact: true })).toHaveCount(1);
  }
  await expect(page.locator("main")).toContainText(
    "future recurring charges will stop according to the agreement",
  );

  const schema = await page
    .locator('script[type="application/ld+json"]')
    .allTextContents();
  for (const question of requiredQuestions) {
    expect(schema.join(" ")).toContain(question);
  }

  await page.goto("/terms", { waitUntil: "domcontentloaded" });
  await expect(
    page.getByRole("heading", {
      level: 2,
      name: "3. Commercial terms and ending work",
    }),
  ).toBeVisible();
  await expect(page.locator("main")).toContainText(
    "Initial projects, eligible ongoing services, and material additions",
  );
});

test("navigation, metadata, sitemap, robots, and structured data use Approach and the www canonical host", async ({
  page,
  request,
}) => {
  await page.goto("/approach", { waitUntil: "domcontentloaded" });
  const primary = page.getByRole("navigation", { name: "Primary" });
  await expect(primary.getByRole("link", { name: "Approach" })).toHaveAttribute(
    "aria-current",
    "page",
  );
  await expect(primary.getByRole("link", { name: "Work" })).toHaveCount(0);
  await expect(primary.getByRole("link", { name: "How We Work" })).toHaveCount(
    0,
  );
  await expect(page.locator(".header-cta")).toHaveText(/Start a Project/);
  await expect(page.locator(".header-cta")).toHaveAttribute(
    "href",
    "/start-a-project",
  );
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
    "href",
    "https://www.strivetg.com/approach",
  );

  const sitemap = await (await request.get("/sitemap.xml")).text();
  expect(sitemap).toContain("https://www.strivetg.com/approach");
  expect(sitemap).toContain("https://www.strivetg.com/start-a-project");
  expect(sitemap).not.toContain("https://www.strivetg.com/work");
  expect(sitemap).not.toContain("https://www.strivetg.com/consultation");
  expect(sitemap).not.toContain("<loc>https://strivetg.com");

  const robots = await (await request.get("/robots.txt")).text();
  expect(robots).toContain("Host: https://www.strivetg.com");
  expect(robots).toContain("Sitemap: https://www.strivetg.com/sitemap.xml");

  const schema = await page
    .locator('script[type="application/ld+json"]')
    .allTextContents();
  expect(schema.join(" ")).toContain("https://www.strivetg.com/approach");
  expect(schema.join(" ")).toContain(
    "Growing small and midsize service businesses",
  );
  expect(schema.join(" ")).not.toContain('"telephone"');
});

test("the canonical editorial palette is what the browser renders", async ({
  page,
}) => {
  await page.goto("/", { waitUntil: "domcontentloaded" });
  const evidence = await page.evaluate(() => {
    const root = getComputedStyle(document.documentElement);
    const background = (selector: string) =>
      getComputedStyle(document.querySelector(selector) as Element)
        .backgroundColor;
    const renderedColors = Array.from(document.querySelectorAll("body *"))
      .flatMap((element) => {
        const styles = getComputedStyle(element);
        return [styles.color, styles.backgroundColor, styles.borderColor];
      })
      .join(" ");

    return {
      tokens: {
        canvas: root.getPropertyValue("--strive-canvas").trim(),
        ink: root.getPropertyValue("--strive-ink").trim(),
        trueInk: root.getPropertyValue("--strive-true-ink").trim(),
        dark: root.getPropertyValue("--strive-dark").trim(),
        muted: root.getPropertyValue("--strive-muted").trim(),
        inverse: root.getPropertyValue("--strive-inverse-muted").trim(),
        signal: root.getPropertyValue("--strive-signal").trim(),
        support: root.getPropertyValue("--strive-support").trim(),
        echo: root.getPropertyValue("--strive-echo").trim(),
      },
      surfaces: {
        body: background("body"),
        ink: background(".section-ink"),
        dark: background(".section-dark"),
        signal: background(".consultation-band"),
      },
      hasLegacyNavy: renderedColors.includes("rgb(10, 37, 64)"),
    };
  });

  expect(evidence.tokens).toEqual({
    canvas: "#f7f4ed",
    ink: "#242521",
    trueInk: "#000000",
    dark: "#30312b",
    muted: "#64635c",
    inverse: "#cfcbc1",
    signal: "#c5a477",
    support: "#96907d",
    echo: "#e8e2d6",
  });
  expect(evidence.surfaces).toEqual({
    body: "rgb(247, 244, 237)",
    ink: "rgb(36, 37, 33)",
    dark: "rgb(48, 49, 43)",
    signal: "rgb(197, 164, 119)",
  });
  expect(evidence.hasLegacyNavy).toBe(false);
});

test("the licensed local grotesque and editorial serif are rendered", async ({
  page,
}) => {
  await page.goto("/", { waitUntil: "networkidle" });
  const evidence = await page.evaluate(() => ({
    status: document.fonts.status,
    ui: getComputedStyle(document.body).fontFamily,
    display: getComputedStyle(
      document.querySelector(".hero-line-two .hero-line-content") as Element,
    ).fontFamily,
    uiLoaded: document.fonts.check("400 16px inter"),
    displayLoaded: document.fonts.check("400 64px instrumentSerif"),
  }));

  expect(evidence.status).toBe("loaded");
  expect(evidence.ui).toContain("inter");
  expect(evidence.display).toContain("instrumentSerif");
  expect(evidence.uiLoaded).toBe(true);
  expect(evidence.displayLoaded).toBe(true);
});

test("hero display glyphs are not cropped by their reveal wrappers", async ({
  page,
}) => {
  await page.goto("/", { waitUntil: "networkidle" });
  const evidence = await page.locator(".hero-line-four").evaluate((wrapper) => {
    const content = wrapper.querySelector(".hero-line-content");
    if (!content) return null;
    const styles = getComputedStyle(content);
    return {
      wrapperOverflow: getComputedStyle(wrapper).overflow,
      contentClipPath: styles.clipPath,
    };
  });

  expect(evidence).not.toBeNull();
  expect(evidence?.wrapperOverflow).toBe("visible");
  expect(evidence?.contentClipPath).toMatch(/^inset\(-/);
});

test("editorial reveals activate without hiding skipped content", async ({
  page,
}) => {
  await page.goto("/", { waitUntil: "domcontentloaded" });
  const servicesHeading = page.locator(".services-editorial h2");
  await servicesHeading.scrollIntoViewIfNeeded();
  await expect(servicesHeading).toHaveAttribute("data-visible", "true");
  await expect(servicesHeading).toHaveCSS(
    "clip-path",
    /^inset\(-[\d.]+(?:px|em)/,
  );
});

test("editorial type masks preserve ascenders and descenders on every route", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });

  for (const route of routes) {
    await page.goto(route, { waitUntil: "domcontentloaded" });
    const masks = await page
      .locator('[data-reveal="type"]')
      .evaluateAll((elements) =>
        elements.map((element) => ({
          clipPath: getComputedStyle(element).clipPath,
          text: element.textContent?.trim().slice(0, 80),
          visible: element.getAttribute("data-visible"),
        })),
      );

    for (const mask of masks) {
      expect(mask.visible, `${route}: ${mask.text}`).toBe("true");
      expect(mask.clipPath, `${route}: ${mask.text}`).toMatch(
        /^inset\(-[\d.]+(?:px|em)/,
      );
    }
  }
});

test("the primary mobile action remains in the first viewport", async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/", { waitUntil: "domcontentloaded" });
  const bounds = await page.locator(".home-hero .button-primary").boundingBox();
  expect(bounds).not.toBeNull();
  expect((bounds?.y ?? 1000) + (bounds?.height ?? 1000)).toBeLessThanOrEqual(
    844,
  );
});

test("public routes do not overflow at release widths", async ({ page }) => {
  for (const width of widths) {
    await page.setViewportSize({ width, height: 900 });
    for (const route of routes) {
      await page.goto(route, { waitUntil: "domcontentloaded" });
      const overflow = await page.evaluate(
        () =>
          document.documentElement.scrollWidth -
          document.documentElement.clientWidth,
      );
      expect(
        overflow,
        `${route} overflows by ${overflow}px at ${width}px`,
      ).toBeLessThanOrEqual(1);
    }
  }
});

test("critical content and controls stay inside the viewport", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });

  for (const width of widths) {
    await page.setViewportSize({ width, height: 900 });
    for (const route of routes) {
      await page.goto(route, { waitUntil: "domcontentloaded" });
      const malformed = await page
        .locator("main h1, main h2, main h3, main a, main button")
        .evaluateAll((elements) => {
          const viewportWidth = document.documentElement.clientWidth;

          return elements.flatMap((element) => {
            const rect = element.getBoundingClientRect();
            if (!rect.width || !rect.height) return [];
            if (rect.left >= -1 && rect.right <= viewportWidth + 1) return [];

            return [
              {
                left: Math.round(rect.left * 10) / 10,
                right: Math.round(rect.right * 10) / 10,
                tag: element.tagName,
                text: element.textContent?.trim().slice(0, 80),
              },
            ];
          });
        });

      expect(
        malformed,
        `${route} has clipped critical content at ${width}px`,
      ).toEqual([]);
    }
  }
});

test("hero system inserts remain inside the editorial content grid", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });

  for (const width of widths) {
    await page.setViewportSize({ width, height: 900 });
    await page.goto("/", { waitUntil: "domcontentloaded" });
    await page.evaluate(async () => {
      await Promise.all(
        document
          .getAnimations()
          .map((animation) => animation.finished.catch(() => undefined)),
      );
    });
    const malformed = await page.evaluate(() => {
      const containerElement = document.querySelector(
        ".home-hero .site-container",
      );
      if (!containerElement) return ["Homepage container was not rendered"];
      const container = containerElement.getBoundingClientRect();
      const containerStyles = getComputedStyle(containerElement);
      const contentLeft =
        container.left + Number.parseFloat(containerStyles.paddingLeft);
      const contentRight =
        container.right - Number.parseFloat(containerStyles.paddingRight);

      return Array.from(document.querySelectorAll(".hero-system-insert"))
        .map((element) => {
          const rect = element.getBoundingClientRect();
          return {
            className: element.className,
            left: Math.round(rect.left * 10) / 10,
            right: Math.round(rect.right * 10) / 10,
          };
        })
        .filter(
          ({ left, right }) =>
            left < contentLeft - 1 || right > contentRight + 1,
        );
    });

    expect(
      malformed,
      `Hero system insert escaped the content grid at ${width}px`,
    ).toEqual([]);
  }
});

test("mobile navigation exposes state, handles Escape, and restores focus", async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/", { waitUntil: "domcontentloaded" });
  const trigger = page.getByRole("button", { name: "Open navigation" });
  await expect(trigger).toHaveAttribute("aria-expanded", "false");
  await trigger.click();
  await expect(
    page.getByRole("button", { name: "Close navigation" }),
  ).toHaveAttribute("aria-expanded", "true");
  await expect(page.locator("body")).toHaveCSS("overflow", "hidden");
  await page.keyboard.press("Shift+Tab");
  await expect(
    page
      .locator("#mobile-navigation")
      .getByRole("link", { name: /Start a Project/i }),
  ).toBeFocused();
  await page.keyboard.press("Tab");
  await expect(
    page.locator("#mobile-navigation").getByRole("link", { name: "Services" }),
  ).toBeFocused();
  await page.keyboard.press("Escape");
  await expect(
    page.getByRole("button", { name: "Open navigation" }),
  ).toBeFocused();
  await expect(
    page.getByRole("button", { name: "Open navigation" }),
  ).toHaveAttribute("aria-expanded", "false");

  await trigger.click();
  await page
    .locator("#mobile-navigation")
    .getByRole("link", { name: "Approach" })
    .click();
  await expect(trigger).toHaveAttribute("aria-expanded", "false");
  await expect(page).toHaveURL(/\/approach$/);
});

test("project brief preserves input, focuses errors, and validates telephone conditionally", async ({
  page,
}) => {
  await page.goto("/start-a-project", { waitUntil: "domcontentloaded" });
  await page.getByLabel("Full name").fill("Jordan Lee");
  await page.getByLabel("Preferred contact method").selectOption("telephone");
  await expect(page.getByLabel("Telephone number")).toBeVisible();
  await page.getByRole("button", { name: "Submit project brief" }).click();

  const summary = page.locator(".form-error-summary");
  await expect(summary).toBeFocused();
  await expect(summary).toContainText("Telephone number is required");
  await expect(page.getByLabel("Full name")).toHaveValue("Jordan Lee");
  await expect(page.getByLabel("Telephone number")).toHaveAttribute(
    "aria-invalid",
    "true",
  );
});

test("project brief exposes stable autofill fields and the approved investment labels", async ({
  page,
}) => {
  await page.goto("/start-a-project", { waitUntil: "domcontentloaded" });
  await expect(page.locator("#fullName")).toHaveAttribute("name", "fullName");
  await expect(page.locator("#fullName")).toHaveAttribute(
    "autocomplete",
    "name",
  );
  await expect(page.locator("#workEmail")).toHaveAttribute(
    "autocomplete",
    "email",
  );
  await expect(page.locator("#companyName")).toHaveAttribute(
    "autocomplete",
    "organization",
  );
  await expect(page.locator("#companyWebsite")).toHaveAttribute(
    "autocomplete",
    "url",
  );

  expect(
    await page.locator("#expectedInvestment option").allTextContents(),
  ).toEqual([
    "Select a range",
    "Under $5,000",
    "$5,000–$10,000",
    "$10,000–$25,000",
    "$25,000–$50,000",
    "$50,000+",
    "Need guidance",
  ]);

  await page.getByLabel("Preferred contact method").selectOption("telephone");
  await expect(page.locator("#telephone")).toHaveAttribute("name", "telephone");
  await expect(page.locator("#telephone")).toHaveAttribute(
    "autocomplete",
    "tel",
  );
  await expect(page.locator("#telephone")).toHaveAttribute("required", "");
});

test("a valid project brief is delivered before the success state appears", async ({
  page,
}) => {
  await page.goto("/start-a-project", { waitUntil: "domcontentloaded" });
  await fillProjectBrief(page);
  const deliveryResponse = page.waitForResponse(
    (response) =>
      response.url().endsWith("/api/project-brief") &&
      response.request().method() === "POST",
  );
  await page.getByRole("button", { name: "Submit project brief" }).click();

  expect(await (await deliveryResponse).json()).toEqual({ ok: true });
  const success = page.getByRole("status");
  await expect(success).toBeFocused();
  await expect(success).toContainText(
    "Thank you. We've received your project brief.",
  );
  await expect(success).not.toContainText(/STG-|Reference|HubSpot/);
  await expect(page.locator("iframe")).toHaveCount(0);
});

test("provider failure keeps the form data and focuses the honest error state", async ({
  page,
}) => {
  await page.goto("/start-a-project", { waitUntil: "domcontentloaded" });
  await fillProjectBrief(page);
  await page.locator("#companyName").fill("CRM Failure Co");
  await page.getByRole("button", { name: "Submit project brief" }).click();

  const summary = page.locator(".form-error-summary");
  await expect(summary).toBeFocused();
  await expect(summary).toContainText("could not securely store");
  await expect(page.locator("#companyName")).toHaveValue("CRM Failure Co");
  await expect(page.getByRole("status")).toHaveCount(0);
});

test("server validation rejects invalid and oversized project briefs", async ({
  request,
}) => {
  const invalid = await request.post("/api/project-brief", {
    data: projectBrief({
      workEmail: "not-an-email",
      preferredContact: "telephone",
      telephone: "",
    }),
    headers: { "x-forwarded-for": "203.0.113.41" },
  });
  expect(invalid.status()).toBe(400);
  expect(await invalid.json()).toMatchObject({
    ok: false,
    fieldErrors: {
      workEmail: "Enter a valid work email address.",
      telephone: "Telephone number is required.",
    },
  });

  const oversized = await request.post("/api/project-brief", {
    data: projectBrief({ projectGoal: "x".repeat(33_000) }),
    headers: { "x-forwarded-for": "203.0.113.42" },
  });
  expect(oversized.status()).toBe(413);
});

test("failure logging is reference-only and excludes submitted fields", async () => {
  const routeSource = await readFile(
    new URL("../app/api/project-brief/route.ts", import.meta.url),
    "utf8",
  );
  const providerSource = await readFile(
    new URL("../app/lib/server/hubspot-lead-provider.ts", import.meta.url),
    "utf8",
  );
  const logCalls = routeSource.match(/console\.error\([\s\S]*?\);/g) ?? [];
  expect(logCalls).toHaveLength(4);
  expect(logCalls.join("\n")).toContain("reference");
  for (const submittedField of [
    "workEmail",
    "companyName",
    "projectGoal",
    "telephone",
    "originalBrief",
    "validation.data",
    "submission.brief",
  ]) {
    expect(logCalls.join("\n")).not.toContain(submittedField);
  }
  expect(providerSource).not.toContain("console.");
});

test("the brief enforces the required contract and accepts company name or website", async ({
  request,
}) => {
  const missing = await request.post("/api/project-brief", {
    data: projectBrief({
      fullName: "",
      workEmail: "",
      companyName: "",
      companyWebsite: "",
      serviceNeeded: "",
      projectGoal: "",
      desiredTiming: "",
      expectedInvestment: "",
    }),
    headers: { "x-forwarded-for": "203.0.113.43" },
  });
  expect(missing.status()).toBe(400);
  expect(await missing.json()).toMatchObject({
    fieldErrors: {
      fullName: "Full name is required.",
      workEmail: "Work email is required.",
      companyName: "Enter a company name or website.",
      companyWebsite: "Enter a company name or website.",
      serviceNeeded: "Choose the service needed.",
      projectGoal: "Project goal is required.",
      desiredTiming: "Choose the desired timing.",
      expectedInvestment: "Choose an expected investment range.",
    },
  });

  const websiteOnly = await request.post("/api/project-brief", {
    data: projectBrief({
      workEmail: "website-only@example.com",
      companyName: "",
      companyWebsite: "https://website-only.example",
      existingSystems: "",
      preferredContact: "",
      telephone: "",
      heardAbout: "",
    }),
    headers: {
      "Idempotency-Key": "website-only-key-0001",
      "x-forwarded-for": "203.0.113.44",
    },
  });
  expect(websiteOnly.status()).toBe(201);

  const companyOnly = await request.post("/api/project-brief", {
    data: projectBrief({
      workEmail: "company-only@example.com",
      companyName: "Company Only Co",
      companyWebsite: "",
      existingSystems: "",
      preferredContact: "",
      telephone: "",
      heardAbout: "",
    }),
    headers: {
      "Idempotency-Key": "company-only-key-0001",
      "x-forwarded-for": "203.0.113.45",
    },
  });
  expect(companyOnly.status()).toBe(201);
});

test("all approved investment choices persist without auto-rejection", async ({
  request,
}) => {
  const choices = [
    "under-5k",
    "5k-10k",
    "10k-25k",
    "25k-50k",
    "50k-plus",
    "guidance",
  ];
  for (const [index, expectedInvestment] of choices.entries()) {
    const response = await request.post("/api/project-brief", {
      data: projectBrief({
        workEmail: `investment-${index}@example.com`,
        companyName: `Investment Choice ${index}`,
        companyWebsite: "",
        expectedInvestment,
      }),
      headers: {
        "Idempotency-Key": `investment-choice-key-000${index}`,
        "x-forwarded-for": `203.0.114.${index + 1}`,
      },
    });
    expect(response.status(), expectedInvestment).toBe(201);
  }
});

test("HubSpot receives one durable, associated record and both notifications", async ({
  request,
}) => {
  const response = await request.post("/api/project-brief", {
    data: projectBrief({
      workEmail: "durable-record@example.com",
      companyName: "Durable Record Co",
      companyWebsite: "https://durable-record.example",
      preferredContact: "telephone",
      telephone: "+1 555 010 1212",
    }),
    headers: {
      "Idempotency-Key": "durable-record-key-0001",
      "x-forwarded-for": "203.0.113.46",
    },
  });
  expect(response.status()).toBe(201);
  expect(await response.json()).toEqual({ ok: true });
  const state = await providerState(request);
  const contact = state.contacts.find(
    (candidate) => candidate.properties.email === "durable-record@example.com",
  );
  const company = state.companies.find(
    (candidate) => candidate.properties.domain === "durable-record.example",
  );
  const deal = state.deals.find((candidate) =>
    candidate.properties.dealname?.startsWith("Durable Record Co —"),
  );
  const reference = deal?.properties.strive_reference ?? "";
  expect(reference).toMatch(/^STG-[A-F0-9]{12}$/);
  expect(contact).toBeTruthy();
  expect(company).toBeTruthy();
  expect(deal?.properties).toMatchObject({
    pipeline: "test-intake-pipeline",
    dealstage: "test-new-inquiry",
    hubspot_owner_id: "test-owner",
    strive_service_needed: "Website strategy and development",
    strive_preferred_contact: "Telephone",
    strive_source_page: "/start-a-project",
    strive_notification_status: "complete",
  });
  expect(state.associations).toContain(
    `contact:${contact?.id}->company:${company?.id}`,
  );
  expect(state.associations).toContain(
    `deal:${deal?.id}->contact:${contact?.id}`,
  );
  expect(state.associations).toContain(
    `deal:${deal?.id}->company:${company?.id}`,
  );
  expect(
    state.emails.filter((email) => email.key.startsWith(reference)),
  ).toHaveLength(2);
  const internal = state.emails.find(
    (email) => email.key === `${reference}/internal`,
  );
  const acknowledgment = state.emails.find(
    (email) => email.key === `${reference}/acknowledgment`,
  );
  expect(internal?.text).toContain(reference);
  expect(internal?.text).toContain("HubSpot record:");
  expect(acknowledgment).toMatchObject({
    to: ["durable-record@example.com"],
    subject: "We received your project brief | Strive",
    reply_to: "test-intake@strivetg.com",
  });
  expect(acknowledgment?.text).toContain("Hi Jordan,");
  expect(acknowledgment?.text).toContain("We've received your project brief");
  expect(acknowledgment?.text).toContain("simply reply to this email");
  expect(`${acknowledgment?.subject}\n${acknowledgment?.text}`).not.toMatch(
    /STG-|Reference:|HubSpot|pipeline|dealstage|test-owner|test-intake-pipeline/,
  );
  expect(acknowledgment?.text).not.toContain(projectBrief().projectGoal);
  expect(acknowledgment?.text).not.toContain("+1 555 010 1212");
});

test("normalized email and domain matching reuse contact and company records", async ({
  request,
}) => {
  for (const [index, companyWebsite] of [
    "https://www.matching-records.example/path",
    "https://matching-records.example/other",
  ].entries()) {
    const response = await request.post("/api/project-brief", {
      data: projectBrief({
        workEmail: "Matching@Example.com",
        companyName: "Matching Records Co",
        companyWebsite,
        projectGoal: `Matching inquiry ${index}`,
      }),
      headers: {
        "Idempotency-Key": `matching-records-key-000${index}`,
        "x-forwarded-for": `203.0.113.${47 + index}`,
      },
    });
    expect(response.status()).toBe(201);
  }
  const state = await providerState(request);
  expect(
    state.contacts.filter(
      (candidate) => candidate.properties.email === "matching@example.com",
    ),
  ).toHaveLength(1);
  expect(
    state.companies.filter(
      (candidate) => candidate.properties.domain === "matching-records.example",
    ),
  ).toHaveLength(1);
});

test("partial CRM failure never reports a durable success", async ({
  request,
}) => {
  const response = await request.post("/api/project-brief", {
    data: projectBrief({
      workEmail: "partial-crm-failure@example.com",
      companyName: "CRM Failure Co",
      companyWebsite: "https://partial-crm-failure.example",
    }),
    headers: {
      "Idempotency-Key": "partial-crm-failure-0001",
      "x-forwarded-for": "203.0.113.49",
    },
  });
  expect(response.status()).toBe(503);
  const state = await providerState(request);
  expect(
    state.contacts.some(
      (candidate) =>
        candidate.properties.email === "partial-crm-failure@example.com",
    ),
  ).toBeTruthy();
  expect(
    state.deals.some((candidate) =>
      candidate.properties.dealname?.includes("CRM Failure Co"),
    ),
  ).toBeFalsy();
});

test("notification failure is recorded after durable CRM persistence", async ({
  request,
}) => {
  const response = await request.post("/api/project-brief", {
    data: projectBrief({
      workEmail: "notification-status@example.com",
      companyName: "Notification Failure Co",
      companyWebsite: "",
    }),
    headers: {
      "Idempotency-Key": "notification-failure-0001",
      "x-forwarded-for": "203.0.113.50",
    },
  });
  expect(response.status()).toBe(201);
  expect(await response.json()).toEqual({ ok: true });
  const state = await providerState(request);
  const deal = state.deals.find((candidate) =>
    candidate.properties.dealname?.startsWith("Notification Failure Co —"),
  );
  const reference = deal?.properties.strive_reference ?? "";
  expect(reference).toMatch(/^STG-[A-F0-9]{12}$/);
  expect(deal?.properties.strive_notification_status).toBe("internal_failed");
  expect(
    state.emails.some((email) => email.key === `${reference}/acknowledgment`),
  ).toBeTruthy();
  expect(
    state.emails.some((email) => email.key === `${reference}/internal`),
  ).toBeFalsy();
});

test("provider timeouts fail closed within the configured retry boundary", async ({
  request,
}) => {
  const started = Date.now();
  const response = await request.post("/api/project-brief", {
    data: projectBrief({
      workEmail: "crm-timeout@example.com",
      companyName: "CRM Timeout Co",
      companyWebsite: "",
    }),
    headers: {
      "Idempotency-Key": "crm-timeout-key-0001",
      "x-forwarded-for": "203.0.113.52",
    },
  });
  expect(response.status()).toBe(503);
  expect(Date.now() - started).toBeLessThan(3_000);
});

for (const scenario of [
  {
    companyName: "Acknowledgment Failure Co",
    status: "acknowledgment_failed",
    internalSent: true,
    key: "ack-channel-failure-0001",
    address: "203.0.113.54",
  },
  {
    companyName: "Notification Failure Co Both Channels",
    status: "both_failed",
    internalSent: false,
    key: "both-channel-failure-0001",
    address: "203.0.113.55",
  },
]) {
  test(`${scenario.status} preserves the accepted inquiry for follow-up`, async ({
    request,
  }) => {
    const response = await request.post("/api/project-brief", {
      data: projectBrief({
        workEmail: "ack-failure@example.com",
        companyName: scenario.companyName,
        companyWebsite: "",
      }),
      headers: {
        "Idempotency-Key": scenario.key,
        "x-forwarded-for": scenario.address,
      },
    });
    expect(response.status()).toBe(201);
    expect(await response.json()).toEqual({ ok: true });
    const state = await providerState(request);
    const deal = state.deals.find(
      (candidate) =>
        candidate.properties.dealname ===
        `${scenario.companyName} — Website strategy and development`,
    );
    expect(deal?.properties.strive_notification_status).toBe(scenario.status);
    const reference = deal?.properties.strive_reference ?? "";
    expect(reference).toMatch(/^STG-[A-F0-9]{12}$/);
    expect(
      state.emails.some((email) => email.key === `${reference}/internal`),
    ).toBe(scenario.internalSent);
    expect(
      state.emails.some((email) => email.key === `${reference}/acknowledgment`),
    ).toBeFalsy();
  });
}

test("a production server with missing provider configuration returns 503", async ({
  request,
}) => {
  const response = await request.post(
    "http://127.0.0.1:3102/api/project-brief",
    {
      data: projectBrief({
        workEmail: "disabled-intake@example.com",
        companyName: "Disabled Intake Co",
      }),
      headers: {
        "Idempotency-Key": "disabled-intake-key-0001",
        "x-forwarded-for": "203.0.113.53",
      },
    },
  );
  expect(response.status()).toBe(503);
  expect(await response.json()).toMatchObject({ ok: false });
});

test("successful retries with one idempotency key do not create a second lead", async ({
  request,
}) => {
  const headers = {
    "Idempotency-Key": "duplicate-test-key-0001",
    "x-forwarded-for": "203.0.113.51",
  };
  const first = await request.post("/api/project-brief", {
    data: projectBrief(),
    headers,
  });
  expect(first.status()).toBe(201);
  expect(await first.json()).toEqual({ ok: true });
  const firstState = await providerState(request);

  const second = await request.post("/api/project-brief", {
    data: projectBrief(),
    headers,
  });
  expect(second.status()).toBe(200);
  expect(await second.json()).toEqual({
    ok: true,
    duplicate: true,
  });
  const secondState = await providerState(request);
  expect(secondState.deals).toEqual(firstState.deals);
  expect(secondState.emails).toEqual(firstState.emails);
});

test("an immediate retry reuses an associated inquiry before CRM search indexing", async ({
  request,
}) => {
  const data = projectBrief({
    workEmail: "index-delay@example.com",
    companyName: "Index Delay Co",
    companyWebsite: "https://index-delay.example",
  });
  const headers = {
    "Idempotency-Key": "index-delay-retry-key-0001",
    "x-forwarded-for": "203.0.113.86",
  };
  const first = await request.post("/api/project-brief", { data, headers });
  expect(first.status()).toBe(201);
  expect(await first.json()).toEqual({ ok: true });
  const second = await request.post("/api/project-brief", { data, headers });
  expect(second.status()).toBe(200);
  expect(await second.json()).toEqual({ ok: true, duplicate: true });

  const state = await providerState(request);
  expect(
    state.contacts.filter(
      (record) => record.properties.email === data.workEmail,
    ),
  ).toHaveLength(1);
  expect(
    state.companies.filter(
      (record) => record.properties.domain === "index-delay.example",
    ),
  ).toHaveLength(1);
  const deals = state.deals.filter((record) =>
    record.properties.dealname?.startsWith("Index Delay Co —"),
  );
  expect(deals).toHaveLength(1);
  expect(
    state.emails.filter((email) =>
      email.key.startsWith(deals[0]?.properties.strive_reference ?? "missing"),
    ),
  ).toHaveLength(2);
});

test("project brief submissions are rate limited", async ({ request }) => {
  for (let index = 0; index < 5; index += 1) {
    const response = await request.post("/api/project-brief", {
      data: projectBrief({ companyName: `Rate Test ${index}` }),
      headers: {
        "Idempotency-Key": `rate-limit-test-key-000${index}`,
        "x-forwarded-for": "203.0.113.61",
      },
    });
    expect(response.status(), `attempt ${index + 1}`).toBe(201);
  }

  const limited = await request.post("/api/project-brief", {
    data: projectBrief({ companyName: "Rate Test Limited" }),
    headers: {
      "Idempotency-Key": "rate-limit-test-key-9999",
      "x-forwarded-for": "203.0.113.61",
    },
  });
  expect(limited.status()).toBe(429);
  expect(limited.headers()["retry-after"]).toBeTruthy();
});

test("provider failure produces an honest error instead of a false success", async ({
  request,
}) => {
  const response = await request.post("/api/project-brief", {
    data: projectBrief({ companyName: "CRM Failure Co" }),
    headers: {
      "Idempotency-Key": "provider-failure-key-0001",
      "x-forwarded-for": "203.0.113.71",
    },
  });
  expect(response.status()).toBe(503);
  expect(await response.json()).toMatchObject({
    ok: false,
    message: expect.stringContaining("could not securely store"),
  });
});

test("cross-origin and honeypot submissions are contained", async ({
  request,
}) => {
  const crossOrigin = await request.post("/api/project-brief", {
    data: projectBrief(),
    headers: {
      Origin: "https://attacker.example",
      "x-forwarded-host": "attacker.example",
      "x-forwarded-for": "203.0.113.75",
    },
  });
  expect(crossOrigin.status()).toBe(403);

  const headers = {
    "Idempotency-Key": "honeypot-test-key-0001",
    "x-forwarded-for": "203.0.113.76",
  };
  const trapped = await request.post("/api/project-brief", {
    data: projectBrief({ companyFax: "filled by bot" }),
    headers,
  });
  expect(trapped.status()).toBe(200);
  expect(await trapped.json()).toEqual({ ok: true });

  const legitimate = await request.post("/api/project-brief", {
    data: projectBrief(),
    headers,
  });
  expect(legitimate.status()).toBe(201);
});

test("form-encoded submissions provide a no-JavaScript success fallback", async ({
  request,
}) => {
  const response = await request.post("/api/project-brief", {
    form: {
      ...projectBrief(),
      idempotencyKey: "no-javascript-key-0001",
    },
    headers: {
      Accept: "text/html",
      "x-forwarded-for": "203.0.113.81",
    },
    maxRedirects: 0,
  });
  expect(response.status()).toBe(303);
  const location = response.headers().location;
  if (!location) throw new Error("Expected a confirmation redirect.");
  const destination = new URL(location, response.url());
  expect(destination.origin).toBe(new URL(response.url()).origin);
  expect(destination.pathname).toBe("/start-a-project");
  expect(destination.search).toBe("?submission=received");
  const confirmation = await request.get(destination.toString());
  expect(await confirmation.text()).not.toMatch(/STG-|submission-reference/);
});

test("the browser can submit without JavaScript and shows a clean confirmation", async ({
  browser,
  baseURL,
}) => {
  const context = await browser.newContext({
    baseURL:
      baseURL === "http://127.0.0.1:3100" ? "https://127.0.0.1:3143" : baseURL,
    javaScriptEnabled: false,
    ignoreHTTPSErrors: true,
  });
  try {
    const page = await context.newPage();
    const response = await page.goto("/start-a-project");
    expect(response?.headers()["content-security-policy"]).toContain(
      "upgrade-insecure-requests",
    );
    expect(response?.headers()["content-security-policy"]).toContain(
      "form-action 'self'",
    );
    await fillProjectBrief(page);
    const submit = page.getByRole("button", { name: "Submit project brief" });
    await submit.focus();
    await submit.press("Enter");
    await expect(page).toHaveURL(/\/start-a-project\?submission=received$/);
    await expect(page.getByRole("status")).toContainText(
      "Thank you. We've received your project brief.",
    );
    await expect(page.locator("main")).not.toContainText(
      /STG-|Reference|HubSpot/,
    );

    await page.goto(
      "/start-a-project?submission=received&reference=STG-INTERNAL-ONLY",
    );
    await expect(page.locator("main")).not.toContainText(
      /STG-|Reference|HubSpot/,
    );
  } finally {
    await context.close();
  }
});

test("responses include the defensive browser policy headers", async ({
  request,
}) => {
  const response = await request.get("/");
  const headers = response.headers();

  expect(headers["content-security-policy"]).toContain("object-src 'none'");
  expect(headers["content-security-policy"]).toContain(
    "script-src-attr 'none'",
  );
  expect(headers["content-security-policy"]).toContain("frame-src 'none'");
  expect(headers["x-content-type-options"]).toBe("nosniff");
  expect(headers["x-frame-options"]).toBe("DENY");
  expect(headers["cross-origin-opener-policy"]).toBe("same-origin");
  expect(headers["cross-origin-resource-policy"]).toBe("same-origin");
  expect(headers["referrer-policy"]).toBe("strict-origin-when-cross-origin");
});

test("reduced motion disables nonessential motion and no autoplay media remains", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/", { waitUntil: "domcontentloaded" });
  const duration = await page
    .locator(".home-hero .button")
    .first()
    .evaluate((element) => getComputedStyle(element).transitionDuration);
  expect(["0s", "0.00001s", "1e-05s"]).toContain(duration);
  await expect(
    page.locator("[data-reveal]:not([data-visible='true'])"),
  ).toHaveCount(0);
  await expect(page.locator("video[autoplay], audio[autoplay]")).toHaveCount(0);
});
