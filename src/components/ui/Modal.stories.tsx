import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Modal } from './Modal';

const meta = {
  title: 'Components/UI/Modal',
  component: Modal,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <button
          onClick={() => setOpen(true)}
          className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700"
        >
          Open Modal
        </button>
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          heading="Modal Title"
          description="This is a basic modal dialog"
        >
          <p>Modal content goes here.</p>
        </Modal>
      </>
    );
  },
};

export const WithIcon: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <button
          onClick={() => setOpen(true)}
          className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700"
        >
          Open Modal with Icon
        </button>
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          heading="Success"
          description="Your action was successful"
          icon={
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          }
          iconColor="success"
        >
          <p>Your changes have been saved successfully.</p>
        </Modal>
      </>
    );
  },
};

export const WithActions: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <button
          onClick={() => setOpen(true)}
          className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700"
        >
          Open Modal with Actions
        </button>
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          heading="Confirm Action"
          description="Are you sure you want to proceed?"
          submitAction={{
            label: 'Confirm',
            onClick: () => console.log('Confirmed'),
          }}
          cancelAction={{
            label: 'Cancel',
            onClick: () => console.log('Cancelled'),
          }}
        >
          <p>This action cannot be undone.</p>
        </Modal>
      </>
    );
  },
};

export const DangerModal: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <button
          onClick={() => setOpen(true)}
          className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
        >
          Delete Item
        </button>
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          heading="Delete Item"
          description="This action cannot be undone"
          icon={
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          }
          iconColor="danger"
          submitAction={{
            label: 'Delete',
            onClick: () => console.log('Deleted'),
            color: 'danger',
          }}
          cancelAction={{
            label: 'Cancel',
            onClick: () => console.log('Cancelled'),
          }}
        >
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Are you sure you want to delete this item? This action cannot be undone.
          </p>
        </Modal>
      </>
    );
  },
};

export const LargeModal: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <button
          onClick={() => setOpen(true)}
          className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700"
        >
          Open Large Modal
        </button>
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          heading="Large Modal"
          description="This modal has a larger width"
          width="4xl"
        >
          <p>This is a large modal with more content space.</p>
          <p className="mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </p>
        </Modal>
      </>
    );
  },
};

export const StickyHeaderFooter: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <button
          onClick={() => setOpen(true)}
          className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700"
        >
          Open Modal with Sticky Header/Footer
        </button>
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          heading="Long Content Modal"
          description="With sticky header and footer"
          stickyHeader
          stickyFooter
          submitAction={{
            label: 'Submit',
            onClick: () => console.log('Submitted'),
          }}
          cancelAction={{
            label: 'Cancel',
            onClick: () => console.log('Cancelled'),
          }}
        >
          <div className="space-y-4">
            {Array.from({ length: 20 }, (_, i) => (
              <p key={i}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Paragraph {i + 1}.
              </p>
            ))}
          </div>
        </Modal>
      </>
    );
  },
};

export const WithFooterActions: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <button
          onClick={() => setOpen(true)}
          className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700"
        >
          Open Modal with Footer Actions
        </button>
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          heading="Multiple Actions"
          description="Modal with extra footer actions"
          footerActions={[
            {
              label: 'Action 1',
              onClick: () => console.log('Action 1'),
              color: 'secondary',
            },
            {
              label: 'Action 2',
              onClick: () => console.log('Action 2'),
              color: 'secondary',
            },
          ]}
          submitAction={{
            label: 'Submit',
            onClick: () => console.log('Submitted'),
          }}
          cancelAction={{
            label: 'Cancel',
            onClick: () => console.log('Cancelled'),
          }}
        >
          <p>This modal has multiple footer actions.</p>
        </Modal>
      </>
    );
  },
};

export const NoCloseOnClickOutside: Story = {
  render: () => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <button
          onClick={() => setOpen(true)}
          className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700"
        >
          Open Modal (No Click Outside)
        </button>
        <Modal
          open={open}
          onClose={() => setOpen(false)}
          heading="Important Modal"
          description="This modal cannot be closed by clicking outside"
          closeOnClickOutside={false}
          closeOnEscape={false}
          submitAction={{
            label: 'OK',
            onClick: () => console.log('OK'),
          }}
        >
          <p>You must click a button to close this modal.</p>
        </Modal>
      </>
    );
  },
};
