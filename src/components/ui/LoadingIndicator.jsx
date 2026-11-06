import React from 'react';
import { cn } from '../../utils/cn';

/**
 * High-tech builder radar spinner
 */
export function LoadingIndicator({ size = 'md', text = 'LOADING COLLECTIVE DATA...', className }) {
  const sizeMap = {
    sm: 'w-6 h-6',
    md: 'w-10 h-10',
    lg: 'w-16 h-16',
  };

  return (
    <div className={cn('flex flex-col items-center justify-center p-8 gap-4', className)}>
      <div className={cn('relative flex items-center justify-center', sizeMap[size] || sizeMap.md)}>
        {/* Outer Tech Ring */}
        <div className="absolute inset-0 rounded-full border border-white/10 animate-radar-spin border-t-lime" />
        {/* Inner Counter Ring */}
        <div className="absolute inset-1 rounded-full border border-dashed border-white/20 animate-spin [animation-duration:8s]" />
        {/* Center Pulse Point */}
        <div className="w-2 h-2 rounded-full bg-lime shadow-glow-lime-sm animate-ping" />
      </div>

      {text && (
        <span className="font-mono text-xs text-silver-dark tracking-widest uppercase">
          {text}
        </span>
      )}
    </div>
  );
}

export default LoadingIndicator;
