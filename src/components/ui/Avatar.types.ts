export type AvatarSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface AvatarProps {
  /**
   * Image source URL (required)
   */
  src?: string;

  /**
   * Alt text for accessibility (required)
   */
  alt: string;

  /**
   * Avatar size variant
   * @default 'md'
   */
  size?: AvatarSize;

  /**
   * Whether the avatar should be circular
   * @default true
   */
  circular?: boolean;

  /**
   * Optional initials to display when no image is provided
   */
  initials?: string;

  /**
   * Image loading strategy
   * @default 'lazy'
   */
  loading?: 'lazy' | 'eager';

  /**
   * Additional CSS classes
   */
  className?: string;

  /**
   * Click handler
   */
  onClick?: () => void;
}
