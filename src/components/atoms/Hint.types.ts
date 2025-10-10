import React from 'react';

export type HintColor = 'gray' | 'primary' | 'danger' | 'info' | 'success' | 'warning';

export interface HintProps {
  /**
   * Hint text content
   */
  children?: React.ReactNode;

  /**
   * Optional icon to display
   */
  icon?: React.ReactNode;

  /**
   * Optional tooltip text for the icon
   */
  iconTooltip?: string;

  /**
   * Color variant
   * @default 'gray'
   */
  color?: HintColor;

  /**
   * Additional CSS classes
   */
  className?: string;
}
