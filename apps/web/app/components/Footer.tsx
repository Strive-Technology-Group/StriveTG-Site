import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from './Button';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#10172a] text-white relative overflow-hidden">


      {/* Main Footer */}
      <div className="py-20 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
            {/* Company Info */}
            <div className="md:col-span-2">
              <div className="mb-4">
                <div className="flex flex-col">
                  <Image 
                    src="/Full logo.svg" 
                    alt="Strive Technology Group" 
                    width={220}
                    height={58}
                    className="mb-2 brightness-0 invert"
                  />
                  <span className="text-sm text-white font-medium">
                    Smarter Growth. Stronger Presence.
                  </span>
                </div>
              </div>
              <p className="text-gray-300 mb-4 max-w-md leading-relaxed">
                Strive Technology Group delivers cutting-edge tech solutions tailored for small and mid-sized businesses. 
                From websites and SEO to analytics and ongoing support, we help you grow smarter, compete stronger, and stay ahead in today's digital market.
              </p>
              <p className="text-sm text-gray-400">
                Access top-tier tech expertise—without the overhead of hiring in-house.
              </p>
              
              {/* Quick contact CTA */}
              <div className="mt-6">
                <a
                  href="/contact"
                  aria-label="Contact about our services"
                  className="group inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 font-semibold
                           bg-white border-2 border-white text-[#0A2540] focus-visible:ring-white shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.02]
                           focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 relative overflow-hidden"
                >
                  {/* Color sweep overlay */}
                  <div className="absolute inset-0 bg-[#0F2A47] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-400 ease-out" />
                  
                  {/* Content with proper color transitions */}
                  <span className="relative z-10 tracking-wide transition-all duration-400 text-[#0A2540] group-hover:text-white">
                    Get In Touch
                  </span>
                  
                  {/* Arrow Icon with color transition */}
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
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-lg mb-6 text-white">Quick Links</h3>
              <ul className="space-y-3 text-gray-300">
                <li><Link href="/about" className="relative hover:text-white transition-colors duration-200 group py-1 inline-block">About<span className="absolute -bottom-0 left-0 right-0 h-0.5 bg-white scale-x-0 transition-transform duration-200 group-hover:scale-x-100 origin-left"></span></Link></li>
                <li><Link href="/services" className="relative hover:text-white transition-colors duration-200 group py-1 inline-block">Services<span className="absolute -bottom-0 left-0 right-0 h-0.5 bg-white scale-x-0 transition-transform duration-200 group-hover:scale-x-100 origin-left"></span></Link></li>
                <li><Link href="/consultation" className="relative hover:text-white transition-colors duration-200 group py-1 inline-block">Consultation<span className="absolute -bottom-0 left-0 right-0 h-0.5 bg-white scale-x-0 transition-transform duration-200 group-hover:scale-x-100 origin-left"></span></Link></li>
                <li><Link href="/contact" className="relative hover:text-white transition-colors duration-200 group py-1 inline-block">Contact<span className="absolute -bottom-0 left-0 right-0 h-0.5 bg-white scale-x-0 transition-transform duration-200 group-hover:scale-x-100 origin-left"></span></Link></li>
                <li><Link href="/faq" className="relative hover:text-white transition-colors duration-200 group py-1 inline-block">FAQ<span className="absolute -bottom-0 left-0 right-0 h-0.5 bg-white scale-x-0 transition-transform duration-200 group-hover:scale-x-100 origin-left"></span></Link></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-semibold text-lg mb-6 text-white">Services</h3>
              <ul className="space-y-3 text-gray-300">
                <li><Link href="/services#website-development" className="relative hover:text-white transition-colors duration-200 group py-1 inline-block">Website Development & Hosting<span className="absolute -bottom-0 left-0 right-0 h-0.5 bg-white scale-x-0 transition-transform duration-200 group-hover:scale-x-100 origin-left"></span></Link></li>
                <li><Link href="/services#upkeep-support" className="relative hover:text-white transition-colors duration-200 group py-1 inline-block">Website Upkeep & Support<span className="absolute -bottom-0 left-0 right-0 h-0.5 bg-white scale-x-0 transition-transform duration-200 group-hover:scale-x-100 origin-left"></span></Link></li>
                <li><Link href="/services#search-visibility" className="relative hover:text-white transition-colors duration-200 group py-1 inline-block">Search & Visibility Suite<span className="absolute -bottom-0 left-0 right-0 h-0.5 bg-white scale-x-0 transition-transform duration-200 group-hover:scale-x-100 origin-left"></span></Link></li>
                <li><Link href="/services#analytics-pipelines" className="relative hover:text-white transition-colors duration-200 group py-1 inline-block">Insight Analytics Pipelines<span className="absolute -bottom-0 left-0 right-0 h-0.5 bg-white scale-x-0 transition-transform duration-200 group-hover:scale-x-100 origin-left"></span></Link></li>
                <li><Link href="/services#ai-automation" className="relative hover:text-white transition-colors duration-200 group py-1 inline-block">AI Automation<span className="absolute -bottom-0 left-0 right-0 h-0.5 bg-white scale-x-0 transition-transform duration-200 group-hover:scale-x-100 origin-left"></span></Link></li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-700/30 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Strive Technology Group. All rights reserved.
            </p>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-all duration-200 hover:scale-105">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-all duration-200 hover:scale-105">
                Terms of Service
              </Link>
              <span className="text-gray-500 text-sm hidden md:inline">
                Made with 💙 by Strive Technology Group
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
