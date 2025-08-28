import React from 'react';
import { Button } from './Button';
import { MotionWrapper } from './MotionWrapper';

interface CTAStripProps {
  title: string;
  description: string;
  primaryButton: {
    text: string;
    href: string;
  };
  secondaryButton?: {
    text: string;
    href: string;
  };
  variant?: 'gradient' | 'glass';
  className?: string;
}

export function CTAStrip({
  title,
  description,
  primaryButton,
  secondaryButton,
  variant = 'gradient',
  className = '',
}: CTAStripProps) {
  const variantClasses = {
    gradient: 'bg-gradient-primary text-white relative overflow-hidden',
    glass: 'glass border border-white/20 relative overflow-hidden',
  };

  const textColorClasses = {
    gradient: 'text-white',
    glass: 'text-primary',
  };

  return (
    <MotionWrapper direction="fade" className={`py-16 ${className}`}>
      <div className={`rounded-3xl p-8 md:p-12 ${variantClasses[variant]}`}>
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-24 h-24 bg-white rounded-full blur-xl animate-float"></div>
          <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-white rounded-full blur-xl animate-float" style={{animationDelay: '1s'}}></div>
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <h2 className={`text-3xl md:text-4xl font-display font-bold mb-4 ${textColorClasses[variant]}`}>
            {title}
          </h2>
          <p className={`text-lg md:text-xl mb-8 ${variant === 'gradient' ? 'text-white/90' : 'text-gray-600'} max-w-2xl mx-auto leading-relaxed`}>
            {description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              href={primaryButton.href} 
              size="lg" 
              variant={variant === 'gradient' ? 'ghost' : 'primary'}
              className="px-8 py-4"
              showArrow={true}
            >
              {primaryButton.text}
            </Button>
            
            {secondaryButton && (
              <Button 
                href={secondaryButton.href} 
                size="lg" 
                variant="outline"
                className={`px-8 py-4 ${variant === 'gradient' ? 'border-white/30 text-white hover:bg-white/10' : ''}`}
                showArrow={true}
              >
                {secondaryButton.text}
              </Button>
            )}
          </div>
        </div>
      </div>
    </MotionWrapper>
  );
}
