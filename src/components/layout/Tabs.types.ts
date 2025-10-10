export interface TabItem {
  /**
   * Unique identifier for the tab
   */
  id: string;

  /**
   * Tab label
   */
  label: React.ReactNode;

  /**
   * Tab content
   */
  content: React.ReactNode;

  /**
   * Icon to display before the label
   */
  icon?: React.ReactNode;

  /**
   * Badge to display on the tab
   */
  badge?: string | number;

  /**
   * Badge color
   */
  badgeColor?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'gray';

  /**
   * Whether the tab is disabled
   */
  disabled?: boolean;
}

export interface TabsProps {
  /**
   * Array of tab items
   */
  items: TabItem[];

  /**
   * ID of the initially active tab
   */
  defaultTab?: string;

  /**
   * Controlled active tab ID
   */
  activeTab?: string;

  /**
   * Callback when tab changes
   */
  onTabChange?: (tabId: string) => void;

  /**
   * Whether tabs should be contained (with background)
   */
  contained?: boolean;

  /**
   * Additional CSS class names
   */
  className?: string;

  /**
   * Persist active tab in localStorage
   */
  persistInUrl?: boolean;

  /**
   * ID for persisting state
   */
  id?: string;
}
