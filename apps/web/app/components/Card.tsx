import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'feature' | 'service' | 'testimonial';
  hover?: boolean;
  onClick?: () => void;
}

export function Card({
  children,
  className = '',
  variant = 'default',
  hover = true,
  onClick,
}: CardProps) {
  const baseClasses = 'rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300';
  
  const variantClasses = {
    default: 'shadow-lg hover:shadow-xl',
    feature: 'shadow-xl bg-gradient-to-br from-white via-white to-light-gray border-gray-100',
    service: 'shadow-lg hover:shadow-2xl border-accent-blue/20 hover:border-accent-blue/40',
    testimonial: 'shadow-lg bg-gradient-to-r from-secondary to-white',
  };
  
  const hoverClasses = hover ? 'hover-scale hover-glow' : '';
  const clickableClasses = onClick ? 'cursor-pointer' : '';
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${hoverClasses} ${clickableClasses} ${className}`;
  
  return (
    <div className={classes} onClick={onClick}>
      {children}
    </div>
  );
}
