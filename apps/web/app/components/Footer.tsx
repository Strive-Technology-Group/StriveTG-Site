import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from './Button';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-accent-blue/5 rounded-full blur-xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-accent-teal/5 rounded-full blur-xl"></div>
      </div>

      {/* Main Footer */}
      <div className="py-16 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="md:col-span-2">
              <div className="mb-4">
                <div className="flex flex-col">
                  <Image 
                    src="/Full logo.svg" 
                    alt="Strive Technology Group" 
                    width={220}
                    height={58}
                    className="mb-2"
                  />
                  <span className="text-sm text-accent-teal font-medium">
                    Scale Smarter. Compete Bigger.
                  </span>
                </div>
              </div>
              <p className="text-gray-300 mb-4 max-w-md leading-relaxed">
                Strive Technology Group provides professional tech solutions for small and mid-sized businesses. 
                Scale smarter, compete bigger with websites, SEO, analytics, and ongoing support.
              </p>
              <p className="text-sm text-gray-400">
                Professional tech talent at a fraction of the cost of hiring in-house.
              </p>
              
              {/* Quick contact CTA */}
              <div className="mt-6">
                <Button href="/contact" variant="ghost" size="sm" className="text-sm">
                  Get In Touch
                </Button>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-300">
                <li><Link href="/about" className="hover:text-white transition-colors">About</Link></li>
                <li><Link href="/services" className="hover:text-white transition-colors">Services</Link></li>
                <li><Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
                <li><Link href="/portfolio" className="hover:text-white transition-colors">Portfolio</Link></li>
                <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-semibold text-lg mb-4">Services</h3>
              <ul className="space-y-2 text-gray-300">
                <li><span className="hover:text-white transition-colors">Website Development</span></li>
                <li><span className="hover:text-white transition-colors">SEO Optimization</span></li>
                <li><span className="hover:text-white transition-colors">Company Analytics</span></li>
                <li><span className="hover:text-white transition-colors">Tech Support</span></li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-700/50 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Strive Technology Group. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-400 hover:text-accent-teal text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-accent-teal text-sm transition-colors">
                Terms of Service
              </Link>
              <span className="text-gray-500 text-sm">
                Made with 💙 by Strive Technology Group
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
