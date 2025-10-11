import React, { useState } from 'react';
import { TabsProps } from './Tabs.types';
import { Badge } from '../../atoms/Badge';

export const Tabs: React.FC<TabsProps> = ({
  items,
  defaultTab,
  activeTab: controlledActiveTab,
  onTabChange,
  contained = false,
  className = '',
  persistInUrl = false,
  id,
}) => {
  const [internalActiveTab, setInternalActiveTab] = useState(() => {
    if (persistInUrl && id && typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const urlTab = params.get(id);
      if (urlTab && items.some((item) => item.id === urlTab)) {
        return urlTab;
      }
    }
    return defaultTab || items[0]?.id;
  });

  const activeTab = controlledActiveTab ?? internalActiveTab;

  const handleTabClick = (tabId: string) => {
    if (items.find((item) => item.id === tabId)?.disabled) {
      return;
    }

    if (!controlledActiveTab) {
      setInternalActiveTab(tabId);
    }

    if (persistInUrl && id && typeof window !== 'undefined') {
      const url = new URL(window.location.href);
      url.searchParams.set(id, tabId);
      window.history.pushState({}, '', url.toString());
    }

    onTabChange?.(tabId);
  };

  const activeItem = items.find((item) => item.id === activeTab);

  return (
    <div className={className}>
      <nav
        className={`
          flex max-w-full gap-x-1 overflow-x-auto
          ${
            contained
              ? 'border-b border-gray-200 px-3 py-2.5 dark:border-white/10'
              : 'mx-auto rounded-xl bg-white p-2 shadow-sm ring-1 ring-gray-950/5 dark:bg-gray-900 dark:ring-white/10'
          }
        `
          .trim()
          .replace(/\s+/g, ' ')}
        aria-label="Tabs"
        role="tablist"
      >
        {items.map((item) => {
          const isActive = item.id === activeTab;
          const isDisabled = item.disabled;

          return (
            <button
              key={item.id}
              onClick={() => handleTabClick(item.id)}
              disabled={isDisabled}
              className={`
                flex items-center justify-center gap-x-2 rounded-lg px-3 py-2 text-sm font-medium whitespace-nowrap transition duration-75 outline-none
                ${
                  isActive
                    ? 'bg-gray-50 dark:bg-white/5'
                    : 'hover:bg-gray-50 focus-visible:bg-gray-50 dark:hover:bg-white/5 dark:focus-visible:bg-white/5'
                }
                ${isDisabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}
              `
                .trim()
                .replace(/\s+/g, ' ')}
              aria-current={isActive ? 'page' : undefined}
              aria-selected={isActive}
              role="tab"
              type="button"
            >
              {item.icon && (
                <span
                  className={`
                    inline-flex shrink-0 transition duration-75
                    ${
                      isActive
                        ? 'text-primary-700 dark:text-primary-400'
                        : 'text-gray-400 dark:text-gray-500'
                    }
                  `
                    .trim()
                    .replace(/\s+/g, ' ')}
                >
                  {item.icon}
                </span>
              )}
              <span
                className={`
                  transition duration-75
                  ${
                    isActive
                      ? 'text-primary-700 dark:text-primary-400'
                      : 'text-gray-500 dark:text-gray-400'
                  }
                `
                  .trim()
                  .replace(/\s+/g, ' ')}
              >
                {item.label}
              </span>
              {item.badge !== undefined && (
                <Badge
                  color={item.badgeColor || (isActive ? 'primary' : 'gray')}
                  size="sm"
                  className="w-max"
                >
                  {item.badge}
                </Badge>
              )}
            </button>
          );
        })}
      </nav>

      <div className={contained ? '' : 'py-6'}>{activeItem?.content}</div>
    </div>
  );
};

Tabs.displayName = 'Tabs';
