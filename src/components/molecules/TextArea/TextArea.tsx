import React, { useState, useId, useRef, useEffect, TextareaHTMLAttributes } from 'react';
import { TextAreaProps } from './TextArea.types';

export const TextArea: React.FC<TextAreaProps> = ({
  name,
  label,
  helperText,
  required = false,
  disabled = false,
  readOnly = false,
  placeholder,
  autocomplete,
  minLength,
  maxLength,
  rows = 3,
  cols,
  autosize = false,
  resize = 'vertical',
  defaultValue = '',
  validate,
  onChange,
  onFocus,
  onBlur,
  className = '',
  extraTextareaAttributes = {},
}) => {
  const id = useId();
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [value, setValue] = useState<string>(String(defaultValue));
  const [error, setError] = useState<string | undefined>();

  // autosize機能: 入力内容に応じて高さを自動調整
  useEffect(() => {
    if (autosize && textareaRef.current) {
      const textarea = textareaRef.current;
      // 一度高さをリセットして正確な scrollHeight を取得
      textarea.style.height = 'auto';
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  }, [value, autosize]);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
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

  const textareaAttributes: TextareaHTMLAttributes<HTMLTextAreaElement> = {
    id,
    name,
    value,
    required,
    disabled,
    readOnly,
    placeholder,
    autoComplete: autocomplete,
    minLength,
    maxLength,
    rows: autosize ? undefined : rows,
    cols,
    onChange: handleChange,
    onFocus,
    onBlur,
    ref: textareaRef,
    ...extraTextareaAttributes,
  };

  const resizeClasses: Record<typeof resize, string> = {
    none: 'resize-none',
    both: 'resize',
    horizontal: 'resize-x',
    vertical: 'resize-y',
  };

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
        <textarea
          {...textareaAttributes}
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
            px-3 py-1.5
            ${resizeClasses[resize]}
            ${autosize ? 'overflow-hidden' : ''}
          `}
        />
      </div>

      {helperText && !error && (
        <p className="text-sm text-gray-600 dark:text-gray-400">{helperText}</p>
      )}

      {error && <p className="text-sm text-red-600 dark:text-red-400">{error}</p>}
    </div>
  );
};

TextArea.displayName = 'TextArea';
