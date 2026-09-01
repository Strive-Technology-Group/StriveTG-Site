"use client";

import { useEffect, useRef, useState } from "react";
import { company } from "../lib/company";

const focusableSelector =
  "a[href], button:not([disabled]), iframe, [tabindex]:not([tabindex='-1'])";

export function CalendlyDialog() {
  const [open, setOpen] = useState(false);
  const [scheduled, setScheduled] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  const close = () => setOpen(false);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    const trigger = triggerRef.current;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        close();
        return;
      }
      if (event.key !== "Tab" || !dialogRef.current) return;
      const focusable = Array.from(
        dialogRef.current.querySelectorAll<HTMLElement>(focusableSelector),
      );
      if (focusable.length === 0) return;
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

    const onMessage = (event: MessageEvent) => {
      if (event.origin !== "https://calendly.com") return;
      const data = event.data as { event?: string } | undefined;
      if (data?.event === "calendly.event_scheduled") setScheduled(true);
    };

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("message", onMessage);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("message", onMessage);
      trigger?.focus();
    };
  }, [open]);

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        className="button button-primary"
        onClick={() => {
          setScheduled(false);
          setOpen(true);
        }}
      >
        <span>Open secure booking</span>
        <span aria-hidden="true">↗</span>
      </button>
      {open && (
        <div
          className="dialog-backdrop"
          role="presentation"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) close();
          }}
        >
          <div
            ref={dialogRef}
            className="booking-dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="booking-title"
            aria-describedby="booking-description"
          >
            <div className="booking-dialog-header">
              <div>
                <p className="eyebrow">Third-party booking</p>
                <h2 id="booking-title">Book a fit call</h2>
                <p id="booking-description">
                  Calendly loads only after you open this dialog. Its privacy
                  and cookie practices apply inside the booking frame.
                </p>
              </div>
              <button
                ref={closeRef}
                type="button"
                className="dialog-close"
                onClick={close}
                aria-label="Close booking dialog"
              >
                ×
              </button>
            </div>
            {scheduled ? (
              <div className="booking-success" role="status" aria-live="polite">
                <span aria-hidden="true">✓</span>
                <h3>Your call is scheduled.</h3>
                <p>
                  Calendly should send the calendar invitation and meeting
                  details. Bring the business problem, current constraints, and
                  any useful context to the call.
                </p>
                <button
                  type="button"
                  className="button button-primary"
                  onClick={close}
                >
                  Done
                </button>
              </div>
            ) : (
              <iframe
                src={`${company.calendlyUrl}?background_color=f8fafc&text_color=0a2540&primary_color=0e9384`}
                title="Schedule a fit call with Strive Technology Group"
                className="calendly-frame"
                loading="lazy"
                allow="payment"
              />
            )}
            <p className="booking-fallback">
              If the scheduler does not load,{" "}
              <a href={company.calendlyUrl}>open Calendly in a new page</a>.
            </p>
          </div>
        </div>
      )}
    </>
  );
}
