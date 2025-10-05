import { ReactNode } from 'react';

export type ModalWidth = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | 'screen';

export type ModalAlignment = 'start' | 'center';

export type IconColor = 'gray' | 'primary' | 'danger' | 'success' | 'warning' | 'info';

export interface ModalAction {
  /** Action label */
  label: string;

  /** Action handler */
  onClick: () => void | Promise<void>;

  /** Action color */
  color?: 'primary' | 'secondary' | 'danger';

  /** Whether the action is disabled */
  disabled?: boolean;

  /** Whether the action should close the modal */
  close?: boolean;
}

export interface ModalProps {
  /** Whether the modal is open */
  open: boolean;

  /** Callback when modal close is requested */
  onClose: () => void;

  /** Modal heading */
  heading?: string;

  /** Modal description */
  description?: string;

  /** Icon (ReactNode) */
  icon?: ReactNode;

  /** Icon color */
  iconColor?: IconColor;

  /** Modal content */
  children?: ReactNode;

  /** Footer content */
  footer?: ReactNode;

  /** Modal width */
  width?: ModalWidth;

  /** Slide over mode */
  slideOver?: boolean;

  /** Modal alignment */
  alignment?: ModalAlignment;

  /** Sticky header */
  stickyHeader?: boolean;

  /** Sticky footer */
  stickyFooter?: boolean;

  /** Close modal by clicking outside */
  closeOnClickOutside?: boolean;

  /** Close modal by pressing Escape key */
  closeOnEscape?: boolean;

  /** Show close button */
  showCloseButton?: boolean;

  /** Autofocus */
  autofocus?: boolean;

  /** Submit action */
  submitAction?: ModalAction;

  /** Cancel action */
  cancelAction?: ModalAction;

  /** Extra footer actions */
  footerActions?: ModalAction[];

  /** Footer actions alignment */
  footerActionsAlignment?: 'start' | 'center' | 'end';

  /** Custom CSS classes */
  className?: string;
}
