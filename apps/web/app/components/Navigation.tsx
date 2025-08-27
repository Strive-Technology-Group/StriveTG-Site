'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from './Button';
import { Logo, LogoCompact } from './Logo';
import { Menu, X } from 'lucide-react';
import { ServicesDropdown } from './ServicesDropdown';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { name: 'About', href: '/about' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Contact', href: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200' 
          : 'bg-white/80 backdrop-blur-sm border-b border-gray-100'
      }`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo - Desktop */}
            <div className="hidden md:block">
              <Logo size="md" showText={true} />
            </div>
            
            {/* Logo - Mobile */}
            <div className="md:hidden">
              <LogoCompact />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-primary transition-colors duration-200 font-medium text-sm relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
              <ServicesDropdown />
            </div>

            {/* CTA Button - Desktop */}
            <div className="hidden md:flex items-center space-x-4">
              <Button 
                href="/consultation" 
                size="sm" 
                className="bg-gradient-primary hover:shadow-xl hover:scale-105 transition-all duration-300 px-6 py-2"
              >
                Book Consultation
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-700 hover:text-primary focus:outline-none focus:text-primary transition-colors duration-200 p-2"
                aria-label="Toggle mobile menu"
              >
                {isOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

      </nav>

      {/* Mobile Navigation Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/20 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Mobile Menu */}
          <div className="fixed top-16 left-0 right-0 bg-white border-b border-gray-200 shadow-xl">
            <div className="px-4 py-6 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-3 text-gray-700 hover:text-primary hover:bg-gray-50 transition-all duration-200 font-medium rounded-lg"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="/services"
                className="block px-4 py-3 text-gray-700 hover:text-primary hover:bg-gray-50 transition-all duration-200 font-medium rounded-lg"
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
              
              {/* Mobile CTA */}
              <div className="pt-4 px-4">
                <Button 
                  href="/consultation" 
                  size="md" 
                  className="w-full bg-gradient-primary justify-center"
                  onClick={() => setIsOpen(false)}
                >
                  Book Consultation
                </Button>
              </div>
              
              {/* Quick Links */}
              <div className="pt-4 px-4 border-t border-gray-100 mt-4">
                <p className="text-xs text-gray-500 font-semibold uppercase tracking-wide mb-3">Quick Links</p>
                <div className="space-y-2">
                  <Link 
                    href="/faq" 
                    className="block text-sm text-gray-600 hover:text-primary transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Frequently Asked Questions
                  </Link>
                  <Link 
                    href="/contact" 
                    className="block text-sm text-gray-600 hover:text-primary transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {/* Spacer to prevent content overlap */}
      <div className="h-16" />
    </>
  );
}
