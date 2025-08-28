import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  showArrow?: boolean;
  arrowPosition?: 'right' | 'left';
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  className = '',
  disabled = false,
  type = 'button',
  showArrow = true,
  arrowPosition = 'right',
}: ButtonProps) {
  const baseClasses = 'group inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-offset-2 relative overflow-hidden';
  
  const variantClasses = {
    primary: 'bg-[#0A2540] text-white border-2 border-[#0A2540] focus:ring-[#0A2540] shadow-sm hover:shadow-md',
    secondary: 'bg-white text-[#0A2540] border-2 border-[#0A2540] focus:ring-[#0A2540] shadow-sm hover:shadow-md',
    outline: 'bg-transparent border-2 border-[#0A2540] text-[#0A2540] focus:ring-[#0A2540] shadow-sm hover:shadow-md',
    ghost: 'bg-transparent border-2 border-white/30 text-white hover:border-white focus:ring-white/50',
  };
  
  const sizeClasses = {
    sm: 'px-4 py-2.5 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };
  
  const arrowClasses = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
  };
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className} ${
    disabled ? 'opacity-50 cursor-not-allowed pointer-events-none' : 'hover:scale-[1.02] hover:-translate-y-0.5'
  }`;



  const getColorSweepOverlay = () => {
    switch (variant) {
      case 'primary':
        return (
          <div className="absolute inset-0 bg-white translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-400 ease-out" />
        );
      case 'secondary':
        return (
          <div className="absolute inset-0 bg-[#0A2540] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-400 ease-out" />
        );
      case 'outline':
        return (
          <div className="absolute inset-0 bg-[#0A2540] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-400 ease-out" />
        );
      case 'ghost':
        return (
          <div className="absolute inset-0 bg-white translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-400 ease-out" />
        );
      default:
        return null;
    }
  };

  const getTextColorClass = () => {
    switch (variant) {
      case 'primary':
        return 'text-white group-hover:text-[#0A2540]';
      case 'secondary':
        return 'text-[#0A2540] group-hover:text-white';
      case 'outline':
        return 'text-[#0A2540] group-hover:text-white';
      case 'ghost':
        return 'text-white group-hover:text-[#0A2540]';
      default:
        return 'text-white';
    }
  };

  const buttonContent = (
    <>
      {/* Color sweep overlay */}
      {getColorSweepOverlay()}
      
      {/* Content */}
      {showArrow && arrowPosition === 'left' && (
        <svg 
          className={`${arrowClasses[size]} transition-all duration-400 group-hover:-translate-x-1 rotate-180 relative z-10 ${getTextColorClass()}`}
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
      )}
      <span className={`relative z-10 tracking-wide transition-all duration-400 ${getTextColorClass()}`}>
        {children}
      </span>
      {showArrow && arrowPosition === 'right' && (
        <svg 
          className={`${arrowClasses[size]} transition-all duration-400 group-hover:translate-x-1 relative z-10 ${getTextColorClass()}`}
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
      )}
    </>
  );
  
  if (href) {
    return (
      <Link href={href} className={classes} onClick={onClick}>
        {buttonContent}
      </Link>
    );
  }
  
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {buttonContent}
    </button>
  );
}
