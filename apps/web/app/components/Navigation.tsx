"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Logo } from "./Logo";
import { navigation } from "../lib/company";

export function Navigation() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const firstLinkRef = useRef<HTMLAnchorElement>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);

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
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
      menuButton?.focus();
    };
  }, [open]);

  const isCurrent = (href: string) =>
    href !== "/#how-we-work" && pathname === href;

  return (
    <header className="site-header">
      <div className="site-container header-inner">
        <Logo surface="dark" compact />
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
        <Link href="/consultation" className="header-cta">
          Book a Fit Call
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
            >
              <span>{item.label}</span>
              <span aria-hidden="true">↗</span>
            </Link>
          ))}
          <Link href="/consultation" className="mobile-navigation-cta">
            Book a Fit Call
          </Link>
        </nav>
      </div>
    </header>
  );
}
