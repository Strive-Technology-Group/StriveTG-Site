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
    .locator(".home-hero-copy .button")
    .first()
    .evaluate((element) => getComputedStyle(element).transitionDuration);
  expect(["0s", "0.00001s", "1e-05s"]).toContain(duration);
  await expect(page.locator("video[autoplay], audio[autoplay]")).toHaveCount(0);
});
