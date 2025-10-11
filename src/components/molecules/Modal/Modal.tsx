import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import {
  ModalProps,
  ModalWidth,
  ModalHeaderProps,
  ModalFooterProps,
  ModalFooterActionsProps,
  IconColor,
} from './Modal.types';
import { Button } from '../../atoms/Button';

// Modal.Header subcomponent
const ModalHeader: React.FC<ModalHeaderProps> = () => {
  // This component doesn't render anything directly
  // It's used as a marker for the parent Modal component
  return null;
};

ModalHeader.displayName = 'Modal.Header';

// Modal.Footer.Actions subcomponent
const ModalFooterActions: React.FC<ModalFooterActionsProps> = ({ children }) => {
  return <div className="flex items-center justify-end gap-3">{children}</div>;
};

ModalFooterActions.displayName = 'Modal.Footer.Actions';

// Modal.Footer subcomponent
const ModalFooterComponent: React.FC<ModalFooterProps> = () => {
  // This component doesn't render anything directly
  // It's used as a marker for the parent Modal component
  return null;
};

ModalFooterComponent.displayName = 'Modal.Footer';

const ModalFooter = Object.assign(ModalFooterComponent, {
  Actions: ModalFooterActions,
});

const widthClasses: Record<ModalWidth, string> = {
  xs: 'max-w-xs',
  sm: 'max-w-sm',
  md: 'max-w-md',
  lg: 'max-w-lg',
  xl: 'max-w-xl',
  '2xl': 'max-w-2xl',
  '3xl': 'max-w-3xl',
  '4xl': 'max-w-4xl',
  '5xl': 'max-w-5xl',
  '6xl': 'max-w-6xl',
  '7xl': 'max-w-7xl',
  screen: 'fixed inset-0',
};

const iconColorClasses = {
  gray: 'bg-gray-100 dark:bg-gray-500/20',
  primary: 'bg-primary-100 dark:bg-primary-500/20',
  danger: 'bg-red-100 dark:bg-red-500/20',
  success: 'bg-green-100 dark:bg-green-500/20',
  warning: 'bg-yellow-100 dark:bg-yellow-500/20',
  info: 'bg-blue-100 dark:bg-blue-500/20',
};

const iconTextColorClasses = {
  gray: 'text-gray-500 dark:text-gray-400',
  primary: 'text-primary-600 dark:text-primary-400',
  danger: 'text-red-600 dark:text-red-400',
  success: 'text-green-600 dark:text-green-400',
  warning: 'text-yellow-600 dark:text-yellow-400',
  info: 'text-blue-600 dark:text-blue-400',
};

const ModalComponent: React.FC<ModalProps> = ({
  open,
  onClose,
  heading,
  description,
  icon,
  iconColor = 'primary',
  children,
  footer,
  width = 'md',
  slideOver = false,
  alignment = 'center',
  closeOnClickOutside = true,
  closeOnEscape = true,
  showCloseButton = true,
  autofocus = true,
  submitAction,
  cancelAction,
  footerActions = [],
  footerActionsAlignment = 'end',
  className = '',
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const previousActiveElement = useRef<HTMLElement | null>(null);

  // Extract header and footer from children if they exist
  let headerElement: React.ReactElement<ModalHeaderProps> | null = null;
  let footerElement: React.ReactElement<ModalFooterProps> | null = null;
  const bodyContent: React.ReactNode[] = [];

  React.Children.forEach(children, (child) => {
    if (React.isValidElement(child)) {
      if (child.type === ModalHeader) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        headerElement = child as any as React.ReactElement<ModalHeaderProps>;
      } else if (child.type === ModalFooter) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        footerElement = child as any as React.ReactElement<ModalFooterProps>;
      } else {
        bodyContent.push(child);
      }
    } else {
      bodyContent.push(child);
    }
  });

  // Extract header data from Modal.Header
  const headerTitle = (headerElement as any)?.props?.title ?? heading;
  const headerDescription = (headerElement as any)?.props?.description ?? description;
  const headerIcon = (headerElement as any)?.props?.icon ?? icon;
  const headerIconColor: IconColor = ((headerElement as any)?.props?.iconColor ??
    iconColor) as IconColor;

  // Extract footer data from Modal.Footer
  let footerTitle: string | undefined;
  let footerDescription: string | undefined;
  let footerActionsContent: React.ReactNode = null;

  if (footerElement) {
    footerTitle = (footerElement as any).props.title;
    footerDescription = (footerElement as any).props.description;

    // Extract actions from footer children
    React.Children.forEach((footerElement as any).props.children, (child: any) => {
      if (React.isValidElement(child) && child.type === ModalFooterActions) {
        footerActionsContent = (child as any).props.children;
      }
    });
  }

  useEffect(() => {
    if (open) {
      previousActiveElement.current = document.activeElement as HTMLElement;

      if (autofocus && modalRef.current) {
        const firstFocusable = modalRef.current.querySelector<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        firstFocusable?.focus();
      }

      // Lock body scroll
      document.body.style.overflow = 'hidden';
    } else {
      // Restore focus
      previousActiveElement.current?.focus();
      // Unlock body scroll
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [open, autofocus]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (closeOnEscape && e.key === 'Escape') {
        onClose();
      }
    };

    if (open) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [open, closeOnEscape, onClose]);

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (closeOnClickOutside && e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleActionClick = async (action: {
    onClick: () => void | Promise<void>;
    close?: boolean;
  }) => {
    await action.onClick();
    if (action.close !== false) {
      onClose();
    }
  };

  if (!open) return null;

  const hasContent = bodyContent.length > 0;
  const hasFooter =
    !!footer ||
    !!footerActionsContent ||
    !!submitAction ||
    !!cancelAction ||
    footerActions.length > 0;
  const hasHeader = !!headerTitle || !!headerDescription || !!headerIcon;

  const modal = (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby={headerTitle ? 'modal-heading' : undefined}
      aria-describedby={headerDescription ? 'modal-description' : undefined}
      className={`
        fixed inset-0 z-50
        ${slideOver ? 'slide-over' : ''}
        ${width === 'screen' ? 'width-screen' : ''}
        ${className}
      `}
    >
      {/* Overlay */}
      <div
        className="fixed inset-0 z-40 bg-gray-950/50 dark:bg-gray-950/75 transition-opacity duration-300"
        aria-hidden="true"
      />

      {/* Window Container */}
      <div
        onClick={handleOverlayClick}
        className={`
          fixed inset-0 z-40 grid min-h-full grid-rows-[1fr_auto_1fr] justify-items-center
          sm:grid-rows-[1fr_auto_3fr]
          ${!slideOver && width !== 'screen' ? 'overflow-y-auto p-4' : ''}
          ${closeOnClickOutside ? 'cursor-pointer' : ''}
        `}
      >
        {/* Modal Window */}
        <div
          ref={modalRef}
          className={`
            pointer-events-auto relative row-start-2 flex w-full cursor-default flex-col
            bg-white shadow-xl ring-1 ring-gray-950/5
            dark:bg-gray-900 dark:ring-white/10
            ${!slideOver && width !== 'screen' ? 'mx-auto rounded-xl' : ''}
            ${slideOver ? 'h-dvh ms-auto overflow-y-auto' : ''}
            ${width !== 'screen' ? widthClasses[width] : 'fixed inset-0'}
            ${hasContent ? 'modal-has-content' : ''}
            ${hasFooter ? 'modal-has-footer' : ''}
            ${headerIcon ? 'modal-has-icon' : ''}
            ${alignment === 'center' ? 'align-center' : alignment === 'start' ? 'align-start' : ''}
          `}
          role="dialog"
          aria-modal="true"
        >
          {/* Header */}
          {hasHeader && (
            <div
              className={`
                relative flex gap-x-5 px-6 pt-6
                ${hasContent || hasFooter ? 'pb-6 border-b border-gray-950/5 dark:border-white/10' : ''}
              `}
            >
              {/* Close button */}
              {showCloseButton && (
                <button
                  type="button"
                  onClick={onClose}
                  tabIndex={-1}
                  className="absolute top-1/2 -translate-y-1/2 end-6 text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              )}

              {/* Icon */}
              {headerIcon && (
                <div className="flex-shrink-0 self-center">
                  <div
                    className={`
                      rounded-full p-2 -my-2 -ms-2
                      ${iconColorClasses[headerIconColor]}
                    `}
                  >
                    <div className={`w-6 h-6 ${iconTextColorClasses[headerIconColor]}`}>
                      {headerIcon}
                    </div>
                  </div>
                </div>
              )}

              {/* Heading & Description */}
              <div className="flex-1 min-w-0 me-6">
                {headerTitle && (
                  <h2
                    id="modal-heading"
                    className="text-base font-semibold leading-6 text-gray-950 dark:text-white"
                  >
                    {headerTitle}
                  </h2>
                )}
                {headerDescription && (
                  <p
                    id="modal-description"
                    className="mt-2 text-sm text-gray-500 dark:text-gray-400"
                  >
                    {headerDescription}
                  </p>
                )}
              </div>
            </div>
          )}

          {/* Content */}
          {hasContent && <div className="flex flex-col gap-y-4 py-6 px-6">{bodyContent}</div>}

          {/* Footer */}
          {hasFooter && (
            <div className="w-full border-t border-gray-950/5 dark:border-white/10 px-6 pb-6 pt-6">
              {footer ||
                (footerActionsContent ? (
                  <div className="flex items-center justify-between gap-x-4">
                    <div className="grid gap-y-1 flex-1">
                      {footerTitle && (
                        <h3 className="text-base font-semibold leading-6 text-gray-950 dark:text-white">
                          {footerTitle}
                        </h3>
                      )}
                      {footerDescription && (
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {footerDescription}
                        </p>
                      )}
                    </div>
                    <div className="flex-shrink-0">
                      <div
                        className={`
                          flex gap-3 flex-wrap items-center
                          ${footerActionsAlignment === 'center' ? 'justify-center' : footerActionsAlignment === 'end' ? 'justify-end' : 'justify-start'}
                        `}
                      >
                        {footerActionsContent}
                      </div>
                    </div>
                  </div>
                ) : (
                  <div
                    className={`
                      flex gap-3 flex-wrap items-center
                      ${footerActionsAlignment === 'center' ? 'justify-center' : footerActionsAlignment === 'end' ? 'justify-end' : 'justify-start'}
                    `}
                  >
                    {submitAction && (
                      <Button
                        type="button"
                        onClick={() => handleActionClick(submitAction)}
                        disabled={submitAction.disabled}
                        size="md"
                        color={submitAction.color === 'danger' ? 'danger' : 'primary'}
                        outlined={false}
                      >
                        {submitAction.label}
                      </Button>
                    )}
                    {footerActions.map((action, index) => (
                      <Button
                        key={index}
                        type="button"
                        onClick={() => handleActionClick(action)}
                        disabled={action.disabled}
                        size="md"
                        color={
                          action.color === 'danger'
                            ? 'danger'
                            : action.color === 'primary'
                              ? 'primary'
                              : 'gray'
                        }
                        outlined={!action.color || action.color === 'secondary'}
                      >
                        {action.label}
                      </Button>
                    ))}
                    {cancelAction && (
                      <Button
                        type="button"
                        onClick={() => handleActionClick(cancelAction)}
                        disabled={cancelAction.disabled}
                        size="md"
                        color={
                          cancelAction.color === 'danger'
                            ? 'danger'
                            : cancelAction.color === 'primary'
                              ? 'primary'
                              : 'gray'
                        }
                        outlined={!cancelAction.color || cancelAction.color === 'secondary'}
                      >
                        {cancelAction.label}
                      </Button>
                    )}
                  </div>
                ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return createPortal(modal, document.body);
};

ModalComponent.displayName = 'Modal';

// Compound component with subcomponents
export const Modal = Object.assign(ModalComponent, {
  Header: ModalHeader,
  Footer: ModalFooter,
});
