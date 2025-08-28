'use client';

import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ComparisonOption {
  key: string;
  title: string;
  type: 'positive' | 'neutral' | 'negative';
  isRecommended: boolean;
  bullets: string[];
}

const defaultOptions = [
  {
    key: 'agency',
    title: 'Typical Agency',
    type: 'neutral' as const,
    isRecommended: false,
    bullets: [
      "Siloed teams with hand-offs between departments",
      "2-4 weeks to start projects",
      "Long retainer commitments common",
      "Ownership varies by contract terms",
      "Often project-only, limited ongoing work",
      "Business hours support typical",
      "Medium risk if key people leave",
      "Reporting varies by retainer level"
    ]
  },
  {
    key: 'striveTG',
    title: 'Strive Technology Group',
    type: 'positive' as const,
    isRecommended: true,
    bullets: [
      "Full-stack team (development, SEO, analytics, automation)",
      "Start in days, not months",
      "Month-to-month or project flexibility",
      "You own all code, domains, and analytics",
      "Complete strategy + execution + maintenance",
      "Proactive monitoring with clear SLAs",
      "Team coverage (no single point of failure)",
      "Monthly dashboards and performance reviews"
    ]
  },
  {
    key: 'inHouse',
    title: 'In-House Hire',
    type: 'neutral' as const,
    isRecommended: false,
    bullets: [
      "Usually specialized in one role/skill",
      "3-6 months to recruit and onboard",
      "Full employment commitment required",
      "Yes, completely internal ownership",
      "Depends on the specific hire's experience",
      "Support depends on team size and coverage",
      "High risk (single person dependency)",
      "Ad-hoc reporting and KPI tracking"
    ]
  }
];

interface ComparisonSectionProps {
  options?: ComparisonOption[];
}

export default function ComparisonSection({
  options = defaultOptions
}: ComparisonSectionProps) {



  return (
    <section 
      id="compare"
      className="bg-slate-900 py-20 sm:py-24 animate-fade-in-up"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6 tracking-tight">
            Why Strive TG Beats Agencies & In-House
          </h2>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            A dedicated, multi-disciplinary tech partner—built for speed, breadth, and ongoing results.
          </p>
        </div>

        {/* Three Comparison Tiles */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto items-end">
          {options.map((option, index) => {
            const isStrive = option.key === 'striveTG';
            const isCenter = index === 1; // Middle position (Strive TG)
            
            return (
              <div 
                key={option.key}
                className={`relative transition-all duration-500 hover:-translate-y-2 ${
                  isCenter 
                    ? 'lg:-translate-y-8 lg:scale-110 z-10' 
                    : 'lg:translate-y-4'
                } ${
                  isStrive 
                    ? 'bg-white border-2 border-gray-200 shadow-2xl rounded-3xl' 
                    : 'bg-slate-800/50 border border-white/10 hover:border-white/20 rounded-2xl shadow-lg'
                }`}
              >
                {/* Premium Crown for Center Card */}
                {isCenter && (
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-20">
                    <div className="w-12 h-8 bg-gradient-to-b from-yellow-400 to-yellow-500 rounded-t-full flex items-center justify-center shadow-lg">
                      <div className="text-white text-sm">👑</div>
                    </div>
                  </div>
                )}
                
                {/* Content */}
                <div className="p-8">
                  {/* Header */}
                  <div className="text-center mb-8">
                    <h3 className={`text-xl font-bold ${isStrive ? 'text-slate-900' : 'text-slate-200'}`}>
                      {option.title}
                    </h3>
                    {isCenter && (
                      <p className="text-sm text-slate-600 mt-2 font-medium">Most Popular Choice</p>
                    )}
                  </div>

                  {/* Bullet Points */}
                  <ul className="space-y-4">
                    {option.bullets.map((bullet, bulletIndex) => (
                      <li key={bulletIndex} className={`flex items-start gap-3 leading-relaxed ${isStrive ? 'text-slate-700' : 'text-slate-300'}`}>
                        <span className={`inline-flex h-5 w-5 items-center justify-center rounded-full text-white text-xs font-bold mt-0.5 shrink-0 ${
                          isStrive 
                            ? 'bg-gradient-to-br from-emerald-500 to-emerald-600 shadow-md' 
                            : 'bg-gradient-to-br from-slate-500 to-slate-600'
                        }`}>
                          ✓
                        </span>
                        <span className="text-sm font-medium">{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button for Center Card */}
                  {isCenter && (
                    <div className="mt-8 pt-6 border-t border-gray-200">
                      <a 
                        href="/consultation"
                        className="group w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#0A2540] to-[#0E1B2B] text-white px-6 py-4 rounded-xl font-semibold text-sm hover:from-[#0E1B2B] hover:to-[#0A2540] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                      >
                        Get Started Today
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  )}
                </div>

                {/* Subtle glow effect for center card */}
                {isCenter && (
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 rounded-3xl blur-lg opacity-30 -z-10"></div>
                )}
              </div>
            );
          })}
        </div>



        {/* Footnote */}
        <div className="mt-12 text-center">
          <p className="text-sm text-slate-500">
            Patterns vary by vendor/team. We scope to your needs.
          </p>
        </div>
      </div>
    </section>
  );
}
