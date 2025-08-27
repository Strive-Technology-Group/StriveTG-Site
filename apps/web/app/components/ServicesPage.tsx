import { Check } from "lucide-react";

const sections = [
  {
    id: "website-development",
    title: "Website Development & Hosting",
    lead: "Modern, scalable websites that give your brand a professional online presence.",
    bullets: [
      "Custom websites (landing pages → e-commerce) tailored to your needs",
      "Subscription pricing (monthly fee by complexity) incl. hosting, SSL, domain",
      "Scalable features (booking systems, integrations, forms)",
    ],
    cta: { label: "Start Your Build", href: "/contact" },
  },
  {
    id: "upkeep-support",
    title: "Website Upkeep & Support",
    lead: "Your site should run smoothly without you having to worry.",
    bullets: [
      "Ongoing maintenance (updates, patches, security monitoring)",
      "Performance monitoring (speed optimization & uptime checks)",
      "Basic analytics (traffic, top pages, engagement) + dedicated support line",
    ],
    cta: { label: "Talk Support", href: "/contact" },
  },
  {
    id: "search-visibility",
    title: "Search & Visibility Suite",
    lead: "Helping your business get found on search engines — and now through AI tools.",
    bullets: [
      "Google Search Console setup + sitemap monitoring; on-page & technical SEO",
      "Google Analytics integration (event tracking) & monthly visibility reports",
      "LLM Surge Service → AI search visibility (ChatGPT, Perplexity, Bing AI) with schema.org, FAQs, knowledge graphs; content tuned for LLM retrieval",
    ],
    cta: { label: "Boost Visibility", href: "/contact" },
  },
  {
    id: "analytics-pipelines",
    title: "Insight Analytics Pipelines",
    lead: "Turn raw data into actionable insights with custom analytics systems.",
    bullets: [
      "Custom dashboards (KPIs, funnels, behavior) from POS/CRM/site pipelines",
      "Automated reporting (PDF or interactive dashboards)",
      "Business-intelligence recommendations for better decisions",
    ],
    cta: { label: "View Analytics Options", href: "/contact" },
  },
  {
    id: "ai-automation",
    title: "AI Automation",
    lead: "Automate, accelerate, and scale your business processes.",
    bullets: [
      "AI chatbots for support & FAQ; lead qualification to CRM",
      "Automated workflows (emails, scheduling, invoicing, docs)",
      "Predictive insights (forecasting, risks, recommendations)",
    ],
    cta: { label: "Explore Automation", href: "/contact" },
  },
];

function Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto max-w-6xl px-4 md:px-6">{children}</div>;
}

function GradientButton({ href, children, aria }: { href: string; children: React.ReactNode; aria: string }) {
  return (
    <a
      href={href}
      aria-label={aria}
      className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-medium text-white
                 bg-gradient-to-r from-[#3BA7F5] to-[#7B61FF] shadow-md transition-all
                 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2
                 focus-visible:ring-offset-2 focus-visible:ring-[#7B61FF]"
    >
      {children}
    </a>
  );
}

function Hero() {
  return (
    <section className="bg-slate-900 text-white">
      <Container>
        <div className="py-16 md:py-20">
          <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight">Services</h1>
          <p className="mt-4 max-w-3xl text-slate-300 leading-relaxed">
            Our offerings work together to design, implement, and evolve reliable digital systems across your brand's touchpoints.
            We build, maintain, and scale—so you can focus on running the business.
          </p>
        </div>
      </Container>
    </section>
  );
}

function TOC() {
  return (
    <div className="sticky top-20 z-10 hidden lg:block">
      <nav aria-label="Service navigation" className="rounded-xl border border-slate-200 p-4">
        <p className="mb-3 text-sm font-semibold text-slate-700">On this page</p>
        <ul className="space-y-2 text-sm">
          {sections.map((s) => (
            <li key={s.id}>
              <a
                href={`#${s.id}`}
                className="text-slate-600 hover:text-slate-900 transition-colors"
              >
                {s.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2 text-slate-600 leading-7">
      <Check className="mt-1 h-4 w-4 shrink-0 text-slate-500" />
      <span>{children}</span>
    </li>
  );
}

function ServiceSection({
  s,
  index,
}: {
  s: (typeof sections)[number];
  index: number;
}) {
  const reverse = index % 2 === 1; // alternate layout
  const isWebsiteDevelopment = s.id === "website-development";
  
  return (
    <section id={s.id} aria-labelledby={`${s.id}-title`} className="scroll-mt-24">
      <Container>
        <div className="py-14 md:py-20 border-b last:border-0 border-slate-200">
          {isWebsiteDevelopment ? (
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center`}>
              {/* Website Development Content */}
              <div className={`${reverse ? "lg:order-2" : "lg:order-1"}`}>
                <h2 id={`${s.id}-title`} className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
                  {s.title}
                </h2>
                <p className="mt-4 text-slate-600 leading-relaxed max-w-prose">
                  {s.lead}
                </p>

                <ul className="mt-6 space-y-2">
                  {s.bullets.map((b, i) => <Bullet key={i}>{b}</Bullet>)}
                </ul>

                <div className="mt-8">
                  <GradientButton href={s.cta.href} aria={`Contact about ${s.title}`}>
                    {s.cta.label}
                  </GradientButton>
                </div>
              </div>

              {/* Video - equal size column */}
              <div className={`${reverse ? "lg:order-1" : "lg:order-2"}`}>
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-auto rounded-2xl shadow-lg"
                  aria-label="Website creation animation demonstrating our development process"
                >
                  <source src="/Website Creation Animation.webm" type="video/webm" />
                  <div className="w-full h-64 bg-gradient-to-br from-slate-50 to-white flex items-center justify-center rounded-2xl">
                    <span className="text-slate-400 text-sm">Website Creation Animation</span>
                  </div>
                </video>
              </div>
            </div>
          ) : (
            <div className={`grid grid-cols-1 lg:grid-cols-12 gap-10 items-start`}>
              {/* Left (title/lead) or right depending on reverse */}
              <div className={`${reverse ? "lg:col-start-7 lg:col-span-6" : "lg:col-span-6"}`}>
                <h2 id={`${s.id}-title`} className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
                  {s.title}
                </h2>
                <p className="mt-4 text-slate-600 leading-relaxed max-w-prose">
                  {s.lead}
                </p>

                <ul className="mt-6 space-y-2">
                  {s.bullets.map((b, i) => <Bullet key={i}>{b}</Bullet>)}
                </ul>

                <div className="mt-8">
                  <GradientButton href={s.cta.href} aria={`Contact about ${s.title}`}>
                    {s.cta.label}
                  </GradientButton>
                </div>
              </div>

              {/* Placeholder for other sections */}
              <div className={`${reverse ? "lg:col-start-1 lg:col-span-5" : "lg:col-start-8 lg:col-span-5"} flex items-center`}>
                <div className="rounded-2xl border border-slate-200 bg-white h-56 md:h-72 shadow-sm
                                bg-gradient-to-br from-slate-50 to-white flex items-center justify-center w-full">
                  <span className="text-slate-400 text-sm">Add image, diagram, or metric block</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}

export default function ServicesPage() {
  return (
    <main>
      <Hero />
      <Container>
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 py-10">
          <div className="lg:col-span-3">
            <TOC />
          </div>
          <div className="lg:col-span-9">
            {sections.map((s, i) => <ServiceSection key={s.id} s={s} index={i} />)}
          </div>
        </div>
      </Container>
    </main>
  );
}
