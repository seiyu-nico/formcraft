import { ReactNode } from 'react';

export interface RepeaterItem {
  id: string;
  [key: string]: any;
}

export interface RepeaterProps {
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

  /** Default items */
  defaultValue?: RepeaterItem[];

  /** Minimum number of items */
  minItems?: number;

  /** Maximum number of items */
  maxItems?: number;

  /** Whether items can be added */
  addable?: boolean;

  /** Whether items can be deleted */
  deletable?: boolean;

  /** Whether items can be reordered */
  reorderable?: boolean;

  /** Label for the add button */
  addActionLabel?: string;

  /** Function to generate item labels */
  itemLabel?: (item: RepeaterItem, index: number) => string;

  /** Child form fields to repeat */
  children: ReactNode;

  /** Validation function */
  validate?: (value: RepeaterItem[]) => string | undefined | Promise<string | undefined>;

  /** Callback when value changes */
  onChange?: (value: RepeaterItem[]) => void;

  /** Callback when field is focused */
  onFocus?: React.FocusEventHandler<HTMLDivElement>;

  /** Callback when field loses focus */
  onBlur?: React.FocusEventHandler<HTMLDivElement>;

  /** Custom CSS classes */
  className?: string;
}
