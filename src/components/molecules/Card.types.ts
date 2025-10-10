import { ReactNode } from 'react';

export interface CardProps {
  /** Card heading (deprecated: use Card.Header instead) */
  heading?: string;

  /** Card description (deprecated: use Card.Header instead) */
  description?: string;

  /** Custom header content (deprecated: use Card.Header instead) */
  header?: ReactNode;

  /** Header action (deprecated: use Card.Header instead) */
  headerAction?: ReactNode;

  /** Footer content (deprecated: use Card.Footer instead) */
  footer?: ReactNode;

  /** Card content */
  children: ReactNode;

  /** Custom CSS classes */
  className?: string;
}

export interface CardHeaderProps {
  /** Header title */
  title?: string;

  /** Header description */
  description?: string;

  /** Header content and actions */
  children?: ReactNode;
}

export interface CardHeaderActionsProps {
  /** Actions content */
  children: ReactNode;
}

export interface CardFooterProps {
  /** Footer title */
  title?: string;

  /** Footer description */
  description?: string;

  /** Footer content and actions */
  children?: ReactNode;
}

export interface CardFooterActionsProps {
  /** Actions content */
  children: ReactNode;
}
