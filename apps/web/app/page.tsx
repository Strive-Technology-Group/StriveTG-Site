import React from 'react';
import Image from 'next/image';
import { Button } from './components/Button';
import { Section } from './components/Section';
import { FeatureCard } from './components/FeatureCard';
import { Card } from './components/Card';
import { MotionWrapper, MotionStagger, MotionStaggerChild } from './components/MotionWrapper';
import { ProcessTimeline } from './components/ProcessTimeline';
import { CTAStrip } from './components/CTAStrip';

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
                    Request a Quote
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
          </div>
        </div>
      </section>

      {/* Strive Technology Group vs Hiring In-House */}
      <section className="bg-slate-900">
        <div className="py-14 md:py-20 border-b border-slate-700">
          <div className="mx-auto max-w-6xl px-4 md:px-6">
            <MotionWrapper direction="fade" className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6 tracking-tight">
                Strive Technology Group vs Hiring In-House
              </h2>
              <p className="text-lg text-slate-300 leading-relaxed">
                Get enterprise-level tech expertise without the overhead costs.
              </p>
            </MotionWrapper>
        
        <MotionStagger className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <MotionStaggerChild>
            <Card className="p-8 border-2 border-slate-700 bg-slate-800 relative overflow-hidden group">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Image 
                    src="/Full logo.svg" 
                    alt="Strive Technology Group Logo" 
                    width={40}
                    height={40}
                    className="w-10 h-10 filter brightness-0 invert"
                  />
                </div>
                <h3 className="text-2xl font-display font-bold text-white mb-2">Strive Technology Group</h3>
                <p className="text-accent-teal font-semibold">Professional Tech Talent</p>
              </div>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-slate-300"><strong className="text-white">Cost:</strong> Custom pricing (typically $1,500-5,000/month)</span>
              </li>
              <li className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-slate-300"><strong className="text-white">Skills:</strong> Full-stack development, SEO, analytics, support</span>
              </li>
              <li className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-slate-300"><strong className="text-white">Timeline:</strong> Start immediately, rapid deployment</span>
              </li>
              <li className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-slate-300"><strong className="text-white">Risk:</strong> No payroll overhead, flexible engagement</span>
              </li>
            </ul>
          </Card>
          
          </MotionStaggerChild>
          
          <MotionStaggerChild>
            <Card className="p-8 opacity-75 relative overflow-hidden">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gray-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-display font-bold text-gray-600 mb-2">Hiring In-House</h3>
                <p className="text-gray-500 font-semibold">Traditional Employee</p>
              </div>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                <span><strong>Cost:</strong> $40,000-80,000+ salary + benefits</span>
              </li>
              <li className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                <span><strong>Skills:</strong> Limited to one area of expertise</span>
              </li>
              <li className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                <span><strong>Timeline:</strong> 2-6 months to hire and onboard</span>
              </li>
              <li className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                <span><strong>Risk:</strong> Payroll overhead, training costs, turnover</span>
              </li>
            </ul>
            </Card>
          </MotionStaggerChild>
        </MotionStagger>
          </div>
        </div>
      </section>

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
      <Section background="gray" size="xl">
        <MotionWrapper direction="fade" className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-primary mb-6 tracking-tight">
            How We Work Together
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            A proven 4-step process that gets results fast.
          </p>
        </MotionWrapper>
        
        <ProcessTimeline steps={[
          {
            step: '01',
            title: 'Discover',
            description: 'Free consultation to understand your business goals and technical needs.',
            icon: (
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            )
          },
          {
            step: '02',
            title: 'Plan',
            description: 'Custom proposal with clear timeline, deliverables, and transparent pricing.',
            icon: (
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            )
          },
          {
            step: '03',
            title: 'Build',
            description: 'Rapid development with regular updates and your feedback integrated throughout.',
            icon: (
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            )
          }
        ]} />
      </Section>

      {/* Trust Section */}
      <Section size="xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-primary mb-6">
            Built on Trust & Results
          </h2>
          <p className="text-lg text-gray-600 mb-12">
            Your success is our success. Every solution is designed with your business growth in mind.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="flex items-center justify-center space-x-3 p-4 bg-secondary rounded-lg">
              <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-semibold text-primary">Privacy & Security</span>
            </div>
            <div className="flex items-center justify-center space-x-3 p-4 bg-secondary rounded-lg">
              <svg className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-semibold text-primary">Quality Guaranteed</span>
            </div>
            <div className="flex items-center justify-center space-x-3 p-4 bg-secondary rounded-lg">
              <svg className="w-6 h-6 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
              </svg>
              <span className="font-semibold text-primary">Dedicated Support</span>
            </div>
          </div>
          
          {/* Testimonials placeholder */}
          <Card className="max-w-4xl mx-auto p-8 text-center">
            <p className="text-lg text-gray-600 italic mb-4">
              "Client testimonials coming soon. Every project starts with understanding your unique business needs and delivering solutions that drive real results."
            </p>
            <p className="font-semibold text-primary">Ready to be our next success story?</p>
          </Card>
            </div>
        
        {/* Mid-page CTA Strip */}
        <CTAStrip
          title="Ready to Transform Your Business?"
          description="Join successful businesses that have scaled smarter with our proven tech solutions. Get your free consultation today."
          primaryButton={{
            text: "Book Free Consultation",
            href: "/consultation"
          }}
          secondaryButton={{
            text: "View Our Pricing",
            href: "/pricing"
          }}
          variant="glass"
          className="mt-16"
        />
      </Section>
      
      {/* Final CTA Strip */}
      <Section size="lg">
        <CTAStrip
          title="Start Your Digital Transformation with Strive Technology Group"
          description="Don't let technology hold your business back. Partner with Strive Technology Group and watch your business scale smarter, compete bigger, and grow faster than ever before."
          primaryButton={{
            text: "Get Started Now",
            href: "/consultation"
          }}
          secondaryButton={{
            text: "Learn More",
            href: "/about"
          }}
          variant="gradient"
        />
      </Section>
    </>
  );
}
