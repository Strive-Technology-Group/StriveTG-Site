import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  background?: 'white' | 'gray' | 'gradient' | 'dark';
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export function Section({
  children,
  className = '',
  background = 'white',
  size = 'lg',
}: SectionProps) {
  const backgroundClasses = {
    white: 'bg-white',
    gray: 'bg-secondary',
    gradient: 'bg-gradient-brand',
    dark: 'bg-primary text-white',
  };
  
  const sizeClasses = {
    sm: 'py-8',
    md: 'py-12',
    lg: 'py-16',
    xl: 'py-24',
  };
  
  const classes = `${backgroundClasses[background]} ${sizeClasses[size]} ${className}`;
  
  return (
    <section className={classes}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}
