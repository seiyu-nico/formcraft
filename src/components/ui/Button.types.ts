import { ReactNode } from 'react';

export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type ButtonColor = 'primary' | 'danger' | 'gray' | 'info' | 'success' | 'warning';

export interface ButtonProps {
  /** Button content */
  children?: ReactNode;

  /** Button size */
  size?: ButtonSize;

  /** Button color */
  color?: ButtonColor;

  /** Outlined variant */
  outlined?: boolean;

  /** Disabled state */
  disabled?: boolean;

  /** Icon (ReactNode) */
  icon?: ReactNode;

  /** Icon position */
  iconPosition?: 'before' | 'after';

  /** Badge content */
  badge?: string | number;

  /** Badge color */
  badgeColor?: 'primary' | 'danger' | 'gray' | 'info' | 'success' | 'warning';

  /** Click handler */
  onClick?: () => void | Promise<void>;

  /** HTML button type */
  type?: 'button' | 'submit' | 'reset';

  /** Custom CSS classes */
  className?: string;

  /** Loading state */
  loading?: boolean;

  /** Tooltip */
  tooltip?: string;

  /** Tag (for link buttons) */
  tag?: 'button' | 'a';

  /** Href (when tag is 'a') */
  href?: string;

  /** Target (when tag is 'a') */
  target?: string;
}
