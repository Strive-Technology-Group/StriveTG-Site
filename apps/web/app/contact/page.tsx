'use client';

import React, { useState } from 'react';
import { Metadata } from 'next';
import { MotionWrapper } from '../components/MotionWrapper';

function Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto max-w-6xl px-4 md:px-6">{children}</div>;
}

function CleanButton({ 
  href, 
  children, 
  aria, 
  isDark = false, 
  type = "button",
  onClick,
  className = ""
}: { 
  href?: string; 
  children: React.ReactNode; 
  aria: string; 
  isDark?: boolean;
  type?: "button" | "submit";
  onClick?: () => void;
  className?: string;
}) {
  const buttonClasses = isDark 
    ? "bg-white border-2 border-white text-[#0A2540] focus-visible:ring-white"
    : "bg-[#0A2540] border-2 border-[#0A2540] text-white focus-visible:ring-[#0A2540]";
      
  const overlayColor = isDark ? "bg-[#0F2A47]" : "bg-white";
  const textColorClasses = isDark 
    ? "text-[#0A2540] group-hover:text-white"
    : "text-white group-hover:text-[#0A2540]";

  const baseClasses = `group inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 font-semibold text-lg
                      ${buttonClasses} shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.02]
                      focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 relative overflow-hidden ${className}`;

  const content = (
    <>
      <div className={`absolute inset-0 ${overlayColor} translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-400 ease-out`} />
      <span className={`relative z-10 tracking-wide transition-all duration-400 ${textColorClasses}`}>
        {children}
      </span>
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
    </>
  );

  if (href) {
    return (
      <a href={href} aria-label={aria} className={baseClasses}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} aria-label={aria} className={baseClasses}>
      {content}
    </button>
  );
}

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
    'Website Development & Hosting',
    'Website Upkeep & Support',
    'Search & Visibility Suite',
    'Insight Analytics Pipelines',
    'AI Automation'
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
      <main>
        <section className="bg-white py-24">
          <Container>
            <div className="max-w-2xl mx-auto bg-slate-50 border border-slate-200 rounded-2xl p-8 text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight">
                Message Sent Successfully!
              </h2>
              <p className="text-lg text-slate-600 mb-6">
                Thank you for reaching out. We'll get back to you within 24 hours with a detailed response.
              </p>
              <p className="text-slate-600 mb-8">
                In the meantime, feel free to check out our services or schedule a free consultation call.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <CleanButton href="/consultation" aria="Book free consultation">
                  Book Free Consultation
                </CleanButton>
                <CleanButton href="/services" aria="View our services">
                  View Services
                </CleanButton>
              </div>
            </div>
          </Container>
        </section>
      </main>
    );
  }

  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-[#0E1B2B] text-white overflow-hidden">
        <Container>
          <div className="py-20 md:py-28 lg:py-32 pb-32 text-center">
            <div className="mx-auto max-w-4xl">
              <MotionWrapper direction="fade">
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-balance mb-6">
                  Let's Get Started
                </h1>
                <p className="text-xl md:text-2xl text-slate-300 font-light leading-relaxed mb-4">
                  Ready to scale your business with professional tech solutions? Let's discuss your needs.
                </p>
                <p className="text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto">
                  Get a custom proposal tailored to your business goals and budget.
                </p>
              </MotionWrapper>
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

      {/* Contact Form Section - White (index 0) */}
      <section className="bg-white">
        <div className="py-14 md:py-20 border-b border-slate-200">
          <Container>
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Contact Form */}
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8">
                  <h2 className="text-2xl font-bold text-slate-900 mb-6 tracking-tight">
                    Request a Quote
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0A2540] focus:border-transparent transition-colors bg-white"
                        placeholder="John Smith"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0A2540] focus:border-transparent transition-colors bg-white"
                        placeholder="john@company.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="business" className="block text-sm font-medium text-slate-700 mb-2">
                        Business Name
                      </label>
                      <input
                        type="text"
                        id="business"
                        value={formData.business}
                        onChange={(e) => setFormData(prev => ({ ...prev, business: e.target.value }))}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0A2540] focus:border-transparent transition-colors bg-white"
                        placeholder="ABC Company"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-3">
                        Services Interested In
                      </label>
                      <div className="space-y-3">
                        {services.map((service) => (
                          <label key={service} className="flex items-center space-x-3 cursor-pointer">
                            <input
                              type="checkbox"
                              checked={formData.services.includes(service)}
                              onChange={() => handleServiceChange(service)}
                              className="w-4 h-4 text-[#0A2540] border-slate-300 rounded focus:ring-[#0A2540]"
                            />
                            <span className="text-sm text-slate-700">{service}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                        Project Details *
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0A2540] focus:border-transparent transition-colors resize-vertical bg-white"
                        placeholder="Tell us about your business goals, current challenges, and what you're looking to achieve..."
                      />
                    </div>

                    <CleanButton type="submit" aria="Submit contact form" className="w-full">
                      Request Quote
                    </CleanButton>
                  </form>
                </div>

                {/* Contact Info & CTA */}
                <div className="space-y-8">
                  <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8">
                    <h3 className="text-2xl font-bold text-slate-900 mb-6 tracking-tight">
                      Prefer a Direct Conversation?
                    </h3>
                    <p className="text-slate-600 mb-6">
                      Sometimes it's easier to talk through your needs. Schedule a free consultation call to discuss your project in detail.
                    </p>
                    <CleanButton href="/consultation" aria="Book free consultation" className="w-full mb-4">
                      Book Free Consultation
                    </CleanButton>
                    <p className="text-sm text-slate-500 text-center">
                      No sales pressure. Just honest advice about what's best for your business.
                    </p>
                  </div>

                  <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8">
                    <h3 className="text-xl font-bold text-slate-900 mb-4 tracking-tight">
                      What Happens Next?
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-[#0A2540] text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                        <div>
                          <h4 className="font-semibold text-slate-900">Quick Response</h4>
                          <p className="text-slate-600 text-sm">We'll respond within 24 hours with initial thoughts and next steps.</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-[#0A2540] text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                        <div>
                          <h4 className="font-semibold text-slate-900">Discovery Call</h4>
                          <p className="text-slate-600 text-sm">Free 30-minute call to understand your needs and goals.</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-[#0A2540] text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                        <div>
                          <h4 className="font-semibold text-slate-900">Custom Proposal</h4>
                          <p className="text-slate-600 text-sm">Detailed proposal with timeline, deliverables, and transparent pricing.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </section>

      {/* Why Partner With Us Section - Dark Navy (index 1) */}
      <section className="bg-slate-900">
        <div className="py-14 md:py-20">
          <Container>
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">
                  Why Partner With Strive Technology Group
                </h2>
                <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
                  We deliver enterprise-grade technology solutions that help small and mid-sized businesses compete at scale.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                {/* Value Proposition 1 */}
                <div className="bg-slate-800 border border-slate-700 rounded-2xl p-8 text-center group hover:bg-slate-700 transition-colors duration-300">
                  <div className="w-16 h-16 bg-[#0A2540] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 tracking-tight">
                    Expert Team, Startup Cost
                  </h3>
                  <p className="text-slate-300 leading-relaxed mb-4">
                    Access senior-level developers, strategists, and digital marketers without the $200K+ annual overhead of full-time hires.
                  </p>
                  <div className="text-sm text-slate-400">
                    Save 60-70% compared to in-house teams
                  </div>
                </div>

                {/* Value Proposition 2 */}
                <div className="bg-slate-800 border border-slate-700 rounded-2xl p-8 text-center group hover:bg-slate-700 transition-colors duration-300">
                  <div className="w-16 h-16 bg-[#0A2540] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 tracking-tight">
                    Proven Track Record
                  </h3>
                  <p className="text-slate-300 leading-relaxed mb-4">
                    We've helped businesses achieve 3-5x more qualified leads through professional websites and strategic SEO optimization.
                  </p>
                  <div className="text-sm text-slate-400">
                    Measurable ROI within 90 days
                  </div>
                </div>

                {/* Value Proposition 3 */}
                <div className="bg-slate-800 border border-slate-700 rounded-2xl p-8 text-center group hover:bg-slate-700 transition-colors duration-300">
                  <div className="w-16 h-16 bg-[#0A2540] rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 tracking-tight">
                    Speed to Market
                  </h3>
                  <p className="text-slate-300 leading-relaxed mb-4">
                    Launch professional solutions in weeks, not months. Our streamlined process gets you operational fast.
                  </p>
                  <div className="text-sm text-slate-400">
                    Most projects live within 2-4 weeks
                  </div>
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="bg-slate-800 border border-slate-700 rounded-2xl p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">
                      Built for Business Growth
                    </h3>
                    <p className="text-slate-300 leading-relaxed mb-6">
                      Every solution we build is designed to scale with your business. From startup to enterprise, our technology foundation grows with you.
                    </p>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-[#0A2540] rounded-full"></div>
                        <span className="text-slate-300">Enterprise-grade security and performance</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-[#0A2540] rounded-full"></div>
                        <span className="text-slate-300">24/7 monitoring and proactive maintenance</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-[#0A2540] rounded-full"></div>
                        <span className="text-slate-300">Transparent communication and regular updates</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <div className="inline-flex items-center justify-center w-24 h-24 bg-[#0A2540] rounded-full mb-6">
                      <span className="text-white font-bold text-2xl">STG</span>
                    </div>
                    <div className="space-y-4">
                      <div>
                        <div className="text-3xl font-bold text-white">2-4 weeks</div>
                        <div className="text-slate-400">Average project timeline</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-white">24/7</div>
                        <div className="text-slate-400">Support & monitoring</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* CTA */}
              <div className="text-center mt-12">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Ready to Scale Your Business?
                </h3>
                <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                  Join successful businesses that have transformed their operations with our proven technology solutions.
                </p>
                <CleanButton href="/consultation" aria="Book free consultation" isDark={true}>
                  Book Free Consultation
                </CleanButton>
              </div>
            </div>
          </Container>
        </div>
      </section>
    </main>
  );
}
