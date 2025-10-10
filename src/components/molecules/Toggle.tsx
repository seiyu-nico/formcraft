import React, { useState, useId } from 'react';
import { ToggleProps } from './Toggle.types';

export const Toggle: React.FC<ToggleProps> = ({
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
}) => {
  const id = useId();
  const [checked, setChecked] = useState<boolean>(defaultValue);
  const [error, setError] = useState<string | undefined>();

  const handleChange = () => {
    if (disabled || readOnly) return;

    const newValue = !checked;
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

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault();
      handleChange();
    }
  };

  if (inline) {
    return (
      <div className={className}>
        <div className="flex items-start gap-x-3">
          <button
            type="button"
            role="switch"
            aria-checked={checked}
            aria-labelledby={`${id}-label`}
            disabled={disabled}
            onClick={handleChange}
            onKeyDown={handleKeyDown}
            onFocus={onFocus}
            onBlur={onBlur}
            className={`
              relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200
              focus:outline-none focus:ring-2 focus:ring-offset-2
              disabled:pointer-events-none disabled:opacity-50
              ${
                checked
                  ? error
                    ? 'bg-red-600 dark:bg-red-500'
                    : 'bg-primary-600 dark:bg-primary-500'
                  : error
                    ? 'bg-red-100 dark:bg-red-900/20'
                    : 'bg-gray-200 dark:bg-white/10'
              }
              ${
                !disabled
                  ? error
                    ? 'focus:ring-red-600 dark:focus:ring-red-500'
                    : 'focus:ring-primary-600 dark:focus:ring-primary-500'
                  : ''
              }
            `}
          >
            <input
              type="checkbox"
              id={id}
              name={name}
              checked={checked}
              required={required}
              readOnly
              tabIndex={-1}
              className="sr-only"
              aria-hidden="true"
            />
            <span
              className={`
                inline-block h-4 w-4 transform rounded-full bg-white shadow-lg ring-0 transition duration-200
                ${checked ? 'translate-x-6' : 'translate-x-1'}
              `}
            />
          </button>

          {label && (
            <div className="flex flex-col">
              <label
                id={`${id}-label`}
                htmlFor={id}
                className={`text-sm font-medium leading-6 cursor-pointer ${
                  disabled ? 'text-gray-500 dark:text-gray-400' : 'text-gray-950 dark:text-white'
                }`}
                onClick={() => !disabled && handleChange()}
              >
                {label}
                {required && <span className="text-red-600 dark:text-red-400 ml-1">*</span>}
              </label>

              {helperText && !error && (
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{helperText}</p>
              )}

              {error && <p className="text-sm text-red-600 dark:text-red-400 mt-1">{error}</p>}
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
          id={`${id}-label`}
          htmlFor={id}
          className={`block text-sm font-medium ${
            disabled ? 'text-gray-500 dark:text-gray-400' : 'text-gray-950 dark:text-white'
          }`}
        >
          {label}
          {required && <span className="text-red-600 dark:text-red-400 ml-1">*</span>}
        </label>
      )}

      <button
        type="button"
        role="switch"
        aria-checked={checked}
        aria-labelledby={`${id}-label`}
        disabled={disabled}
        onClick={handleChange}
        onKeyDown={handleKeyDown}
        onFocus={onFocus}
        onBlur={onBlur}
        className={`
          relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200
          focus:outline-none focus:ring-2 focus:ring-offset-2
          disabled:pointer-events-none disabled:opacity-50
          ${
            checked
              ? error
                ? 'bg-red-600 dark:bg-red-500'
                : 'bg-primary-600 dark:bg-primary-500'
              : error
                ? 'bg-red-100 dark:bg-red-900/20'
                : 'bg-gray-200 dark:bg-white/10'
          }
          ${
            !disabled
              ? error
                ? 'focus:ring-red-600 dark:focus:ring-red-500'
                : 'focus:ring-primary-600 dark:focus:ring-primary-500'
              : ''
          }
        `}
      >
        <input
          type="checkbox"
          id={id}
          name={name}
          checked={checked}
          required={required}
          readOnly
          tabIndex={-1}
          className="sr-only"
          aria-hidden="true"
        />
        <span
          className={`
            inline-block h-4 w-4 transform rounded-full bg-white shadow-lg ring-0 transition duration-200
            ${checked ? 'translate-x-6' : 'translate-x-1'}
          `}
        />
      </button>

      {helperText && !error && (
        <p className="text-sm text-gray-600 dark:text-gray-400">{helperText}</p>
      )}

      {error && <p className="text-sm text-red-600 dark:text-red-400">{error}</p>}
    </div>
  );
};

Toggle.displayName = 'Toggle';
