// Enhanced agency-style services page with polished design elements

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

function CleanButton({ href, children, aria, isDark = false }: { href: string; children: React.ReactNode; aria: string; isDark?: boolean }) {
  const buttonClasses = isDark 
    ? // White button for dark backgrounds
      "bg-white border-2 border-white text-[#0A2540] focus-visible:ring-white"
    : // Navy button for light backgrounds  
      "bg-[#0A2540] border-2 border-[#0A2540] text-white focus-visible:ring-[#0A2540]";
      
  const overlayColor = isDark ? "bg-[#0F2A47]" : "bg-white";
  const textColorClasses = isDark 
    ? "text-[#0A2540] group-hover:text-white"
    : "text-white group-hover:text-[#0A2540]";

  return (
    <a
      href={href}
      aria-label={aria}
      className={`group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-semibold
                 ${buttonClasses} shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.02]
                 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 relative overflow-hidden`}
    >
      {/* Color sweep overlay */}
      <div className={`absolute inset-0 ${overlayColor} translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-400 ease-out`} />
      
      {/* Content with proper color transitions */}
      <span className={`relative z-10 tracking-wide transition-all duration-400 ${textColorClasses}`}>
        {children}
      </span>
      
      {/* Arrow Icon with color transition */}
      <svg 
        className={`w-5 h-5 transition-all duration-400 group-hover:translate-x-1 relative z-10 ${textColorClasses}`}
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M17 8l4 4m0 0l-4 4m4-4H3" 
        />
      </svg>
    </a>
  );
}

function Hero() {
  return (
    <section className="relative bg-[#0E1B2B] text-white overflow-hidden">
      <Container>
        <div className="py-20 md:py-28 lg:py-32 pb-32 text-center">
          <div className="mx-auto max-w-4xl">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-balance mb-6">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 font-light leading-relaxed mb-4">
              Comprehensive digital solutions designed to elevate your business
            </p>
            <p className="text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto">
              From custom websites to AI automation, we build, maintain, and scale reliable digital systems 
              so you can focus on what matters most—growing your business.
            </p>
          </div>
        </div>
      </Container>
      
      {/* Wave SVG Divider */}
      <svg 
        className="absolute inset-x-0 -bottom-px h-12 w-full text-white" 
        viewBox="0 0 1440 48" 
        preserveAspectRatio="none" 
        aria-hidden="true"
      >
        <path 
          className="fill-white" 
          d="M0,24 C240,48 480,0 720,24 C960,48 1200,0 1440,24 L1440,48 L0,48 Z"
        />
      </svg>
    </section>
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
  const isUpkeepSupport = s.id === "upkeep-support";
  const isSearchVisibility = s.id === "search-visibility";
  const isAnalyticsPipelines = s.id === "analytics-pipelines";
  const isAIAutomation = s.id === "ai-automation";
  const hasVideo = isWebsiteDevelopment || isUpkeepSupport || isSearchVisibility || isAnalyticsPipelines || isAIAutomation;
  
  // Professional alternating color scheme
  const isDark = index % 2 === 1; // Alternate: white (0,2,4) -> dark (1,3)
  const sectionBg = isDark ? "bg-slate-900" : "bg-white";
  const textPrimary = isDark ? "text-white" : "text-slate-900";
  const textSecondary = isDark ? "text-slate-300" : "text-slate-600";
  const borderColor = isDark ? "border-slate-700" : "border-slate-200";
  
  return (
    <section id={s.id} aria-labelledby={`${s.id}-title`} className={`scroll-mt-24 ${sectionBg}`}>
      <div className={`py-14 md:py-20 border-b last:border-0 ${borderColor}`}>
        <Container>
          {hasVideo ? (
            <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center`}>
              {/* Content */}
              <div className={`${reverse ? "lg:order-2" : "lg:order-1"}`}>
                <h2 id={`${s.id}-title`} className={`text-3xl md:text-4xl font-extrabold tracking-tight ${textPrimary}`}>
                  {s.title}
                </h2>
                <p className={`mt-4 text-base md:text-lg leading-relaxed max-w-prose ${textSecondary}`}>
                  {s.lead}
                </p>

                <ul className="mt-6 space-y-3">
                  {s.bullets.map((b, i) => (
                    <li key={i} className={`flex items-start gap-3 leading-relaxed ${textSecondary}`}>
                      <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-br from-indigo-600 to-cyan-400 text-white text-xs font-bold mt-0.5 shrink-0">
                        ✓
                      </span>
                      <span className="text-base md:text-lg">{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <CleanButton href={s.cta.href} aria={`Contact about ${s.title}`} isDark={isDark}>
                    {s.cta.label}
                  </CleanButton>
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
                  aria-label={`${s.title} animation demonstrating our ${s.title.toLowerCase()} process`}
                >
                  {isWebsiteDevelopment && (
                    <source src="/Website Creation Animation.webm" type="video/webm" />
                  )}
                  {isUpkeepSupport && (
                    <source src="/Website Upkeep Animation.webm" type="video/webm" />
                  )}
                  {isSearchVisibility && (
                    <source src="/Modern_Search_Engine_Animation.webm" type="video/webm" />
                  )}
                  {isAnalyticsPipelines && (
                    <source src="/Insights Analytics Animation.webm" type="video/webm" />
                  )}
                  {isAIAutomation && (
                    <source src="/AI Automation Animation.webm" type="video/webm" />
                  )}
                  <div className="w-full h-64 bg-gradient-to-br from-slate-50 to-white flex items-center justify-center rounded-2xl">
                    <span className="text-slate-400 text-sm">{s.title} Animation</span>
                  </div>
                </video>
              </div>
            </div>
          ) : (
            <div className={`grid grid-cols-1 lg:grid-cols-12 gap-10 items-start`}>
              {/* Left (title/lead) or right depending on reverse */}
              <div className={`${reverse ? "lg:col-start-7 lg:col-span-6" : "lg:col-span-6"}`}>
                <h2 id={`${s.id}-title`} className={`text-3xl md:text-4xl font-extrabold tracking-tight ${textPrimary}`}>
                  {s.title}
                </h2>
                <p className={`mt-4 text-base md:text-lg leading-relaxed max-w-prose ${textSecondary}`}>
                  {s.lead}
                </p>

                <ul className="mt-6 space-y-3">
                  {s.bullets.map((b, i) => (
                    <li key={i} className={`flex items-start gap-3 leading-relaxed ${textSecondary}`}>
                      <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-gradient-to-br from-indigo-600 to-cyan-400 text-white text-xs font-bold mt-0.5 shrink-0">
                        ✓
                      </span>
                      <span className="text-base md:text-lg">{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8">
                  <CleanButton href={s.cta.href} aria={`Contact about ${s.title}`} isDark={isDark}>
                    {s.cta.label}
                  </CleanButton>
                </div>
              </div>

              {/* Placeholder for other sections */}
              <div className={`${reverse ? "lg:col-start-1 lg:col-span-5" : "lg:col-start-8 lg:col-span-5"} flex items-center`}>
                <div className={`rounded-2xl border shadow-sm h-56 md:h-72 flex items-center justify-center w-full ${
                  isDark 
                    ? 'border-slate-700 bg-slate-800 bg-gradient-to-br from-slate-800 to-slate-900' 
                    : 'border-slate-200 bg-white bg-gradient-to-br from-slate-50 to-white'
                }`}>
                  <span className={`text-sm ${isDark ? 'text-slate-400' : 'text-slate-400'}`}>
                    Add image, diagram, or metric block
                  </span>
                </div>
              </div>
            </div>
          )}
        </Container>
      </div>
    </section>
  );
}

export default function ServicesPage() {
  return (
    <main>
      <Hero />
      {/* Full-width sections */}
      <div>
        {sections.map((s, i) => <ServiceSection key={s.id} s={s} index={i} />)}
      </div>
    </main>
  );
}
