"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type FormEvent } from "react";
import {
  contactMethodOptions,
  investmentOptions,
  projectBriefLimits,
  serviceNeededOptions,
  timingOptions,
  validateProjectBrief,
  type ProjectBriefField,
} from "../lib/lead-intake";

type FieldErrors = Partial<Record<ProjectBriefField, string>>;

type SubmissionState =
  | { name: "ready" }
  | { name: "submitting" }
  | { name: "error"; message: string }
  | { name: "success" };

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p className="field-error" id={id}>
      {message}
    </p>
  );
}

function describedBy(helpId: string, errorId: string, error?: string) {
  return error ? `${helpId} ${errorId}` : helpId;
}

function createIdempotencyKey() {
  if (typeof crypto !== "undefined" && "randomUUID" in crypto) {
    return crypto.randomUUID();
  }
  return `brief_${Date.now()}_${Math.random().toString(36).slice(2)}`;
}

export function ProjectBriefForm({
  initialIdempotencyKey,
}: {
  initialIdempotencyKey: string;
}) {
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [preferredContact, setPreferredContact] = useState("");
  const [submission, setSubmission] = useState<SubmissionState>({
    name: "ready",
  });
  const formRef = useRef<HTMLFormElement>(null);
  const preferredContactRef = useRef<HTMLSelectElement>(null);
  const errorSummaryRef = useRef<HTMLDivElement>(null);
  const successRef = useRef<HTMLDivElement>(null);
  const idempotencyKey = useRef(initialIdempotencyKey);

  useEffect(() => {
    // Preserve a selection made in the server-rendered form before hydration.
    const selected = preferredContactRef.current?.value;
    if (selected) setPreferredContact(selected);
  }, []);

  useEffect(() => {
    if (submission.name === "error") errorSummaryRef.current?.focus();
  }, [submission]);

  useEffect(() => {
    if (submission.name === "success") successRef.current?.focus();
  }, [submission]);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submission.name === "submitting") return;

    const form = event.currentTarget;
    const payload = Object.fromEntries(new FormData(form));
    const validation = validateProjectBrief(payload);
    if (!validation.success) {
      setFieldErrors(validation.errors);
      setSubmission({
        name: "error",
        message: "Review the highlighted fields and submit the brief again.",
      });
      return;
    }

    setFieldErrors({});
    setSubmission({ name: "submitting" });
    if (!idempotencyKey.current) {
      idempotencyKey.current = createIdempotencyKey();
    }

    try {
      const response = await fetch("/api/project-brief", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Idempotency-Key": idempotencyKey.current,
        },
        body: JSON.stringify({
          ...payload,
          idempotencyKey: idempotencyKey.current,
        }),
      });
      const result = (await response.json().catch(() => null)) as {
        ok?: unknown;
        message?: unknown;
        fieldErrors?: unknown;
      } | null;

      if (response.ok && result?.ok === true) {
        setSubmission({ name: "success" });
        return;
      }

      const serverErrors =
        result?.fieldErrors && typeof result.fieldErrors === "object"
          ? (result.fieldErrors as FieldErrors)
          : {};
      setFieldErrors(serverErrors);
      setSubmission({
        name: "error",
        message:
          typeof result?.message === "string"
            ? result.message
            : "The project brief could not be delivered. Please try again or email Strive.",
      });
    } catch {
      setSubmission({
        name: "error",
        message:
          "The project brief could not be delivered. Check your connection or email Strive instead.",
      });
    }
  }

  if (submission.name === "success") {
    return (
      <div
        ref={successRef}
        className="project-brief-success"
        role="status"
        tabIndex={-1}
      >
        <p className="micro-label">
          <span aria-hidden="true">✓</span> Brief received
        </p>
        <h2>Thank you. We&apos;ve received your project brief.</h2>
        <p>
          We&apos;ll review what you shared and contact you if we need more
          information or to discuss next steps.
        </p>
      </div>
    );
  }

  const errorEntries = Object.entries(fieldErrors) as [
    ProjectBriefField,
    string,
  ][];

  return (
    <form
      ref={formRef}
      className="project-brief-form"
      action="/api/project-brief"
      method="post"
      noValidate
      aria-busy={submission.name === "submitting"}
      onSubmit={submit}
    >
      <input type="hidden" name="sourcePage" value="/start-a-project" />
      <input
        type="hidden"
        name="idempotencyKey"
        value={initialIdempotencyKey}
      />
      <div className="form-honeypot" aria-hidden="true">
        <label htmlFor="companyFax">Leave this field empty</label>
        <input
          id="companyFax"
          name="companyFax"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {(errorEntries.length > 0 || submission.name === "error") && (
        <div
          ref={errorSummaryRef}
          className="form-error-summary"
          role="alert"
          tabIndex={-1}
        >
          <h2>Review the project brief.</h2>
          {submission.name === "error" && <p>{submission.message}</p>}
          {errorEntries.length > 0 && (
            <ul>
              {errorEntries.map(([field, message]) => (
                <li key={field}>
                  <a href={`#${field}`}>{message}</a>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}

      <fieldset className="project-brief-section">
        <legend>
          <span>01</span>
          <strong>About you</strong>
        </legend>
        <div className="form-grid form-grid-two">
          <div className="form-field">
            <label htmlFor="fullName">Full name</label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              autoComplete="name"
              maxLength={projectBriefLimits.fullName}
              required
              aria-invalid={Boolean(fieldErrors.fullName)}
              aria-describedby={
                fieldErrors.fullName ? "fullName-error" : undefined
              }
            />
            <FieldError id="fullName-error" message={fieldErrors.fullName} />
          </div>
          <div className="form-field">
            <label htmlFor="workEmail">Work email</label>
            <input
              id="workEmail"
              name="workEmail"
              type="email"
              inputMode="email"
              autoComplete="email"
              maxLength={projectBriefLimits.workEmail}
              required
              aria-invalid={Boolean(fieldErrors.workEmail)}
              aria-describedby={
                fieldErrors.workEmail ? "workEmail-error" : undefined
              }
            />
            <FieldError id="workEmail-error" message={fieldErrors.workEmail} />
          </div>
          <div className="form-field">
            <label htmlFor="companyName">Company name</label>
            <p id="company-identity-help" className="field-help">
              Provide a company name, a company website, or both.
            </p>
            <input
              id="companyName"
              name="companyName"
              type="text"
              autoComplete="organization"
              maxLength={projectBriefLimits.companyName}
              aria-invalid={Boolean(fieldErrors.companyName)}
              aria-describedby={describedBy(
                "company-identity-help",
                "companyName-error",
                fieldErrors.companyName,
              )}
            />
            <FieldError
              id="companyName-error"
              message={fieldErrors.companyName}
            />
          </div>
          <div className="form-field">
            <label htmlFor="companyWebsite">Company website</label>
            <input
              id="companyWebsite"
              name="companyWebsite"
              type="url"
              inputMode="url"
              autoComplete="url"
              placeholder="https://"
              maxLength={projectBriefLimits.companyWebsite}
              aria-invalid={Boolean(fieldErrors.companyWebsite)}
              aria-describedby={describedBy(
                "company-identity-help",
                "companyWebsite-error",
                fieldErrors.companyWebsite,
              )}
            />
            <FieldError
              id="companyWebsite-error"
              message={fieldErrors.companyWebsite}
            />
          </div>
        </div>
      </fieldset>

      <fieldset className="project-brief-section">
        <legend>
          <span>02</span>
          <strong>The work</strong>
        </legend>
        <div className="form-grid">
          <div className="form-field">
            <label htmlFor="serviceNeeded">Service needed</label>
            <select
              id="serviceNeeded"
              name="serviceNeeded"
              defaultValue=""
              required
              aria-invalid={Boolean(fieldErrors.serviceNeeded)}
              aria-describedby={
                fieldErrors.serviceNeeded ? "serviceNeeded-error" : undefined
              }
            >
              <option value="" disabled>
                Select the closest match
              </option>
              {serviceNeededOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <FieldError
              id="serviceNeeded-error"
              message={fieldErrors.serviceNeeded}
            />
          </div>
          <div className="form-field">
            <label htmlFor="projectGoal">
              What are you trying to accomplish?
            </label>
            <p id="projectGoal-help" className="field-help">
              Explain what is happening now, what needs to change, and what a
              useful outcome would make possible.
            </p>
            <textarea
              id="projectGoal"
              name="projectGoal"
              rows={6}
              maxLength={projectBriefLimits.projectGoal}
              required
              aria-invalid={Boolean(fieldErrors.projectGoal)}
              aria-describedby={describedBy(
                "projectGoal-help",
                "projectGoal-error",
                fieldErrors.projectGoal,
              )}
            />
            <FieldError
              id="projectGoal-error"
              message={fieldErrors.projectGoal}
            />
          </div>
          <div className="form-field">
            <label htmlFor="existingSystems">
              Existing systems or platforms <span>Optional</span>
            </label>
            <p id="existingSystems-help" className="field-help">
              Name the website platform, reporting tools, CRM, spreadsheets, or
              workflow systems involved.
            </p>
            <textarea
              id="existingSystems"
              name="existingSystems"
              rows={3}
              maxLength={projectBriefLimits.existingSystems}
              aria-invalid={Boolean(fieldErrors.existingSystems)}
              aria-describedby={describedBy(
                "existingSystems-help",
                "existingSystems-error",
                fieldErrors.existingSystems,
              )}
            />
            <FieldError
              id="existingSystems-error"
              message={fieldErrors.existingSystems}
            />
          </div>
        </div>
      </fieldset>

      <fieldset className="project-brief-section">
        <legend>
          <span>03</span>
          <strong>Timing and fit</strong>
        </legend>
        <div className="form-grid form-grid-two">
          <div className="form-field">
            <label htmlFor="desiredTiming">Desired timing</label>
            <select
              id="desiredTiming"
              name="desiredTiming"
              defaultValue=""
              required
              aria-invalid={Boolean(fieldErrors.desiredTiming)}
              aria-describedby={
                fieldErrors.desiredTiming ? "desiredTiming-error" : undefined
              }
            >
              <option value="" disabled>
                Select a timing window
              </option>
              {timingOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <FieldError
              id="desiredTiming-error"
              message={fieldErrors.desiredTiming}
            />
          </div>
          <div className="form-field">
            <label htmlFor="expectedInvestment">
              Expected investment range
            </label>
            <select
              id="expectedInvestment"
              name="expectedInvestment"
              defaultValue=""
              required
              aria-invalid={Boolean(fieldErrors.expectedInvestment)}
              aria-describedby={
                fieldErrors.expectedInvestment
                  ? "expectedInvestment-error"
                  : undefined
              }
            >
              <option value="" disabled>
                Select a range
              </option>
              {investmentOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <FieldError
              id="expectedInvestment-error"
              message={fieldErrors.expectedInvestment}
            />
          </div>
          <div className="form-field">
            <label htmlFor="preferredContact">
              Preferred contact method <span>Optional</span>
            </label>
            <select
              ref={preferredContactRef}
              id="preferredContact"
              name="preferredContact"
              defaultValue=""
              onChange={(event) => setPreferredContact(event.target.value)}
              aria-invalid={Boolean(fieldErrors.preferredContact)}
              aria-describedby={
                fieldErrors.preferredContact
                  ? "preferredContact-error"
                  : undefined
              }
            >
              <option value="">No preference</option>
              {contactMethodOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <FieldError
              id="preferredContact-error"
              message={fieldErrors.preferredContact}
            />
          </div>
          {preferredContact === "telephone" && (
            <div className="form-field">
              <label htmlFor="telephone">Telephone number</label>
              <input
                id="telephone"
                name="telephone"
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                maxLength={projectBriefLimits.telephone}
                required
                aria-invalid={Boolean(fieldErrors.telephone)}
                aria-describedby={
                  fieldErrors.telephone ? "telephone-error" : undefined
                }
              />
              <FieldError
                id="telephone-error"
                message={fieldErrors.telephone}
              />
            </div>
          )}
          <noscript>
            <div className="form-field">
              <label htmlFor="telephone-fallback">Telephone number</label>
              <p className="field-help" id="telephone-fallback-help">
                Include a number if you chose telephone for follow-up.
              </p>
              <input
                id="telephone-fallback"
                name="telephone"
                type="tel"
                inputMode="tel"
                autoComplete="tel"
                maxLength={projectBriefLimits.telephone}
                aria-describedby="telephone-fallback-help"
              />
            </div>
          </noscript>
          <div className="form-field form-field-wide">
            <label htmlFor="heardAbout">
              How did you hear about Strive? <span>Optional</span>
            </label>
            <input
              id="heardAbout"
              name="heardAbout"
              type="text"
              maxLength={projectBriefLimits.heardAbout}
              aria-invalid={Boolean(fieldErrors.heardAbout)}
              aria-describedby={
                fieldErrors.heardAbout ? "heardAbout-error" : undefined
              }
            />
            <FieldError
              id="heardAbout-error"
              message={fieldErrors.heardAbout}
            />
          </div>
        </div>
      </fieldset>

      <div className="project-brief-submit">
        <div>
          <p className="sensitive-data-warning">
            Do not submit passwords, credentials, regulated data, customer
            records, payment details, or other sensitive information.
          </p>
          <p className="form-privacy-note">
            By submitting, you ask Strive to review and respond to this project
            inquiry. Read the <Link href="/privacy">Privacy page</Link>.
          </p>
        </div>
        <button
          className="button button-primary project-brief-button"
          type="submit"
          disabled={submission.name === "submitting"}
        >
          <span>
            {submission.name === "submitting"
              ? "Submitting securely…"
              : "Submit project brief"}
          </span>
          <span aria-hidden="true">→</span>
        </button>
      </div>
    </form>
  );
}
