import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Combines multiple class names into a single string and resolves Tailwind CSS conflicts
 *
 * @param {...ClassValue[]} inputs - Class values to be merged (strings, objects, arrays, or falsy values)
 * @returns {string} A string of merged class names with Tailwind CSS conflicts resolved
 *
 * @example
 * // Basic usage
 * cn('text-red-500', 'bg-blue-200')
 *
 * @example
 * // With conditional classes
 * cn('btn', isActive && 'btn-active', className)
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
