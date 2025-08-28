import React from 'react';
import { Metadata } from 'next';
import { MotionWrapper } from '../components/MotionWrapper';

export const metadata: Metadata = {
  title: "Terms of Service | Strive Technology Group",
  description: "Review the terms and conditions for using Strive Technology Group's services. Understand your rights and responsibilities as our client.",
  keywords: "terms of service, terms and conditions, service agreement, Strive Technology Group",
};

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-[#0E1B2B] text-white overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-16 md:py-24 text-center">
            <div className="mx-auto max-w-4xl">
              <MotionWrapper direction="fade">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight text-balance mb-6">
                  Terms of Service
                </h1>
                <p className="text-lg md:text-xl text-slate-300 font-light leading-relaxed mb-4 max-w-2xl mx-auto">
                  Understanding our service terms and your rights as a client.
                </p>
                <p className="text-sm text-slate-400 leading-relaxed">
                  Last Updated: August 28, 2025
                </p>
              </MotionWrapper>
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

      {/* Main Content */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <MotionWrapper direction="fade">
              {/* Introduction */}
              <div className="mb-12">
                <p className="text-lg text-slate-600 leading-relaxed">
                  Welcome to Strive Technology Group ("Strive TG," "we," "our," or "us"). 
                  By using our services, you agree to the following Terms of Service.
                </p>
              </div>

              {/* Key Takeaways */}
              <div className="mb-12">
                <div className="bg-[#0A2540] rounded-2xl p-8 text-white">
                  <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
                    Key Takeaways (Quick Summary)
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                      <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mb-3">
                        <svg className="w-5 h-5 text-[#0A2540]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                        </svg>
                      </div>
                      <p className="text-white/90 text-sm leading-relaxed">
                        You are billed automatically each month for the agreed-upon subscription price.
                      </p>
                    </div>
                    <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                      <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mb-3">
                        <svg className="w-5 h-5 text-[#0A2540]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </div>
                      <p className="text-white/90 text-sm leading-relaxed">
                        If you cancel, all services stop immediately, including access to your website.
                      </p>
                    </div>
                    <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                      <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center mb-3">
                        <svg className="w-5 h-5 text-[#0A2540]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      </div>
                      <p className="text-white/90 text-sm leading-relaxed">
                        You may buy out your website for an additional cost, determined at cancellation.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section 1 */}
              <div className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-[#0A2540] mb-6 flex items-center">
                  <span className="w-8 h-8 bg-[#0A2540] rounded-full flex items-center justify-center text-white font-bold text-sm mr-4">
                    1
                  </span>
                  Services Provided
                </h2>
                <div className="bg-slate-50 p-6 rounded-lg border-l-4 border-[#0A2540]">
                  <ul className="list-disc list-inside text-slate-600 space-y-3">
                    <li>Strive TG offers website development, automation, and technical services</li>
                    <li>Services are bundled into a monthly subscription plan at a fixed upfront price agreed upon with the client</li>
                    <li>The subscription covers all selected services at the time of onboarding</li>
                  </ul>
                </div>
              </div>

              {/* Section 2 */}
              <div className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-[#0A2540] mb-6 flex items-center">
                  <span className="w-8 h-8 bg-[#0A2540] rounded-full flex items-center justify-center text-white font-bold text-sm mr-4">
                    2
                  </span>
                  Payment &amp; Billing
                </h2>
                <div className="space-y-4">
                  <div className="bg-slate-50 p-6 rounded-lg border-l-4 border-[#0A2540]">
                    <h3 className="text-lg font-semibold text-slate-900 mb-3">Automatic Billing</h3>
                    <p className="text-slate-600 leading-relaxed">
                      By subscribing, you authorize Strive TG to charge your chosen payment method automatically on a recurring monthly basis.
                    </p>
                  </div>
                  <div className="bg-slate-50 p-6 rounded-lg border-l-4 border-[#0A2540]">
                    <h3 className="text-lg font-semibold text-slate-900 mb-3">Payment Date</h3>
                    <p className="text-slate-600 leading-relaxed">
                      Charges occur on the same calendar day each month as your initial subscription date (or the closest available day).
                    </p>
                  </div>
                  <div className="bg-slate-50 p-6 rounded-lg border-l-4 border-[#0A2540]">
                    <h3 className="text-lg font-semibold text-slate-900 mb-3">Non-Refundable</h3>
                    <p className="text-slate-600 leading-relaxed">
                      All charges are final and non-refundable.
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 3 */}
              <div className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-[#0A2540] mb-6 flex items-center">
                  <span className="w-8 h-8 bg-[#0A2540] rounded-full flex items-center justify-center text-white font-bold text-sm mr-4">
                    3
                  </span>
                  Cancellation
                </h2>
                <div className="space-y-4">
                  <div className="bg-slate-50 p-6 rounded-lg border-l-4 border-[#0A2540]">
                    <p className="text-slate-600 leading-relaxed mb-4">
                      You may cancel your subscription at any time by contacting us at{' '}
                      <a 
                        href="mailto:billing@strivetg.com" 
                        className="text-[#0A2540] hover:underline font-medium"
                      >
                        billing@strivetg.com
                      </a>.
                    </p>
                    <p className="text-slate-600 leading-relaxed mb-4">
                      Cancellation stops future charges, but:
                    </p>
                    <ul className="list-disc list-inside text-slate-600 space-y-2 ml-4">
                      <li>All services end immediately, including hosting, maintenance, and website access</li>
                      <li>The website and deliverables remain the property of Strive TG unless purchased separately (see Section 4)</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Section 4 */}
              <div className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-[#0A2540] mb-6 flex items-center">
                  <span className="w-8 h-8 bg-[#0A2540] rounded-full flex items-center justify-center text-white font-bold text-sm mr-4">
                    4
                  </span>
                  Website Buy-Out
                </h2>
                <div className="bg-slate-50 p-6 rounded-lg border-l-4 border-[#0A2540]">
                  <ul className="list-disc list-inside text-slate-600 space-y-3">
                    <li>Clients may purchase full ownership of their website after cancellation</li>
                    <li>Buy-out cost is variable, determined by:
                      <ul className="list-disc list-inside ml-6 mt-2 space-y-1">
                        <li>Website complexity and scope</li>
                        <li>Custom integrations, design work, or unique development</li>
                      </ul>
                    </li>
                    <li>Ownership transfers only once full payment of the buy-out fee is received</li>
                  </ul>
                </div>
              </div>

              {/* Section 5 */}
              <div className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-[#0A2540] mb-6 flex items-center">
                  <span className="w-8 h-8 bg-[#0A2540] rounded-full flex items-center justify-center text-white font-bold text-sm mr-4">
                    5
                  </span>
                  Client Responsibilities
                </h2>
                <div className="bg-slate-50 p-6 rounded-lg border-l-4 border-[#0A2540]">
                  <ul className="list-disc list-inside text-slate-600 space-y-3">
                    <li>Provide accurate and timely information needed to deliver services</li>
                    <li>Ensure that your payment method remains valid for automatic billing</li>
                    <li>Use services lawfully and in compliance with all applicable regulations</li>
                  </ul>
                </div>
              </div>

              {/* Section 6 */}
              <div className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-[#0A2540] mb-6 flex items-center">
                  <span className="w-8 h-8 bg-[#0A2540] rounded-full flex items-center justify-center text-white font-bold text-sm mr-4">
                    6
                  </span>
                  Intellectual Property
                </h2>
                <div className="bg-slate-50 p-6 rounded-lg border-l-4 border-[#0A2540]">
                  <ul className="list-disc list-inside text-slate-600 space-y-3">
                    <li>During subscription, websites and deliverables are licensed to you for use</li>
                    <li>Full ownership remains with Strive TG unless a buy-out is executed (see Section 4)</li>
                  </ul>
                </div>
              </div>

              {/* Section 7 */}
              <div className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-[#0A2540] mb-6 flex items-center">
                  <span className="w-8 h-8 bg-[#0A2540] rounded-full flex items-center justify-center text-white font-bold text-sm mr-4">
                    7
                  </span>
                  Limitation of Liability
                </h2>
                <div className="space-y-4">
                  <div className="bg-slate-50 p-6 rounded-lg border-l-4 border-[#0A2540]">
                    <p className="text-slate-600 leading-relaxed mb-4">
                      Strive TG is not responsible for:
                    </p>
                    <ul className="list-disc list-inside text-slate-600 space-y-2 ml-4">
                      <li>Business losses or damages from downtime, errors, or discontinued services</li>
                      <li>Third-party service issues (hosting, payment processors, etc.)</li>
                    </ul>
                    <p className="text-slate-600 leading-relaxed mt-4">
                      Our liability is limited to the amount you paid in the most recent month of service.
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 8 */}
              <div className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-[#0A2540] mb-6 flex items-center">
                  <span className="w-8 h-8 bg-[#0A2540] rounded-full flex items-center justify-center text-white font-bold text-sm mr-4">
                    8
                  </span>
                  Termination
                </h2>
                <div className="bg-slate-50 p-6 rounded-lg border-l-4 border-[#0A2540]">
                  <p className="text-slate-600 leading-relaxed mb-4">
                    We reserve the right to suspend or terminate services for:
                  </p>
                  <ul className="list-disc list-inside text-slate-600 space-y-2 ml-4">
                    <li>Failed or declined automatic payments</li>
                    <li>Misuse of services</li>
                    <li>Breach of these Terms</li>
                  </ul>
                </div>
              </div>

              {/* Section 9 */}
              <div className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-[#0A2540] mb-6 flex items-center">
                  <span className="w-8 h-8 bg-[#0A2540] rounded-full flex items-center justify-center text-white font-bold text-sm mr-4">
                    9
                  </span>
                  Governing Law
                </h2>
                <div className="bg-slate-50 p-6 rounded-lg border-l-4 border-[#0A2540]">
                  <p className="text-slate-600 leading-relaxed">
                    These Terms are governed by the laws of the Commonwealth of Massachusetts, USA.
                  </p>
                </div>
              </div>

              {/* Section 10 - Contact */}
              <div className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-[#0A2540] mb-6 flex items-center">
                  <span className="w-8 h-8 bg-[#0A2540] rounded-full flex items-center justify-center text-white font-bold text-sm mr-4">
                    10
                  </span>
                  Contact Us
                </h2>
                <div className="bg-slate-50 p-8 rounded-lg border-l-4 border-[#0A2540]">
                  <p className="text-slate-600 leading-relaxed mb-6">
                    For questions about these Terms:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex items-center p-4 bg-white rounded-lg border border-slate-200 hover:border-[#0A2540] transition-colors duration-200">
                      <div className="w-10 h-10 bg-[#0A2540] rounded-full flex items-center justify-center mr-4">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-slate-500 font-medium">Email</p>
                        <a 
                          href="mailto:contact@strivetg.com" 
                          className="text-[#0A2540] hover:underline font-semibold text-lg"
                        >
                          contact@strivetg.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center p-4 bg-white rounded-lg border border-slate-200">
                      <div className="w-10 h-10 bg-[#0A2540] rounded-full flex items-center justify-center mr-4">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-slate-500 font-medium">Location</p>
                        <div className="text-slate-700 font-semibold text-lg">
                          <div>145 Tremont Street</div>
                          <div>Suite 201-1512</div>
                          <div>Boston, MA 02111</div>
                          <div>United States</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Section */}
              <div className="bg-[#0A2540] rounded-2xl p-8 md:p-12 text-center text-white">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Ready to Get Started?
                </h3>
                <p className="text-slate-300 mb-6 text-lg leading-relaxed">
                  Have questions about our terms or ready to begin your project? Let's discuss how we can help your business grow.
                </p>
                <a
                  href="/contact"
                  aria-label="Contact us to get started"
                  className="group inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 font-semibold text-lg
                           bg-white border-2 border-white text-[#0A2540] focus-visible:ring-white shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.02]
                           focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-[#0F2A47] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-400 ease-out" />
                  <span className="relative z-10 tracking-wide transition-all duration-400 text-[#0A2540] group-hover:text-white">
                    Get Started Today
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
          </div>
        </div>
      </section>
    </div>
  );
}
