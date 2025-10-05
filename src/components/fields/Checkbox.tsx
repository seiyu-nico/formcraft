import React, { useState, useId, InputHTMLAttributes } from 'react';
import { CheckboxProps } from './Checkbox.types';

export const Checkbox: React.FC<CheckboxProps> = ({
  name,
  label,
  helperText,
  required = false,
  disabled = false,
  readOnly = false,
  defaultValue = false,
  inline = true,
  validate,
  onChange,
  onFocus,
  onBlur,
  className = '',
  extraInputAttributes = {},
}) => {
  const id = useId();
  const [checked, setChecked] = useState<boolean>(defaultValue);
  const [error, setError] = useState<string | undefined>();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.checked;
    setChecked(newValue);
    onChange?.(newValue);

    // バリデーション実行
    if (validate) {
      const result = validate(newValue);
      if (result instanceof Promise) {
        result.then(setError);
      } else {
        setError(result);
      }
    }
  };

  const inputAttributes: InputHTMLAttributes<HTMLInputElement> = {
    id,
    name,
    type: 'checkbox',
    checked,
    required,
    disabled,
    readOnly,
    onChange: handleChange,
    onFocus,
    onBlur,
    ...extraInputAttributes,
  };

  if (inline) {
    return (
      <div className={className}>
        <div className="flex items-start gap-x-3">
          <input
            {...inputAttributes}
            className={`
              mt-1 size-4 shrink-0 rounded border-none bg-white shadow-sm ring-1 transition duration-75
              checked:ring-0
              focus:ring-2 focus:ring-offset-0
              disabled:pointer-events-none disabled:bg-gray-50 disabled:text-gray-50
              dark:bg-white/5 dark:checked:bg-primary-500
              dark:disabled:bg-transparent dark:disabled:ring-white/10
              ${
                !disabled
                  ? error
                    ? 'ring-red-600 dark:ring-red-500 focus:ring-red-600 dark:focus:ring-red-500'
                    : 'ring-gray-950/10 focus:ring-primary-600 dark:ring-white/20 dark:focus:ring-primary-500'
                  : error
                  ? 'ring-red-600 dark:ring-red-500'
                  : 'ring-gray-950/10 dark:ring-white/10'
              }
              ${!disabled && !error ? 'text-primary-600 dark:text-primary-500' : ''}
            `}
          />

          {label && (
            <div className="flex flex-col">
              <label
                htmlFor={id}
                className={`text-sm font-medium leading-6 cursor-pointer ${
                  disabled
                    ? 'text-gray-500 dark:text-gray-400'
                    : 'text-gray-950 dark:text-white'
                }`}
              >
                {label}
                {required && (
                  <span className="text-red-600 dark:text-red-400 ml-1">*</span>
                )}
              </label>

              {helperText && !error && (
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{helperText}</p>
              )}

              {error && (
                <p className="text-sm text-red-600 dark:text-red-400 mt-1">{error}</p>
              )}
            </div>
          )}
        </div>
      </div>
    );
  }

  // Stacked layout
  return (
    <div className={`space-y-2 ${className}`}>
      {label && (
        <label
          htmlFor={id}
          className={`block text-sm font-medium ${
            disabled
              ? 'text-gray-500 dark:text-gray-400'
              : 'text-gray-950 dark:text-white'
          }`}
        >
          {label}
          {required && <span className="text-red-600 dark:text-red-400 ml-1">*</span>}
        </label>
      )}

      <input
        {...inputAttributes}
        className={`
          size-4 shrink-0 rounded border-none bg-white shadow-sm ring-1 transition duration-75
          checked:ring-0
          focus:ring-2 focus:ring-offset-0
          disabled:pointer-events-none disabled:bg-gray-50 disabled:text-gray-50
          dark:bg-white/5 dark:checked:bg-primary-500
          dark:disabled:bg-transparent dark:disabled:ring-white/10
          ${
            !disabled
              ? error
                ? 'ring-red-600 dark:ring-red-500 focus:ring-red-600 dark:focus:ring-red-500'
                : 'ring-gray-950/10 focus:ring-primary-600 dark:ring-white/20 dark:focus:ring-primary-500'
              : error
              ? 'ring-red-600 dark:ring-red-500'
              : 'ring-gray-950/10 dark:ring-white/10'
          }
          ${!disabled && !error ? 'text-primary-600 dark:text-primary-500' : ''}
        `}
      />

      {helperText && !error && (
        <p className="text-sm text-gray-600 dark:text-gray-400">{helperText}</p>
      )}

      {error && <p className="text-sm text-red-600 dark:text-red-400">{error}</p>}
    </div>
  );
};

Checkbox.displayName = 'Checkbox';
