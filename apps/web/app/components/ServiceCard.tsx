import React from 'react';
import { Card } from './Card';
import { Button } from './Button';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  highlight?: boolean;
}

export function ServiceCard({ icon, title, description, features, highlight = false }: ServiceCardProps) {
  return (
    <Card variant="service" className={`h-full ${highlight ? 'ring-2 ring-accent-blue' : ''}`}>
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-center w-12 h-12 bg-gradient-brand rounded-lg mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-display font-bold text-primary mb-3">
          {title}
        </h3>
        <p className="text-gray-600 mb-6 flex-grow">
          {description}
        </p>
        <ul className="space-y-3 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start space-x-3 text-gray-700">
              <svg className="w-5 h-5 text-accent-blue mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <Button href="/contact" className="w-full">
          Request a Quote
        </Button>
      </div>
    </Card>
  );
}
