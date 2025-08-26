import React from 'react';
import { Metadata } from 'next';
import { Section } from '../components/Section';
import { Card } from '../components/Card';
import { Button } from '../components/Button';

export const metadata: Metadata = {
  title: 'Pricing | Strive Technology Group',
  description: 'Custom pricing for professional tech solutions. Transparent proposals with no hidden fees. Get affordable access to expert tech talent without payroll overhead.',
};

export default function Pricing() {
  return (
    <>
      {/* Hero Section */}
      <Section background="dark" size="xl" className="bg-gradient-hero">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
            <span className="gradient-text">Custom Solutions</span>, Transparent Pricing
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Every business is unique. Your pricing should be too.
          </p>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Get professional tech talent at a fraction of the cost of hiring in-house.
          </p>
        </div>
      </Section>

      {/* Value Proposition */}
      <Section size="xl">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-primary mb-8">
            Why Custom Pricing Works Better
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed mb-8">
            One-size-fits-all packages force you to pay for features you don't need or leave you without the functionality your business requires. Our custom approach means you get exactly what you need at a price that makes sense.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card variant="feature" className="text-center">
            <div className="w-16 h-16 bg-gradient-brand rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-display font-bold text-primary mb-3">Pay for What You Need</h3>
            <p className="text-gray-600">
              No unnecessary features or monthly fees for services you don't use. Every solution is tailored to your specific requirements.
            </p>
          </Card>

          <Card variant="feature" className="text-center">
            <div className="w-16 h-16 bg-gradient-brand rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <h3 className="text-xl font-display font-bold text-primary mb-3">Scale as You Grow</h3>
            <p className="text-gray-600">
              Start with what you need today and expand your tech stack as your business grows. No long-term commitments or upgrade penalties.
            </p>
          </Card>

          <Card variant="feature" className="text-center">
            <div className="w-16 h-16 bg-gradient-brand rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
            </div>
            <h3 className="text-xl font-display font-bold text-primary mb-3">Transparent Proposals</h3>
            <p className="text-gray-600">
              Clear breakdown of costs, timeline, and deliverables. No hidden fees, no surprise charges, no confusing technical jargon.
            </p>
          </Card>
        </div>
      </Section>

      {/* Pricing Factors */}
      <Section background="gray" size="xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-primary mb-6">
            What Affects Your Price?
          </h2>
          <p className="text-xl text-gray-600">
            Understanding the factors that influence pricing helps you make informed decisions about your investment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Card className="p-8">
            <h3 className="text-2xl font-display font-bold text-primary mb-6">Project Scope & Complexity</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-accent-blue rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-primary">Simple Business Website</h4>
                  <p className="text-gray-600 text-sm">5-10 pages, contact forms, basic SEO</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-accent-teal rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-primary">E-commerce Platform</h4>
                  <p className="text-gray-600 text-sm">Product catalog, shopping cart, payment processing</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-accent-purple rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-primary">Custom Web Application</h4>
                  <p className="text-gray-600 text-sm">User portals, booking systems, advanced integrations</p>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-8">
            <h3 className="text-2xl font-display font-bold text-primary mb-6">Integrations & Features</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-accent-blue rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-primary">Third-party Integrations</h4>
                  <p className="text-gray-600 text-sm">CRM, email marketing, payment gateways</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-accent-teal rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-primary">Custom Functionality</h4>
                  <p className="text-gray-600 text-sm">Booking systems, user accounts, automated workflows</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-accent-purple rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-primary">Advanced Analytics</h4>
                  <p className="text-gray-600 text-sm">Custom dashboards, reporting, data visualization</p>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-8">
            <h3 className="text-2xl font-display font-bold text-primary mb-6">Timeline & Urgency</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-primary">Standard Timeline</h4>
                  <p className="text-gray-600 text-sm">4-8 weeks for most projects, best value pricing</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-primary">Expedited Delivery</h4>
                  <p className="text-gray-600 text-sm">2-4 weeks, additional 25% for priority scheduling</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-primary">Rush Projects</h4>
                  <p className="text-gray-600 text-sm">1-2 weeks, additional 50% for immediate priority</p>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-8">
            <h3 className="text-2xl font-display font-bold text-primary mb-6">Ongoing Support Level</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-accent-blue rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-primary">Basic Maintenance</h4>
                  <p className="text-gray-600 text-sm">$300-500/month - Updates, backups, basic support</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-accent-teal rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-primary">Full Support</h4>
                  <p className="text-gray-600 text-sm">$800-1,500/month - Priority support, analytics, optimization</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-accent-purple rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h4 className="font-semibold text-primary">Managed Service</h4>
                  <p className="text-gray-600 text-sm">$2,000+/month - Dedicated tech partner, ongoing development</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </Section>

      {/* Cost Comparison */}
      <Section size="xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-primary mb-6">
            Strive Technology Group vs Hiring In-House
          </h2>
          <p className="text-xl text-gray-600">
            Affordable access to expert tech talent without payroll overhead.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <Card className="p-8 border-2 border-accent-blue">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gradient-brand rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-2xl">STG</span>
              </div>
              <h3 className="text-2xl font-display font-bold text-primary mb-2">Strive Technology Group</h3>
              <p className="text-accent-teal font-semibold">Professional Tech Partner</p>
            </div>
            
            <div className="space-y-4 mb-6">
              <div className="flex justify-between items-center">
                <span className="font-semibold">Initial Project Cost:</span>
                <span className="text-accent-blue font-bold">$1,500 - $15,000</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-semibold">Monthly Support:</span>
                <span className="text-accent-blue font-bold">$300 - $2,000</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-semibold">Annual Cost:</span>
                <span className="text-accent-blue font-bold">$5,000 - $30,000</span>
              </div>
            </div>

            <div className="border-t pt-4">
              <h4 className="font-semibold text-primary mb-2">What You Get:</h4>
              <ul className="space-y-1 text-sm text-gray-600">
                <li>• Full-stack development expertise</li>
                <li>• SEO and digital marketing knowledge</li>
                <li>• Business analytics and automation</li>
                <li>• Ongoing support and optimization</li>
                <li>• No benefits, vacation, or overhead costs</li>
                <li>• Flexible engagement terms</li>
              </ul>
            </div>
          </Card>

          <Card className="p-8 opacity-75">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-gray-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-display font-bold text-gray-600 mb-2">In-House Employee</h3>
              <p className="text-gray-500 font-semibold">Traditional Hiring</p>
            </div>
            
            <div className="space-y-4 mb-6">
              <div className="flex justify-between items-center">
                <span className="font-semibold">Salary:</span>
                <span className="text-gray-600 font-bold">$40,000 - $80,000</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-semibold">Benefits (30%):</span>
                <span className="text-gray-600 font-bold">$12,000 - $24,000</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-semibold">Annual Total:</span>
                <span className="text-gray-600 font-bold">$52,000 - $104,000</span>
              </div>
            </div>

            <div className="border-t pt-4">
              <h4 className="font-semibold text-gray-600 mb-2">Additional Costs:</h4>
              <ul className="space-y-1 text-sm text-gray-500">
                <li>• 2-6 months to hire and onboard</li>
                <li>• Limited to one area of expertise</li>
                <li>• Training and professional development</li>
                <li>• Equipment and software licenses</li>
                <li>• Paid time off and sick leave</li>
                <li>• Risk of turnover and re-hiring</li>
              </ul>
            </div>
          </Card>
        </div>
      </Section>

      {/* Getting Started */}
      <Section background="gray" size="xl">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-display font-bold text-primary mb-8">
            Ready to Get Your Custom Quote?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's discuss your specific needs and create a solution that fits your budget and goals.
          </p>
          
          <Card className="p-8 mb-8">
            <h3 className="text-2xl font-display font-bold text-primary mb-4">How It Works</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold">1</div>
                <h4 className="font-semibold text-primary mb-2">Free Consultation</h4>
                <p className="text-gray-600 text-sm">Tell us about your business goals and current challenges.</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold">2</div>
                <h4 className="font-semibold text-primary mb-2">Custom Proposal</h4>
                <p className="text-gray-600 text-sm">Receive detailed proposal with clear pricing and timeline.</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-3 font-bold">3</div>
                <h4 className="font-semibold text-primary mb-2">Get Started</h4>
                <p className="text-gray-600 text-sm">Approve the proposal and we begin working immediately.</p>
              </div>
            </div>
          </Card>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/consultation" size="lg">
              Book Free Consultation
            </Button>
            <Button href="/contact" variant="outline" size="lg">
              Request Written Quote
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
