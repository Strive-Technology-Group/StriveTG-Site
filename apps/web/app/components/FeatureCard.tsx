import React from 'react';
import { Card } from './Card';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  benefits: string[];
}

export function FeatureCard({ icon, title, description, benefits }: FeatureCardProps) {
  return (
    <Card variant="feature" className="h-full hover-lift group relative overflow-hidden">
      <div className="flex flex-col h-full relative z-10">
        <div className="flex items-center justify-center w-16 h-16 bg-gradient-brand rounded-2xl mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <h3 className="text-xl font-display font-bold text-primary mb-4 group-hover:text-accent-blue transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-600 mb-6 flex-grow leading-relaxed">
          {description}
        </p>
        <ul className="space-y-3">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-start space-x-3 text-sm text-gray-700">
              <div className="w-5 h-5 bg-accent-teal/20 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0">
                <svg className="w-3 h-3 text-accent-teal" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
      </div>
      
      {/* Background gradient on hover */}
      <div className="absolute inset-0 bg-gradient-subtle opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
    </Card>
  );
}
