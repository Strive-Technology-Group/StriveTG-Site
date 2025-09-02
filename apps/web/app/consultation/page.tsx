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
  const [selectedOption, setSelectedOption] = useState<'meeting' | 'consultation' | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    business: '',
    phone: '',
    preferredTime: '',
    timezone: '',
    message: ''
  });
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

  // Initialize Calendly widget when meeting option is selected
  useEffect(() => {
    if (selectedOption === 'meeting') {
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
    }
  }, [selectedOption]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Consultation request:', { option: selectedOption, ...formData });
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
                Consultation Request Received!
              </h2>
              <p className="text-lg text-slate-600 mb-6">
                {selectedOption === 'meeting' 
                  ? "We'll send you a calendar link within the next hour to schedule your free consultation."
                  : "We'll call you within 24 hours at your preferred time for your 30-minute consultation to discuss your tech needs."
                }
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

      {/* Consultation Options - White (index 0) */}
      <section className="bg-white">
        <div className="py-14 md:py-20 border-b border-slate-200">
          <Container>
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 tracking-tight">
                  Choose Your Preferred Method
                </h2>
                <p className="text-xl text-slate-600">
                  Pick the option that works best for your schedule.
                </p>
              </div>

              <MotionStagger className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <MotionStaggerChild>
                  <div 
                    className={`bg-slate-50 border rounded-2xl p-8 cursor-pointer transition-all duration-300 group relative overflow-hidden ${
                      selectedOption === 'meeting' 
                        ? 'ring-2 ring-[#0A2540] border-[#0A2540]' 
                        : 'border-slate-200 hover:shadow-lg hover:-translate-y-1'
                    }`}
                    onClick={() => {
                      setSelectedOption('meeting');
                    }}
                  >
                    <div className="text-center relative z-10">
                      <div className="w-16 h-16 bg-[#0A2540] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">
                        Book a Meeting
                      </h3>
                      <p className="text-slate-600 mb-6 leading-relaxed">
                        Schedule a video call at your convenience using our online calendar.
                      </p>
                      <ul className="text-sm text-slate-600 text-left space-y-3">
                        <li className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-[#0A2540] rounded-full"></div>
                          <span>Choose from available time slots</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-[#0A2540] rounded-full"></div>
                          <span>Automatic calendar reminders</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-[#0A2540] rounded-full"></div>
                          <span>Video call via Zoom or Google Meet</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-[#0A2540] rounded-full"></div>
                          <span>30-45 minute discussion</span>
                        </li>
                      </ul>
                    </div>
                    {selectedOption === 'meeting' && (
                      <div className="absolute inset-0 bg-[#0A2540] opacity-5 rounded-2xl"></div>
                    )}
                  </div>
                </MotionStaggerChild>

                <MotionStaggerChild>
                  <div 
                    className={`bg-slate-50 border rounded-2xl p-8 cursor-pointer transition-all duration-300 group relative overflow-hidden ${
                      selectedOption === 'consultation' 
                        ? 'ring-2 ring-[#0A2540] border-[#0A2540]' 
                        : 'border-slate-200 hover:shadow-lg hover:-translate-y-1'
                    }`}
                    onClick={() => setSelectedOption('consultation')}
                  >
                    <div className="text-center relative z-10">
                      <div className="w-16 h-16 bg-[#0A2540] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">
                        30 Minute Consultation
                      </h3>
                      <p className="text-slate-600 mb-6 leading-relaxed">
                        Schedule a consultation call to discuss your business needs and goals.
                      </p>
                      <ul className="text-sm text-slate-600 text-left space-y-3">
                        <li className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-[#0A2540] rounded-full"></div>
                          <span>Dedicated 30-minute consultation</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-[#0A2540] rounded-full"></div>
                          <span>Phone or video call options</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-[#0A2540] rounded-full"></div>
                          <span>Personalized business assessment</span>
                        </li>
                        <li className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-[#0A2540] rounded-full"></div>
                          <span>Strategic recommendations</span>
                        </li>
                      </ul>
                    </div>
                    {selectedOption === 'consultation' && (
                      <div className="absolute inset-0 bg-[#0A2540] opacity-5 rounded-2xl"></div>
                    )}
                  </div>
                </MotionStaggerChild>
              </MotionStagger>

              {/* Form or Calendly Widget */}
              {selectedOption && (
                <MotionWrapper direction="up">
                  <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 shadow-lg">
                    {selectedOption === 'meeting' ? (
                      <>
                        <h3 className="text-2xl font-bold text-slate-900 mb-6 tracking-tight">
                          Schedule Your Meeting
                        </h3>
                        <div 
                          id="calendly-widget-consultation"
                          className="calendly-inline-widget" 
                          data-url="https://calendly.com/contact-strivetg/30min?hide_event_type_details=1&hide_gdpr_banner=1&primary_color=0f1c2b" 
                          style={{ minWidth: '320px', height: '700px' }}
                        />
                      </>
                    ) : (
                      <>
                        <h3 className="text-2xl font-bold text-slate-900 mb-6 tracking-tight">
                          30 Minute Consultation Details
                        </h3>
                        <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

                      {selectedOption === 'consultation' && (
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                            Phone Number *
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            required
                            value={formData.phone}
                            onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0A2540] focus:border-transparent transition-colors bg-white"
                            placeholder="(555) 123-4567"
                          />
                        </div>
                      )}
                    </div>

                    {selectedOption === 'consultation' && (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="preferredTime" className="block text-sm font-medium text-slate-700 mb-2">
                            Preferred Call Time
                          </label>
                          <select
                            id="preferredTime"
                            value={formData.preferredTime}
                            onChange={(e) => setFormData(prev => ({ ...prev, preferredTime: e.target.value }))}
                            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0A2540] focus:border-transparent transition-colors bg-white"
                          >
                            <option value="">Select preferred time</option>
                            <option value="morning">Morning (9AM - 12PM)</option>
                            <option value="afternoon">Afternoon (12PM - 5PM)</option>
                            <option value="evening">Evening (5PM - 8PM)</option>
                          </select>
                        </div>

                        <div>
                          <label htmlFor="timezone" className="block text-sm font-medium text-slate-700 mb-2">
                            Timezone
                          </label>
                          <select
                            id="timezone"
                            value={formData.timezone}
                            onChange={(e) => setFormData(prev => ({ ...prev, timezone: e.target.value }))}
                            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0A2540] focus:border-transparent transition-colors bg-white"
                          >
                            <option value="">Select timezone</option>
                            <option value="EST">Eastern (EST/EDT)</option>
                            <option value="CST">Central (CST/CDT)</option>
                            <option value="MST">Mountain (MST/MDT)</option>
                            <option value="PST">Pacific (PST/PDT)</option>
                          </select>
                        </div>
                      </div>
                    )}

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                        Brief Description of Your Needs
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                        className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#0A2540] focus:border-transparent transition-colors resize-vertical bg-white"
                        placeholder="Tell us about your business goals and what you're hoping to achieve..."
                      />
                    </div>

                          <CleanButton type="submit" aria="Submit consultation request" className="w-full">
                            Request 30 Minute Consultation
                          </CleanButton>
                        </form>
                      </>
                    )}
                  </div>
                </MotionWrapper>
              )}
            </div>
          </Container>
        </div>
      </section>

      {/* What to Expect - Dark Navy (index 1) */}
      <section className="bg-slate-900">
        <div className="py-14 md:py-20">
          <Container>
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 tracking-tight">
                What to Expect During Your Consultation
              </h2>
              
              <MotionStagger className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <MotionStaggerChild>
                  <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6 text-center group">
                    <div className="w-12 h-12 bg-[#0A2540] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
                      1
                    </div>
                    <h3 className="text-lg font-bold text-white mb-3 tracking-tight">
                      Business Discovery
                    </h3>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      We'll discuss your current business situation, goals, and challenges to understand how technology can help.
                    </p>
                  </div>
                </MotionStaggerChild>

                <MotionStaggerChild>
                  <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6 text-center group">
                    <div className="w-12 h-12 bg-[#0A2540] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
                      2
                    </div>
                    <h3 className="text-lg font-bold text-white mb-3 tracking-tight">
                      Solution Planning
                    </h3>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      We'll explore potential solutions and discuss which services would provide the most value for your business.
                    </p>
                  </div>
                </MotionStaggerChild>

                <MotionStaggerChild>
                  <div className="bg-slate-800 border border-slate-700 rounded-2xl p-6 text-center group">
                    <div className="w-12 h-12 bg-[#0A2540] text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
                      3
                    </div>
                    <h3 className="text-lg font-bold text-white mb-3 tracking-tight">
                      Next Steps
                    </h3>
                    <p className="text-slate-300 text-sm leading-relaxed">
                      If it's a good fit, we'll outline next steps including timeline and budget. No pressure - just clear information.
                    </p>
                  </div>
                </MotionStaggerChild>
              </MotionStagger>

              <MotionWrapper direction="up" delay={0.3}>
                <div className="mt-8 bg-slate-800 border border-slate-700 rounded-2xl p-6">
                  <p className="text-slate-300 font-medium leading-relaxed">
                    <strong className="text-white">Remember:</strong> This is a consultation, not a sales call. Our goal is to understand your needs and provide honest advice about whether we're the right fit for your business.
                  </p>
                </div>
              </MotionWrapper>
            </div>
          </Container>
        </div>
      </section>


    </main>
  );
}
