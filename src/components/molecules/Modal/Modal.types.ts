import { ReactNode } from 'react';

export type ModalWidth =
  | 'xs'
  | 'sm'
  | 'md'
  | 'lg'
  | 'xl'
  | '2xl'
  | '3xl'
  | '4xl'
  | '5xl'
  | '6xl'
  | '7xl'
  | 'screen';

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

export interface ModalHeaderProps {
  /** Header title */
  title?: string;

  /** Header description */
  description?: string;

  /** Icon (ReactNode) */
  icon?: ReactNode;

  /** Icon color */
  iconColor?: IconColor;
}

export interface ModalFooterProps {
  /** Footer title */
  title?: string;

  /** Footer description */
  description?: string;

  /** Footer content and actions */
  children?: ReactNode;
}

export interface ModalFooterActionsProps {
  /** Actions content */
  children: ReactNode;
}

export interface ModalProps {
  /** Whether the modal is open */
  open: boolean;

  /** Callback when modal close is requested */
  onClose: () => void;

  /** Modal heading (deprecated: use Modal.Header instead) */
  heading?: string;

  /** Modal description (deprecated: use Modal.Header instead) */
  description?: string;

  /** Icon (ReactNode) (deprecated: use Modal.Header instead) */
  icon?: ReactNode;

  /** Icon color (deprecated: use Modal.Header instead) */
  iconColor?: IconColor;

  /** Modal content */
  children?: ReactNode;

  /** Footer content (deprecated: use Modal.Footer instead) */
  footer?: ReactNode;

  /** Modal width */
  width?: ModalWidth;

  /** Slide over mode */
  slideOver?: boolean;

  /** Modal alignment */
  alignment?: ModalAlignment;

  /** Close modal by clicking outside */
  closeOnClickOutside?: boolean;

  /** Close modal by pressing Escape key */
  closeOnEscape?: boolean;

  /** Show close button */
  showCloseButton?: boolean;

  /** Autofocus */
  autofocus?: boolean;

  /** Submit action (deprecated: use Modal.Footer.Actions instead) */
  submitAction?: ModalAction;

  /** Cancel action (deprecated: use Modal.Footer.Actions instead) */
  cancelAction?: ModalAction;

  /** Extra footer actions (deprecated: use Modal.Footer.Actions instead) */
  footerActions?: ModalAction[];

  /** Footer actions alignment (deprecated: use Modal.Footer.Actions instead) */
  footerActionsAlignment?: 'start' | 'center' | 'end';

  /** Custom CSS classes */
  className?: string;
}
