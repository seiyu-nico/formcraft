export type IconSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type IconColor =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'danger'
  | 'warning'
  | 'info'
  | 'gray'
  | 'inherit';

export interface IconProps {
  /**
   * Icon content (can be SVG, emoji, or text)
   */
  children: React.ReactNode;

  /**
   * Size of the icon
   */
  size?: IconSize;

  /**
   * Color of the icon
   */
  color?: IconColor;

  /**
   * Additional CSS class names
   */
  className?: string;

  /**
   * Aria label for accessibility
   */
  'aria-label'?: string;
}
