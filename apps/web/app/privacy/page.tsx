import React from 'react';
import { Metadata } from 'next';
import { MotionWrapper } from '../components/MotionWrapper';

export const metadata: Metadata = {
  title: "Privacy Policy | Strive Technology Group",
  description: "Learn how Strive Technology Group protects and handles your personal information. Our comprehensive privacy policy explains our data collection and usage practices.",
  keywords: "privacy policy, data protection, information security, Strive Technology Group",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-[#0E1B2B] text-white overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-16 md:py-24 text-center">
            <div className="mx-auto max-w-4xl">
              <MotionWrapper direction="fade">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight text-balance mb-6">
                  Privacy Policy
                </h1>
                <p className="text-lg md:text-xl text-slate-300 font-light leading-relaxed mb-4 max-w-2xl mx-auto">
                  Your privacy matters to us. Learn how we protect and handle your information.
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
                  Strive Technology Group ("Strive TG," "we," "our," or "us") respects your privacy. 
                  This Privacy Policy explains how we collect, use, and protect your information.
                </p>
              </div>

              {/* Section 1 */}
              <div className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-[#0A2540] mb-6 flex items-center">
                  <span className="w-8 h-8 bg-[#0A2540] rounded-full flex items-center justify-center text-white font-bold text-sm mr-4">
                    1
                  </span>
                  Information We Collect
                </h2>
                <div className="space-y-6">
                  <div className="bg-slate-50 p-6 rounded-lg border-l-4 border-[#0A2540]">
                    <h3 className="text-lg font-semibold text-slate-900 mb-3">Website Visitors</h3>
                    <p className="text-slate-600 leading-relaxed">
                      We do not collect personal data from visitors browsing our website.
                    </p>
                  </div>
                  <div className="bg-slate-50 p-6 rounded-lg border-l-4 border-[#0A2540]">
                    <h3 className="text-lg font-semibold text-slate-900 mb-3">Clients</h3>
                    <p className="text-slate-600 leading-relaxed mb-4">
                      When you engage our services, we may collect limited information necessary to deliver those services, such as:
                    </p>
                    <ul className="list-disc list-inside text-slate-600 space-y-2 ml-4">
                      <li>Name and contact details (email, phone number, business address)</li>
                      <li>Project requirements and technical specifications</li>
                      <li>Billing and payment information</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Section 2 */}
              <div className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-[#0A2540] mb-6 flex items-center">
                  <span className="w-8 h-8 bg-[#0A2540] rounded-full flex items-center justify-center text-white font-bold text-sm mr-4">
                    2
                  </span>
                  How We Use Information
                </h2>
                <div className="bg-slate-50 p-6 rounded-lg border-l-4 border-[#0A2540]">
                  <p className="text-slate-600 leading-relaxed mb-4">
                    We use client information only to:
                  </p>
                  <ul className="list-disc list-inside text-slate-600 space-y-2 ml-4">
                    <li>Provide and improve our services</li>
                    <li>Communicate about projects, invoices, and support</li>
                    <li>Maintain internal records for business operations and compliance</li>
                  </ul>
                </div>
              </div>

              {/* Section 3 */}
              <div className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-[#0A2540] mb-6 flex items-center">
                  <span className="w-8 h-8 bg-[#0A2540] rounded-full flex items-center justify-center text-white font-bold text-sm mr-4">
                    3
                  </span>
                  Information Sharing
                </h2>
                <div className="space-y-4">
                  <div className="bg-slate-50 p-6 rounded-lg border-l-4 border-[#0A2540]">
                    <ul className="list-disc list-inside text-slate-600 space-y-3">
                      <li>We do not sell or rent your information</li>
                      <li>We may share data only with trusted third parties necessary to operate (e.g., payment processors, hosting providers)</li>
                      <li>If required by law, we may disclose information in response to legal requests</li>
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
                  Data Security
                </h2>
                <div className="bg-slate-50 p-6 rounded-lg border-l-4 border-[#0A2540]">
                  <p className="text-slate-600 leading-relaxed">
                    We use reasonable administrative and technical safeguards to protect client information. 
                    However, no method of transmission or storage is 100% secure.
                  </p>
                </div>
              </div>

              {/* Section 5 */}
              <div className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-[#0A2540] mb-6 flex items-center">
                  <span className="w-8 h-8 bg-[#0A2540] rounded-full flex items-center justify-center text-white font-bold text-sm mr-4">
                    5
                  </span>
                  Your Choices &amp; Rights
                </h2>
                <div className="space-y-4">
                  <div className="bg-slate-50 p-6 rounded-lg border-l-4 border-[#0A2540]">
                    <ul className="list-disc list-inside text-slate-600 space-y-3">
                      <li>
                        Clients may request access to, correction of, or deletion of their information by contacting us at{' '}
                        <a 
                          href="mailto:contact@strivetg.com" 
                          className="text-[#0A2540] hover:underline font-medium"
                        >
                          contact@strivetg.com
                        </a>
                      </li>
                      <li>You may opt out of marketing communications at any time</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Section 6 */}
              <div className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-[#0A2540] mb-6 flex items-center">
                  <span className="w-8 h-8 bg-[#0A2540] rounded-full flex items-center justify-center text-white font-bold text-sm mr-4">
                    6
                  </span>
                  Policy Updates
                </h2>
                <div className="bg-slate-50 p-6 rounded-lg border-l-4 border-[#0A2540]">
                  <p className="text-slate-600 leading-relaxed">
                    We may update this Privacy Policy from time to time. Any changes will be posted on this page 
                    with an updated "Last Updated" date.
                  </p>
                </div>
              </div>

              {/* Section 7 - Contact */}
              <div className="mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-[#0A2540] mb-6 flex items-center">
                  <span className="w-8 h-8 bg-[#0A2540] rounded-full flex items-center justify-center text-white font-bold text-sm mr-4">
                    7
                  </span>
                  Contact Us
                </h2>
                <div className="bg-slate-50 p-8 rounded-lg border-l-4 border-[#0A2540]">
                  <p className="text-slate-600 leading-relaxed mb-6">
                    For questions about this policy, please contact us:
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
                        <span className="text-slate-700 font-semibold text-lg">Boston, Massachusetts, USA</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Section */}
              <div className="bg-[#0A2540] rounded-2xl p-8 md:p-12 text-center text-white">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Questions About Our Privacy Policy?
                </h3>
                <p className="text-slate-300 mb-6 text-lg leading-relaxed">
                  We're here to help clarify any concerns you may have about how we handle your information.
                </p>
                <a
                  href="/contact"
                  aria-label="Contact us about privacy"
                  className="group inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 font-semibold text-lg
                           bg-white border-2 border-white text-[#0A2540] focus-visible:ring-white shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.02]
                           focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-[#0F2A47] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-400 ease-out" />
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
          </div>
        </div>
      </section>
    </div>
  );
}
