import React from 'react';
import { LabelProps } from './Label.types';

export const Label: React.FC<LabelProps> = ({
  htmlFor,
  required = false,
  srOnly = false,
  children,
  className = '',
}) => {
  return (
    <label
      htmlFor={htmlFor}
      className={`
        block text-sm font-medium text-gray-950 dark:text-white
        ${srOnly ? 'sr-only' : ''}
        ${className}
      `.trim()}
    >
      <span className="inline-block">
        {children}
        {required && (
          <sup className="ml-1 text-red-600 dark:text-red-400">*</sup>
        )}
      </span>
    </label>
  );
};

Label.displayName = 'Label';
