import React from 'react';
import { Metadata } from 'next';
import { Section } from '../components/Section';
import { Card } from '../components/Card';
import { Button } from '../components/Button';

export const metadata: Metadata = {
  title: 'FAQ | Strive Technology Group',
  description: 'Frequently asked questions about our services, pricing, process, and how we help small businesses with professional technology solutions.',
};

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
    <>
      {/* Hero Section */}
      <Section background="dark" size="xl" className="bg-gradient-hero">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Everything you need to know about our services, process, and how we can help your business grow.
          </p>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Can't find what you're looking for? We're here to help.
          </p>
        </div>
      </Section>

      {/* FAQ Sections */}
      {faqs.map((category, categoryIndex) => (
        <Section key={categoryIndex} size="xl" background={categoryIndex % 2 === 0 ? 'white' : 'gray'}>
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-12 text-center">
              {category.category}
            </h2>
            
            <div className="space-y-6">
              {category.questions.map((faq, faqIndex) => (
                <Card key={faqIndex} className="p-8">
                  <h3 className="text-xl font-display font-bold text-primary mb-4">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </Section>
      ))}

      {/* CTA Section */}
      <Section background="dark" size="xl" className="bg-gradient-hero">
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
            Still Have Questions?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            We're here to help. Schedule a free consultation to discuss your specific needs and get personalized answers.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/consultation" size="lg" className="bg-white text-primary hover:bg-gray-50">
              Book Free Consultation
            </Button>
            <Button href="/contact" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
              Contact Us
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
