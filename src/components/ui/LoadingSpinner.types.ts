export type LoadingSpinnerSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type LoadingSpinnerColor =
  | 'primary'
  | 'secondary'
  | 'success'
  | 'danger'
  | 'warning'
  | 'info'
  | 'gray'
  | 'white';

export interface LoadingSpinnerProps {
  /**
   * Size of the spinner
   */
  size?: LoadingSpinnerSize;

  /**
   * Color of the spinner
   */
  color?: LoadingSpinnerColor;

  /**
   * Additional CSS class names
   */
  className?: string;

  /**
   * Aria label for accessibility
   */
  'aria-label'?: string;
}
