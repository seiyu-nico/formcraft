import React, { useState, useId, InputHTMLAttributes } from 'react';
import { TextInputProps } from './TextInput.types';

export const TextInput: React.FC<TextInputProps> = ({
  name,
  label,
  helperText,
  required = false,
  disabled = false,
  readOnly = false,
  type = 'text',
  placeholder,
  autocomplete,
  minValue,
  maxValue,
  step,
  minLength,
  maxLength,
  pattern,
  inputMode,
  prefix,
  suffix,
  revealable = false,
  copyable = false,
  defaultValue = '',
  validate,
  onChange,
  onFocus,
  onBlur,
  className = '',
  extraInputAttributes = {},
}) => {
  const id = useId();
  const [value, setValue] = useState<string>(String(defaultValue));
  const [error, setError] = useState<string | undefined>();
  const [showPassword, setShowPassword] = useState(false);
  const [copied, setCopied] = useState(false);

  const inputType = type === 'password' && revealable && showPassword ? 'text' : type;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
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

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const inputAttributes: InputHTMLAttributes<HTMLInputElement> = {
    id,
    name,
    type: inputType,
    value,
    required,
    disabled,
    readOnly,
    placeholder,
    autoComplete: autocomplete,
    min: minValue,
    max: maxValue,
    step,
    minLength,
    maxLength,
    pattern,
    inputMode,
    onChange: handleChange,
    onFocus,
    onBlur,
    ...extraInputAttributes,
  };

  const hasPrefix = !!prefix;
  const hasSuffix = !!(suffix || (type === 'password' && revealable) || copyable);

  return (
    <div className={`space-y-2 ${className}`}>
      {label && (
        <label htmlFor={id} className="block text-sm font-medium text-gray-950 dark:text-white">
          {label}
          {required && <span className="text-danger-600 dark:text-danger-400 ml-1">*</span>}
        </label>
      )}

      <div
        className={`
          flex rounded-lg bg-white shadow-sm ring-1 ring-gray-950/10 transition duration-75
          dark:bg-white/5 dark:ring-white/20
          ${
            !disabled
              ? error
                ? 'ring-danger-600 dark:ring-danger-500 focus-within:ring-2 focus-within:ring-danger-600 dark:focus-within:ring-danger-500'
                : 'focus-within:ring-2 focus-within:ring-primary-600 dark:focus-within:ring-primary-500'
              : error
              ? 'ring-danger-600 dark:ring-danger-500 bg-gray-50 dark:bg-transparent'
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

        <div className="min-w-0 flex-1">
          <input
            {...inputAttributes}
            className={`
              block w-full appearance-none border-none bg-white/0 text-start text-sm leading-6
              text-gray-950 transition duration-75
              placeholder:text-gray-400
              focus:ring-0 focus:outline-none
              disabled:text-gray-500 disabled:[-webkit-text-fill-color:theme(colors.gray.500)]
              disabled:placeholder:[-webkit-text-fill-color:theme(colors.gray.400)]
              dark:text-white dark:placeholder:text-gray-500
              dark:disabled:text-gray-400 dark:disabled:[-webkit-text-fill-color:theme(colors.gray.400)]
              dark:disabled:placeholder:[-webkit-text-fill-color:theme(colors.gray.500)]
              ${hasPrefix ? 'ps-0' : 'px-3'}
              ${hasSuffix ? 'pe-0' : 'px-3'}
              ${!hasPrefix && !hasSuffix ? 'px-3' : ''}
              py-1.5
            `}
          />
        </div>

        {hasSuffix && (
          <div className="flex items-center gap-x-3 pe-3 ps-2">
            {suffix && (
              <span className="text-sm whitespace-nowrap text-gray-500 dark:text-gray-400">
                {suffix}
              </span>
            )}

            {type === 'password' && revealable && (
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="text-gray-400 hover:text-gray-500 transition focus:outline-none"
                aria-label={showPassword ? 'Hide password' : 'Show password'}
              >
                {showPassword ? (
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                    />
                  </svg>
                ) : (
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                )}
              </button>
            )}

            {copyable && (
              <button
                type="button"
                onClick={handleCopy}
                className="text-gray-400 hover:text-gray-500 transition focus:outline-none"
                aria-label="Copy to clipboard"
              >
                {copied ? (
                  <svg className="h-5 w-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                ) : (
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                    />
                  </svg>
                )}
              </button>
            )}
          </div>
        )}
      </div>

      {helperText && !error && (
        <p className="text-sm text-gray-600 dark:text-gray-400">{helperText}</p>
      )}

      {error && (
        <p className="text-sm text-danger-600 dark:text-danger-400">{error}</p>
      )}
    </div>
  );
};

TextInput.displayName = 'TextInput';
