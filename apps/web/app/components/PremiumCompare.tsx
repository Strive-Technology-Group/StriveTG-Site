'use client';

import React, { useState, useEffect } from 'react';
import { CheckCircle2, XCircle, ArrowRight, X, ChevronRight } from 'lucide-react';

// Legacy comparison data for the modal
const legacyComparisonData = [
  {
    label: "Breadth of skills",
    striveTG: "Full-stack, SEO, analytics, automation, support",
    agency: "Siloed teams, hand-offs",
    inHouse: "Usually one role"
  },
  {
    label: "Time to start",
    striveTG: "Days (no hiring lag)",
    agency: "Weeks",
    inHouse: "Months (recruit/onboard)"
  },
  {
    label: "Engagement flexibility",
    striveTG: "Project or month-to-month",
    agency: "Long retainers common",
    inHouse: "Employment commitment"
  },
  {
    label: "Ownership & handoff",
    striveTG: "You own code, site, domains, analytics",
    agency: "Varies by contract",
    inHouse: "Yes, internal"
  },
  {
    label: "Strategy + execution",
    striveTG: "We plan, build, and maintain",
    agency: "Often \"project-only\"",
    inHouse: "Depends on the hire"
  },
  {
    label: "Monitoring & support window",
    striveTG: "Proactive with clear SLAs",
    agency: "Business hours typical",
    inHouse: "Depends on team size"
  },
  {
    label: "Single-point-of-failure risk",
    striveTG: "Low (team coverage)",
    agency: "Medium",
    inHouse: "High (1 person)"
  },
  {
    label: "Reporting & KPIs",
    striveTG: "Monthly dashboards and reviews",
    agency: "Varies by retainer",
    inHouse: "Ad-hoc"
  },
  {
    label: "Tooling & stack",
    striveTG: "Recommended stack + setup guidance",
    agency: "May add fees",
    inHouse: "You procure/manage"
  }
];

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

function ComparisonModal({ isOpen, onClose }: ModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      // Focus trap - focus the modal when it opens
      const modal = document.getElementById('comparison-modal');
      if (modal) modal.focus();
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      return () => document.removeEventListener('keydown', handleEscape);
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="flex min-h-full items-center justify-center p-4">
        <div 
          id="comparison-modal"
          className="relative w-full max-w-6xl bg-slate-900 rounded-3xl shadow-2xl border border-white/10 max-h-[90vh] overflow-hidden"
          tabIndex={-1}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-8 border-b border-white/10">
            <div>
              <h2 id="modal-title" className="text-2xl font-bold text-white">
                Detailed Comparison
              </h2>
              <p className="text-slate-300 mt-2">
                Complete feature-by-feature breakdown
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white/20"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Table Content */}
          <div className="p-8 overflow-y-auto max-h-[calc(90vh-120px)]">
            <div className="bg-slate-800/50 rounded-2xl border border-white/10 overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="bg-slate-900/50 border-b border-white/10">
                    <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300">
                      Features
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-white">
                      Strive Technology Group
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-slate-300">
                      Typical Agency
                    </th>
                    <th className="px-6 py-4 text-center text-sm font-semibold text-slate-300">
                      In-House Hire
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {legacyComparisonData.map((row, index) => (
                    <tr key={index} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                      <td className="px-6 py-4 text-sm font-medium text-slate-300">
                        {row.label}
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-200 text-center">
                        {row.striveTG}
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-300 text-center">
                        {row.agency}
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-300 text-center">
                        {row.inHouse}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function PremiumCompare() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="bg-slate-900 py-20 sm:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 tracking-tight">
            Why Strive TG is the Smarter Choice
          </h2>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            One partner replaces the slow, expensive, siloed alternatives.
          </p>
        </div>

        {/* Comparison Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-8 max-w-6xl mx-auto mb-16">
          {/* Strive TG Card */}
          <div className="relative opacity-0 translate-y-2 animate-[fadeInUp_500ms_ease-out_100ms_forwards]">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              {/* Header */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-3 h-3 bg-emerald-400 rounded-full"></div>
                  <h3 className="text-2xl font-bold text-slate-900">
                    Strive Technology Group
                  </h3>
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/20 text-emerald-700 text-xs font-semibold rounded-full border border-emerald-400/30">
                  <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"></div>
                  COMPLETE SOLUTION
                </div>
              </div>

              {/* Benefits */}
              <ul className="space-y-4 sm:space-y-5 leading-relaxed">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" />
                  <span className="text-slate-700 text-sm sm:text-base leading-relaxed">
                    Multidisciplinary team (web, SEO, analytics, automation)
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" />
                  <span className="text-slate-700 text-sm sm:text-base leading-relaxed">
                    Start in days, not months
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" />
                  <span className="text-slate-700 text-sm sm:text-base leading-relaxed">
                    You own everything, always
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" />
                  <span className="text-slate-700 text-sm sm:text-base leading-relaxed">
                    Proactive monitoring + monthly improvements
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Alternatives Card */}
          <div className="relative opacity-0 translate-y-2 animate-[fadeInUp_500ms_ease-out_200ms_forwards]">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              {/* Header */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-3 h-3 bg-slate-500 rounded-full"></div>
                  <h3 className="text-2xl font-bold text-slate-900">
                    Typical Alternatives
                  </h3>
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-200 text-slate-600 text-xs font-medium rounded-full border border-slate-300">
                  SCATTERED SOLUTIONS
                </div>
              </div>

              {/* Limitations */}
              <ul className="space-y-4 sm:space-y-5 leading-relaxed">
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-slate-500 mt-0.5 shrink-0" />
                  <span className="text-slate-700 text-sm sm:text-base leading-relaxed">
                    Agencies: Overpriced retainers, slow turnaround
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-slate-500 mt-0.5 shrink-0" />
                  <span className="text-slate-700 text-sm sm:text-base leading-relaxed">
                    In-House: Expensive, narrow skill set, slow hiring
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-slate-500 mt-0.5 shrink-0" />
                  <span className="text-slate-700 text-sm sm:text-base leading-relaxed">
                    Limited availability and scalability
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-slate-500 mt-0.5 shrink-0" />
                  <span className="text-slate-700 text-sm sm:text-base leading-relaxed">
                    Inconsistent results and communication
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Bar */}
        <div className="text-center mb-12 animate-fade-in-up delay-300">
          <h3 className="text-2xl font-bold text-white mb-8">
            Grow faster without the overhead.
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/consultation"
              className="group inline-flex items-center justify-center gap-2 rounded-xl px-8 py-4 font-semibold text-lg
                       bg-white border-2 border-white text-[#0A2540] focus-visible:ring-white shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.02]
                       focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-[#0F2A47] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-400 ease-out" />
              <span className="relative z-10 tracking-wide transition-all duration-400 text-[#0A2540] group-hover:text-white">
                Book a Consultation
              </span>
              <ArrowRight className="w-5 h-5 transition-all duration-400 group-hover:translate-x-1 relative z-10 text-[#0A2540] group-hover:text-white" />
            </a>
            <a
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 rounded-xl px-8 py-4 font-semibold text-lg
                       bg-transparent border-2 border-white text-white focus-visible:ring-white shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.02]
                       focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-white translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-400 ease-out" />
              <span className="relative z-10 tracking-wide transition-all duration-400 text-white group-hover:text-[#0A2540]">
                Request a Quote
              </span>
              <ArrowRight className="w-5 h-5 transition-all duration-400 group-hover:translate-x-1 relative z-10 text-white group-hover:text-[#0A2540]" />
            </a>
          </div>
        </div>

        {/* Progressive Disclosure Link */}
        <div className="text-center animate-fade-in-up delay-400">
          <button
            onClick={() => setIsModalOpen(true)}
            className="group inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors duration-200 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-white/20 rounded-lg px-3 py-2"
          >
            See full comparison
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Footnote */}
        <div className="mt-12 text-center animate-fade-in-up delay-500">
          <p className="text-sm text-slate-500">
            Patterns vary by vendor/team. We scope to your needs.
          </p>
        </div>
      </div>

      {/* Modal */}
      <ComparisonModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </section>
  );
}
