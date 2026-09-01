"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function MotionObserver() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    root.classList.add("motion-ready");

    const revealImmediately = () => {
      document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((item) => {
        item.dataset.visible = "true";
      });
    };

    if (reduceMotion) {
      revealImmediately();
      return () => root.classList.remove("motion-ready");
    }

    const items = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const pending = new Set(items);
    let frame = 0;

    const revealVisible = () => {
      frame = 0;
      const revealLine = window.innerHeight * 0.92;
      pending.forEach((item) => {
        const bounds = item.getBoundingClientRect();
        if (bounds.top > revealLine || bounds.bottom < 0) return;
        item.dataset.visible = "true";
        pending.delete(item);
      });
    };

    const scheduleCheck = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(revealVisible);
    };

    scheduleCheck();
    window.addEventListener("scroll", scheduleCheck, { passive: true });
    window.addEventListener("resize", scheduleCheck);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", scheduleCheck);
      window.removeEventListener("resize", scheduleCheck);
      root.classList.remove("motion-ready");
    };
  }, [pathname]);

  return null;
}
