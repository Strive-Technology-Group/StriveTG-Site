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
    sm: { width: 140, height: 38 },
    md: { width: 200, height: 50 },
    lg: { width: 240, height: 60 }
  };

  return (
    <Link href="/" className={`group ${className}`}>
      <div className="transition-all duration-200 group-hover:scale-105">
        <Image 
          src="/Full logo.svg" 
          alt="Strive Technology Group" 
          width={sizeClasses[size].width}
          height={sizeClasses[size].height}
          className="transition-transform duration-200"
          priority
        />
      </div>
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
  return (
    <Link href="/" className={`group ${className}`}>
      <div className="transition-all duration-200 group-hover:scale-105">
        <Image 
          src="/Full logo.svg" 
          alt="Strive Technology Group" 
          width={160}
          height={44}
          className="transition-transform duration-200"
          priority
        />
      </div>
    </Link>
  );
}
