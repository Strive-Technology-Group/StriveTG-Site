"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function MotionObserver() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    const motionPreference = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    root.classList.add("motion-ready");

    const revealImmediately = () => {
      document
        .querySelectorAll<HTMLElement>("[data-reveal]")
        .forEach((item) => {
          item.dataset.visible = "true";
        });
    };

    if (motionPreference.matches) {
      revealImmediately();
      return () => root.classList.remove("motion-ready");
    }

    const items = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          (entry.target as HTMLElement).dataset.visible = "true";
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: "0px 0px -8%", threshold: 0 },
    );
    items.forEach((item) => observer.observe(item));

    const onMotionPreferenceChange = (event: MediaQueryListEvent) => {
      if (!event.matches) return;
      observer.disconnect();
      revealImmediately();
    };
    motionPreference.addEventListener("change", onMotionPreferenceChange);

    return () => {
      observer.disconnect();
      motionPreference.removeEventListener("change", onMotionPreferenceChange);
      root.classList.remove("motion-ready");
    };
  }, [pathname]);

  return null;
}
