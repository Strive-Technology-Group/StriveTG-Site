import type { MetadataRoute } from "next";
import { company, publicRoutes } from "./lib/company";

export default function sitemap(): MetadataRoute.Sitemap {
  return publicRoutes.map((route) => ({
    url: new URL(route, company.url).toString(),
    lastModified: new Date("2026-08-31"),
    changeFrequency: route === "/" ? "monthly" : "yearly",
    priority:
      route === "/"
        ? 1
        : route === "/services" || route === "/work"
          ? 0.8
          : 0.6,
  }));
}
