import React from 'react';
import { Metadata } from 'next';
import { Section } from '../components/Section';
import { Card } from '../components/Card';
import { Button } from '../components/Button';

export const metadata: Metadata = {
  title: 'About | Strive Technology Group',
  description: 'Learn about our mission to make enterprise-grade tech accessible to small businesses and meet the founder delivering tech talent directly to business owners.',
};

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <Section background="dark" size="xl" className="bg-gradient-hero">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
            Making Tech <span className="gradient-text">Accessible</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Our mission is to make enterprise-grade technology accessible to small and mid-sized businesses.
          </p>
        </div>
      </Section>

      {/* Mission Section */}
      <Section size="xl">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-primary mb-8">
            Our Mission
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            Every small business deserves access to the same level of technology and expertise that large corporations use to dominate their markets. We believe that with the right tech solutions, any business can compete at a higher level.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            That's why we provide professional-grade websites, SEO optimization, business analytics, and ongoing tech support at a fraction of the cost of hiring in-house talent. We're not just a service provider – we're your technology partner, invested in your success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card variant="feature" className="text-center">
            <div className="w-16 h-16 bg-gradient-brand rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-display font-bold text-primary mb-3">Accessibility</h3>
            <p className="text-gray-600">
              Making enterprise-level technology accessible to businesses of all sizes, not just large corporations.
            </p>
          </Card>

          <Card variant="feature" className="text-center">
            <div className="w-16 h-16 bg-gradient-brand rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-display font-bold text-primary mb-3">Reliability</h3>
            <p className="text-gray-600">
              Consistent, dependable service that you can count on. Your business operations are too important for anything less.
            </p>
          </Card>

          <Card variant="feature" className="text-center">
            <div className="w-16 h-16 bg-gradient-brand rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-xl font-display font-bold text-primary mb-3">Results</h3>
            <p className="text-gray-600">
              Measurable outcomes that directly impact your bottom line. Every solution is designed with your ROI in mind.
            </p>
          </Card>
        </div>
      </Section>

      {/* Founder Story */}
      <Section background="gray" size="xl">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-display font-bold text-primary mb-8">
                Meet Our Team
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                At Strive Technology Group, we deliver professional tech talent directly to business owners who want to compete at a higher level without the overhead of hiring full-time employees.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                We've seen too many great businesses struggle with outdated websites, poor search visibility, and manual processes that waste time and money. That's what drives us to provide enterprise-grade solutions at prices that make sense for growing businesses.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                When you work with Strive Technology Group, you're not just getting a service provider – you're getting a dedicated technology partner who understands that your success is our success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button href="/consultation" size="lg">
                  Schedule a Call
                </Button>
                <Button href="/services" variant="outline" size="lg">
                  View Services
                </Button>
              </div>
            </div>
            
            <Card className="p-8">
              <div className="text-center mb-6">
                <div className="w-24 h-24 bg-gradient-brand rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-3xl">STG</span>
                </div>
                <h3 className="text-2xl font-display font-bold text-primary">Professional Tech Expertise</h3>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-accent-blue mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Full-stack web development expertise</span>
                </div>
                <div className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-accent-blue mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">SEO and digital marketing knowledge</span>
                </div>
                <div className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-accent-blue mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Business analytics and automation</span>
                </div>
                <div className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-accent-blue mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Dedicated ongoing support</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Section>

      {/* Values Section */}
      <Section size="xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-primary mb-6">
            Our Core Values
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            These principles guide every decision we make and every solution we deliver.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="p-8">
            <h3 className="text-2xl font-display font-bold text-primary mb-4">Transparency</h3>
            <p className="text-gray-600 mb-4">
              Clear communication, honest pricing, and realistic timelines. You'll always know exactly what you're getting and when to expect it.
            </p>
            <p className="text-sm text-gray-500">
              No hidden fees, no surprise changes, no confusing technical jargon.
            </p>
          </Card>

          <Card className="p-8">
            <h3 className="text-2xl font-display font-bold text-primary mb-4">Partnership</h3>
            <p className="text-gray-600 mb-4">
              We're not just a vendor – we're your technology partner. Your business goals become our goals, and your success is our success.
            </p>
            <p className="text-sm text-gray-500">
              Long-term relationships built on trust and measurable results.
            </p>
          </Card>

          <Card className="p-8">
            <h3 className="text-2xl font-display font-bold text-primary mb-4">Quality</h3>
            <p className="text-gray-600 mb-4">
              Every solution is built to enterprise standards. We don't cut corners because your business reputation depends on what we deliver.
            </p>
            <p className="text-sm text-gray-500">
              Professional-grade solutions that perform reliably day after day.
            </p>
          </Card>

          <Card className="p-8">
            <h3 className="text-2xl font-display font-bold text-primary mb-4">Growth Focus</h3>
            <p className="text-gray-600 mb-4">
              Every recommendation and solution is designed with your business growth in mind. We help you build systems that scale.
            </p>
            <p className="text-sm text-gray-500">
              Technology that grows with your business, not against it.
            </p>
          </Card>
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="gray" size="lg">
        <Card className="max-w-4xl mx-auto p-8 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's discuss how we can help your business scale smarter and compete bigger.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/consultation" size="lg">
              Book Free Consultation
            </Button>
            <Button href="/contact" variant="outline" size="lg">
              Send Us a Message
            </Button>
          </div>
        </Card>
      </Section>
    </>
  );
}
