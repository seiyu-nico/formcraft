import React, { useState, useId } from 'react';
import { RepeaterProps, RepeaterItem } from './Repeater.types';

export const Repeater: React.FC<RepeaterProps> = ({
  name,
  label,
  helperText,
  required = false,
  disabled = false,
  readOnly = false,
  defaultValue = [],
  minItems,
  maxItems,
  addable = true,
  deletable = true,
  reorderable = true,
  addActionLabel = 'Add item',
  itemLabel,
  children,
  validate,
  onChange,
  onFocus,
  onBlur,
  className = '',
}) => {
  const id = useId();
  const [items, setItems] = useState<RepeaterItem[]>(defaultValue);
  const [error, setError] = useState<string | undefined>();

  const generateId = () => `item-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

  const handleAdd = () => {
    if (disabled || readOnly || !addable) return;
    if (maxItems !== undefined && items.length >= maxItems) return;

    const newItem: RepeaterItem = { id: generateId() };
    const newItems = [...items, newItem];
    setItems(newItems);
    onChange?.(newItems);

    if (validate) {
      const result = validate(newItems);
      if (result instanceof Promise) {
        result.then(setError);
      } else {
        setError(result);
      }
    }
  };

  const handleDelete = (index: number) => {
    if (disabled || readOnly || !deletable) return;
    if (minItems !== undefined && items.length <= minItems) return;

    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
    onChange?.(newItems);

    if (validate) {
      const result = validate(newItems);
      if (result instanceof Promise) {
        result.then(setError);
      } else {
        setError(result);
      }
    }
  };

  const handleMoveUp = (index: number) => {
    if (disabled || readOnly || !reorderable) return;
    if (index === 0) return;

    const newItems = [...items];
    [newItems[index - 1], newItems[index]] = [newItems[index], newItems[index - 1]];
    setItems(newItems);
    onChange?.(newItems);
  };

  const handleMoveDown = (index: number) => {
    if (disabled || readOnly || !reorderable) return;
    if (index === items.length - 1) return;

    const newItems = [...items];
    [newItems[index], newItems[index + 1]] = [newItems[index + 1], newItems[index]];
    setItems(newItems);
    onChange?.(newItems);
  };

  const handleUpdateItem = (index: number, updates: Partial<RepeaterItem>) => {
    if (disabled || readOnly) return;

    const newItems = items.map((item, i) => (i === index ? { ...item, ...updates } : item));
    setItems(newItems);
    onChange?.(newItems);

    if (validate) {
      const result = validate(newItems);
      if (result instanceof Promise) {
        result.then(setError);
      } else {
        setError(result);
      }
    }
  };

  const canAdd = addable && !disabled && !readOnly && (maxItems === undefined || items.length < maxItems);
  const canDelete = (index: number) =>
    deletable && !disabled && !readOnly && (minItems === undefined || items.length > minItems);

  return (
    <div className={`space-y-2 ${className}`} onFocus={onFocus} onBlur={onBlur}>
      {label && (
        <label className="block text-sm font-medium text-gray-950 dark:text-white">
          {label}
          {required && <span className="text-red-600 dark:text-red-400 ml-1">*</span>}
        </label>
      )}

      <div className="space-y-3">
        {items.map((item, index) => (
          <div
            key={item.id}
            className="relative rounded-lg border border-gray-950/10 dark:border-white/10 bg-white dark:bg-white/5 p-4"
          >
            {/* Item header */}
            <div className="flex items-center justify-between mb-3">
              <div className="text-sm font-medium text-gray-950 dark:text-white">
                {itemLabel ? itemLabel(item, index) : `Item ${index + 1}`}
              </div>

              <div className="flex items-center gap-1">
                {/* Move up button */}
                {reorderable && index > 0 && (
                  <button
                    type="button"
                    onClick={() => handleMoveUp(index)}
                    disabled={disabled || readOnly}
                    className="p-1.5 text-gray-500 hover:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed dark:text-gray-400 dark:hover:text-gray-200"
                    title="Move up"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                    </svg>
                  </button>
                )}

                {/* Move down button */}
                {reorderable && index < items.length - 1 && (
                  <button
                    type="button"
                    onClick={() => handleMoveDown(index)}
                    disabled={disabled || readOnly}
                    className="p-1.5 text-gray-500 hover:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed dark:text-gray-400 dark:hover:text-gray-200"
                    title="Move down"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                )}

                {/* Delete button */}
                {canDelete(index) && (
                  <button
                    type="button"
                    onClick={() => handleDelete(index)}
                    disabled={disabled || readOnly}
                    className="p-1.5 text-red-600 hover:text-red-700 disabled:opacity-50 disabled:cursor-not-allowed dark:text-red-400 dark:hover:text-red-300"
                    title="Delete"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
                  </button>
                )}
              </div>
            </div>

            {/* Item content */}
            <div>{children(item, index, (updates) => handleUpdateItem(index, updates))}</div>

            {/* Hidden inputs for form submission */}
            {Object.entries(item).map(([key, value]) => {
              if (key === 'id') return null;
              return (
                <input
                  key={key}
                  type="hidden"
                  name={`${name}[${index}][${key}]`}
                  value={typeof value === 'object' ? JSON.stringify(value) : value}
                />
              );
            })}
          </div>
        ))}

        {items.length === 0 && (
          <div className="text-center py-8 text-sm text-gray-500 dark:text-gray-400 border border-dashed border-gray-950/10 dark:border-white/10 rounded-lg">
            No items yet
          </div>
        )}
      </div>

      {/* Add button */}
      {canAdd && (
        <button
          type="button"
          onClick={handleAdd}
          disabled={disabled || readOnly}
          className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-primary-600 hover:text-primary-700 disabled:opacity-50 disabled:cursor-not-allowed dark:text-primary-400 dark:hover:text-primary-300"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          {addActionLabel}
        </button>
      )}

      {helperText && !error && <p className="text-sm text-gray-600 dark:text-gray-400">{helperText}</p>}

      {error && <p className="text-sm text-red-600 dark:text-red-400">{error}</p>}
    </div>
  );
};

Repeater.displayName = 'Repeater';
