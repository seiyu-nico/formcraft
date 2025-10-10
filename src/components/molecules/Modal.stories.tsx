import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Modal } from './Modal';
import { Button } from '../atoms/Button';

const meta = {
  title: 'Molecules/Modal',
  component: Modal,
  parameters: {
    layout: 'centered',
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
        <Modal open={open} onClose={() => setOpen(false)}>
          <Modal.Header title="Modal Title" description="This is a basic modal dialog" />
          <p>Modal content goes here.</p>
        </Modal>
      </>
    );
  },
};

export const WithIcon: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <button
          onClick={() => setOpen(true)}
          className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700"
        >
          Open Modal with Icon
        </button>
        <Modal open={open} onClose={() => setOpen(false)}>
          <Modal.Header
            title="Success"
            description="Your action was successful"
            icon={
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            }
            iconColor="success"
          />
          <p>Your changes have been saved successfully.</p>
        </Modal>
      </>
    );
  },
};

export const WithActions: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <button
          onClick={() => setOpen(true)}
          className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700"
        >
          Open Modal with Actions
        </button>
        <Modal open={open} onClose={() => setOpen(false)}>
          <Modal.Header title="Confirm Action" description="Are you sure you want to proceed?" />
          <p>This action cannot be undone.</p>
          <Modal.Footer>
            <Modal.Footer.Actions>
              <Button color="gray" outlined onClick={() => setOpen(false)}>
                Cancel
              </Button>
              <Button color="primary" onClick={() => console.log('Confirmed')}>
                Confirm
              </Button>
            </Modal.Footer.Actions>
          </Modal.Footer>
        </Modal>
      </>
    );
  },
};

export const DangerModal: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <button
          onClick={() => setOpen(true)}
          className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
        >
          Delete Item
        </button>
        <Modal open={open} onClose={() => setOpen(false)}>
          <Modal.Header
            title="Delete Item"
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
          />
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Are you sure you want to delete this item? This action cannot be undone.
          </p>
          <Modal.Footer>
            <Modal.Footer.Actions>
              <Button color="gray" outlined onClick={() => setOpen(false)}>
                Cancel
              </Button>
              <Button color="danger" onClick={() => console.log('Deleted')}>
                Delete
              </Button>
            </Modal.Footer.Actions>
          </Modal.Footer>
        </Modal>
      </>
    );
  },
};

export const LargeModal: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <button
          onClick={() => setOpen(true)}
          className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700"
        >
          Open Large Modal
        </button>
        <Modal open={open} onClose={() => setOpen(false)} width="4xl">
          <Modal.Header title="Large Modal" description="This modal has a larger width" />
          <p>This is a large modal with more content space.</p>
          <p className="mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
        </Modal>
      </>
    );
  },
};

export const WithFooterActions: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <button
          onClick={() => setOpen(true)}
          className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700"
        >
          Open Modal with Footer Actions
        </button>
        <Modal open={open} onClose={() => setOpen(false)}>
          <Modal.Header title="Multiple Actions" description="Modal with extra footer actions" />
          <p>This modal has multiple footer actions.</p>
          <Modal.Footer>
            <Modal.Footer.Actions>
              <Button color="gray" outlined onClick={() => console.log('Action 1')}>
                Action 1
              </Button>
              <Button color="gray" outlined onClick={() => console.log('Action 2')}>
                Action 2
              </Button>
              <Button color="gray" outlined onClick={() => setOpen(false)}>
                Cancel
              </Button>
              <Button color="primary" onClick={() => console.log('Submitted')}>
                Submit
              </Button>
            </Modal.Footer.Actions>
          </Modal.Footer>
        </Modal>
      </>
    );
  },
};

export const NoCloseOnClickOutside: Story = {
  render: (args) => {
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
          closeOnClickOutside={false}
          closeOnEscape={false}
        >
          <Modal.Header
            title="Important Modal"
            description="This modal cannot be closed by clicking outside"
          />
          <p>You must click a button to close this modal.</p>
          <Modal.Footer>
            <Modal.Footer.Actions>
              <Button color="primary" onClick={() => setOpen(false)}>
                OK
              </Button>
            </Modal.Footer.Actions>
          </Modal.Footer>
        </Modal>
      </>
    );
  },
};

export const WithCompoundComponents: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <button
          onClick={() => setOpen(true)}
          className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700"
        >
          Open Modal (Compound Components)
        </button>
        <Modal open={open} onClose={() => setOpen(false)}>
          <Modal.Header
            title="Confirm Action"
            description="Are you sure you want to proceed?"
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
            iconColor="warning"
          />
          <p>This action cannot be undone. All your data will be permanently deleted.</p>
          <Modal.Footer>
            <Modal.Footer.Actions>
              <Button color="gray" outlined onClick={() => setOpen(false)}>
                Cancel
              </Button>
              <Button color="danger" onClick={() => console.log('Confirmed')}>
                Delete
              </Button>
            </Modal.Footer.Actions>
          </Modal.Footer>
        </Modal>
      </>
    );
  },
};

export const WithCompoundComponentsAndFooterTitle: Story = {
  render: (args) => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <button
          onClick={() => setOpen(true)}
          className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700"
        >
          Open Modal (With Footer Title)
        </button>
        <Modal open={open} onClose={() => setOpen(false)} width="lg">
          <Modal.Header title="Settings" description="Manage your account settings" />
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Email
              </label>
              <input
                type="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg dark:border-gray-700 dark:bg-gray-800"
                defaultValue="user@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Username
              </label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg dark:border-gray-700 dark:bg-gray-800"
                defaultValue="username"
              />
            </div>
          </div>
          <Modal.Footer title="Save Changes?" description="Last updated: 2 hours ago">
            <Modal.Footer.Actions>
              <Button color="gray" outlined onClick={() => setOpen(false)}>
                Cancel
              </Button>
              <Button color="primary" onClick={() => console.log('Saved')}>
                Save Changes
              </Button>
            </Modal.Footer.Actions>
          </Modal.Footer>
        </Modal>
      </>
    );
  },
};
