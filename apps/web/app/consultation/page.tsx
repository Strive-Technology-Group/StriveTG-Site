'use client';

import React, { useState, useEffect } from 'react';
import { Metadata } from 'next';
import { MotionWrapper, MotionStagger, MotionStaggerChild } from '../components/MotionWrapper';

// Declare Calendly global type
declare global {
  interface Window {
    Calendly: {
      initInlineWidget: (options: { url: string; parentElement: Element }) => void;
    };
  }
}

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

export default function Consultation() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Load Calendly script
  useEffect(() => {
    const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
    
    if (!existingScript) {
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      document.body.appendChild(script);
    }

    return () => {
      // Cleanup script on unmount
      const scriptToRemove = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
      if (scriptToRemove) {
        document.body.removeChild(scriptToRemove);
      }
    };
  }, []);

  // Initialize Calendly widget on page load
  useEffect(() => {
    // Wait for script to load and DOM to be ready
    const initWidget = () => {
      const widget = document.querySelector('#calendly-widget-consultation');
      if (widget && window.Calendly) {
        // Clear any existing content
        widget.innerHTML = '';
        window.Calendly.initInlineWidget({
          url: 'https://calendly.com/contact-strivetg/30min?hide_event_type_details=1&hide_gdpr_banner=1&primary_color=0f1c2b',
          parentElement: widget
        });
      } else if (widget) {
        // If Calendly script isn't loaded yet, try again
        setTimeout(initWidget, 200);
      }
    };
    
    setTimeout(initWidget, 100);
  }, []);

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
                Consultation Request Received!
              </h2>
              <p className="text-lg text-slate-600 mb-6">
                Thank you for booking your consultation! You should receive a confirmation email shortly with all the details for your upcoming phone call.
              </p>
              <p className="text-slate-600 mb-8">
                Come prepared to discuss your business goals, current challenges, and what success looks like for your company.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <CleanButton href="/services" aria="Explore our services">
                  Explore Our Services
                </CleanButton>
                <CleanButton href="/contact" aria="Contact us for more information">
                  Contact Us
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
                  Book Your Free Consultation
                </h1>
                <p className="text-xl md:text-2xl text-slate-300 font-light leading-relaxed mb-4">
                  The fastest way to get started. Let's discuss your business needs and explore how we can help you scale smarter.
                </p>
                <p className="text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto">
                  No sales pressure. Just honest advice about what's best for your business.
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

      {/* Book Consultation - White (index 0) */}
      <section className="bg-white">
        <div className="py-14 md:py-20 border-b border-slate-200">
          <Container>
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 tracking-tight">
                  Schedule Your Free Consultation
                </h2>
                <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                  Book a 30-minute phone consultation to discuss your business goals and discover how we can help you scale with the right technology solutions.
                </p>
              </div>

              <MotionWrapper direction="up">
                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 shadow-lg">
                  <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                    {/* Benefits Column */}
                    <div className="lg:col-span-2 space-y-6">
                      <h3 className="text-xl font-bold text-slate-900 mb-4 tracking-tight">
                        What You'll Get:
                      </h3>
                      <ul className="space-y-4">
                        <li className="flex items-start space-x-3">
                          <div className="w-6 h-6 bg-[#0A2540] rounded-full flex items-center justify-center mt-0.5">
                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div>
                            <span className="font-semibold text-slate-900">Business Assessment</span>
                            <p className="text-sm text-slate-600 mt-1">Comprehensive review of your current tech setup and business goals</p>
                          </div>
                        </li>
                        <li className="flex items-start space-x-3">
                          <div className="w-6 h-6 bg-[#0A2540] rounded-full flex items-center justify-center mt-0.5">
                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div>
                            <span className="font-semibold text-slate-900">Strategic Roadmap</span>
                            <p className="text-sm text-slate-600 mt-1">Clear next steps and recommendations for your business</p>
                          </div>
                        </li>
                        <li className="flex items-start space-x-3">
                          <div className="w-6 h-6 bg-[#0A2540] rounded-full flex items-center justify-center mt-0.5">
                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div>
                            <span className="font-semibold text-slate-900">Custom Proposal</span>
                            <p className="text-sm text-slate-600 mt-1">Tailored solution with transparent pricing and timeline</p>
                          </div>
                        </li>
                        <li className="flex items-start space-x-3">
                          <div className="w-6 h-6 bg-[#0A2540] rounded-full flex items-center justify-center mt-0.5">
                            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                          </div>
                          <div>
                            <span className="font-semibold text-slate-900">No Pressure</span>
                            <p className="text-sm text-slate-600 mt-1">Honest advice about what's best for your business</p>
                          </div>
                        </li>
                      </ul>
                    </div>

                    {/* Calendly Widget Column */}
                    <div className="lg:col-span-3">
                      <div 
                        id="calendly-widget-consultation"
                        className="calendly-inline-widget" 
                        data-url="https://calendly.com/contact-strivetg/30min?hide_event_type_details=1&hide_gdpr_banner=1&primary_color=0f1c2b" 
                        style={{ minWidth: '320px', height: '600px' }}
                      />
                    </div>
                  </div>
                </div>
              </MotionWrapper>
            </div>
          </Container>
        </div>
      </section>




    </main>
  );
}
