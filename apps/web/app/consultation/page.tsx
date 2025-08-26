'use client';

import React, { useState } from 'react';
import { Metadata } from 'next';
import { Section } from '../components/Section';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import { MotionWrapper, MotionStagger, MotionStaggerChild } from '../components/MotionWrapper';

export default function Consultation() {
  const [selectedOption, setSelectedOption] = useState<'meeting' | 'phone' | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    business: '',
    phone: '',
    preferredTime: '',
    timezone: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Consultation request:', { option: selectedOption, ...formData });
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <Section size="xl">
        <Card className="max-w-2xl mx-auto p-8 text-center">
          <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-3xl font-display font-bold text-primary mb-4">
            Consultation Request Received!
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            {selectedOption === 'meeting' 
              ? "We'll send you a calendar link within the next hour to schedule your free consultation."
              : "We'll call you within 24 hours at your preferred time to discuss your tech needs."
            }
          </p>
          <p className="text-gray-600 mb-8">
            Come prepared to discuss your business goals, current challenges, and what success looks like for your company.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/services">
              Explore Our Services
            </Button>
            <Button href="/pricing" variant="outline">
              Learn About Pricing
            </Button>
          </div>
        </Card>
      </Section>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <Section background="dark" size="xl" className="bg-gradient-hero">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
            Book Your <span className="gradient-text">Free Consultation</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            The fastest way to get started. Let's discuss your business needs and explore how we can help you scale smarter.
          </p>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            No sales pressure. Just honest advice about what's best for your business.
          </p>
        </div>
      </Section>

      {/* Consultation Options */}
      <Section size="xl">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-6">
              Choose Your Preferred Method
            </h2>
            <p className="text-xl text-gray-600">
              Pick the option that works best for your schedule.
            </p>
          </div>

          <MotionStagger className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <MotionStaggerChild>
              <Card 
                className={`p-8 cursor-pointer transition-all duration-300 group relative overflow-hidden ${
                  selectedOption === 'meeting' 
                    ? 'ring-2 ring-accent-blue border-accent-blue gradient-border' 
                    : 'hover:shadow-2xl hover-lift'
                }`}
                onClick={() => setSelectedOption('meeting')}
              >
                <div className="text-center relative z-10">
                  <div className="w-16 h-16 bg-gradient-brand rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-display font-bold text-primary mb-4">
                    Book a Meeting
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Schedule a video call at your convenience using our online calendar.
                  </p>
                  <ul className="text-sm text-gray-600 text-left space-y-3">
                    <li className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-accent-blue rounded-full"></div>
                      <span>Choose from available time slots</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-accent-teal rounded-full"></div>
                      <span>Automatic calendar reminders</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-accent-purple rounded-full"></div>
                      <span>Video call via Zoom or Google Meet</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-accent-blue rounded-full"></div>
                      <span>30-45 minute discussion</span>
                    </li>
                  </ul>
                </div>
                {selectedOption === 'meeting' && (
                  <div className="absolute inset-0 bg-gradient-subtle opacity-20 rounded-2xl"></div>
                )}
              </Card>
            </MotionStaggerChild>

            <MotionStaggerChild>
              <Card 
                className={`p-8 cursor-pointer transition-all duration-300 group relative overflow-hidden ${
                  selectedOption === 'phone' 
                    ? 'ring-2 ring-accent-blue border-accent-blue gradient-border' 
                    : 'hover:shadow-2xl hover-lift'
                }`}
                onClick={() => setSelectedOption('phone')}
              >
                <div className="text-center relative z-10">
                  <div className="w-16 h-16 bg-gradient-brand rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-display font-bold text-primary mb-4">
                    Request a Phone Call
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Provide your preferred times and we'll call you within 24 hours.
                  </p>
                  <ul className="text-sm text-gray-600 text-left space-y-3">
                    <li className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-accent-blue rounded-full"></div>
                      <span>Flexible timing to fit your schedule</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-accent-teal rounded-full"></div>
                      <span>No need to download software</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-accent-purple rounded-full"></div>
                      <span>Quick and convenient</span>
                    </li>
                    <li className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-accent-blue rounded-full"></div>
                      <span>20-30 minute discussion</span>
                    </li>
                  </ul>
                </div>
                {selectedOption === 'phone' && (
                  <div className="absolute inset-0 bg-gradient-subtle opacity-20 rounded-2xl"></div>
                )}
              </Card>
            </MotionStaggerChild>
          </MotionStagger>

          {/* Form */}
          {selectedOption && (
            <MotionWrapper direction="up">
              <Card className="p-8 shadow-2xl border-2 border-gray-100">
                <h3 className="text-2xl font-display font-bold text-primary mb-6">
                  {selectedOption === 'meeting' ? 'Meeting Request Details' : 'Phone Call Request Details'}
                </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-blue focus:border-transparent transition-colors"
                      placeholder="John Smith"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-blue focus:border-transparent transition-colors"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="business" className="block text-sm font-medium text-gray-700 mb-2">
                      Business Name
                    </label>
                    <input
                      type="text"
                      id="business"
                      value={formData.business}
                      onChange={(e) => setFormData(prev => ({ ...prev, business: e.target.value }))}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-blue focus:border-transparent transition-colors"
                      placeholder="ABC Company"
                    />
                  </div>

                  {selectedOption === 'phone' && (
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-blue focus:border-transparent transition-colors"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                  )}
                </div>

                {selectedOption === 'phone' && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-700 mb-2">
                        Preferred Call Time
                      </label>
                      <select
                        id="preferredTime"
                        value={formData.preferredTime}
                        onChange={(e) => setFormData(prev => ({ ...prev, preferredTime: e.target.value }))}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-blue focus:border-transparent transition-colors"
                      >
                        <option value="">Select preferred time</option>
                        <option value="morning">Morning (9AM - 12PM)</option>
                        <option value="afternoon">Afternoon (12PM - 5PM)</option>
                        <option value="evening">Evening (5PM - 8PM)</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="timezone" className="block text-sm font-medium text-gray-700 mb-2">
                        Timezone
                      </label>
                      <select
                        id="timezone"
                        value={formData.timezone}
                        onChange={(e) => setFormData(prev => ({ ...prev, timezone: e.target.value }))}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-blue focus:border-transparent transition-colors"
                      >
                        <option value="">Select timezone</option>
                        <option value="EST">Eastern (EST/EDT)</option>
                        <option value="CST">Central (CST/CDT)</option>
                        <option value="MST">Mountain (MST/MDT)</option>
                        <option value="PST">Pacific (PST/PDT)</option>
                      </select>
                    </div>
                  </div>
                )}

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Brief Description of Your Needs
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData(prev => ({ ...prev, message: e.target.value }))}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-blue focus:border-transparent transition-colors resize-vertical"
                    placeholder="Tell us about your business goals and what you're hoping to achieve..."
                  />
                </div>

                <Button type="submit" size="lg" className="w-full bg-gradient-primary hover:scale-105 hover:shadow-2xl transition-all duration-300">
                  {selectedOption === 'meeting' ? 'Request Meeting Link' : 'Request Phone Call'}
                </Button>
              </form>
              </Card>
            </MotionWrapper>
          )}
        </div>
      </Section>

      {/* What to Expect */}
      <Section background="gray" size="lg">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-primary mb-8">
            What to Expect During Your Consultation
          </h2>
          
          <MotionStagger className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <MotionStaggerChild>
              <Card className="p-6 text-center group">
                <div className="w-12 h-12 bg-accent-blue text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
                  1
                </div>
                <h3 className="text-lg font-display font-bold text-primary mb-3">
                  Business Discovery
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  We'll discuss your current business situation, goals, and challenges to understand how technology can help.
                </p>
              </Card>
            </MotionStaggerChild>

            <MotionStaggerChild>
              <Card className="p-6 text-center group">
                <div className="w-12 h-12 bg-accent-teal text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
                  2
                </div>
                <h3 className="text-lg font-display font-bold text-primary mb-3">
                  Solution Planning
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  We'll explore potential solutions and discuss which services would provide the most value for your business.
                </p>
              </Card>
            </MotionStaggerChild>

            <MotionStaggerChild>
              <Card className="p-6 text-center group">
                <div className="w-12 h-12 bg-accent-purple text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
                  3
                </div>
                <h3 className="text-lg font-display font-bold text-primary mb-3">
                  Next Steps
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  If it's a good fit, we'll outline next steps including timeline and budget. No pressure - just clear information.
                </p>
              </Card>
            </MotionStaggerChild>
          </MotionStagger>

          <MotionWrapper direction="up" delay={0.3}>
            <Card className="mt-8 p-6 bg-gradient-to-r from-secondary to-white border-2 border-accent-blue/20">
              <p className="text-gray-700 font-medium leading-relaxed">
                <strong className="text-primary">Remember:</strong> This is a consultation, not a sales call. Our goal is to understand your needs and provide honest advice about whether we're the right fit for your business.
              </p>
            </Card>
          </MotionWrapper>
        </div>
      </Section>
    </>
  );
}
