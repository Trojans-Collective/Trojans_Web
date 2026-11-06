import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Merge Tailwind and conditional classnames cleanly
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export default cn;
