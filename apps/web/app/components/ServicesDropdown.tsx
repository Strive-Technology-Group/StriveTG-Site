"use client";

import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const services = [
  { name: "Website Development & Hosting", href: "/services#website-development" },
  { name: "Website Upkeep & Support", href: "/services#upkeep-support" },
  { name: "Search & Visibility Suite", href: "/services#search-visibility" },
  { name: "Insight Analytics Pipelines", href: "/services#analytics-pipelines" },
  { name: "AI Automation", href: "/services#ai-automation" }
];

export function ServicesDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div 
      className="relative group"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <Link
        href="/services"
        className="text-gray-700 hover:text-primary transition-colors duration-200 font-medium text-sm relative group flex items-center gap-1"
      >
        Services
        <ChevronDown className={`h-3 w-3 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-primary transition-all duration-300 group-hover:w-full"></span>
      </Link>

      {/* Minimal Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 mt-2 w-64 bg-white/95 backdrop-blur-md rounded-xl shadow-lg border border-gray-200/50 overflow-hidden z-50">
          <div className="py-2">
            {services.map((service) => (
              <Link
                key={service.name}
                href={service.href}
                className="block px-4 py-3 text-gray-700 hover:text-gray-900 hover:bg-gray-50/50 transition-all duration-150 text-sm font-medium"
              >
                {service.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
