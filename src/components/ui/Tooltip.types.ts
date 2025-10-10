export type TooltipPosition = 'top' | 'bottom' | 'left' | 'right';

export interface TooltipProps {
  /**
   * The trigger element that activates the tooltip
   */
  children: React.ReactElement;

  /**
   * Content to display in the tooltip
   */
  content: React.ReactNode;

  /**
   * Position of the tooltip relative to the trigger
   */
  position?: TooltipPosition;

  /**
   * Additional CSS class names for the tooltip container
   */
  className?: string;
}
