import React from 'react';
import { cn } from '../../utils/cn';

/**
 * Technical badge & status indicator
 */
export function Badge({
  children,
  className,
  variant = 'lime',
  size = 'md',
  dot = false,
  dotPulse = false,
  ...props
}) {
  const baseStyles = 'inline-flex items-center font-mono uppercase tracking-wider font-medium select-none';

  const sizeStyles = {
    sm: 'text-[9px] px-1.5 py-0.5 gap-1 rounded-xs',
    md: 'text-[10px] px-2 py-0.5 gap-1.5 rounded-xs',
    lg: 'text-xs px-2.5 py-1 gap-2 rounded-xs',
  };

  const variantStyles = {
    lime: 'bg-lime-muted text-lime border border-lime/30',
    silver: 'bg-white/5 text-silver border border-white/10',
    spartan: 'bg-spartan-subtle text-red-300 border border-spartan-crimson/30',
    outline: 'bg-transparent text-silver-muted border border-obsidian-border',
  };

  const dotColor = {
    lime: 'bg-lime',
    silver: 'bg-silver',
    spartan: 'bg-spartan-crimson',
    outline: 'bg-silver-muted',
  };

  return (
    <span
      className={cn(
        baseStyles,
        sizeStyles[size] || sizeStyles.md,
        variantStyles[variant] || variantStyles.lime,
        className
      )}
      {...props}
    >
      {dot && (
        <span className="relative flex h-1.5 w-1.5">
          {dotPulse && (
            <span
              className={cn(
                'animate-ping absolute inline-flex h-full w-full rounded-full opacity-75',
                dotColor[variant]
              )}
            />
          )}
          <span className={cn('relative inline-flex rounded-full h-1.5 w-1.5', dotColor[variant])} />
        </span>
      )}
      <span>{children}</span>
    </span>
  );
}

export default Badge;
