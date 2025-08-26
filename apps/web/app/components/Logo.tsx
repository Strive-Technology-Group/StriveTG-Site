import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'white' | 'dark';
  showText?: boolean;
  className?: string;
}

export function Logo({ 
  size = 'md', 
  variant = 'default', 
  showText = true,
  className = '' 
}: LogoProps) {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-10 h-10'
  };

  const textSizeClasses = {
    sm: 'text-lg',
    md: 'text-xl', 
    lg: 'text-2xl'
  };

  const textColorClasses = {
    default: 'text-primary',
    white: 'text-white',
    dark: 'text-primary'
  };

  return (
    <Link href="/" className={`flex items-center space-x-3 group ${className}`}>
      <div className="transition-transform duration-200 group-hover:scale-105">
        <Image 
          src="/strivetg-logo.svg" 
          alt="Strive Technology Group" 
          width={size === 'sm' ? 24 : size === 'md' ? 32 : 40}
          height={size === 'sm' ? 24 : size === 'md' ? 32 : 40}
          className={`${sizeClasses[size]} transition-transform duration-200`}
          priority
        />
      </div>
      {showText && (
        <div className="flex flex-col">
          <span className={`font-display font-bold ${textSizeClasses[size]} ${textColorClasses[variant]} leading-tight`}>
            Strive Technology Group
          </span>
        </div>
      )}
    </Link>
  );
}

// Compact version for mobile
export function LogoCompact({ 
  variant = 'default',
  className = '' 
}: { 
  variant?: 'default' | 'white' | 'dark';
  className?: string;
}) {
  const textColorClasses = {
    default: 'text-primary',
    white: 'text-white',
    dark: 'text-primary'
  };

  return (
    <Link href="/" className={`flex items-center space-x-2 group ${className}`}>
      <div className="transition-transform duration-200 group-hover:scale-105">
        <Image 
          src="/strivetg-logo.svg" 
          alt="Strive Technology Group" 
          width={28}
          height={28}
          className="w-7 h-7"
          priority
        />
      </div>
      <span className={`font-display font-bold text-lg ${textColorClasses[variant]}`}>
        StriveTG
      </span>
    </Link>
  );
}
