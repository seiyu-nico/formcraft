import React from 'react';
import { ErrorTextProps } from './ErrorText.types';

export const ErrorText: React.FC<ErrorTextProps> = ({ children, className = '' }) => {
  return (
    <p
      className={`
        mt-1 text-sm text-red-600 dark:text-red-400
        ${className}
      `.trim()}
      role="alert"
    >
      {children}
    </p>
  );
};

ErrorText.displayName = 'ErrorText';
