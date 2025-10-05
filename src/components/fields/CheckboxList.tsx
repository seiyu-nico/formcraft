import React, { useState, useId, useMemo } from 'react';
import { CheckboxListProps } from './CheckboxList.types';

export const CheckboxList: React.FC<CheckboxListProps> = ({
  name,
  label,
  helperText,
  options,
  required = false,
  disabled = false,
  readOnly = false,
  defaultValue = [],
  columns,
  searchable = false,
  bulkToggleable = false,
  validate,
  onChange,
  onFocus,
  onBlur,
  className = '',
  extraInputAttributes = {},
}) => {
  const id = useId();
  const [selectedValues, setSelectedValues] = useState<string[]>(defaultValue);
  const [error, setError] = useState<string | undefined>();
  const [searchQuery, setSearchQuery] = useState('');

  // 検索フィルタリング
  const filteredOptions = useMemo(() => {
    if (!searchable || !searchQuery) return options;

    const query = searchQuery.toLowerCase();
    return options.filter(
      (option) =>
        option.label.toLowerCase().includes(query) ||
        option.description?.toLowerCase().includes(query)
    );
  }, [options, searchQuery, searchable]);

  const handleToggle = (value: string) => {
    if (disabled || readOnly) return;

    const newValues = selectedValues.includes(value)
      ? selectedValues.filter((v) => v !== value)
      : [...selectedValues, value];

    setSelectedValues(newValues);
    onChange?.(newValues);

    // バリデーション実行
    if (validate) {
      const result = validate(newValues);
      if (result instanceof Promise) {
        result.then(setError);
      } else {
        setError(result);
      }
    }
  };

  const handleSelectAll = () => {
    if (disabled || readOnly) return;
    const enabledValues = filteredOptions.filter((opt) => !opt.disabled).map((opt) => opt.value);

    setSelectedValues(enabledValues);
    onChange?.(enabledValues);

    if (validate) {
      const result = validate(enabledValues);
      if (result instanceof Promise) {
        result.then(setError);
      } else {
        setError(result);
      }
    }
  };

  const handleDeselectAll = () => {
    if (disabled || readOnly) return;
    setSelectedValues([]);
    onChange?.([]);

    if (validate) {
      const result = validate([]);
      if (result instanceof Promise) {
        result.then(setError);
      } else {
        setError(result);
      }
    }
  };

  const gridColumnsClass = columns
    ? {
        1: 'grid-cols-1',
        2: 'grid-cols-2',
        3: 'grid-cols-3',
        4: 'grid-cols-4',
      }[columns] || 'grid-cols-1'
    : '';

  return (
    <div className={`space-y-2 ${className}`}>
      {label && (
        <label className="block text-sm font-medium text-gray-950 dark:text-white">
          {label}
          {required && <span className="text-red-600 dark:text-red-400 ml-1">*</span>}
        </label>
      )}

      {searchable && (
        <div className="mb-3">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search options..."
            className="block w-full rounded-lg border-none bg-white shadow-sm ring-1 ring-gray-950/10 px-3 py-1.5 text-sm
              focus:ring-2 focus:ring-primary-600 focus:outline-none
              dark:bg-white/5 dark:ring-white/20 dark:focus:ring-primary-500
              dark:text-white dark:placeholder:text-gray-500"
          />
        </div>
      )}

      {bulkToggleable && (
        <div className="flex gap-2 mb-3">
          <button
            type="button"
            onClick={handleSelectAll}
            disabled={disabled}
            className="text-sm text-primary-600 hover:text-primary-700 disabled:opacity-50 dark:text-primary-400 dark:hover:text-primary-300"
          >
            Select all
          </button>
          <span className="text-sm text-gray-400 dark:text-gray-600">|</span>
          <button
            type="button"
            onClick={handleDeselectAll}
            disabled={disabled}
            className="text-sm text-primary-600 hover:text-primary-700 disabled:opacity-50 dark:text-primary-400 dark:hover:text-primary-300"
          >
            Deselect all
          </button>
        </div>
      )}

      <div className={columns ? `grid ${gridColumnsClass} gap-4` : 'space-y-3'}>
        {filteredOptions.map((option) => {
          const optionId = `${id}-${option.value}`;
          const isChecked = selectedValues.includes(option.value);
          const isDisabled = disabled || option.disabled;

          return (
            <div key={option.value} className="flex items-start gap-x-3">
              <input
                id={optionId}
                name={`${name}[]`}
                type="checkbox"
                value={option.value}
                checked={isChecked}
                required={required && selectedValues.length === 0}
                disabled={isDisabled}
                readOnly={readOnly}
                onChange={() => handleToggle(option.value)}
                onFocus={onFocus}
                onBlur={onBlur}
                {...extraInputAttributes}
                className={`
                  mt-1 size-4 shrink-0 rounded border-none bg-white shadow-sm ring-1 transition duration-75
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
                  className={`overflow-hidden font-medium break-words cursor-pointer ${
                    isDisabled
                      ? 'text-gray-500 dark:text-gray-400'
                      : 'text-gray-950 dark:text-white'
                  }`}
                >
                  {option.label}
                </label>

                {option.description && (
                  <p
                    className={`${
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

      {searchable && filteredOptions.length === 0 && (
        <p className="text-sm text-gray-500 dark:text-gray-400 py-4 text-center">
          No options found
        </p>
      )}

      {helperText && !error && (
        <p className="text-sm text-gray-600 dark:text-gray-400">{helperText}</p>
      )}

      {error && <p className="text-sm text-red-600 dark:text-red-400">{error}</p>}
    </div>
  );
};

CheckboxList.displayName = 'CheckboxList';
