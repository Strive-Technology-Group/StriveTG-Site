import Link from "next/link";
import { Button } from "./Button";
import { Container } from "./Container";
import { Logo } from "./Logo";
import { company, navigation } from "../lib/company";

export function Footer() {
  return (
    <footer className="site-footer">
      <section
        className="consultation-band"
        aria-labelledby="consultation-band-title"
      >
        <Container>
          <div className="consultation-band-grid">
            <p className="micro-label">
              <span aria-hidden="true">10</span> Project brief
            </p>
            <div>
              <h2 id="consultation-band-title" data-reveal="type">
                Tell us what you want to improve.
              </h2>
            </div>
            <div className="consultation-band-side">
              <p>
                Share what needs to change, the current system, and the result
                you want. Strive will review the context before recommending a
                next step.
              </p>
              <div className="hero-actions">
                <Button href="/start-a-project">Start a Project</Button>
                {company.telephone ? (
                  <Button href={company.telephone.href} variant="text">
                    Prefer to talk? Call Strive
                  </Button>
                ) : (
                  <Button href={`mailto:${company.email}`} variant="text">
                    Email Strive
                  </Button>
                )}
              </div>
            </div>
          </div>
        </Container>
      </section>
      <div className="editorial-footer">
        <Container>
          <div className="footer-lead">
            <div>
              <p className="micro-label micro-label-inverse">
                Strive Technology Group
              </p>
              <h2 data-reveal="type">Websites. Reporting. Automation.</h2>
            </div>
            <p>
              Systems for growing small and midsize service businesses, built
              with clear scope and a usable handoff.
            </p>
          </div>
          <div className="footer-grid">
            <div className="footer-brand">
              <Logo surface="dark" />
              <p>{company.positioning}</p>
            </div>
            <div>
              <p className="footer-heading">Explore</p>
              <ul>
                {navigation.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href}>{item.label}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="footer-heading">Contact</p>
              <a href={`mailto:${company.email}`}>{company.email}</a>
              {company.telephone && (
                <>
                  <a href={company.telephone.href}>
                    {company.telephone.display}
                  </a>
                  {company.telephone.businessHours && (
                    <p className="footer-note">
                      {company.telephone.businessHours}
                    </p>
                  )}
                </>
              )}
              <p className="footer-note">
                Start with the project brief. Email remains available as an
                accessible fallback.
              </p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>
              © {new Date().getFullYear()} {company.name}
            </p>
            <div>
              <Link href="/privacy">Privacy</Link>
              <Link href="/terms">Terms</Link>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}
