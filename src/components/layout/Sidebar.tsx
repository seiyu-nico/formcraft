import React, { useState, useCallback } from 'react';
import { SidebarProps, SidebarGroup as SidebarGroupType, SidebarItem } from './Sidebar.types';
import { Badge } from '../ui/Badge';
import { Tooltip } from '../ui/Tooltip';

interface SidebarGroupProps {
  group: SidebarGroupType;
  isOpen: boolean;
  onGroupToggle: (groupId: string) => void;
}

interface SidebarItemProps {
  item: SidebarItem;
  grouped: boolean;
  first: boolean;
  last: boolean;
  isOpen: boolean;
}

const SidebarItemComponent: React.FC<SidebarItemProps> = ({
  item,
  grouped,
  first,
  last,
  isOpen,
}) => {
  const icon = item.active && item.activeIcon ? item.activeIcon : item.icon;
  const hasUrl = Boolean(item.url);

  const content = (
    <a
      href={item.url || '#'}
      target={item.openInNewTab ? '_blank' : undefined}
      rel={item.openInNewTab ? 'noopener noreferrer' : undefined}
      onClick={hasUrl ? undefined : (e) => e.preventDefault()}
      className={`
        relative flex items-center justify-center gap-x-3 rounded-lg p-2 outline-none transition duration-75
        ${
          item.active
            ? 'bg-gray-100 dark:bg-white/5'
            : hasUrl
              ? 'hover:bg-gray-100 focus-visible:bg-gray-100 dark:hover:bg-white/5 dark:focus-visible:bg-white/5'
              : ''
        }
      `
        .trim()
        .replace(/\s+/g, ' ')}
    >
      {icon && (
        <span
          className={`
            inline-flex shrink-0
            ${item.active ? 'text-primary-600 dark:text-primary-400' : 'text-gray-400 dark:text-gray-500'}
          `
            .trim()
            .replace(/\s+/g, ' ')}
        >
          {icon}
        </span>
      )}


      {isOpen && (
        <span
          className={`
            flex-1 truncate text-sm font-medium transition duration-75
            ${item.active ? 'text-primary-600 dark:text-primary-400' : 'text-gray-700 dark:text-gray-200'}
          `
            .trim()
            .replace(/\s+/g, ' ')}
        >
          {item.label}
        </span>
      )}

      {isOpen && item.badge !== undefined && (
        <Badge
          color={item.badgeColor || (item.active ? 'primary' : 'gray')}
          size="sm"
          className="w-max"
        >
          {item.badge}
        </Badge>
      )}
    </a>
  );

  if (!isOpen && item.label) {
    return (
      <Tooltip content={item.label} position="right">
        {content}
      </Tooltip>
    );
  }

  return content;
};

const SidebarGroupComponent: React.FC<SidebarGroupProps> = ({ group, isOpen, onGroupToggle }) => {
  const [isCollapsed, setIsCollapsed] = useState(group.collapsed || false);

  const handleToggle = useCallback(() => {
    setIsCollapsed((prev) => !prev);
    onGroupToggle(group.id);
  }, [group.id, onGroupToggle]);

  return (
    <li
      className={`
        flex flex-col gap-y-1
        ${isCollapsed ? 'fi-collapsed' : ''}
        ${group.active ? 'fi-active' : ''}
      `
        .trim()
        .replace(/\s+/g, ' ')}
    >
      {group.label && isOpen && (
        <div
          onClick={group.collapsible ? handleToggle : undefined}
          className={`flex items-center gap-x-3 p-2 ${group.collapsible ? 'cursor-pointer' : ''}`}
        >
          <span className="flex-1 text-sm leading-6 font-medium text-gray-500 dark:text-gray-400">
            {group.label}
          </span>

          {group.collapsible && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleToggle();
              }}
              className={`
                inline-flex items-center justify-center transition-transform duration-200
                ${isCollapsed ? '-rotate-180' : ''}
              `
                .trim()
                .replace(/\s+/g, ' ')}
              aria-label={`Toggle ${group.label}`}
            >
              <svg
                className="h-5 w-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 15l7-7 7 7"
                />
              </svg>
            </button>
          )}
        </div>
      )}

      <ul
        className={`
          flex flex-col gap-y-1 overflow-hidden transition-all duration-200
          ${isCollapsed && group.collapsible ? 'max-h-0 opacity-0' : 'max-h-[1000px] opacity-100'}
        `
          .trim()
          .replace(/\s+/g, ' ')}
      >
        {group.items.map((item, index) => (
            <li key={item.id}>
              <SidebarItemComponent
                item={item}
                grouped={Boolean(group.label)}
                first={index === 0}
                last={index === group.items.length - 1}
                isOpen={isOpen}
              />
              {item.childItems && item.childItems.length > 0 && (
                <ul className="flex flex-col gap-y-1 mt-1 ml-3">
                  {item.childItems.map((childItem, childIndex) => (
                    <li key={childItem.id}>
                      <SidebarItemComponent
                        item={childItem}
                        grouped={true}
                        first={childIndex === 0}
                        last={childIndex === item.childItems!.length - 1}
                        isOpen={isOpen}
                      />
                    </li>
                  ))}
                </ul>
              )}
            </li>
        ))}
      </ul>
    </li>
  );
};

export const Sidebar: React.FC<SidebarProps> = ({
  groups,
  logo,
  logoUrl,
  collapsible = false,
  fullyCollapsible = false,
  defaultOpen = true,
  open: controlledOpen,
  onOpenChange,
  footer,
  className = '',
  width = '18rem',
}) => {
  const [internalOpen, setInternalOpen] = useState(defaultOpen);
  const isOpen = controlledOpen ?? internalOpen;

  const handleToggle = useCallback(() => {
    const newOpen = !isOpen;
    if (!controlledOpen) {
      setInternalOpen(newOpen);
    }
    onOpenChange?.(newOpen);
  }, [isOpen, controlledOpen, onOpenChange]);

  const handleGroupToggle = useCallback((groupId: string) => {
    // Store collapsed groups in localStorage
    const collapsedGroups = JSON.parse(localStorage.getItem('collapsedGroups') || '[]');
    const index = collapsedGroups.indexOf(groupId);
    if (index > -1) {
      collapsedGroups.splice(index, 1);
    } else {
      collapsedGroups.push(groupId);
    }
    localStorage.setItem('collapsedGroups', JSON.stringify(collapsedGroups));
  }, []);

  return (
    <>
      {/* Backdrop for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 z-30 bg-gray-950/50 transition duration-500 lg:hidden dark:bg-gray-950/75"
          onClick={handleToggle}
        />
      )}

      <aside
        className={`
          fixed inset-y-0 start-0 z-30 flex h-dvh flex-col bg-white transition-all lg:z-20 dark:bg-gray-900
          ${isOpen ? 'translate-x-0 shadow-xl ring-1 ring-gray-950/5 lg:shadow-none lg:ring-0 dark:ring-white/10' : '-translate-x-full lg:translate-x-0'}
          ${!fullyCollapsible ? 'lg:sticky' : ''}
          ${className}
        `
          .trim()
          .replace(/\s+/g, ' ')}
        style={{
          width: isOpen || (!isOpen && collapsible) ? width : undefined,
          '--sidebar-width': width,
        } as React.CSSProperties}
      >
        {/* Header */}
        <div className="overflow-x-clip">
          <header className="flex h-16 items-center justify-center px-4">
            {collapsible && !isOpen && (
              <button
                onClick={handleToggle}
                className="inline-flex items-center justify-center rounded-lg p-2 text-gray-500 hover:bg-gray-100 dark:hover:bg-white/5"
                aria-label="Expand sidebar"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            )}

            {collapsible && isOpen && (
              <button
                onClick={handleToggle}
                className="inline-flex items-center justify-center rounded-lg p-2 text-gray-500 hover:bg-gray-100 dark:hover:bg-white/5 lg:flex"
                aria-label="Collapse sidebar"
              >
                <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
            )}

            {isOpen && logo && (
              <div className="flex-1">
                {logoUrl ? (
                  <a href={logoUrl} className="inline-block">
                    {logo}
                  </a>
                ) : (
                  logo
                )}
              </div>
            )}
          </header>
        </div>

        {/* Navigation */}
        <nav className="flex grow flex-col gap-y-7 overflow-x-hidden overflow-y-auto px-6 py-8">
          <ul className="-mx-2 flex flex-col gap-y-7">
            {groups.map((group) => (
              <SidebarGroupComponent
                key={group.id}
                group={group}
                isOpen={isOpen}
                onGroupToggle={handleGroupToggle}
              />
            ))}
          </ul>
        </nav>

        {/* Footer */}
        {footer && <div className="mx-4 my-3 grid gap-y-3">{footer}</div>}
      </aside>
    </>
  );
};

Sidebar.displayName = 'Sidebar';
