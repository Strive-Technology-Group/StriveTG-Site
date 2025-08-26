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
      <Section background="dark" size="xl" className="bg-gradient-hero relative overflow-hidden py-20 md:py-28 lg:py-32">
        <div className="text-center animate-fade-in-up relative z-10">
          <div className="mb-6">
            <p className="text-lg md:text-xl text-accent-teal font-semibold tracking-wide uppercase">
              Strive Technology Group
            </p>
            <p className="text-sm md:text-base text-gray-400 mt-2 font-medium tracking-wide">
              Scale Smarter. Compete Bigger.
            </p>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold tracking-tight mb-8">
            Transform Your Business{' '}
            <span className="gradient-text">with Smart Technology</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed">
            Websites, SEO, and tech solutions that make small businesses unstoppable.
          </p>
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
            Get professional tech talent for less than the cost of a minimum-wage employee — Strive Technology Group powers your business operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button href="/consultation" size="lg" variant="primary" className="bg-gradient-primary hover:scale-105 hover:shadow-2xl transition-all duration-300 px-8 py-4 text-lg">
              Book a Consultation
            </Button>
            <Button href="/contact" size="lg" variant="ghost" className="px-8 py-4 text-lg">
              Request a Quote
            </Button>
          </div>
        </div>
        
        {/* Enhanced Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Radial gradient aura */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-gradient-radial from-blue-500/10 via-purple-500/5 to-transparent rounded-full blur-3xl"></div>
          
          {/* Floating decorative elements */}
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-accent-blue/10 rounded-full blur-xl animate-float"></div>
          <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-accent-teal/10 rounded-full blur-xl animate-float" style={{animationDelay: '1s'}}></div>
          <div className="absolute bottom-1/4 left-1/3 w-20 h-20 bg-accent-purple/10 rounded-full blur-xl animate-float" style={{animationDelay: '2s'}}></div>
          
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
              backgroundSize: '60px 60px'
            }}></div>
          </div>
        </div>
      </Section>

      {/* How We Scale Your Operations */}
      <Section size="xl">
        <MotionWrapper direction="fade" className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-primary mb-6 tracking-tight">
            How We Scale Your Operations
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Four core services that transform how your business operates, attracts customers, and grows revenue.
          </p>
        </MotionWrapper>
        
        <MotionStagger className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <MotionStaggerChild>
            <FeatureCard
              icon={
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              }
              title="Website Development"
              description="Responsive design, e-commerce, and booking systems that convert visitors into customers."
              benefits={[
                "Mobile-first responsive design",
                "E-commerce & booking integration",
                "Fast loading & SEO optimized"
              ]}
            />
          </MotionStaggerChild>
          
          <MotionStaggerChild>
            <FeatureCard
              icon={
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              }
              title="SEO Optimization"
              description="Rank on Google and attract nearby customers who are actively searching for your services."
              benefits={[
                "Local SEO for nearby customers",
                "Keyword research & optimization",
                "Google Business Profile setup"
              ]}
            />
          </MotionStaggerChild>
          
          <MotionStaggerChild>
            <FeatureCard
              icon={
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              }
              title="Company Analytics"
              description="Streamline workflows, reduce costs, and make data-driven decisions with actionable insights."
              benefits={[
                "Customer behavior tracking",
                "Workflow optimization",
                "ROI measurement & reporting"
              ]}
            />
          </MotionStaggerChild>
          
          <MotionStaggerChild>
            <FeatureCard
              icon={
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.196l4.243 4.243-8.486 8.486L2.5 21.5l6.565-5.257 8.486-8.486L12 2.196z" />
                </svg>
              }
              title="Ongoing Tech Support"
              description="Monthly updates, hosting, fixes, and reliable support so you can focus on running your business."
              benefits={[
                "24/7 monitoring & maintenance",
                "Regular security updates",
                "Priority technical support"
              ]}
            />
          </MotionStaggerChild>
        </MotionStagger>
      </Section>

      {/* Strive Technology Group vs Hiring In-House */}
      <Section background="gray" size="xl">
        <MotionWrapper direction="fade" className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-primary mb-6 tracking-tight">
            Strive Technology Group vs Hiring In-House
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Get enterprise-level tech expertise without the overhead costs.
          </p>
        </MotionWrapper>
        
        <MotionStagger className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <MotionStaggerChild>
            <Card className="p-8 gradient-border relative overflow-hidden group">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-brand rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Image 
                    src="/strivetg-logo.svg" 
                    alt="Strive Technology Group Logo" 
                    width={40}
                    height={40}
                    className="w-10 h-10 filter brightness-0 invert"
                  />
                </div>
                <h3 className="text-2xl font-display font-bold text-primary mb-2">Strive Technology Group</h3>
                <p className="text-accent-teal font-semibold">Professional Tech Talent</p>
              </div>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span><strong>Cost:</strong> Custom pricing (typically $1,500-5,000/month)</span>
              </li>
              <li className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span><strong>Skills:</strong> Full-stack development, SEO, analytics, support</span>
              </li>
              <li className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span><strong>Timeline:</strong> Start immediately, rapid deployment</span>
              </li>
              <li className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span><strong>Risk:</strong> No payroll overhead, flexible engagement</span>
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
      </Section>

      {/* ROI/Impact Section */}
      <Section size="xl">
        <MotionWrapper direction="fade" className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-primary mb-6 tracking-tight">
            Measurable Impact on Your Business
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            See how Strive Technology Group's tech solutions directly translate to business growth and operational efficiency.
          </p>
        </MotionWrapper>
        
        <MotionStagger className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <MotionStaggerChild>
            <Card variant="feature" className="text-center group">
              <div className="w-16 h-16 bg-gradient-brand rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
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
              <div className="w-16 h-16 bg-gradient-brand rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-display font-bold text-primary mb-3">Time Saved</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">Analytics insights save 10+ hours/week on manual reporting and admin tasks</p>
              <p className="text-sm text-gray-500">Focus on high-value activities that grow your business</p>
            </Card>
          </MotionStaggerChild>
          
          <MotionStaggerChild>
            <Card variant="feature" className="text-center group">
              <div className="w-16 h-16 bg-gradient-brand rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-display font-bold text-primary mb-3">Better Visibility</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">Improved Google ranking means more nearby customers discover your business</p>
              <p className="text-sm text-gray-500">Professional online presence builds trust and credibility</p>
            </Card>
          </MotionStaggerChild>
        </MotionStagger>
      </Section>

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
