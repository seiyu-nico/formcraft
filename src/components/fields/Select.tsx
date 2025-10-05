import React, { useState, useId } from 'react';
import { SelectProps } from './Select.types';

export const Select: React.FC<SelectProps> = ({
  name,
  label,
  helperText,
  options,
  placeholder,
  required = false,
  disabled = false,
  readOnly = false,
  defaultValue,
  multiple = false,
  native = true,
  prefix,
  suffix,
  validate,
  onChange,
  onFocus,
  onBlur,
  className = '',
  extraInputAttributes = {},
}) => {
  const id = useId();
  const [value, setValue] = useState<string | string[]>(
    defaultValue ?? (multiple ? [] : '')
  );
  const [error, setError] = useState<string | undefined>();

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    let newValue: string | string[];

    if (multiple) {
      const selectedOptions = Array.from(e.target.selectedOptions);
      newValue = selectedOptions.map((option) => option.value);
    } else {
      newValue = e.target.value;
    }

    setValue(newValue);
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

  const hasPrefix = !!prefix;
  const hasSuffix = !!suffix;

  // ネイティブセレクトのみ実装（searchableはnativeがfalseの時のカスタム実装で対応）
  if (native) {
    return (
      <div className={`space-y-2 ${className}`}>
        {label && (
          <label htmlFor={id} className="block text-sm font-medium text-gray-950 dark:text-white">
            {label}
            {required && <span className="text-red-600 dark:text-red-400 ml-1">*</span>}
          </label>
        )}

        <div
          className={`
            flex rounded-lg bg-white shadow-sm ring-1 ring-gray-950/10 transition duration-75
            dark:bg-white/5 dark:ring-white/20
            ${
              !disabled
                ? error
                  ? 'ring-red-600 dark:ring-red-500 focus-within:ring-2 focus-within:ring-red-600 dark:focus-within:ring-red-500'
                  : 'focus-within:ring-2 focus-within:ring-primary-600 dark:focus-within:ring-primary-500'
                : error
                ? 'ring-red-600 dark:ring-red-500 bg-gray-50 dark:bg-transparent'
                : 'bg-gray-50 dark:bg-transparent dark:ring-white/10'
            }
          `}
        >
          {hasPrefix && (
            <div className="flex items-center gap-x-3 ps-3 pe-2">
              <span className="text-sm whitespace-nowrap text-gray-500 dark:text-gray-400">
                {prefix}
              </span>
            </div>
          )}

          <div className="min-w-0 flex-1 relative">
            <select
              id={id}
              name={name}
              value={value}
              multiple={multiple}
              required={required}
              disabled={disabled || readOnly}
              onChange={handleChange}
              onFocus={onFocus}
              onBlur={onBlur}
              {...extraInputAttributes}
              className={`
                block w-full appearance-none border-none bg-white/0 text-start text-sm leading-6
                text-gray-950 transition duration-75
                focus:ring-0 focus:outline-none
                disabled:text-gray-500 disabled:[-webkit-text-fill-color:theme(colors.gray.500)]
                dark:text-white
                dark:disabled:text-gray-400 dark:disabled:[-webkit-text-fill-color:theme(colors.gray.400)]
                ${hasPrefix ? 'ps-0' : 'ps-3'}
                ${hasSuffix ? 'pe-0 pr-8' : 'pe-3 pr-8'}
                ${multiple ? 'py-2' : 'py-1.5'}
              `}
            >
              {placeholder && !multiple && (
                <option value="" disabled={required}>
                  {placeholder}
                </option>
              )}
              {options.map((option) => (
                <option
                  key={option.value}
                  value={option.value}
                  disabled={option.disabled}
                >
                  {option.label}
                </option>
              ))}
            </select>

            {!multiple && (
              <div className="pointer-events-none absolute inset-y-0 end-0 flex items-center pe-3">
                <svg
                  className="h-5 w-5 text-gray-400 dark:text-gray-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            )}
          </div>

          {hasSuffix && (
            <div className="flex items-center gap-x-3 pe-3 ps-2">
              <span className="text-sm whitespace-nowrap text-gray-500 dark:text-gray-400">
                {suffix}
              </span>
            </div>
          )}
        </div>

        {helperText && !error && (
          <p className="text-sm text-gray-600 dark:text-gray-400">{helperText}</p>
        )}

        {error && (
          <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
        )}
      </div>
    );
  }

  // カスタムセレクト実装（searchable対応）は今後実装
  return (
    <div className={`space-y-2 ${className}`}>
      <p className="text-sm text-gray-600 dark:text-gray-400">
        Custom searchable select is not yet implemented. Please use native=true.
      </p>
    </div>
  );
};

Select.displayName = 'Select';
