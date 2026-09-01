import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

const routes = [
  "/",
  "/services",
  "/work",
  "/about",
  "/faq",
  "/contact",
  "/consultation",
  "/privacy",
  "/terms",
];
const widths = [1440, 1024, 768, 390, 375];

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
    canvas: "#fafffa",
    ink: "#121613",
    trueInk: "#000000",
    dark: "#232924",
    muted: "#516254",
    inverse: "#c8d2c8",
    signal: "#2bee4b",
    support: "#93b799",
    echo: "#c4e4c9",
  });
  expect(evidence.surfaces).toEqual({
    body: "rgb(250, 255, 250)",
    ink: "rgb(18, 22, 19)",
    dark: "rgb(35, 41, 36)",
    signal: "rgb(43, 238, 75)",
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

test("editorial reveals activate without hiding skipped content", async ({
  page,
}) => {
  await page.goto("/", { waitUntil: "domcontentloaded" });
  const servicesHeading = page.locator(".services-editorial h2");
  await servicesHeading.scrollIntoViewIfNeeded();
  await expect(servicesHeading).toHaveAttribute("data-visible", "true");
  await expect(servicesHeading).toHaveCSS("clip-path", "inset(0px)");
});

test("the primary mobile action remains in the first viewport", async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/", { waitUntil: "domcontentloaded" });
  const bounds = await page
    .locator(".home-hero .button-primary")
    .boundingBox();
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
  await page.keyboard.press("Escape");
  await expect(
    page.getByRole("button", { name: "Open navigation" }),
  ).toBeFocused();
  await expect(
    page.getByRole("button", { name: "Open navigation" }),
  ).toHaveAttribute("aria-expanded", "false");
});

test("Calendly is click-to-load and the dialog is keyboard operable", async ({
  page,
}) => {
  await page.goto("/consultation", { waitUntil: "domcontentloaded" });
  await expect(page.locator("iframe")).toHaveCount(0);
  const trigger = page.getByRole("button", { name: /Open secure booking/i });
  await trigger.click();
  const dialog = page.getByRole("dialog", { name: "Book a fit call" });
  await expect(dialog).toBeVisible();
  await expect(page.locator("body")).toHaveCSS("overflow", "hidden");
  const frame = dialog.locator("iframe");
  await expect(frame).toHaveCount(1);
  await expect(frame).toHaveAttribute(
    "src",
    /calendly\.com\/contact-strivetg\/30min/,
  );
  await expect(frame).not.toHaveAttribute("src", /hide_gdpr_banner/);
  await page.evaluate(() =>
    window.dispatchEvent(
      new MessageEvent("message", {
        origin: "https://calendly.com",
        data: { event: "calendly.event_scheduled" },
      }),
    ),
  );
  await expect(page.getByRole("status")).toContainText(
    "Your call is scheduled",
  );
  await page.getByRole("button", { name: "Done" }).click();
  await expect(trigger).toBeFocused();

  await trigger.click();
  await page.keyboard.press("Escape");
  await expect(dialog).toHaveCount(0);
  await expect(trigger).toBeFocused();
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
  await expect(page.locator("[data-reveal]:not([data-visible='true'])")).toHaveCount(
    0,
  );
  await expect(page.locator("video[autoplay], audio[autoplay]")).toHaveCount(0);
});
