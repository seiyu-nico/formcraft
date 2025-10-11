export interface SidebarItem {
  /**
   * Unique identifier for the navigation item
   */
  id: string;

  /**
   * Item label
   */
  label: React.ReactNode;

  /**
   * URL to navigate to
   */
  url?: string;

  /**
   * Icon to display before the label
   */
  icon?: React.ReactNode;

  /**
   * Active icon (shown when item is active)
   */
  activeIcon?: React.ReactNode;

  /**
   * Badge to display on the item
   */
  badge?: string | number;

  /**
   * Badge color
   */
  badgeColor?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'gray';

  /**
   * Badge tooltip
   */
  badgeTooltip?: string;

  /**
   * Whether the item is currently active
   */
  active?: boolean;

  /**
   * Child items for nested navigation
   */
  childItems?: SidebarItem[];

  /**
   * Whether to open URL in new tab
   */
  openInNewTab?: boolean;
}

export interface SidebarGroup {
  /**
   * Unique identifier for the group
   */
  id: string;

  /**
   * Group label
   */
  label?: string;

  /**
   * Group icon
   */
  icon?: React.ReactNode;

  /**
   * Navigation items in this group
   */
  items: SidebarItem[];

  /**
   * Whether the group is collapsible
   */
  collapsible?: boolean;

  /**
   * Whether the group is collapsed by default
   */
  collapsed?: boolean;

  /**
   * Whether any item in the group is active
   */
  active?: boolean;
}

export interface SidebarProps {
  /**
   * Navigation groups
   */
  groups: SidebarGroup[];

  /**
   * Logo to display in the header
   */
  logo?: React.ReactNode;

  /**
   * URL for logo link
   */
  logoUrl?: string;

  /**
   * Whether sidebar is collapsible on desktop
   */
  collapsible?: boolean;

  /**
   * Whether sidebar is fully collapsible (hides completely)
   */
  fullyCollapsible?: boolean;

  /**
   * Whether sidebar is open by default
   */
  defaultOpen?: boolean;

  /**
   * Controlled open state
   */
  open?: boolean;

  /**
   * Callback when open state changes
   */
  onOpenChange?: (open: boolean) => void;

  /**
   * Footer content
   */
  footer?: React.ReactNode;

  /**
   * Additional CSS class names
   */
  className?: string;

  /**
   * Width of the sidebar (CSS custom property value)
   * @default '18rem'
   */
  width?: string;
}
