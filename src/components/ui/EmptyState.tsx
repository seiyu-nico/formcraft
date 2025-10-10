import React from 'react';
import { EmptyStateProps } from './EmptyState.types';

const iconSizeClasses = {
  xs: 'h-4 w-4',
  sm: 'h-5 w-5',
  md: 'h-6 w-6',
  lg: 'h-8 w-8',
  xl: 'h-10 w-10',
};

const iconBgColorClasses = {
  gray: 'bg-gray-100 dark:bg-gray-500/20',
  primary: 'bg-primary-100 dark:bg-primary-500/20',
  danger: 'bg-red-100 dark:bg-red-500/20',
  info: 'bg-blue-100 dark:bg-blue-500/20',
  success: 'bg-green-100 dark:bg-green-500/20',
  warning: 'bg-yellow-100 dark:bg-yellow-500/20',
};

const iconColorClasses = {
  gray: 'text-gray-500 dark:text-gray-400',
  primary: 'text-primary-500 dark:text-primary-400',
  danger: 'text-red-500 dark:text-red-400',
  info: 'text-blue-500 dark:text-blue-400',
  success: 'text-green-500 dark:text-green-400',
  warning: 'text-yellow-500 dark:text-yellow-400',
};

export const EmptyState: React.FC<EmptyStateProps> = ({
  heading,
  description,
  icon,
  iconColor = 'primary',
  iconSize = 'lg',
  footer,
  headingTag: HeadingTag = 'h2',
  className = '',
}) => {
  return (
    <section
      className={`
        rounded-xl bg-white px-6 py-12 shadow-sm ring-1 ring-gray-950/5 dark:bg-gray-900 dark:ring-white/10
        ${className}
      `
        .trim()
        .replace(/\s+/g, ' ')}
    >
      <div className="mx-auto grid max-w-lg justify-items-center text-center">
        {icon && (
          <div
            className={`
              mb-4 rounded-full p-3
              ${iconBgColorClasses[iconColor]}
            `
              .trim()
              .replace(/\s+/g, ' ')}
          >
            <span
              className={`
                inline-flex
                ${iconSizeClasses[iconSize]}
                ${iconColorClasses[iconColor]}
              `
                .trim()
                .replace(/\s+/g, ' ')}
            >
              {icon}
            </span>
          </div>
        )}

        <HeadingTag className="text-base font-semibold leading-6 text-gray-950 dark:text-white">
          {heading}
        </HeadingTag>

        {description && (
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{description}</p>
        )}

        {footer && <footer className="mt-6">{footer}</footer>}
      </div>
    </section>
  );
};

EmptyState.displayName = 'EmptyState';
