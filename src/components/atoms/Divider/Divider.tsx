import React from 'react';
import { DividerProps } from './Divider.types';

export const Divider: React.FC<DividerProps> = ({
  orientation = 'horizontal',
  label,
  labelPosition = 'center',
  className = '',
}) => {
  // Vertical divider
  if (orientation === 'vertical') {
    return (
      <div
        className={`inline-block h-full w-px bg-gray-200 dark:bg-white/10 ${className}`}
        role="separator"
        aria-orientation="vertical"
      />
    );
  }

  // Horizontal divider without label
  if (!label) {
    return (
      <hr
        className={`border-t border-gray-200 dark:border-white/10 ${className}`}
        role="separator"
        aria-orientation="horizontal"
      />
    );
  }

  // Horizontal divider with label
  const justifyClass = {
    left: 'justify-start',
    center: 'justify-center',
    right: 'justify-end',
  }[labelPosition];

  return (
    <div
      className={`flex items-center ${justifyClass} ${className}`}
      role="separator"
      aria-orientation="horizontal"
    >
      {labelPosition !== 'left' && (
        <div className="flex-1 border-t border-gray-200 dark:border-white/10" />
      )}
      <span className="px-3 text-sm text-gray-500 dark:text-gray-400">{label}</span>
      {labelPosition !== 'right' && (
        <div className="flex-1 border-t border-gray-200 dark:border-white/10" />
      )}
    </div>
  );
};

Divider.displayName = 'Divider';
