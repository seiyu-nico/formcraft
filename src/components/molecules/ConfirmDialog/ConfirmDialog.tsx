import React from 'react';
import { Modal } from '../Modal';
import { IconColor } from '../Modal/Modal.types';

export interface ConfirmDialogProps {
  /** Whether the dialog is open */
  open: boolean;

  /** Callback when dialog close is requested */
  onClose: () => void;

  /** Dialog heading */
  heading: string;

  /** Dialog description */
  description?: string;

  /** Confirmation button label */
  confirmLabel?: string;

  /** Cancel button label */
  cancelLabel?: string;

  /** Confirmation action */
  onConfirm: () => void | Promise<void>;

  /** Cancel action */
  onCancel?: () => void;

  /** Variant */
  variant?: 'default' | 'danger';

  /** Whether confirmation button is disabled */
  confirmDisabled?: boolean;
}

export const ConfirmDialog: React.FC<ConfirmDialogProps> = ({
  open,
  onClose,
  heading,
  description,
  confirmLabel = 'Confirm',
  cancelLabel = 'Cancel',
  onConfirm,
  onCancel,
  variant = 'default',
  confirmDisabled = false,
}) => {
  const handleConfirm = async () => {
    await onConfirm();
    onClose();
  };

  const handleCancel = () => {
    onCancel?.();
    onClose();
  };

  const iconColor: IconColor = variant === 'danger' ? 'danger' : 'primary';
  const confirmColor = variant === 'danger' ? 'danger' : 'primary';

  const icon =
    variant === 'danger' ? (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
        />
      </svg>
    ) : (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    );

  return (
    <Modal
      open={open}
      onClose={onClose}
      heading={heading}
      description={description}
      icon={icon}
      iconColor={iconColor}
      width="md"
      submitAction={{
        label: confirmLabel,
        onClick: handleConfirm,
        color: confirmColor,
        disabled: confirmDisabled,
      }}
      cancelAction={{
        label: cancelLabel,
        onClick: handleCancel,
      }}
      closeOnClickOutside={false}
      closeOnEscape={false}
    />
  );
};

ConfirmDialog.displayName = 'ConfirmDialog';
