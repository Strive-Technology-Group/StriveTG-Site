import React from 'react';
import Image from 'next/image';
import { Button } from './components/Button';
import { Section } from './components/Section';
import { FeatureCard } from './components/FeatureCard';
import { Card } from './components/Card';
import { MotionWrapper, MotionStagger, MotionStaggerChild } from './components/MotionWrapper';
import { ProcessTimeline } from './components/ProcessTimeline';
import { CTAStrip } from './components/CTAStrip';
import PremiumCompare from './components/PremiumCompare';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-[#0E1B2B] text-white overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-20 md:py-28 lg:py-32 pb-32 text-center">
            <div className="mx-auto max-w-4xl">

              <h1 className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-balance mb-6">
                Transform Your Business with Smart Technology
              </h1>
              <p className="text-xl md:text-2xl text-slate-300 font-light leading-relaxed mb-4">
                Smart websites, SEO, and analytics that help small and mid sized businesses scale faster and compete with bigger players.
              </p>
              <p className="text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto mb-12">
                Access top-tier tech expertise—without the overhead of hiring in-house.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <a
                  href="/consultation"
                  aria-label="Book consultation"
                  className="group inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 font-semibold text-lg
                           bg-white border-2 border-white text-[#0A2540] focus-visible:ring-white shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.02]
                           focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-[#0F2A47] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-400 ease-out" />
                  <span className="relative z-10 tracking-wide transition-all duration-400 text-[#0A2540] group-hover:text-white">
                    Book a Consultation
                  </span>
                  <svg 
                    className="w-5 h-5 transition-all duration-400 group-hover:translate-x-1 relative z-10 text-[#0A2540] group-hover:text-white"
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
                <a
                  href="/contact"
                  aria-label="Request a quote"
                  className="group inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 font-semibold text-lg
                           bg-transparent border-2 border-white text-white focus-visible:ring-white shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.02]
                           focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-white translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-400 ease-out" />
                  <span className="relative z-10 tracking-wide transition-all duration-400 text-white group-hover:text-[#0A2540]">
                    Get In Touch
                  </span>
                  <svg 
                    className="w-5 h-5 transition-all duration-400 group-hover:translate-x-1 relative z-10 text-white group-hover:text-[#0A2540]"
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
              </div>
            </div>
          </div>
        </div>
        
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

      {/* How We Scale Your Operations */}
      <section className="bg-white">
        <div className="py-14 md:py-20 border-b border-slate-200">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <MotionWrapper direction="fade" className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-6 tracking-tight">
                How We Scale Your Operations
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Five comprehensive services that transform how your business operates, attracts customers, and grows revenue.
              </p>
            </MotionWrapper>

            <div className="max-w-3xl mx-auto">
              <MotionStagger className="space-y-3">
                {/* 1. Website Development & Hosting */}
                <MotionStaggerChild>
                  <a
                    href="/services#website-development"
                    className="group flex items-center gap-4 p-4 bg-white border-2 border-slate-200 rounded-lg hover:border-[#0A2540] hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="w-8 h-8 bg-[#0A2540] rounded-full flex items-center justify-center text-white font-bold text-sm group-hover:scale-110 transition-transform duration-300">
                      1
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-slate-900 group-hover:text-[#0A2540] transition-colors">
                        Website Development & Hosting
                      </h3>
                      <p className="text-slate-600 text-sm">
                        Modern, scalable websites that give your brand a professional online presence.
                      </p>
                    </div>
                    <div className="text-slate-400 group-hover:text-[#0A2540] group-hover:translate-x-1 transition-all duration-300">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </a>
                </MotionStaggerChild>

                {/* 2. Website Upkeep & Support */}
                <MotionStaggerChild>
                  <a
                    href="/services#upkeep-support"
                    className="group flex items-center gap-4 p-4 bg-white border-2 border-slate-200 rounded-lg hover:border-[#0A2540] hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="w-8 h-8 bg-[#0A2540] rounded-full flex items-center justify-center text-white font-bold text-sm group-hover:scale-110 transition-transform duration-300">
                      2
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-slate-900 group-hover:text-[#0A2540] transition-colors">
                        Website Upkeep & Support
                      </h3>
                      <p className="text-slate-600 text-sm">
                        Your site should run smoothly without you having to worry.
                      </p>
                    </div>
                    <div className="text-slate-400 group-hover:text-[#0A2540] group-hover:translate-x-1 transition-all duration-300">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </a>
                </MotionStaggerChild>

                {/* 3. Search & Visibility Suite */}
                <MotionStaggerChild>
                  <a
                    href="/services#search-visibility"
                    className="group flex items-center gap-4 p-4 bg-white border-2 border-slate-200 rounded-lg hover:border-[#0A2540] hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="w-8 h-8 bg-[#0A2540] rounded-full flex items-center justify-center text-white font-bold text-sm group-hover:scale-110 transition-transform duration-300">
                      3
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-slate-900 group-hover:text-[#0A2540] transition-colors">
                        Search & Visibility Suite
                      </h3>
                      <p className="text-slate-600 text-sm">
                        Helping your business get found on search engines — and now through AI tools.
                      </p>
                    </div>
                    <div className="text-slate-400 group-hover:text-[#0A2540] group-hover:translate-x-1 transition-all duration-300">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </a>
                </MotionStaggerChild>

                {/* 4. Insight Analytics Pipelines */}
                <MotionStaggerChild>
                  <a
                    href="/services#analytics-pipelines"
                    className="group flex items-center gap-4 p-4 bg-white border-2 border-slate-200 rounded-lg hover:border-[#0A2540] hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="w-8 h-8 bg-[#0A2540] rounded-full flex items-center justify-center text-white font-bold text-sm group-hover:scale-110 transition-transform duration-300">
                      4
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-slate-900 group-hover:text-[#0A2540] transition-colors">
                        Insight Analytics Pipelines
                      </h3>
                      <p className="text-slate-600 text-sm">
                        Turn raw data into actionable insights with custom analytics systems.
                      </p>
                    </div>
                    <div className="text-slate-400 group-hover:text-[#0A2540] group-hover:translate-x-1 transition-all duration-300">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </a>
                </MotionStaggerChild>

                {/* 5. AI Automation */}
                <MotionStaggerChild>
                  <a
                    href="/services#ai-automation"
                    className="group flex items-center gap-4 p-4 bg-white border-2 border-slate-200 rounded-lg hover:border-[#0A2540] hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="w-8 h-8 bg-[#0A2540] rounded-full flex items-center justify-center text-white font-bold text-sm group-hover:scale-110 transition-transform duration-300">
                      5
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-slate-900 group-hover:text-[#0A2540] transition-colors">
                        AI Automation
                      </h3>
                      <p className="text-slate-600 text-sm">
                        Automate, accelerate, and scale your business processes.
                      </p>
                    </div>
                    <div className="text-slate-400 group-hover:text-[#0A2540] group-hover:translate-x-1 transition-all duration-300">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </a>
                </MotionStaggerChild>
              </MotionStagger>
            </div>

            {/* CTA Button */}
            <div className="text-center mt-12">
              <a
                href="/consultation"
                aria-label="Book consultation"
                className="group inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 font-semibold text-lg
                         bg-[#0A2540] border-2 border-[#0A2540] text-white focus-visible:ring-[#0A2540] shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.02]
                         focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-white translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-400 ease-out" />
                <span className="relative z-10 tracking-wide transition-all duration-400 text-white group-hover:text-[#0A2540]">
                  Book a Consultation
                </span>
                <svg 
                  className="w-5 h-5 transition-all duration-400 group-hover:translate-x-1 relative z-10 text-white group-hover:text-[#0A2540]"
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
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <PremiumCompare />

      {/* ROI/Impact Section */}
      <section className="bg-white">
        <div className="py-14 md:py-20 border-b border-slate-200">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <MotionWrapper direction="fade" className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-6 tracking-tight">
                Measurable Impact on Your Business
              </h2>
              <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
                See how Strive Technology Group's tech solutions directly translate to business growth and operational efficiency.
              </p>
            </MotionWrapper>
        
        <MotionStagger className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <MotionStaggerChild>
            <Card variant="feature" className="text-center group">
              <div className="w-16 h-16 bg-[#0A2540] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-2xl font-display font-bold text-primary mb-3">More Leads</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">Professional website + SEO = 3-5x more qualified leads from Google search</p>
              <p className="text-sm text-gray-500">Faster customer response through automated booking systems</p>
            </Card>
          </MotionStaggerChild>
          
          <MotionStaggerChild>
            <Card variant="feature" className="text-center group">
              <div className="w-16 h-16 bg-[#0A2540] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-display font-bold text-slate-900 mb-3">Time Saved</h3>
              <p className="text-slate-600 mb-4 leading-relaxed">Analytics insights save 10+ hours/week on manual reporting and admin tasks</p>
              <p className="text-sm text-slate-500">Focus on high-value activities that grow your business</p>
            </Card>
          </MotionStaggerChild>
          
          <MotionStaggerChild>
            <Card variant="feature" className="text-center group">
              <div className="w-16 h-16 bg-[#0A2540] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-display font-bold text-slate-900 mb-3">Better Visibility</h3>
              <p className="text-slate-600 mb-4 leading-relaxed">Improved Google ranking means more nearby customers discover your business</p>
              <p className="text-sm text-slate-500">Professional online presence builds trust and credibility</p>
            </Card>
          </MotionStaggerChild>
        </MotionStagger>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-slate-900 py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <MotionWrapper direction="fade" className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6 tracking-tight">
            How We Work Together
          </h2>
          <p className="text-lg text-slate-300 leading-relaxed">
            A proven 4-step process that gets results fast.
          </p>
        </MotionWrapper>
        
        <ProcessTimeline steps={[
          {
            step: '01',
            title: 'Discover',
            description: 'Free consultation to understand your business goals and technical needs.',
            icon: (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            )
          },
          {
            step: '02',
            title: 'Plan',
            description: 'Custom proposal with clear timeline, deliverables, and transparent pricing.',
            icon: (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            )
          },
          {
            step: '03',
            title: 'Build',
            description: 'Rapid development with regular updates and your feedback integrated throughout.',
            icon: (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            )
          },
          {
            step: '04',
            title: 'Optimize',
            description: 'Ongoing monitoring, updates, and optimization to maximize your ROI.',
            icon: (
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            )
          }
        ]} />
        </div>
      </section>

      {/* CTA Section */}
      <Section size="lg">
        <MotionWrapper direction="fade" className="text-center">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-primary mb-6 tracking-tight">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-3xl mx-auto">
            Join successful businesses that have scaled smarter with our proven tech solutions. Get your free consultation today.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="/consultation"
              aria-label="Book consultation"
              className="group inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 font-semibold text-lg
                       bg-[#0A2540] border-2 border-[#0A2540] text-white focus-visible:ring-[#0A2540] shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.02]
                       focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-white translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-400 ease-out" />
              <span className="relative z-10 tracking-wide transition-all duration-400 text-white group-hover:text-[#0A2540]">
                Book Free Consultation
              </span>
              <svg 
                className="w-5 h-5 transition-all duration-400 group-hover:translate-x-1 relative z-10 text-white group-hover:text-[#0A2540]"
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
            <a
              href="/contact"
              aria-label="Contact us"
              className="group inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 font-semibold text-lg
                       bg-transparent border-2 border-[#0A2540] text-[#0A2540] focus-visible:ring-[#0A2540] shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.02]
                       focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-[#0A2540] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-400 ease-out" />
              <span className="relative z-10 tracking-wide transition-all duration-400 text-[#0A2540] group-hover:text-white">
                Contact Us
              </span>
              <svg 
                className="w-5 h-5 transition-all duration-400 group-hover:translate-x-1 relative z-10 text-[#0A2540] group-hover:text-white"
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
          </div>
        </MotionWrapper>
      </Section>

    </>
  );
}
