"use client";

import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";

const services = [
  { name: "Website Development & Hosting", href: "/services#website-development" },
  { name: "Website Upkeep & Support", href: "/services#upkeep-support" },
  { name: "Search & Visibility Suite", href: "/services#search-visibility" },
  { name: "Insight Analytics Pipelines", href: "/services#analytics-pipelines" },
  { name: "AI Automation", href: "/services#ai-automation" }
];

export function ServicesDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 150);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div 
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link
        href="/services"
        className="relative text-gray-700 hover:text-gray-900 transition-colors duration-200 font-medium text-sm flex items-center gap-1 py-2 group"
      >
        Services
        <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
        <span className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gray-900 scale-x-0 transition-transform duration-200 group-hover:scale-x-100 origin-left"></span>
      </Link>

      {/* Simple Dropdown with bridge */}
      {isOpen && (
        <>
          {/* Invisible bridge to prevent hover gaps */}
          <div className="absolute top-full left-0 right-0 h-2 bg-transparent"></div>
          
          <div className="absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden z-50">
            {services.map((service) => (
              <Link
                key={service.name}
                href={service.href}
                className="block px-4 py-3 text-sm text-gray-700 hover:text-gray-900 hover:bg-gray-50 transition-colors relative group/item"
              >
                {service.name}
                <span className="absolute bottom-0 left-4 right-4 h-px bg-gray-900 scale-x-0 transition-transform duration-200 group-hover/item:scale-x-100 origin-left"></span>
              </Link>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
