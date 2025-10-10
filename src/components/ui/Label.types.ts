export interface LabelProps {
  /**
   * The ID of the input element this label is associated with
   */
  htmlFor?: string;

  /**
   * Whether the field is required
   * Displays an asterisk (*) when true
   */
  required?: boolean;

  /**
   * Whether the label should only be visible to screen readers
   */
  srOnly?: boolean;

  /**
   * Content of the label
   */
  children: React.ReactNode;

  /**
   * Additional CSS class names
   */
  className?: string;
}
