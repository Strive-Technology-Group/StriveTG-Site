import { Button } from "./components/Button";
import { Container } from "./components/Container";

export default function NotFound() {
  return (
    <section className="not-found">
      <Container>
        <p className="eyebrow">404 · Page not found</p>
        <h1>This route does not exist.</h1>
        <p>
          Use the navigation to continue, or contact Strive if you were looking
          for something specific.
        </p>
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
