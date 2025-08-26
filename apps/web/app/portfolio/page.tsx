import React from 'react';
import { Metadata } from 'next';
import { Section } from '../components/Section';
import { Card } from '../components/Card';
import { Button } from '../components/Button';

export const metadata: Metadata = {
  title: 'Portfolio | Strive Technology Group',
  description: 'Case studies and examples of our work helping small businesses scale with professional tech solutions. See real results from our clients.',
};

export default function Portfolio() {
  const caseStudies = [
    {
      title: 'E-commerce Transformation',
      industry: 'Retail',
      challenge: 'Outdated website with poor mobile experience',
      solution: 'Modern e-commerce platform with mobile-first design',
      outcome: '300% increase in mobile conversions',
      status: 'Coming Soon'
    },
    {
      title: 'Local SEO Success',
      industry: 'Professional Services',
      challenge: 'Not showing up in local search results',
      solution: 'Complete local SEO optimization and Google Business Profile',
      outcome: 'Top 3 ranking for primary keywords',
      status: 'Coming Soon'
    },
    {
      title: 'Analytics & Automation',
      industry: 'Healthcare',
      challenge: 'Manual appointment scheduling and patient tracking',
      solution: 'Automated booking system with analytics dashboard',
      outcome: '50% reduction in administrative time',
      status: 'Coming Soon'
    },
    {
      title: 'Multi-location Website',
      industry: 'Restaurant',
      challenge: 'Managing multiple location information manually',
      solution: 'Centralized CMS with location-specific pages',
      outcome: '40% increase in online orders',
      status: 'Coming Soon'
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <Section background="dark" size="xl" className="bg-gradient-hero">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
            <span className="gradient-text">Real Results</span> for Real Businesses
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            See how we've helped small and mid-sized businesses transform their operations with professional tech solutions.
          </p>
        </div>
      </Section>

      {/* Case Studies Grid */}
      <Section size="xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-primary mb-6">
            Case Studies
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Each project starts with understanding unique business challenges and delivering solutions that drive measurable results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {caseStudies.map((study, index) => (
            <Card key={index} variant="service" className="p-8">
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 bg-accent-blue text-white text-sm rounded-full">
                  {study.industry}
                </span>
                <span className="px-3 py-1 bg-secondary text-gray-600 text-sm rounded-full">
                  {study.status}
                </span>
              </div>
              
              <h3 className="text-2xl font-display font-bold text-primary mb-4">
                {study.title}
              </h3>
              
              <div className="space-y-4 mb-6">
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Challenge:</h4>
                  <p className="text-gray-600 text-sm">{study.challenge}</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Solution:</h4>
                  <p className="text-gray-600 text-sm">{study.solution}</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Outcome:</h4>
                  <p className="text-accent-teal font-semibold text-sm">{study.outcome}</p>
                </div>
              </div>
              
              <Button 
                variant="outline" 
                className="w-full opacity-50 cursor-not-allowed"
                disabled={true}
              >
                Full Case Study Coming Soon
              </Button>
            </Card>
          ))}
        </div>

        {/* Placeholder Notice */}
        <Card className="max-w-4xl mx-auto p-8 text-center">
          <div className="w-16 h-16 bg-gradient-brand rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16l7-3 7 3z" />
            </svg>
          </div>
          <h3 className="text-2xl font-display font-bold text-primary mb-4">
            Detailed Case Studies Coming Soon
          </h3>
          <p className="text-lg text-gray-600 mb-6">
            We're currently working with our clients to finalize detailed case studies that showcase the full journey from challenge to success.
          </p>
          <p className="text-gray-600 mb-8">
            In the meantime, we'd love to discuss how we can help solve your specific business challenges.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/consultation" size="lg">
              Schedule Consultation
            </Button>
            <Button href="/services" variant="outline" size="lg">
              View Our Services
            </Button>
          </div>
        </Card>
      </Section>

      {/* Process Overview */}
      <Section background="gray" size="xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-primary mb-6">
            Our Proven Process
          </h2>
          <p className="text-xl text-gray-600">
            How we consistently deliver results for our clients.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            {
              step: '01',
              title: 'Discovery',
              description: 'Deep dive into your business goals, current challenges, and success metrics.'
            },
            {
              step: '02', 
              title: 'Strategy',
              description: 'Custom solution design based on your specific needs and budget constraints.'
            },
            {
              step: '03',
              title: 'Implementation',
              description: 'Rapid development with regular check-ins and milestone reviews.'
            },
            {
              step: '04',
              title: 'Optimization',
              description: 'Ongoing monitoring, analytics, and improvements to maximize ROI.'
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

      {/* Industries We Serve */}
      <Section size="xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-primary mb-6">
            Industries We Serve
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our solutions work across industries because we focus on fundamental business needs: attracting customers, streamlining operations, and driving growth.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { name: 'Professional Services', icon: '💼' },
            { name: 'Healthcare', icon: '🏥' },
            { name: 'Retail & E-commerce', icon: '🛍️' },
            { name: 'Restaurants', icon: '🍽️' },
            { name: 'Real Estate', icon: '🏠' },
            { name: 'Fitness & Wellness', icon: '💪' },
            { name: 'Education', icon: '📚' },
            { name: 'Manufacturing', icon: '🏭' }
          ].map((industry, index) => (
            <Card key={index} className="p-6 text-center hover-scale">
              <div className="text-3xl mb-3">{industry.icon}</div>
              <h3 className="font-display font-semibold text-primary">{industry.name}</h3>
            </Card>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <Section background="gray" size="lg">
        <Card className="max-w-4xl mx-auto p-8 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-6">
            Ready to Be Our Next Success Story?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Every successful project starts with understanding your unique challenges and goals. Let's discuss how we can help your business scale smarter.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/consultation" size="lg">
              Book Free Consultation
            </Button>
            <Button href="/contact" variant="outline" size="lg">
              Request Custom Quote
            </Button>
          </div>
        </Card>
      </Section>
    </>
  );
}
