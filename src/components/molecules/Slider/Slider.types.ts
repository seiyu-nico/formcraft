export interface SliderProps {
  /** Field name */
  name: string;

  /** Field label */
  label?: string;

  /** Helper text displayed below the field */
  helperText?: string;

  /** Whether the field is required */
  required?: boolean;

  /** Whether the field is disabled */
  disabled?: boolean;

  /** Whether the field is read-only */
  readOnly?: boolean;

  /** Default value */
  defaultValue?: number;

  /** Minimum value */
  min?: number;

  /** Maximum value */
  max?: number;

  /** Step increment */
  step?: number;

  /** Show current value tooltip */
  showValue?: boolean;

  /** Custom value formatter */
  formatValue?: (value: number) => string;

  /** Validation function */
  validate?: (value: number) => string | undefined | Promise<string | undefined>;

  /** Callback when value changes */
  onChange?: (value: number) => void;

  /** Callback when field is focused */
  onFocus?: React.FocusEventHandler<HTMLInputElement>;

  /** Callback when field loses focus */
  onBlur?: React.FocusEventHandler<HTMLInputElement>;

  /** Custom CSS classes */
  className?: string;

  /** Extra input attributes */
  extraInputAttributes?: React.InputHTMLAttributes<HTMLInputElement>;
}
