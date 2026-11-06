import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '../../utils/cn';

/**
 * Standardized Design System Button
 */
export const Button = React.forwardRef(function Button(
  {
    children,
    className,
    variant = 'primary',
    size = 'md',
    to,
    href,
    external = false,
    icon: Icon,
    iconPosition = 'left',
    loading = false,
    disabled = false,
    onClick,
    type = 'button',
    ...props
  },
  ref
) {
  const baseStyles = 'inline-flex items-center justify-center font-sans text-sm font-medium tracking-normal transition-all duration-200 select-none cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-lime disabled:opacity-50 disabled:pointer-events-none active:scale-[0.98]';

  const sizeStyles = {
    sm: 'px-3 py-1.5 text-[11px] gap-1.5 rounded-sm',
    md: 'px-5 py-2.5 text-xs gap-2 rounded-sm',
    lg: 'px-7 py-3 text-sm gap-2.5 rounded-sm',
  };

  const variantStyles = {
    primary: 'bg-lime text-obsidian font-semibold hover:bg-lime-hover hover:shadow-glow-lime-sm border border-lime',
    secondary: 'bg-obsidian-surface text-silver hover:text-white hover:border-silver-muted border border-obsidian-border hover:bg-obsidian-card',
    outline: 'bg-transparent text-silver border border-obsidian-border hover:border-lime hover:text-lime',
    ghost: 'bg-transparent text-silver-muted hover:text-white hover:bg-obsidian-surface border border-transparent',
    danger: 'bg-spartan-crimson text-silver-bright hover:brightness-110 border border-spartan-crimson',
  };

  const combinedClasses = cn(
    baseStyles,
    sizeStyles[size] || sizeStyles.md,
    variantStyles[variant] || variantStyles.primary,
    className
  );

  const content = (
    <>
      {loading ? (
        <span className="w-3.5 h-3.5 border-2 border-current border-t-transparent rounded-full animate-spin mr-1" />
      ) : Icon && iconPosition === 'left' ? (
        <Icon className="w-3.5 h-3.5 shrink-0" />
      ) : null}

      <span>{children}</span>

      {!loading && Icon && iconPosition === 'right' ? (
        <Icon className="w-3.5 h-3.5 shrink-0" />
      ) : null}
    </>
  );

  // Link rendering
  if (to) {
    return (
      <Link to={to} className={combinedClasses} ref={ref} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        className={combinedClasses}
        ref={ref}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        {...props}
      >
        {content}
      </a>
    );
  }

  // Button rendering
  return (
    <button
      type={type}
      className={combinedClasses}
      ref={ref}
      disabled={disabled || loading}
      onClick={onClick}
      {...props}
    >
      {content}
    </button>
  );
});

export default Button;
