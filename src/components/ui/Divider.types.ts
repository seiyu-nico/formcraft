import React from 'react';

export type DividerOrientation = 'horizontal' | 'vertical';

export interface DividerProps {
  /**
   * Orientation of the divider
   * @default 'horizontal'
   */
  orientation?: DividerOrientation;

  /**
   * Optional text to display in the divider
   */
  label?: React.ReactNode;

  /**
   * Label position when text is provided
   * @default 'center'
   */
  labelPosition?: 'left' | 'center' | 'right';

  /**
   * Additional CSS classes
   */
  className?: string;
}
