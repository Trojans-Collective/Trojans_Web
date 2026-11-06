import React from 'react';
import { cn } from '../../utils/cn';

/**
 * Editorial Section Header with monospaced index and clean typography
 */
export function SectionHeader({
  index,
  tag,
  title,
  subtitle,
  children,
  align = 'left',
  className,
}) {
  const alignClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center mx-auto',
    right: 'text-right items-end ml-auto',
  };

  return (
    <header className={cn('flex flex-col mb-12 max-w-3xl', alignClasses[align], className)}>
      {/* Category / Index Readout */}
      {(index || tag) && (
        <div className="flex items-center gap-2 mb-3">
          {index && (
            <span className="font-mono text-xs text-lime tracking-widest uppercase">
              // {index}
            </span>
          )}
          {tag && (
            <span className="font-mono text-xs text-silver-dark tracking-wider uppercase border-l border-obsidian-border pl-2">
              {tag}
            </span>
          )}
        </div>
      )}

      {/* Main Section Title */}
      <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-silver-bright mb-4">
        {title}
      </h2>

      {/* Subtitle / Narrative Paragraph */}
      {subtitle && (
        <p className="font-sans text-base sm:text-lg text-silver-muted leading-relaxed font-normal">
          {subtitle}
        </p>
      )}

      {children && <div className="mt-6">{children}</div>}
    </header>
  );
}

export default SectionHeader;
