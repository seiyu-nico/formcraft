import React from 'react';
import { HelperTextProps } from './HelperText.types';

export const HelperText: React.FC<HelperTextProps> = ({ children, className = '' }) => {
  return (
    <p
      className={`
        mt-1 text-sm text-gray-600 dark:text-gray-400
        ${className}
      `.trim()}
    >
      {children}
    </p>
  );
};

HelperText.displayName = 'HelperText';
