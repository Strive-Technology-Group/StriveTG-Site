'use client';

import React, { useState } from 'react';
import { Metadata } from 'next';
import { Section } from '../components/Section';
import { Card } from '../components/Card';
import { Button } from '../components/Button';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    business: '',
    services: [] as string[],
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const services = [
    'Website Development',
    'SEO Optimization', 
    'Company Analytics',
    'Ongoing Tech Support'
  ];

  const handleServiceChange = (service: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <Section size="xl">
        <Card className="max-w-2xl mx-auto p-8 text-center">
          <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-3xl font-display font-bold text-primary mb-4">
            Message Sent Successfully!
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            Thank you for reaching out. We'll get back to you within 24 hours with a detailed response.
          </p>
          <p className="text-gray-600 mb-8">
            In the meantime, feel free to check out our services or schedule a free consultation call.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/consultation">
              Book Free Consultation
            </Button>
            <Button href="/services" variant="outline">
              View Services
            </Button>
          </div>
        </Card>
      </Section>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <Section background="dark" size="xl" className="bg-gradient-hero">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
            Let's <span className="gradient-text">Get Started</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Ready to scale your business with professional tech solutions? Let's discuss your needs.
          </p>
        </div>
      </Section>

      {/* Contact Form Section */}
      <Section size="xl">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="p-8">
              <h2 className="text-2xl font-display font-bold text-primary mb-6">
                Request a Quote
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-blue focus:border-transparent transition-colors"
                    placeholder="John Smith"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-blue focus:border-transparent transition-colors"
                    placeholder="john@company.com"
                  />
                </div>

                <div>
                  <label htmlFor="business" className="block text-sm font-medium text-gray-700 mb-2">
                    Business Name
                  </label>
                  <input
                    type="text"
                    id="business"
                    value={formData.business}
                    onChange={(e) => setFormData(prev => ({ ...prev, business: e.target.value }))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-blue focus:border-transparent transition-colors"
                    placeholder="ABC Company"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Services Interested In
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {services.map((service) => (
                      <label key={service} className="flex items-center space-x-3 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={formData.services.includes(service)}
                          onChange={() => handleServiceChange(service)}
                          className="w-4 h-4 text-accent-blue border-gray-300 rounded focus:ring-accent-blue"
                        />
                        <span className="text-sm text-gray-700">{service}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-blue focus:border-transparent transition-colors resize-vertical"
                    placeholder="Tell us about your business goals, current challenges, and what you're looking to achieve..."
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Request Quote
                </Button>
              </form>
            </Card>

            {/* Contact Info & CTA */}
            <div className="space-y-8">
              <Card className="p-8">
                <h3 className="text-2xl font-display font-bold text-primary mb-6">
                  Prefer a Direct Conversation?
                </h3>
                <p className="text-gray-600 mb-6">
                  Sometimes it's easier to talk through your needs. Schedule a free consultation call to discuss your project in detail.
                </p>
                <Button href="/consultation" size="lg" className="w-full mb-4">
                  Book Free Consultation
                </Button>
                <p className="text-sm text-gray-500 text-center">
                  No sales pressure. Just honest advice about what's best for your business.
                </p>
              </Card>

              <Card className="p-8">
                <h3 className="text-xl font-display font-bold text-primary mb-4">
                  What Happens Next?
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-accent-blue text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                    <div>
                      <h4 className="font-semibold text-primary">Quick Response</h4>
                      <p className="text-gray-600 text-sm">We'll respond within 24 hours with initial thoughts and next steps.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-accent-teal text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                    <div>
                      <h4 className="font-semibold text-primary">Discovery Call</h4>
                      <p className="text-gray-600 text-sm">Free 30-minute call to understand your needs and goals.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-accent-purple text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                    <div>
                      <h4 className="font-semibold text-primary">Custom Proposal</h4>
                      <p className="text-gray-600 text-sm">Detailed proposal with timeline, deliverables, and transparent pricing.</p>
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="p-8 bg-gradient-to-r from-secondary to-white">
                <h3 className="text-xl font-display font-bold text-primary mb-4">
                  Why Choose Strive Technology Group?
                </h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center space-x-2">
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Professional tech talent at fraction of in-house cost</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Custom solutions designed for your specific needs</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Transparent pricing with no hidden fees</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span>Ongoing support and optimization included</span>
                  </li>
                </ul>
              </Card>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
