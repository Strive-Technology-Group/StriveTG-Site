"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Logo } from "./Logo";
import { navigation } from "../lib/company";

const focusableSelector =
  "a[href], button:not([disabled]), [tabindex]:not([tabindex='-1'])";

export function Navigation() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const firstLinkRef = useRef<HTMLAnchorElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const mobileNavigationRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    const menuButton = menuButtonRef.current;
    document.body.style.overflow = "hidden";
    firstLinkRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setOpen(false);
        return;
      }
      if (event.key !== "Tab" || !mobileNavigationRef.current) return;

      const focusable = Array.from(
        mobileNavigationRef.current.querySelectorAll<HTMLElement>(
          focusableSelector,
        ),
      );
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (!first || !last) return;

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
      menuButton?.focus();
    };
  }, [open]);

  const isCurrent = (href: string) => pathname === href;

  return (
    <header className="site-header">
      <div className="site-container header-inner">
        <Logo surface="light" compact />
        <nav aria-label="Primary" className="desktop-navigation">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={isCurrent(item.href) ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link href="/start-a-project" className="header-cta">
          Start a Project <span aria-hidden="true">↗</span>
        </Link>
        <button
          ref={menuButtonRef}
          type="button"
          className="menu-button"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((value) => !value)}
        >
          <span
            aria-hidden="true"
            className={open ? "menu-icon menu-icon-open" : "menu-icon"}
          >
            <i />
            <i />
          </span>
        </button>
      </div>
      <div
        ref={mobileNavigationRef}
        id="mobile-navigation"
        className={open ? "mobile-navigation is-open" : "mobile-navigation"}
        hidden={!open}
      >
        <nav aria-label="Mobile">
          {navigation.map((item, index) => (
            <Link
              key={item.href}
              href={item.href}
              ref={index === 0 ? firstLinkRef : undefined}
              aria-current={isCurrent(item.href) ? "page" : undefined}
              onClick={() => setOpen(false)}
            >
              <span>{item.label}</span>
              <span aria-hidden="true">↗</span>
            </Link>
          ))}
          <Link
            href="/start-a-project"
            className="mobile-navigation-cta"
            onClick={() => setOpen(false)}
          >
            Start a Project <span aria-hidden="true">↗</span>
          </Link>
        </nav>
      </div>
    </header>
  );
}
