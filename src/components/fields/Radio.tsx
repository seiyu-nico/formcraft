import React, { useState, useId } from 'react';
import { RadioProps } from './Radio.types';

export const Radio: React.FC<RadioProps> = ({
  name,
  label,
  helperText,
  options,
  required = false,
  disabled = false,
  readOnly = false,
  defaultValue,
  inline = false,
  validate,
  onChange,
  onFocus,
  onBlur,
  className = '',
  extraInputAttributes = {},
}) => {
  const id = useId();
  const [value, setValue] = useState<string | undefined>(defaultValue);
  const [error, setError] = useState<string | undefined>();

  const handleChange = (newValue: string) => {
    if (disabled || readOnly) return;

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

  return (
    <div className={`space-y-2 ${className}`}>
      {label && (
        <label className="block text-sm font-medium text-gray-950 dark:text-white">
          {label}
          {required && <span className="text-red-600 dark:text-red-400 ml-1">*</span>}
        </label>
      )}

      <div className={inline ? 'flex flex-wrap gap-4' : 'space-y-3'}>
        {options.map((option) => {
          const optionId = `${id}-${option.value}`;
          const isChecked = value === option.value;
          const isDisabled = disabled || option.disabled;

          return (
            <div key={option.value} className="flex items-start gap-x-3">
              <input
                id={optionId}
                name={name}
                type="radio"
                value={option.value}
                checked={isChecked}
                required={required}
                disabled={isDisabled}
                readOnly={readOnly}
                onChange={() => handleChange(option.value)}
                onFocus={onFocus}
                onBlur={onBlur}
                {...extraInputAttributes}
                className={`
                  mt-1 size-4 shrink-0 rounded-full border-none bg-white shadow-sm ring-1 transition duration-75
                  checked:ring-0
                  focus:ring-2 focus:ring-offset-0
                  disabled:pointer-events-none disabled:bg-gray-50 disabled:text-gray-50
                  dark:bg-white/5 dark:checked:bg-primary-500
                  dark:disabled:bg-transparent dark:disabled:ring-white/10
                  ${
                    !isDisabled
                      ? error
                        ? 'ring-red-600 dark:ring-red-500 focus:ring-red-600 dark:focus:ring-red-500'
                        : 'ring-gray-950/10 focus:ring-primary-600 dark:ring-white/20 dark:focus:ring-primary-500'
                      : error
                      ? 'ring-red-600 dark:ring-red-500'
                      : 'ring-gray-950/10 dark:ring-white/10'
                  }
                  ${!isDisabled && !error ? 'text-primary-600 dark:text-primary-500' : ''}
                `}
              />

              <div className="grid text-sm leading-6">
                <label
                  htmlFor={optionId}
                  className={`font-medium cursor-pointer ${
                    isDisabled
                      ? 'text-gray-500 dark:text-gray-400'
                      : 'text-gray-950 dark:text-white'
                  }`}
                >
                  {option.label}
                </label>

                {option.description && (
                  <p
                    className={`font-normal ${
                      isDisabled
                        ? 'text-gray-400 dark:text-gray-500'
                        : 'text-gray-500 dark:text-gray-400'
                    }`}
                  >
                    {option.description}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {helperText && !error && (
        <p className="text-sm text-gray-600 dark:text-gray-400">{helperText}</p>
      )}

      {error && <p className="text-sm text-red-600 dark:text-red-400">{error}</p>}
    </div>
  );
};

Radio.displayName = 'Radio';
