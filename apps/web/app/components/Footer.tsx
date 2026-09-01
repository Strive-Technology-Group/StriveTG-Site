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
              <span aria-hidden="true">10</span> A practical first step
            </p>
            <div>
              <h2 id="consultation-band-title">
                Bring the system that is getting in the way.
              </h2>
            </div>
            <div className="consultation-band-side">
              <p>
                A fit call is a focused conversation about the business problem,
                what exists today, and whether there is a useful next step.
              </p>
              <div className="hero-actions">
                <Button href="/consultation">Book a Fit Call</Button>
                <Button href={`mailto:${company.email}`} variant="text">
                  Email Strive
                </Button>
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
              <h2>Web / data / automation</h2>
            </div>
            <p>
              Systems for growing service businesses, built with clear scope and
              a usable handoff.
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
                <li>
                  <Link href="/faq">FAQ</Link>
                </li>
              </ul>
            </div>
            <div>
              <p className="footer-heading">Contact</p>
              <a href={`mailto:${company.email}`}>{company.email}</a>
              <p className="footer-note">
                No contact form, tracking pixel, or hidden chat widget is used
                on this site.
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
