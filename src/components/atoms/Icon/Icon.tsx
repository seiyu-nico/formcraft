import React from 'react';
import { IconProps, IconSize, IconColor } from './Icon.types';

const sizeClasses: Record<IconSize, string> = {
  xs: 'h-3 w-3',
  sm: 'h-4 w-4',
  md: 'h-5 w-5',
  lg: 'h-6 w-6',
  xl: 'h-8 w-8',
};

const colorClasses: Record<IconColor, string> = {
  primary: 'text-primary-600 dark:text-primary-400',
  secondary: 'text-gray-600 dark:text-gray-400',
  success: 'text-green-600 dark:text-green-400',
  danger: 'text-red-600 dark:text-red-400',
  warning: 'text-yellow-600 dark:text-yellow-400',
  info: 'text-blue-600 dark:text-blue-400',
  gray: 'text-gray-500 dark:text-gray-400',
  inherit: 'text-inherit',
};

export const Icon: React.FC<IconProps> = ({
  children,
  size = 'md',
  color = 'inherit',
  className = '',
  'aria-label': ariaLabel,
}) => {
  return (
    <span
      className={`
        inline-flex items-center justify-center
        ${sizeClasses[size]}
        ${colorClasses[color]}
        ${className}
      `
        .trim()
        .replace(/\s+/g, ' ')}
      aria-label={ariaLabel}
      role={ariaLabel ? 'img' : undefined}
    >
      {children}
    </span>
  );
};

Icon.displayName = 'Icon';
