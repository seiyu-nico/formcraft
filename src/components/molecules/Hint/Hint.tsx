import React from 'react';
import { HintProps } from './Hint.types';
import { Tooltip } from '../../atoms/Tooltip/Tooltip';

const colorClasses = {
  gray: 'text-gray-600 dark:text-gray-400',
  primary: 'text-primary-600 dark:text-primary-400',
  danger: 'text-red-600 dark:text-red-400',
  info: 'text-blue-600 dark:text-blue-400',
  success: 'text-green-600 dark:text-green-400',
  warning: 'text-yellow-600 dark:text-yellow-400',
};

const iconColorClasses = {
  gray: 'text-gray-400 dark:text-gray-500',
  primary: 'text-primary-500 dark:text-primary-400',
  danger: 'text-red-500 dark:text-red-400',
  info: 'text-blue-500 dark:text-blue-400',
  success: 'text-green-500 dark:text-green-400',
  warning: 'text-yellow-500 dark:text-yellow-400',
};

export const Hint: React.FC<HintProps> = ({
  children,
  icon,
  iconTooltip,
  color = 'gray',
  className = '',
}) => {
  const iconElement = icon && (
    <span className={`inline-flex h-4 w-4 ${iconColorClasses[color]}`}>{icon}</span>
  );

  return (
    <div
      className={`
        inline-flex flex-wrap items-center gap-x-3 text-sm
        ${className}
      `
        .trim()
        .replace(/\s+/g, ' ')}
    >
      {children && (
        <span
          className={`
            inline-block break-words
            ${colorClasses[color]}
          `
            .trim()
            .replace(/\s+/g, ' ')}
        >
          {children}
        </span>
      )}

      {icon && iconTooltip ? (
        <Tooltip content={iconTooltip} position="top">
          {iconElement}
        </Tooltip>
      ) : (
        iconElement
      )}
    </div>
  );
};

Hint.displayName = 'Hint';
