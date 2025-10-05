import React from 'react';
import { ButtonProps, ButtonSize, ButtonColor } from './Button.types';

const sizeClasses: Record<ButtonSize, string> = {
  xs: 'gap-1 px-2 py-1.5 text-xs',
  sm: 'gap-1.5 px-2.5 py-1.5 text-sm',
  md: 'gap-1.5 px-3 py-2 text-sm',
  lg: 'gap-1.5 px-3.5 py-2.5 text-sm',
  xl: 'gap-1.5 px-4 py-3 text-sm',
};

const colorClasses: Record<ButtonColor, { filled: string; outlined: string }> = {
  primary: {
    filled:
      'bg-primary-600 text-white shadow-sm hover:bg-primary-500 focus-visible:outline-primary-500 dark:bg-primary-500 dark:hover:bg-primary-400 dark:focus-visible:outline-primary-400',
    outlined:
      'text-primary-600 shadow-sm ring-1 ring-primary-600 hover:bg-primary-50 focus-visible:outline-primary-600 dark:text-primary-400 dark:ring-primary-400 dark:hover:bg-primary-400/10 dark:focus-visible:outline-primary-400',
  },
  danger: {
    filled:
      'bg-red-600 text-white shadow-sm hover:bg-red-500 focus-visible:outline-red-500 dark:bg-red-500 dark:hover:bg-red-400 dark:focus-visible:outline-red-400',
    outlined:
      'text-red-600 shadow-sm ring-1 ring-red-600 hover:bg-red-50 focus-visible:outline-red-600 dark:text-red-400 dark:ring-red-400 dark:hover:bg-red-400/10 dark:focus-visible:outline-red-400',
  },
  gray: {
    filled:
      'bg-gray-950 text-white shadow-sm hover:bg-gray-800 focus-visible:outline-gray-500 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus-visible:outline-gray-400',
    outlined:
      'text-gray-950 shadow-sm ring-1 ring-gray-300 hover:bg-gray-50 focus-visible:outline-gray-500 dark:text-white dark:ring-gray-700 dark:hover:bg-gray-800 dark:focus-visible:outline-gray-400',
  },
  info: {
    filled:
      'bg-blue-600 text-white shadow-sm hover:bg-blue-500 focus-visible:outline-blue-500 dark:bg-blue-500 dark:hover:bg-blue-400 dark:focus-visible:outline-blue-400',
    outlined:
      'text-blue-600 shadow-sm ring-1 ring-blue-600 hover:bg-blue-50 focus-visible:outline-blue-600 dark:text-blue-400 dark:ring-blue-400 dark:hover:bg-blue-400/10 dark:focus-visible:outline-blue-400',
  },
  success: {
    filled:
      'bg-green-600 text-white shadow-sm hover:bg-green-500 focus-visible:outline-green-500 dark:bg-green-500 dark:hover:bg-green-400 dark:focus-visible:outline-green-400',
    outlined:
      'text-green-600 shadow-sm ring-1 ring-green-600 hover:bg-green-50 focus-visible:outline-green-600 dark:text-green-400 dark:ring-green-400 dark:hover:bg-green-400/10 dark:focus-visible:outline-green-400',
  },
  warning: {
    filled:
      'bg-yellow-600 text-white shadow-sm hover:bg-yellow-500 focus-visible:outline-yellow-500 dark:bg-yellow-500 dark:hover:bg-yellow-400 dark:focus-visible:outline-yellow-400',
    outlined:
      'text-yellow-600 shadow-sm ring-1 ring-yellow-600 hover:bg-yellow-50 focus-visible:outline-yellow-600 dark:text-yellow-400 dark:ring-yellow-400 dark:hover:bg-yellow-400/10 dark:focus-visible:outline-yellow-400',
  },
};

const badgeColorClasses: Record<ButtonColor, string> = {
  primary: 'bg-primary-50 text-primary-600 ring-primary-600/10 dark:bg-primary-400/10 dark:text-primary-400 dark:ring-primary-400/30',
  danger: 'bg-red-50 text-red-600 ring-red-600/10 dark:bg-red-400/10 dark:text-red-400 dark:ring-red-400/30',
  gray: 'bg-gray-50 text-gray-600 ring-gray-600/10 dark:bg-gray-400/10 dark:text-gray-400 dark:ring-gray-400/30',
  info: 'bg-blue-50 text-blue-600 ring-blue-600/10 dark:bg-blue-400/10 dark:text-blue-400 dark:ring-blue-400/30',
  success: 'bg-green-50 text-green-600 ring-green-600/10 dark:bg-green-400/10 dark:text-green-400 dark:ring-green-400/30',
  warning: 'bg-yellow-50 text-yellow-600 ring-yellow-600/10 dark:bg-yellow-400/10 dark:text-yellow-400 dark:ring-yellow-400/30',
};

export const Button: React.FC<ButtonProps> = ({
  children,
  size = 'md',
  color = 'primary',
  outlined = false,
  disabled = false,
  icon,
  iconPosition = 'before',
  badge,
  badgeColor,
  onClick,
  type = 'button',
  className = '',
  loading = false,
  tooltip,
  tag = 'button',
  href,
  target,
}) => {
  const handleClick = async () => {
    if (disabled || loading) return;
    await onClick?.();
  };

  const baseClasses = `
    relative inline-grid grid-flow-col items-center justify-center rounded-lg font-medium
    outline-none transition duration-75
    focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2
    disabled:pointer-events-none disabled:opacity-50
    ${sizeClasses[size]}
    ${outlined ? colorClasses[color].outlined : colorClasses[color].filled}
    ${className}
  `.trim().replace(/\s+/g, ' ');

  const iconElement = icon && (
    <span className="inline-flex">{icon}</span>
  );

  const loadingSpinner = loading && (
    <svg
      className="h-5 w-5 animate-spin"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
      />
    </svg>
  );

  const badgeElement = badge && (
    <span
      className={`
        ms-auto inline-flex items-center justify-center rounded-md px-1.5 py-0.5 text-xs font-medium ring-1 ring-inset
        ${badgeColorClasses[badgeColor || color]}
      `.trim().replace(/\s+/g, ' ')}
    >
      {badge}
    </span>
  );

  const content = (
    <>
      {loading && loadingSpinner}
      {!loading && icon && iconPosition === 'before' && iconElement}
      {children && <span>{children}</span>}
      {!loading && icon && iconPosition === 'after' && iconElement}
      {badgeElement}
    </>
  );

  if (tag === 'a') {
    return (
      <a
        href={href}
        target={target}
        className={baseClasses}
        onClick={handleClick}
        title={tooltip}
        aria-disabled={disabled || loading}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={baseClasses}
      onClick={handleClick}
      disabled={disabled || loading}
      title={tooltip}
    >
      {content}
    </button>
  );
};

Button.displayName = 'Button';
