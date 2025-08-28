import React from 'react';
import { MotionWrapper, MotionStagger, MotionStaggerChild } from './MotionWrapper';

interface ProcessStep {
  step: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface ProcessTimelineProps {
  steps: ProcessStep[];
}

export function ProcessTimeline({ steps }: ProcessTimelineProps) {
  return (
    <MotionWrapper direction="fade">
      <div className="relative">
        {/* Desktop Timeline */}
        <div className="hidden md:block">
          <MotionStagger className="grid grid-cols-4 gap-8 relative">
            {/* Connection Line */}
            <div className="absolute top-8 left-16 right-16 h-0.5 bg-white/30"></div>
            
            {steps.map((item, index) => (
              <MotionStaggerChild key={index} className="relative">
                <div className="text-center">
                  {/* Icon with premium white background */}
                  <div className="relative z-10 w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-xl hover:scale-110 transition-all duration-300 hover:shadow-2xl border border-white/20">
                    <div className="text-slate-700">
                      {item.icon}
                    </div>
                  </div>
                  
                  {/* Step number badge */}
                  <div className="absolute top-0 right-0 w-8 h-8 bg-slate-900 border-2 border-white text-white rounded-full flex items-center justify-center text-sm font-bold shadow-lg">
                    {item.step}
                  </div>
                  
                  <h3 className="text-xl font-display font-bold text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </MotionStaggerChild>
            ))}
          </MotionStagger>
        </div>

        {/* Mobile Timeline */}
        <div className="md:hidden space-y-8">
          {steps.map((item, index) => (
            <MotionStaggerChild key={index}>
              <div className="flex items-start space-x-4">
                <div className="relative flex-shrink-0">
                  <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-xl border border-white/20">
                    <div className="text-slate-700">
                      {item.icon}
                    </div>
                  </div>
                  <div className="absolute -top-1 -right-1 w-6 h-6 bg-slate-900 border-2 border-white text-white rounded-full flex items-center justify-center text-xs font-bold">
                    {item.step}
                  </div>
                  
                  {/* Connecting line for mobile */}
                  {index < steps.length - 1 && (
                    <div className="absolute top-14 left-1/2 w-0.5 h-12 bg-white/30 transform -translate-x-1/2"></div>
                  )}
                </div>
                
                <div className="flex-1 pt-2">
                  <h3 className="text-lg font-display font-bold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </MotionStaggerChild>
          ))}
        </div>
      </div>
    </MotionWrapper>
  );
}
