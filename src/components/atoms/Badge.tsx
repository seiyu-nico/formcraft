import React from 'react';
import { BadgeProps, BadgeColor, BadgeSize } from './Badge.types';

const colorClasses: Record<BadgeColor, string> = {
  primary: 'bg-primary-100 text-primary-800 ring-primary-600/20 dark:bg-primary-500/10 dark:text-primary-400 dark:ring-primary-500/30',
  secondary: 'bg-gray-100 text-gray-800 ring-gray-600/20 dark:bg-gray-500/10 dark:text-gray-400 dark:ring-gray-500/30',
  success: 'bg-green-100 text-green-800 ring-green-600/20 dark:bg-green-500/10 dark:text-green-400 dark:ring-green-500/30',
  danger: 'bg-red-100 text-red-800 ring-red-600/20 dark:bg-red-500/10 dark:text-red-400 dark:ring-red-500/30',
  warning: 'bg-yellow-100 text-yellow-800 ring-yellow-600/20 dark:bg-yellow-500/10 dark:text-yellow-400 dark:ring-yellow-500/30',
  info: 'bg-blue-100 text-blue-800 ring-blue-600/20 dark:bg-blue-500/10 dark:text-blue-400 dark:ring-blue-500/30',
  gray: 'bg-gray-100 text-gray-600 ring-gray-500/20 dark:bg-gray-500/10 dark:text-gray-400 dark:ring-gray-500/30',
};

const sizeClasses: Record<BadgeSize, string> = {
  sm: 'px-1.5 py-0.5 text-xs',
  md: 'px-2 py-1 text-sm',
  lg: 'px-2.5 py-1.5 text-base',
};

const dotColorClasses: Record<BadgeColor, string> = {
  primary: 'bg-primary-600 dark:bg-primary-400',
  secondary: 'bg-gray-600 dark:bg-gray-400',
  success: 'bg-green-600 dark:bg-green-400',
  danger: 'bg-red-600 dark:bg-red-400',
  warning: 'bg-yellow-600 dark:bg-yellow-400',
  info: 'bg-blue-600 dark:bg-blue-400',
  gray: 'bg-gray-500 dark:bg-gray-400',
};

export const Badge: React.FC<BadgeProps> = ({
  children,
  color = 'primary',
  size = 'md',
  icon,
  dot = false,
  className = '',
}) => {
  return (
    <span
      className={`
        inline-flex items-center gap-1 rounded-md font-medium ring-1 ring-inset
        ${colorClasses[color]}
        ${sizeClasses[size]}
        ${className}
      `.trim().replace(/\s+/g, ' ')}
    >
      {dot && (
        <span
          className={`
            h-1.5 w-1.5 rounded-full
            ${dotColorClasses[color]}
          `.trim()}
        />
      )}
      {icon && <span className="inline-flex">{icon}</span>}
      {children}
    </span>
  );
};

Badge.displayName = 'Badge';
