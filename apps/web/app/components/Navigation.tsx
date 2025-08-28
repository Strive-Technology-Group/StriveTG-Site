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
                  className="relative text-gray-700 hover:text-gray-900 transition-colors duration-200 font-medium text-sm py-2 group"
                >
                  {item.name}
                  <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gray-900 scale-x-0 transition-transform duration-200 group-hover:scale-x-100 origin-left"></span>
                </Link>
              ))}
              <ServicesDropdown />
            </div>

            {/* CTA Button - Desktop */}
            <div className="hidden lg:flex items-center space-x-4">
              <Button 
                href="/consultation" 
                size="sm" 
                variant="primary"
              >
                Book Consultation
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-700 hover:text-gray-900 focus:outline-none transition-all duration-300"
                aria-label="Toggle mobile menu"
              >
                {isOpen ? (
                  <X className="h-5 w-5 transition-transform duration-300 rotate-90" />
                ) : (
                  <Menu className="h-5 w-5 transition-transform duration-300" />
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
          <div className="fixed top-16 left-0 right-0 bg-white border-b border-gray-200 shadow-xl animate-in slide-in-from-top-4 duration-300">
            <div className="px-6 py-8 space-y-2">
              {navItems.map((item, index) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-4 text-gray-700 hover:text-gray-900 transition-colors duration-200 font-medium text-lg relative group animate-fade-in-up"
                  onClick={() => setIsOpen(false)}
                  style={{
                    animationDelay: `${index * 100}ms`
                  }}
                >
                  {item.name}
                  <span className="absolute bottom-2 left-4 right-4 h-0.5 bg-gray-900 scale-x-0 transition-transform duration-200 group-hover:scale-x-100 origin-left"></span>
                </Link>
              ))}
              <Link
                href="/services"
                className="block px-4 py-4 text-gray-700 hover:text-gray-900 transition-colors duration-200 font-medium text-lg relative group animate-fade-in-up"
                onClick={() => setIsOpen(false)}
                style={{
                  animationDelay: `${navItems.length * 100}ms`
                }}
              >
                Services
                <span className="absolute bottom-2 left-4 right-4 h-0.5 bg-gray-900 scale-x-0 transition-transform duration-200 group-hover:scale-x-100 origin-left"></span>
              </Link>
              
              {/* Mobile CTA */}
              <div 
                className="pt-6 px-4 animate-fade-in-up"
                style={{
                  animationDelay: `${(navItems.length + 1) * 100}ms`
                }}
              >
                <Button 
                  href="/consultation" 
                  size="md" 
                  variant="primary"
                  className="w-full justify-center"
                  onClick={() => setIsOpen(false)}
                >
                  Book Consultation
                </Button>
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
