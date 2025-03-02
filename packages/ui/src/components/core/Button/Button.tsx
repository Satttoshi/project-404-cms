import React from 'react';
import { cn } from '@repo/utils';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface BaseButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
}

type ButtonElementProps = BaseButtonProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseButtonProps> & {
    as?: 'button';
    href?: never;
  };

type AnchorElementProps = BaseButtonProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseButtonProps> & {
    as: 'a';
    href: string;
  };

export type ButtonProps = ButtonElementProps | AnchorElementProps;

export const Button = React.forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>(
  (
    {
      children,
      className,
      variant = 'primary',
      size = 'md',
      isLoading = false,
      disabled = false,
      fullWidth = false,
      as,
      ...props
    },
    ref,
  ) => {
    // TODO: replace with design-tokens
    const variantClasses = {
      primary: 'bg-background text-white hover:bg-blue-700 focus:ring-blue-500',
      secondary:
        'bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-500',
      outline:
        'bg-transparent border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-gray-500',
      ghost:
        'bg-transparent text-gray-700 hover:bg-gray-100 focus:ring-gray-500',
    };

    const sizeClasses = {
      sm: 'text-xs px-2.5 py-1.5 rounded',
      md: 'text-sm px-4 py-2 rounded-md',
      lg: 'text-base px-6 py-3 rounded-md',
    };

    // Combine all classes using the cn utility
    const buttonClasses = cn(
      'inline-flex items-center justify-center font-medium transition-colors',
      'focus:outline-none focus:ring-2 focus:ring-offset-2',
      variantClasses[variant],
      sizeClasses[size],
      isLoading && 'opacity-70 cursor-not-allowed',
      disabled && 'opacity-50 cursor-not-allowed pointer-events-none',
      fullWidth && 'w-full',
      className,
    );

    // Render as anchor if href is provided or as is set to 'a'
    if ((props as AnchorElementProps).href || as === 'a') {
      return (
        <a
          className={buttonClasses}
          ref={ref as React.ForwardedRef<HTMLAnchorElement>}
          {...(props as AnchorElementProps)}>
          {isLoading ? (
            <>
              <span className="mr-2">
                {/* Simple loading spinner */}
                <svg
                  className="h-4 w-4 animate-spin"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24">
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              </span>
              {children}
            </>
          ) : (
            children
          )}
        </a>
      );
    }

    // Default to button
    return (
      <button
        className={buttonClasses}
        ref={ref as React.ForwardedRef<HTMLButtonElement>}
        disabled={disabled || isLoading}
        {...(props as ButtonElementProps)}>
        {isLoading ? (
          <>
            <span className="mr-2">
              {/* Simple loading spinner */}
              <svg
                className="h-4 w-4 animate-spin"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24">
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            </span>
            {children}
          </>
        ) : (
          children
        )}
      </button>
    );
  },
);
