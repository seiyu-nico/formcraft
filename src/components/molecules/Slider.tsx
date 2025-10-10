import React, { useState, useId } from 'react';
import { SliderProps } from './Slider.types';

export const Slider: React.FC<SliderProps> = ({
  name,
  label,
  helperText,
  required = false,
  disabled = false,
  readOnly = false,
  defaultValue = 0,
  min = 0,
  max = 100,
  step = 1,
  showValue = false,
  formatValue,
  validate,
  onChange,
  onFocus,
  onBlur,
  className = '',
  extraInputAttributes = {},
}) => {
  const id = useId();
  const [value, setValue] = useState<number>(defaultValue);
  const [error, setError] = useState<string | undefined>();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (disabled || readOnly) return;

    const newValue = parseFloat(e.target.value);
    setValue(newValue);
    onChange?.(newValue);

    if (validate) {
      const result = validate(newValue);
      if (result instanceof Promise) {
        result.then(setError);
      } else {
        setError(result);
      }
    }
  };

  const displayValue = formatValue ? formatValue(value) : value.toString();

  const inputAttributes = {
    ...extraInputAttributes,
    id,
    name,
    type: 'range' as const,
    value,
    min,
    max,
    step,
    required,
    disabled,
    readOnly,
    onChange: handleChange,
    onFocus,
    onBlur,
    'aria-invalid': error ? true : undefined,
    'aria-describedby': error ? `${id}-error` : helperText ? `${id}-helper` : undefined,
  };

  return (
    <div className={className}>
      {label && (
        <label
          htmlFor={id}
          className="block text-sm font-medium text-gray-950 dark:text-white mb-2"
        >
          {label}
          {required && <span className="text-red-600 dark:text-red-400 ml-1">*</span>}
        </label>
      )}

      <div className="flex items-center gap-4">
        <input
          {...inputAttributes}
          className={`
            flex-1 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer
            dark:bg-gray-700
            disabled:opacity-50 disabled:cursor-not-allowed
            focus:outline-none
            [&::-webkit-slider-thumb]:appearance-none
            [&::-webkit-slider-thumb]:w-4
            [&::-webkit-slider-thumb]:h-4
            [&::-webkit-slider-thumb]:rounded-full
            [&::-webkit-slider-thumb]:bg-primary-600
            [&::-webkit-slider-thumb]:cursor-pointer
            [&::-webkit-slider-thumb]:transition-colors
            [&::-webkit-slider-thumb]:hover:bg-primary-700
            [&::-webkit-slider-thumb]:disabled:bg-gray-400
            [&::-moz-range-thumb]:w-4
            [&::-moz-range-thumb]:h-4
            [&::-moz-range-thumb]:rounded-full
            [&::-moz-range-thumb]:bg-primary-600
            [&::-moz-range-thumb]:border-0
            [&::-moz-range-thumb]:cursor-pointer
            [&::-moz-range-thumb]:transition-colors
            [&::-moz-range-thumb]:hover:bg-primary-700
            [&::-moz-range-thumb]:disabled:bg-gray-400
            dark:[&::-webkit-slider-thumb]:bg-primary-400
            dark:[&::-webkit-slider-thumb]:hover:bg-primary-300
            dark:[&::-moz-range-thumb]:bg-primary-400
            dark:[&::-moz-range-thumb]:hover:bg-primary-300
          `}
        />

        {showValue && (
          <div className="min-w-[3rem] text-right text-sm font-medium text-gray-950 dark:text-white">
            {displayValue}
          </div>
        )}
      </div>

      {helperText && !error && (
        <p id={`${id}-helper`} className="mt-1.5 text-sm text-gray-600 dark:text-gray-400">
          {helperText}
        </p>
      )}

      {error && (
        <p id={`${id}-error`} className="mt-1.5 text-sm text-red-600 dark:text-red-400">
          {error}
        </p>
      )}
    </div>
  );
};

Slider.displayName = 'Slider';
