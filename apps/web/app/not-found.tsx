import { Button } from "./components/Button";
import { Container } from "./components/Container";

export default function NotFound() {
  return (
    <section className="not-found">
      <Container>
        <p className="eyebrow">404 · Page not found</p>
        <h1>This route does not exist.</h1>
        <p>The navigation reflects the pages that are actually available.</p>
        <div className="hero-actions" style={{ justifyContent: "center" }}>
          <Button href="/">Return home</Button>
          <Button href="/contact" variant="outline">
            Contact Strive
          </Button>
        </div>
      </Container>
    </section>
  );
}
