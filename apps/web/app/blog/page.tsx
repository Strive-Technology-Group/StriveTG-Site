import React from 'react';
import { Metadata } from 'next';
import { Section } from '../components/Section';
import { Card } from '../components/Card';
import { Button } from '../components/Button';

export const metadata: Metadata = {
  title: 'Blog | Strive Technology Group',
  description: 'Tips, insights, and resources about web development, SEO, business analytics, and technology solutions for small businesses.',
};

export default function Blog() {
  const upcomingArticles = [
    {
      title: 'SEO Basics for Small Businesses',
      excerpt: 'Simple strategies to improve your Google ranking and attract more local customers.',
      category: 'SEO',
      readTime: '5 min read',
      publishDate: 'Coming Soon'
    },
    {
      title: 'Website Must-Haves in 2024',
      excerpt: 'Essential features every business website needs to convert visitors into customers.',
      category: 'Web Development',
      readTime: '7 min read',
      publishDate: 'Coming Soon'
    },
    {
      title: 'Analytics That Actually Matter',
      excerpt: 'Which metrics to track and how to use data to make better business decisions.',
      category: 'Analytics',
      readTime: '6 min read',
      publishDate: 'Coming Soon'
    },
    {
      title: 'DIY vs Professional: When to Hire Help',
      excerpt: 'How to decide when it\'s worth investing in professional tech solutions vs doing it yourself.',
      category: 'Business Strategy',
      readTime: '8 min read',
      publishDate: 'Coming Soon'
    },
    {
      title: 'Local SEO Checklist',
      excerpt: 'Step-by-step guide to optimizing your business for local search results.',
      category: 'SEO',
      readTime: '10 min read',
      publishDate: 'Coming Soon'
    },
    {
      title: 'E-commerce Essentials',
      excerpt: 'Key features and strategies for successful online selling.',
      category: 'E-commerce',
      readTime: '9 min read',
      publishDate: 'Coming Soon'
    }
  ];

  const categories = [
    'All Posts',
    'SEO',
    'Web Development',
    'Analytics',
    'Business Strategy',
    'E-commerce'
  ];

  return (
    <>
      {/* Hero Section */}
      <Section background="dark" size="xl" className="bg-gradient-hero">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
            Tech <span className="gradient-text">Insights</span> & Resources
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Practical tips and insights to help your business leverage technology for growth.
          </p>
        </div>
      </Section>

      {/* Blog Content */}
      <Section size="xl">
        <div className="max-w-6xl mx-auto">
          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  index === 0 
                    ? 'bg-primary text-white' 
                    : 'bg-secondary text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Coming Soon Notice */}
          <Card className="max-w-4xl mx-auto p-8 text-center mb-16">
            <div className="w-16 h-16 bg-gradient-brand rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
            </div>
            <h2 className="text-3xl font-display font-bold text-primary mb-4">
              Blog Articles Coming Soon
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              We're currently preparing valuable content to help you make informed decisions about your business technology needs.
            </p>
            <p className="text-gray-600 mb-8">
              In the meantime, we'd love to answer any specific questions you have during a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/consultation" size="lg">
                Ask Questions Directly
              </Button>
              <Button href="/services" variant="outline" size="lg">
                Explore Our Services
              </Button>
            </div>
          </Card>

          {/* Upcoming Articles Preview */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-6">
              What's Coming
            </h2>
            <p className="text-xl text-gray-600">
              Here's a preview of the helpful content we're preparing for you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {upcomingArticles.map((article, index) => (
              <Card key={index} variant="service" className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-accent-blue text-white text-xs rounded-full">
                    {article.category}
                  </span>
                  <span className="text-gray-500 text-xs">{article.readTime}</span>
                </div>
                
                <h3 className="text-xl font-display font-bold text-primary mb-3">
                  {article.title}
                </h3>
                
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {article.excerpt}
                </p>
                
                <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                  <span className="text-gray-500 text-xs">{article.publishDate}</span>
                  <button className="text-accent-blue text-sm font-medium opacity-50 cursor-not-allowed">
                    Read More →
                  </button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      {/* Newsletter Signup */}
      <Section background="gray" size="lg">
        <Card className="max-w-4xl mx-auto p-8 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-6">
            Stay Updated
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Be the first to know when we publish new articles and insights.
          </p>
          
          <div className="max-w-md mx-auto">
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-blue focus:border-transparent transition-colors"
              />
              <Button className="px-6">
                Subscribe
              </Button>
            </div>
            <p className="text-gray-500 text-sm mt-3">
              No spam. Unsubscribe anytime.
            </p>
          </div>
        </Card>
      </Section>

      {/* Topics We'll Cover */}
      <Section size="lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-6">
            Topics We'll Cover
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our content will focus on practical, actionable advice for small business owners.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              icon: '🎯',
              title: 'SEO Strategies',
              description: 'Improve your search rankings and attract more customers'
            },
            {
              icon: '💻',
              title: 'Website Tips',
              description: 'Best practices for effective business websites'
            },
            {
              icon: '📊',
              title: 'Analytics Insights',
              description: 'Understanding and using your business data'
            },
            {
              icon: '🚀',
              title: 'Growth Tactics',
              description: 'Technology strategies for business growth'
            }
          ].map((topic, index) => (
            <Card key={index} className="p-6 text-center">
              <div className="text-4xl mb-4">{topic.icon}</div>
              <h3 className="text-lg font-display font-bold text-primary mb-3">
                {topic.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {topic.description}
              </p>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}
