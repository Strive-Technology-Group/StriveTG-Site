'use client';

import React, { useState } from 'react';
import { Check, X, ArrowRight } from 'lucide-react';

interface ComparisonRow {
  label: string;
  striveTG: string;
  agency: string;
  inHouse: string;
}

interface ComparisonColumn {
  key: string;
  title: string;
  type: 'positive' | 'neutral' | 'negative';
}

const defaultRows: ComparisonRow[] = [
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

const defaultColumns: ComparisonColumn[] = [
  { key: 'striveTG', title: 'Strive Technology Group', type: 'positive' },
  { key: 'agency', title: 'Typical Agency', type: 'neutral' },
  { key: 'inHouse', title: 'In-House', type: 'neutral' }
];

interface ComparisonSectionProps {
  rows?: ComparisonRow[];
  columns?: ComparisonColumn[];
}

export default function ComparisonSection({ 
  rows = defaultRows, 
  columns = defaultColumns 
}: ComparisonSectionProps) {
  const [activeTab, setActiveTab] = useState<string>('striveTG');

  const getColumnIcon = (type: 'positive' | 'neutral' | 'negative') => {
    switch (type) {
      case 'positive':
        return <Check className="w-5 h-5 text-green-400" />;
      case 'negative':
        return <X className="w-5 h-5 text-red-400" />;
      default:
        return null;
    }
  };

  const getColumnBorderColor = (type: 'positive' | 'neutral' | 'negative') => {
    switch (type) {
      case 'positive':
        return 'border-green-400/20';
      case 'negative':
        return 'border-red-400/20';
      default:
        return 'border-white/10';
    }
  };

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

        {/* Desktop Table View */}
        <div className="hidden md:block">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-white/10 shadow-lg overflow-hidden">
            <table className="w-full">
              <caption className="sr-only">
                Comparison of Strive Technology Group vs Typical Agency vs In-House options
              </caption>
              <thead>
                <tr className="border-b border-white/10">
                  <th scope="col" className="px-6 py-4 text-left text-sm font-semibold text-slate-300">
                    Features
                  </th>
                  {columns.map((column) => (
                    <th 
                      key={column.key}
                      scope="col" 
                      className="px-6 py-4 text-center text-sm font-semibold text-white"
                    >
                      <div className="flex items-center justify-center gap-2">
                        {getColumnIcon(column.type)}
                        {column.title}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row, index) => (
                  <tr 
                    key={index}
                    className="border-b border-white/5 hover:bg-white/5 transition-colors"
                  >
                    <th scope="row" className="px-6 py-4 text-sm font-medium text-slate-300 text-left">
                      {row.label}
                    </th>
                    <td className="px-6 py-4 text-sm text-slate-200 text-center">
                      {row.striveTG}
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-300 text-center">
                      {row.agency}
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-400 text-center">
                      {row.inHouse}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Mobile Tab View */}
        <div className="md:hidden">
          {/* Tab Switcher */}
          <div className="flex space-x-1 mb-6 bg-slate-800/50 rounded-xl p-1">
            {columns.map((column) => (
              <button
                key={column.key}
                onClick={() => setActiveTab(column.key)}
                className={`flex-1 py-3 px-4 text-sm font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/20 ${
                  activeTab === column.key
                    ? 'bg-white text-slate-900'
                    : 'text-slate-300 hover:text-white hover:bg-white/10'
                }`}
                aria-pressed={activeTab === column.key}
              >
                <div className="flex items-center justify-center gap-2">
                  {getColumnIcon(column.type)}
                  <span className="truncate">{column.title}</span>
                </div>
              </button>
            ))}
          </div>

          {/* Active Column Content */}
          <div 
            className={`bg-slate-800/50 backdrop-blur-sm rounded-2xl border ${getColumnBorderColor(
              columns.find(c => c.key === activeTab)?.type || 'neutral'
            )} shadow-lg p-6`}
            aria-live="polite"
          >
            <div className="space-y-4">
              {rows.map((row, index) => (
                <div key={index} className="border-b border-white/10 pb-4 last:border-b-0 last:pb-0">
                  <dt className="text-sm font-medium text-slate-300 mb-2">
                    {row.label}
                  </dt>
                  <dd className="text-sm text-slate-200">
                    {activeTab === 'striveTG' && row.striveTG}
                    {activeTab === 'agency' && row.agency}
                    {activeTab === 'inHouse' && row.inHouse}
                  </dd>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Bar */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-white mb-8">
            Start fast. Improve continuously.
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/consultation"
              aria-label="Book consultation"
              className="group inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 font-semibold text-lg
                       bg-white border-2 border-white text-[#0A2540] focus-visible:ring-white shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.02]
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
              aria-label="Request a quote"
              className="group inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 font-semibold text-lg
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
