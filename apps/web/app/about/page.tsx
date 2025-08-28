import React from 'react';
import { Metadata } from 'next';
import { MotionWrapper } from '../components/MotionWrapper';

export const metadata: Metadata = {
  title: 'About | Strive Technology Group',
  description: 'Learn about our mission to make enterprise-grade tech accessible to small businesses and meet the founder delivering tech talent directly to business owners.',
};

function Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto max-w-6xl px-4 md:px-6">{children}</div>;
}

function CleanButton({ href, children, aria, isDark = false }: { href: string; children: React.ReactNode; aria: string; isDark?: boolean }) {
  const buttonClasses = isDark 
    ? "bg-white border-2 border-white text-[#0A2540] focus-visible:ring-white"
    : "bg-[#0A2540] border-2 border-[#0A2540] text-white focus-visible:ring-[#0A2540]";
      
  const overlayColor = isDark ? "bg-[#0F2A47]" : "bg-white";
  const textColorClasses = isDark 
    ? "text-[#0A2540] group-hover:text-white"
    : "text-white group-hover:text-[#0A2540]";

  return (
    <a
      href={href}
      aria-label={aria}
      className={`group inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 font-semibold text-lg
                 ${buttonClasses} shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.02]
                 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 relative overflow-hidden`}
    >
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
    </a>
  );
}

export default function About() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-[#0E1B2B] text-white overflow-hidden">
        <Container>
          <div className="py-20 md:py-28 lg:py-32 pb-32 text-center">
            <div className="mx-auto max-w-4xl">
              <MotionWrapper direction="fade">
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-balance mb-6">
                  Making Tech Accessible
                </h1>
                <p className="text-xl md:text-2xl text-slate-300 font-light leading-relaxed mb-4">
                  Our mission is to make enterprise-grade technology accessible to small and mid-sized businesses.
                </p>
                <p className="text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto">
                  Professional tech talent delivered directly to business owners who want to compete at a higher level.
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

      {/* Mission Section - White (index 0) */}
      <section className="bg-white">
        <div className="py-14 md:py-20 border-b border-slate-200">
          <Container>
            <MotionWrapper direction="fade">
              <div className="max-w-4xl mx-auto text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8 tracking-tight">
                  Our Mission
                </h2>
                <p className="text-xl text-slate-600 leading-relaxed mb-8">
                  Every small business deserves access to the same level of technology and expertise that large corporations use to dominate their markets. We believe that with the right tech solutions, any business can compete at a higher level.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  That's why we provide professional-grade websites, SEO optimization, business analytics, and ongoing tech support at a fraction of the cost of hiring in-house talent. We're not just a service provider – we're your technology partner, invested in your success.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-[#0A2540] rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Accessibility</h3>
                  <p className="text-slate-600">
                    Making enterprise-level technology accessible to businesses of all sizes, not just large corporations.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-[#0A2540] rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Reliability</h3>
                  <p className="text-slate-600">
                    Consistent, dependable service that you can count on. Your business operations are too important for anything less.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-[#0A2540] rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">Results</h3>
                  <p className="text-slate-600">
                    Measurable outcomes that directly impact your bottom line. Every solution is designed with your ROI in mind.
                  </p>
                </div>
              </div>
            </MotionWrapper>
          </Container>
        </div>
      </section>

      {/* Team Section - Dark Navy (index 1) */}
      <section className="bg-slate-900">
        <div className="py-14 md:py-20 border-b border-slate-700">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 tracking-tight">
                  Meet Our Team
                </h2>
                <p className="text-lg text-slate-300 leading-relaxed mb-6">
                  At Strive Technology Group, we deliver professional tech talent directly to business owners who want to compete at a higher level without the overhead of hiring full-time employees.
                </p>
                <p className="text-lg text-slate-300 leading-relaxed mb-6">
                  We've seen too many great businesses struggle with outdated websites, poor search visibility, and manual processes that waste time and money. That's what drives us to provide enterprise-grade solutions at prices that make sense for growing businesses.
                </p>
                <p className="text-lg text-slate-300 leading-relaxed mb-8">
                  When you work with Strive Technology Group, you're not just getting a service provider – you're getting a dedicated technology partner who understands that your success is our success.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <CleanButton href="/consultation" aria="Schedule a consultation call" isDark={true}>
                    Schedule a Call
                  </CleanButton>
                  <CleanButton href="/services" aria="View our services" isDark={true}>
                    View Services
                  </CleanButton>
                </div>
              </div>
              
              <div className="bg-slate-800 border border-slate-700 rounded-2xl p-8">
                <div className="text-center mb-6">
                  <div className="w-24 h-24 bg-[#0A2540] rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-3xl">STG</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white">Professional Tech Expertise</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-[#0A2540] mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-slate-300">Full-stack web development expertise</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-[#0A2540] mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-slate-300">SEO and digital marketing knowledge</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-[#0A2540] mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-slate-300">Business analytics and automation</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-[#0A2540] mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-slate-300">Dedicated ongoing support</span>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </section>

      {/* Values Section - White (index 2) */}
      <section className="bg-white">
        <div className="py-14 md:py-20 border-b border-slate-200">
          <Container>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
                Our Core Values
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                These principles guide every decision we make and every solution we deliver.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Transparency</h3>
                <p className="text-slate-600 mb-4">
                  Clear communication, honest pricing, and realistic timelines. You'll always know exactly what you're getting and when to expect it.
                </p>
                <p className="text-sm text-slate-500">
                  No hidden fees, no surprise changes, no confusing technical jargon.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Partnership</h3>
                <p className="text-slate-600 mb-4">
                  We're not just a vendor – we're your technology partner. Your business goals become our goals, and your success is our success.
                </p>
                <p className="text-sm text-slate-500">
                  Long-term relationships built on trust and measurable results.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Quality</h3>
                <p className="text-slate-600 mb-4">
                  Every solution is built to enterprise standards. We don't cut corners because your business reputation depends on what we deliver.
                </p>
                <p className="text-sm text-slate-500">
                  Professional-grade solutions that perform reliably day after day.
                </p>
              </div>

              <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Growth Focus</h3>
                <p className="text-slate-600 mb-4">
                  Every recommendation and solution is designed with your business growth in mind. We help you build systems that scale.
                </p>
                <p className="text-sm text-slate-500">
                  Technology that grows with your business, not against it.
                </p>
              </div>
            </div>
          </Container>
        </div>
      </section>

      {/* CTA Section - Dark Navy (index 3) */}
      <section className="bg-slate-900">
        <div className="py-14 md:py-20">
          <Container>
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-slate-300 mb-8">
                Let's discuss how we can help your business scale smarter and compete bigger.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <CleanButton href="/consultation" aria="Book free consultation" isDark={true}>
                  Book Free Consultation
                </CleanButton>
                <CleanButton href="/contact" aria="Send us a message" isDark={true}>
                  Send Us a Message
                </CleanButton>
              </div>
            </div>
          </Container>
        </div>
      </section>
    </main>
  );
}
