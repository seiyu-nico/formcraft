import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta = {
  title: 'Components/UI/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Button',
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      <Button size="xs">Extra Small</Button>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
      <Button size="xl">Extra Large</Button>
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      <Button color="primary">Primary</Button>
      <Button color="danger">Danger</Button>
      <Button color="gray">Gray</Button>
      <Button color="info">Info</Button>
      <Button color="success">Success</Button>
      <Button color="warning">Warning</Button>
    </div>
  ),
};

export const Outlined: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      <Button color="primary" outlined>
        Primary
      </Button>
      <Button color="danger" outlined>
        Danger
      </Button>
      <Button color="gray" outlined>
        Gray
      </Button>
      <Button color="info" outlined>
        Info
      </Button>
      <Button color="success" outlined>
        Success
      </Button>
      <Button color="warning" outlined>
        Warning
      </Button>
    </div>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      <Button
        icon={
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
        }
      >
        Add Item
      </Button>
      <Button
        color="danger"
        icon={
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
        }
      >
        Delete
      </Button>
      <Button
        color="success"
        iconPosition="after"
        icon={
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        }
      >
        Next
      </Button>
    </div>
  ),
};

export const IconOnly: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      <Button
        size="sm"
        icon={
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
            />
          </svg>
        }
      />
      <Button
        color="danger"
        icon={
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
        }
      />
      <Button
        color="gray"
        outlined
        icon={
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
            />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        }
      />
    </div>
  ),
};

export const WithBadge: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      <Button badge="3">Notifications</Button>
      <Button color="danger" badge="New">
        Updates
      </Button>
      <Button color="success" badge="99+" badgeColor="danger">
        Messages
      </Button>
    </div>
  ),
};

export const Loading: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      <Button loading>Loading</Button>
      <Button color="danger" loading>
        Deleting
      </Button>
      <Button color="success" outlined loading>
        Saving
      </Button>
    </div>
  ),
};

export const Disabled: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      <Button disabled>Disabled</Button>
      <Button color="danger" disabled>
        Disabled
      </Button>
      <Button color="success" outlined disabled>
        Disabled
      </Button>
    </div>
  ),
};

export const LinkButton: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      <Button tag="a" href="https://example.com" target="_blank">
        External Link
      </Button>
      <Button
        tag="a"
        href="#section"
        color="gray"
        outlined
        icon={
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
            />
          </svg>
        }
      >
        Anchor Link
      </Button>
    </div>
  ),
};

export const ComplexExample: Story = {
  render: () => (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center gap-3">
        <Button
          color="primary"
          icon={
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
          }
        >
          New Post
        </Button>
        <Button
          color="gray"
          outlined
          icon={
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
              />
            </svg>
          }
        >
          Filter
        </Button>
        <Button
          color="gray"
          outlined
          badge="12"
          badgeColor="danger"
          icon={
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
          }
        >
          Notifications
        </Button>
      </div>
      <div className="flex flex-wrap items-center gap-3">
        <Button size="sm" color="success">
          Approve
        </Button>
        <Button size="sm" color="danger" outlined>
          Reject
        </Button>
        <Button size="sm" color="gray" outlined>
          Review Later
        </Button>
      </div>
    </div>
  ),
};
