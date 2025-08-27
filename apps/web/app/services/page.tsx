import React from 'react';
import { Metadata } from 'next';
import { Section } from '../components/Section';
import { ServiceCard } from '../components/ServiceCard';
import { Card } from '../components/Card';
import { Button } from '../components/Button';

export const metadata: Metadata = {
  title: 'Services | Strive Technology Group',
  description: 'Professional tech services for small businesses: Website Development, SEO Optimization, Company Analytics, and Ongoing Tech Support. Custom pricing based on your needs.',
};

export default function Services() {
  return (
    <>
      {/* Hero Section */}
      <Section background="dark" size="xl" className="bg-gradient-hero">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
            Professional <span className="gradient-text">Tech Services</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Five comprehensive services that transform how your business operates, attracts customers, and grows revenue.
          </p>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Custom solutions designed specifically for your business needs and budget.
          </p>
        </div>
      </Section>

      {/* Services Grid */}
      <Section size="xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {/* First Row */}
          <ServiceCard
            icon={
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
            }
            title="Website Development & Hosting"
            description="We build modern, scalable websites that give your brand a professional online presence."
            features={[
              "Custom websites (landing pages → e-commerce)",
              "Subscription pricing (monthly fee, includes hosting, SSL, domain)",
              "Scalable features (booking systems, integrations, forms)"
            ]}
            highlight={true}
            buttonText="Get Started"
          />

          <ServiceCard
            icon={
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            }
            title="Website Upkeep & Support"
            description="Your site should run smoothly without you having to worry."
            features={[
              "Ongoing maintenance (updates, patches, security)",
              "Performance monitoring (speed + uptime)",
              "Basic analytics reports (traffic, top pages, engagement)",
              "Dedicated support line"
            ]}
            buttonText="Learn More"
          />

          {/* Second Row */}
          <ServiceCard
            icon={
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            }
            title="Search & Visibility Suite"
            description="Helping your business get found on search engines — and now through AI tools."
            features={[
              "Google Search Console setup + sitemap monitoring",
              "On-page & technical SEO fixes",
              "Google Analytics integration (event tracking)",
              "Monthly visibility reports",
              "LLM Surge Service → AI search visibility (ChatGPT, Perplexity, Bing AI)",
              "Structured data (schema.org, FAQs, knowledge graphs)"
            ]}
            buttonText="Boost Visibility"
          />

          <ServiceCard
            icon={
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            }
            title="Insight Analytics Pipelines"
            description="Turn raw data into actionable insights with custom analytics systems."
            features={[
              "Custom dashboards (KPIs, sales funnels, behavior tracking)",
              "Automated reporting (PDF or interactive dashboards)",
              "Business intelligence recommendations"
            ]}
            buttonText="View Analytics"
          />

          {/* Third Row - Centered Single Card */}
          <div className="lg:col-span-2 xl:col-span-2 flex justify-center">
            <div className="w-full lg:w-1/2 xl:w-1/2">
              <ServiceCard
                icon={
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                }
                title="AI Automation"
                description="Automate, accelerate, and scale your business processes."
                features={[
                  "AI chatbots for customer support & lead qualification",
                  "Automated workflows (emails, scheduling, invoicing)",
                  "Predictive insights (forecasting + recommendations)"
                ]}
                buttonText="Automate Now"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Process Section */}
      <Section background="gray" size="xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-primary mb-6">
            Our Service Process
          </h2>
          <p className="text-xl text-gray-600">
            How we deliver professional results every time.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              step: '01',
              title: 'Discovery Call',
              description: 'Free consultation to understand your business goals, current challenges, and technical requirements.'
            },
            {
              step: '02',
              title: 'Custom Proposal',
              description: 'Detailed proposal with clear timeline, deliverables, and transparent pricing based on your specific needs.'
            },
            {
              step: '03',
              title: 'Development',
              description: 'Rapid development with regular updates, milestone reviews, and your feedback integrated throughout.'
            },
            {
              step: '04',
              title: 'Launch & Support',
              description: 'Smooth launch with training, documentation, and ongoing support to ensure long-term success.'
            }
          ].map((item, index) => (
            <Card key={index} variant="feature" className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                {item.step}
              </div>
              <h3 className="text-xl font-display font-bold text-primary mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Pricing Information */}
      <Section size="xl">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-primary mb-8">
            Custom Pricing for Your Needs
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Every business is unique, so every solution should be too. Our pricing is based on your specific requirements, not one-size-fits-all packages.
          </p>
          
          <Card className="p-8 mb-8">
            <h3 className="text-2xl font-display font-bold text-primary mb-6">What Affects Pricing?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div>
                <h4 className="font-semibold text-primary mb-2">Project Scope</h4>
                <ul className="space-y-1 text-gray-600">
                  <li>• Number of pages or features</li>
                  <li>• Complexity of functionality</li>
                  <li>• Custom design requirements</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-primary mb-2">Integrations</h4>
                <ul className="space-y-1 text-gray-600">
                  <li>• E-commerce platforms</li>
                  <li>• Booking and scheduling systems</li>
                  <li>• CRM and analytics tools</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-primary mb-2">Timeline</h4>
                <ul className="space-y-1 text-gray-600">
                  <li>• Standard vs. rush delivery</li>
                  <li>• Project complexity</li>
                  <li>• Content and asset preparation</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-primary mb-2">Ongoing Support</h4>
                <ul className="space-y-1 text-gray-600">
                  <li>• Level of maintenance required</li>
                  <li>• Frequency of updates</li>
                  <li>• Support response time needs</li>
                </ul>
              </div>
            </div>
          </Card>

          <p className="text-lg text-gray-600 mb-8">
            <strong>Typical Range:</strong> Most projects fall between $1,500 - $15,000 for initial development, with ongoing support starting at $300/month.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/consultation" size="lg">
              Get Custom Quote
            </Button>
            <Button href="/pricing" variant="outline" size="lg">
              Pricing Details
            </Button>
          </div>
        </div>
      </Section>

      {/* Technology Stack */}
      <Section background="gray" size="lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-6">
            Built with Modern Technology
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We use the latest, most reliable technologies to ensure your solutions are fast, secure, and future-proof.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { name: 'React & Next.js', description: 'Modern web frameworks' },
            { name: 'WordPress & Shopify', description: 'Content management' },
            { name: 'Google Analytics', description: 'Data & insights' },
            { name: 'AWS & Vercel', description: 'Reliable hosting' }
          ].map((tech, index) => (
            <div key={index} className="p-4">
              <div className="w-16 h-16 bg-gradient-brand rounded-lg flex items-center justify-center mx-auto mb-3">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h3 className="font-display font-bold text-primary mb-1">{tech.name}</h3>
              <p className="text-sm text-gray-600">{tech.description}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
