import Link from "next/link";
import { Button } from "./Button";
import { Container } from "./Container";
import { Logo } from "./Logo";
import { company, navigation } from "../lib/company";

export function Footer() {
  return (
    <footer className="site-footer">
      <Container>
        <div className="footer-lead">
          <div>
            <p className="eyebrow eyebrow-on-dark">A practical next step</p>
            <h2>Bring the business problem. We’ll start there.</h2>
          </div>
          <Button href="/consultation" variant="secondary">
            Book a Fit Call
          </Button>
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
              No contact form, tracking pixel, or hidden chat widget is used on
              this site.
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
    </footer>
  );
}
