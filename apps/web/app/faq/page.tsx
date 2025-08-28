import React from 'react';
import { Metadata } from 'next';
import { MotionWrapper } from '../components/MotionWrapper';

export const metadata: Metadata = {
  title: 'FAQ | Strive Technology Group',
  description: 'Frequently asked questions about our services, pricing, process, and how we help small businesses with professional technology solutions.',
};

function Container({ children }: { children: React.ReactNode }) {
  return <div className="mx-auto max-w-6xl px-4 md:px-6">{children}</div>;
}

function CleanButton({ href, children, aria, isDark = false }: { href: string; children: React.ReactNode; aria: string; isDark?: boolean }) {
  const buttonClasses = isDark 
    ? "bg-white border-2 border-white text-[#0A2540] focus-visible:ring-white"
    : "bg-[#0A2540] border-2 border-[#0A2540] text-white focus-visible:ring-[#0A2540]";
      
  const overlayColor = isDark ? "bg-[#0F2A47]" : "bg-white";
  const textColorClasses = isDark 
    ? "text-[#0A2540] group-hover:text-white"
    : "text-white group-hover:text-[#0A2540]";

  return (
    <a
      href={href}
      aria-label={aria}
      className={`group inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 font-semibold text-lg
                 ${buttonClasses} shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:scale-[1.02]
                 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 relative overflow-hidden`}
    >
      <div className={`absolute inset-0 ${overlayColor} translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-400 ease-out`} />
      <span className={`relative z-10 tracking-wide transition-all duration-400 ${textColorClasses}`}>
        {children}
      </span>
      <svg 
        className={`w-5 h-5 transition-all duration-400 group-hover:translate-x-1 relative z-10 ${textColorClasses}`}
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
  );
}

const faqs = [
  {
    category: "Services & Pricing",
    questions: [
      {
        question: "What services do you offer?",
        answer: "We offer five core services: Website Development & Hosting, Website Upkeep & Support, Search & Visibility Suite (including SEO and AI search optimization), Insight Analytics Pipelines, and AI Automation solutions. Each service is designed to work together to create a comprehensive digital presence for your business."
      },
      {
        question: "How much do your services cost?",
        answer: "Our pricing is custom-based on your specific needs and requirements. Most projects fall between $1,500 - $15,000 for initial development, with ongoing support starting at $300/month. We provide transparent, detailed proposals after understanding your business goals during a free consultation."
      },
      {
        question: "Do you offer monthly subscription services?",
        answer: "Yes! Our Website Development & Hosting includes subscription pricing with monthly fees that cover hosting, SSL, domain, and ongoing maintenance. Website Upkeep & Support is also available as a monthly service starting at $300/month."
      }
    ]
  },
  {
    category: "Process & Timeline",
    questions: [
      {
        question: "How long does a typical project take?",
        answer: "Timeline depends on project complexity. Simple websites typically take 2-4 weeks, while complex e-commerce or custom applications can take 6-12 weeks. We provide detailed timelines in our proposals and keep you updated throughout the development process."
      },
      {
        question: "What is your development process?",
        answer: "Our process includes: 1) Discovery Call to understand your needs, 2) Custom Proposal with timeline and pricing, 3) Development with regular updates and milestone reviews, 4) Launch & Support with training and ongoing assistance."
      },
      {
        question: "Do I own my website and data?",
        answer: "Absolutely. You own your website, domain, and all data. We provide you with full access and can transfer everything to you at any time. We believe in transparency and never lock clients into proprietary systems."
      }
    ]
  },
  {
    category: "Technical & Support",
    questions: [
      {
        question: "What technologies do you use?",
        answer: "We use modern, reliable technologies including React & Next.js for web development, WordPress & Shopify for content management, Google Analytics for insights, and AWS & Vercel for hosting. We choose technologies that are fast, secure, and future-proof."
      },
      {
        question: "Do you provide ongoing support?",
        answer: "Yes, we offer comprehensive ongoing support including 24/7 monitoring, security updates, performance optimization, regular backups, and priority technical support via email and phone."
      },
      {
        question: "Can you help with SEO and online visibility?",
        answer: "Definitely! Our Search & Visibility Suite includes traditional SEO (Google Search Console, technical SEO, rankings) plus our unique LLM Surge Service for AI search visibility (ChatGPT, Perplexity, Bing AI) with structured data optimization."
      }
    ]
  },
  {
    category: "Getting Started",
    questions: [
      {
        question: "How do I get started?",
        answer: "Simply book a free consultation call with us. We'll discuss your business goals, current challenges, and technical requirements. From there, we'll create a custom proposal tailored to your specific needs and budget."
      },
      {
        question: "Do you work with businesses in my industry?",
        answer: "We work with small and mid-sized businesses across all industries. Our solutions are designed to be flexible and customizable to meet the unique needs of any business, from professional services to e-commerce to local businesses."
      },
      {
        question: "What if I'm not satisfied with the work?",
        answer: "Your satisfaction is our priority. We work closely with you throughout the project with regular check-ins and milestone reviews. If you're not happy with any aspect of the work, we'll make it right. We stand behind our work with ongoing support and maintenance."
      }
    ]
  }
];

export default function FAQ() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-[#0E1B2B] text-white overflow-hidden">
        <Container>
          <div className="py-20 md:py-28 lg:py-32 pb-32 text-center">
            <div className="mx-auto max-w-4xl">
              <MotionWrapper direction="fade">
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tight text-balance mb-6">
                  Frequently Asked Questions
                </h1>
                <p className="text-xl md:text-2xl text-slate-300 font-light leading-relaxed mb-4">
                  Everything you need to know about our services, process, and how we can help your business grow.
                </p>
                <p className="text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto">
                  Can't find what you're looking for? We're here to help.
                </p>
              </MotionWrapper>
            </div>
          </div>
        </Container>
        
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

      {/* FAQ Sections with alternating backgrounds */}
      {faqs.map((category, categoryIndex) => {
        // Alternating pattern: white (0,2) and dark (1,3)
        const isDark = categoryIndex % 2 === 1;
        const sectionBg = isDark ? "bg-slate-900" : "bg-white";
        const textPrimary = isDark ? "text-white" : "text-slate-900";
        const textSecondary = isDark ? "text-slate-300" : "text-slate-600";
        const borderColor = isDark ? "border-slate-700" : "border-slate-200";
        const cardBg = isDark ? "bg-slate-800 border-slate-700" : "bg-slate-50 border-slate-200";
        
        return (
          <section key={categoryIndex} className={sectionBg}>
            <div className={`py-14 md:py-20 ${categoryIndex !== faqs.length - 1 ? `border-b ${borderColor}` : ''}`}>
              <Container>
                <div className="max-w-4xl mx-auto">
                  <h2 className={`text-3xl md:text-4xl font-bold ${textPrimary} mb-12 text-center tracking-tight`}>
                    {category.category}
                  </h2>
                  
                  <div className="space-y-6">
                    {category.questions.map((faq, faqIndex) => (
                      <div key={faqIndex} className={`${cardBg} border rounded-2xl p-8`}>
                        <h3 className={`text-xl font-bold ${textPrimary} mb-4`}>
                          {faq.question}
                        </h3>
                        <p className={`${textSecondary} leading-relaxed`}>
                          {faq.answer}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </Container>
            </div>
          </section>
        );
      })}

      {/* CTA Section - Dark Navy */}
      <section className="bg-slate-900">
        <div className="py-14 md:py-20">
          <Container>
            <div className="text-center">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight">
                Still Have Questions?
              </h2>
              <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                We're here to help. Schedule a free consultation to discuss your specific needs and get personalized answers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <CleanButton href="/consultation" aria="Book free consultation" isDark={true}>
                  Book Free Consultation
                </CleanButton>
                <CleanButton href="/contact" aria="Contact us for questions" isDark={true}>
                  Contact Us
                </CleanButton>
              </div>
            </div>
          </Container>
        </div>
      </section>
    </main>
  );
}
