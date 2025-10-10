import React, { useState, useCallback } from 'react';
import { TooltipProps } from './Tooltip.types';

export const Tooltip: React.FC<TooltipProps> = ({
  children,
  content,
  position = 'top',
  className = '',
}) => {
  const [isVisible, setIsVisible] = useState(false);

  const handleMouseEnter = useCallback(() => setIsVisible(true), []);
  const handleMouseLeave = useCallback(() => setIsVisible(false), []);
  const handleFocus = useCallback(() => setIsVisible(true), []);
  const handleBlur = useCallback(() => setIsVisible(false), []);

  const positionClasses = {
    top: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
    bottom: 'top-full left-1/2 -translate-x-1/2 mt-2',
    left: 'right-full top-1/2 -translate-y-1/2 mr-2',
    right: 'left-full top-1/2 -translate-y-1/2 ml-2',
  };

  const arrowClasses = {
    top: 'top-full left-1/2 -translate-x-1/2 border-l-transparent border-r-transparent border-b-transparent border-t-gray-900 dark:border-t-gray-700',
    bottom: 'bottom-full left-1/2 -translate-x-1/2 border-l-transparent border-r-transparent border-t-transparent border-b-gray-900 dark:border-b-gray-700',
    left: 'left-full top-1/2 -translate-y-1/2 border-t-transparent border-b-transparent border-r-transparent border-l-gray-900 dark:border-l-gray-700',
    right: 'right-full top-1/2 -translate-y-1/2 border-t-transparent border-b-transparent border-l-transparent border-r-gray-900 dark:border-r-gray-700',
  };

  const originalOnMouseEnter = children.props.onMouseEnter;
  const originalOnMouseLeave = children.props.onMouseLeave;
  const originalOnFocus = children.props.onFocus;
  const originalOnBlur = children.props.onBlur;

  const triggerElement = React.cloneElement(children, {
    onMouseEnter: (e: React.MouseEvent) => {
      handleMouseEnter();
      originalOnMouseEnter?.(e);
    },
    onMouseLeave: (e: React.MouseEvent) => {
      handleMouseLeave();
      originalOnMouseLeave?.(e);
    },
    onFocus: (e: React.FocusEvent) => {
      handleFocus();
      originalOnFocus?.(e);
    },
    onBlur: (e: React.FocusEvent) => {
      handleBlur();
      originalOnBlur?.(e);
    },
    'aria-describedby': isVisible ? 'tooltip' : undefined,
  });

  return (
    <div className="relative inline-block">
      {triggerElement}
      {isVisible && (
        <div
          id="tooltip"
          role="tooltip"
          className={`
            absolute z-50 ${positionClasses[position]}
            px-3 py-2 text-sm text-white bg-gray-900 dark:bg-gray-700
            rounded-lg shadow-lg
            whitespace-nowrap pointer-events-none
            ${className}
          `
            .trim()
            .replace(/\s+/g, ' ')}
        >
          {content}
          <div
            className={`
              absolute w-0 h-0
              border-4 ${arrowClasses[position]}
            `
              .trim()
              .replace(/\s+/g, ' ')}
          />
        </div>
      )}
    </div>
  );
};

Tooltip.displayName = 'Tooltip';
