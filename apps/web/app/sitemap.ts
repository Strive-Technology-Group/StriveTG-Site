import type { MetadataRoute } from "next";
import { company, publicRoutes } from "./lib/company";

export default function sitemap(): MetadataRoute.Sitemap {
  return publicRoutes.map((route) => ({
    url: new URL(route, company.url).toString(),
    lastModified: new Date("2026-11-03"),
    changeFrequency:
      route === "/" || route === "/research" ? "monthly" : "yearly",
    priority:
      route === "/"
        ? 1
        : route === "/start-a-project"
          ? 0.9
          : route === "/services" ||
              route === "/approach" ||
              route === "/research"
            ? 0.8
            : 0.6,
  }));
}
