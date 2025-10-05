import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { ModalProps, ModalWidth } from './Modal.types';

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

const actionColorClasses = {
  primary:
    'bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500 dark:bg-primary-500 dark:hover:bg-primary-400',
  secondary:
    'bg-white text-gray-700 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 dark:bg-white/5 dark:text-gray-300 dark:ring-white/10 dark:hover:bg-white/10',
  danger:
    'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500 dark:bg-red-500 dark:hover:bg-red-400',
};

export const Modal: React.FC<ModalProps> = ({
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
  stickyHeader = false,
  stickyFooter = false,
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

  const handleActionClick = async (action: { onClick: () => void | Promise<void>; close?: boolean }) => {
    await action.onClick();
    if (action.close !== false) {
      onClose();
    }
  };

  if (!open) return null;

  const hasContent = !!children;
  const hasFooter = !!footer || !!submitAction || !!cancelAction || footerActions.length > 0;
  const hasHeader = !!heading || !!description || !!icon;

  const modal = (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby={heading ? 'modal-heading' : undefined}
      aria-describedby={description ? 'modal-description' : undefined}
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
            ${icon ? 'modal-has-icon' : ''}
            ${stickyHeader ? 'modal-has-sticky-header' : ''}
            ${alignment === 'center' ? 'align-center' : alignment === 'start' ? 'align-start' : ''}
          `}
          role="dialog"
          aria-modal="true"
        >
          {/* Header */}
          {hasHeader && (
            <div
              className={`
                flex px-6 pt-6
                ${alignment === 'center' ? 'flex-col text-center' : 'gap-x-5'}
                ${icon && heading && !description && alignment === 'start' ? 'items-center' : ''}
                ${stickyHeader ? 'sticky top-0 z-10 border-b border-gray-200 bg-white pb-6 dark:border-white/10 dark:bg-gray-900' : ''}
                ${stickyHeader ? (slideOver ? 'rounded-none' : 'rounded-t-xl') : ''}
              `}
            >
              {/* Close button */}
              {showCloseButton && (
                <button
                  type="button"
                  onClick={onClose}
                  tabIndex={-1}
                  className={`
                    absolute text-gray-400 hover:text-gray-500 dark:hover:text-gray-300
                    ${slideOver ? 'end-6 top-6' : 'end-4 top-4'}
                  `}
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}

              {/* Icon */}
              {icon && (
                <div className={alignment === 'center' ? 'mb-5 flex items-center justify-center' : ''}>
                  <div
                    className={`
                      rounded-full
                      ${iconColorClasses[iconColor]}
                      ${alignment === 'center' ? 'p-3' : 'p-2'}
                      ${slideOver && alignment !== 'center' ? '-my-2 -ms-2' : ''}
                    `}
                  >
                    <div className={`w-6 h-6 ${iconTextColorClasses[iconColor]}`}>
                      {icon}
                    </div>
                  </div>
                </div>
              )}

              {/* Heading & Description */}
              <div className={showCloseButton && !icon ? 'me-6' : ''}>
                {heading && (
                  <h2
                    id="modal-heading"
                    className="text-base font-semibold leading-6 text-gray-950 dark:text-white"
                  >
                    {heading}
                  </h2>
                )}
                {description && (
                  <p id="modal-description" className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                    {description}
                  </p>
                )}
              </div>
            </div>
          )}

          {/* Content */}
          {hasContent && (
            <div
              className={`
                flex flex-col gap-y-4 py-6
                ${icon && alignment === 'start' && !stickyHeader ? 'ps-[5.25rem] pe-6' : 'px-6'}
              `}
            >
              {children}
            </div>
          )}

          {/* Footer */}
          {hasFooter && (
            <div
              className={`
                w-full
                ${stickyFooter ? 'sticky bottom-0 border-t border-gray-200 bg-white py-5 dark:border-white/10 dark:bg-gray-900' : 'pb-6'}
                ${stickyFooter && !slideOver && width !== 'screen' ? 'rounded-b-xl' : ''}
                ${!hasContent && !stickyFooter ? 'mt-6' : ''}
                ${alignment === 'center' ? 'align-center px-6' : footerActionsAlignment === 'center' ? 'align-center px-6' : footerActionsAlignment === 'end' ? 'align-end' : 'align-start'}
                ${icon && alignment === 'start' && !stickyHeader && footerActionsAlignment !== 'center' ? 'ps-[5.25rem] pe-6' : !stickyFooter && !icon ? 'px-6' : ''}
              `}
            >
              {footer || (
                <div
                  className={`
                    gap-3
                    ${footerActionsAlignment === 'center' ? 'flex flex-col-reverse' : footerActionsAlignment === 'end' ? 'flex flex-row-reverse flex-wrap items-center' : 'flex flex-wrap items-center'}
                  `}
                >
                  {submitAction && (
                    <button
                      type="button"
                      onClick={() => handleActionClick(submitAction)}
                      disabled={submitAction.disabled}
                      className={`
                        px-4 py-2 text-sm font-medium rounded-lg
                        focus:outline-none focus:ring-2 focus:ring-offset-2
                        disabled:opacity-50 disabled:cursor-not-allowed
                        ${actionColorClasses[submitAction.color || 'primary']}
                      `}
                    >
                      {submitAction.label}
                    </button>
                  )}
                  {footerActions.map((action, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => handleActionClick(action)}
                      disabled={action.disabled}
                      className={`
                        px-4 py-2 text-sm font-medium rounded-lg
                        focus:outline-none focus:ring-2 focus:ring-offset-2
                        disabled:opacity-50 disabled:cursor-not-allowed
                        ${actionColorClasses[action.color || 'secondary']}
                      `}
                    >
                      {action.label}
                    </button>
                  ))}
                  {cancelAction && (
                    <button
                      type="button"
                      onClick={() => handleActionClick(cancelAction)}
                      disabled={cancelAction.disabled}
                      className={`
                        px-4 py-2 text-sm font-medium rounded-lg
                        focus:outline-none focus:ring-2 focus:ring-offset-2
                        disabled:opacity-50 disabled:cursor-not-allowed
                        ${actionColorClasses[cancelAction.color || 'secondary']}
                      `}
                    >
                      {cancelAction.label}
                    </button>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return createPortal(modal, document.body);
};

Modal.displayName = 'Modal';
