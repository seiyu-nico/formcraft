import React from 'react';

export type EmptyStateIconColor = 'gray' | 'primary' | 'danger' | 'info' | 'success' | 'warning';
export type EmptyStateIconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface EmptyStateProps {
  /**
   * The main heading text (required)
   */
  heading: string;

  /**
   * Optional description text below the heading
   */
  description?: string;

  /**
   * Optional icon to display above the heading
   */
  icon?: React.ReactNode;

  /**
   * Icon color variant
   * @default 'primary'
   */
  iconColor?: EmptyStateIconColor;

  /**
   * Icon size variant
   * @default 'lg'
   */
  iconSize?: EmptyStateIconSize;

  /**
   * Optional footer content (typically action buttons)
   */
  footer?: React.ReactNode;

  /**
   * Heading HTML tag
   * @default 'h2'
   */
  headingTag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

  /**
   * Additional CSS classes
   */
  className?: string;
}
