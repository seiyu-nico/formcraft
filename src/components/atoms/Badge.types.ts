export type BadgeColor =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'danger'
  | 'warning'
  | 'info'
  | 'gray';

export type BadgeSize = 'sm' | 'md' | 'lg';

export interface BadgeProps {
  /**
   * Content of the badge
   */
  children: React.ReactNode;

  /**
   * Color variant of the badge
   */
  color?: BadgeColor;

  /**
   * Size of the badge
   */
  size?: BadgeSize;

  /**
   * Optional icon to display before the text
   */
  icon?: React.ReactNode;

  /**
   * Whether to show a dot indicator
   */
  dot?: boolean;

  /**
   * Additional CSS class names
   */
  className?: string;
}
