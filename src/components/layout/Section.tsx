import React, { useState, useEffect } from 'react';
import { SectionProps, IconColor, IconSize } from './Section.types';

export const Section: React.FC<SectionProps> = ({
  heading,
  description,
  icon,
  iconColor = 'gray',
  iconSize = 'md',
  collapsible = false,
  collapsed: initialCollapsed = false,
  aside = false,
  compact = false,
  children,
  className = '',
  id,
  persistCollapsed = false,
}) => {
  const storageKey = id && persistCollapsed ? `section-collapsed-${id}` : null;

  const [isCollapsed, setIsCollapsed] = useState(() => {
    if (storageKey) {
      const stored = localStorage.getItem(storageKey);
      return stored ? JSON.parse(stored) : initialCollapsed;
    }
    return initialCollapsed;
  });

  useEffect(() => {
    if (storageKey) {
      localStorage.setItem(storageKey, JSON.stringify(isCollapsed));
    }
  }, [isCollapsed, storageKey]);

  const toggleCollapse = () => {
    if (collapsible) {
      setIsCollapsed(!isCollapsed);
    }
  };

  const iconColorClasses: Record<IconColor, string> = {
    gray: 'text-gray-400 dark:text-gray-500',
    primary: 'text-primary-500 dark:text-primary-400',
    danger: 'text-danger-500 dark:text-danger-400',
    success: 'text-green-500 dark:text-green-400',
    warning: 'text-yellow-500 dark:text-yellow-400',
    info: 'text-blue-500 dark:text-blue-400',
  };

  const iconSizeClasses: Record<IconSize, string> = {
    sm: 'h-4 w-4',
    md: 'h-5 w-5',
    lg: 'h-6 w-6',
  };

  const hasHeader = !!(heading || description || icon);

  return (
    <section
      className={`
        rounded-xl bg-white shadow-sm ring-1 ring-gray-950/5
        dark:bg-white/5 dark:ring-white/10
        ${className}
      `}
      id={id}
    >
      {hasHeader && (
        <div
          className={`
            ${compact ? 'px-4 py-3' : 'px-6 py-4'}
            ${aside ? 'grid grid-cols-1 gap-6 lg:grid-cols-3' : ''}
            ${collapsible ? 'cursor-pointer' : ''}
          `}
          onClick={collapsible ? toggleCollapse : undefined}
          role={collapsible ? 'button' : undefined}
          aria-expanded={collapsible ? !isCollapsed : undefined}
        >
          <div className={`flex items-start gap-x-3 ${aside ? 'lg:col-span-1' : ''}`}>
            {icon && (
              <div
                className={`${iconColorClasses[iconColor]} ${iconSizeClasses[iconSize]} flex-shrink-0 mt-1`}
              >
                {icon}
              </div>
            )}

            <div className="grid flex-1 gap-y-1">
              {heading && (
                <h3 className="text-base font-semibold leading-6 text-gray-950 dark:text-white">
                  {heading}
                </h3>
              )}

              {description && (
                <p className="text-sm text-gray-500 dark:text-gray-400">{description}</p>
              )}
            </div>

            {collapsible && (
              <div className="flex-shrink-0">
                <svg
                  className={`h-5 w-5 text-gray-400 transition-transform ${
                    isCollapsed ? '' : 'rotate-180'
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            )}
          </div>
        </div>
      )}

      {(!collapsible || !isCollapsed) && children && (
        <div
          className={`
            ${compact ? 'px-4 pb-3 pt-3' : 'px-6 pb-4 pt-6'}
            ${hasHeader ? 'border-t border-gray-950/5 dark:border-white/10' : compact ? '' : 'pt-4'}
            ${aside && hasHeader ? 'lg:col-span-2' : ''}
            space-y-4 text-gray-600 dark:text-gray-300
          `}
        >
          {children}
        </div>
      )}
    </section>
  );
};

Section.displayName = 'Section';
