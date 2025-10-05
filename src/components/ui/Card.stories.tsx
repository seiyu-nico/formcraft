import type { Meta, StoryObj } from '@storybook/react';
import { Card } from './Card';
import { Button } from './Button';

const meta = {
  title: 'Components/UI/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => (
    <div className="w-[600px]">
      <Card {...args}>
        <Card.Header title="Card Title" subtitle="This is a subtitle" />
        <p className="text-sm text-gray-600 dark:text-gray-400">
          This is the body of the card. It can contain any content you like.
        </p>
      </Card>
    </div>
  ),
};

export const WithHeaderAction: Story = {
  render: (args) => (
    <div className="w-[600px]">
      <Card {...args}>
        <Card.Header title="Project Settings" subtitle="Manage your project configuration">
          <Card.Header.Actions>
            <Button size="sm" outlined color="gray">
              Edit
            </Button>
          </Card.Header.Actions>
        </Card.Header>
        <div className="space-y-3">
          <div>
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
              Project Name
            </label>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">My Awesome Project</p>
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Status</label>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">Active</p>
          </div>
        </div>
      </Card>
    </div>
  ),
};

export const WithFooter: Story = {
  render: (args) => (
    <div className="w-[600px]">
      <Card {...args}>
        <Card.Header title="Delete Account" subtitle="This action cannot be undone" />
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Are you sure you want to delete your account? This will permanently remove all your data.
        </p>
        <Card.Footer>
          <Card.Footer.Actions>
            <Button color="gray" outlined size="sm">
              Cancel
            </Button>
            <Button color="danger" size="sm">
              Delete
            </Button>
          </Card.Footer.Actions>
        </Card.Footer>
      </Card>
    </div>
  ),
};

export const WithImage: Story = {
  render: (args) => (
    <div className="w-[400px]">
      <Card {...args}>
        <img
          src="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800&h=400&fit=crop"
          alt="Mountain landscape"
          className="w-full h-48 object-cover rounded-lg -mx-6 -mt-4 mb-4"
        />
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
          Beautiful Mountain View
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
          Explore the stunning mountain landscapes with breathtaking views.
        </p>
        <Button size="sm" color="primary">
          Learn More
        </Button>
      </Card>
    </div>
  ),
};

export const WithCustomHeader: Story = {
  render: (args) => (
    <div className="w-[600px]">
      <Card {...args}>
        <Card.Header>
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-100 dark:bg-primary-500/20">
              <svg
                className="h-6 w-6 text-primary-600 dark:text-primary-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <div>
              <h3 className="text-base font-semibold text-gray-900 dark:text-white">
                Lightning Fast
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Performance optimized for speed
              </p>
            </div>
          </div>
        </Card.Header>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Our platform is built with performance in mind, ensuring your applications run at
          lightning speed.
        </p>
      </Card>
    </div>
  ),
};

export const NotificationCard: Story = {
  render: (args) => (
    <div className="w-[500px]">
      <Card {...args}>
        <Card.Header title="New message from Sarah" subtitle="2 minutes ago">
          <Card.Header.Actions>
            <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
              </svg>
            </button>
          </Card.Header.Actions>
        </Card.Header>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Hey! I wanted to follow up on our conversation from yesterday. Do you have time for a
          quick call this afternoon?
        </p>
        <Card.Footer>
          <Card.Footer.Actions>
            <Button size="sm" color="primary">
              Reply
            </Button>
          </Card.Footer.Actions>
        </Card.Footer>
      </Card>
    </div>
  ),
};

export const ComplexLayout: Story = {
  render: (args) => (
    <div className="w-[700px]">
      <Card {...args}>
        <Card.Header title="Team Dashboard" subtitle="Overview of your team's performance">
          <Card.Header.Actions>
            <div className="flex gap-2">
              <Button size="sm" outlined color="gray">
                Export
              </Button>
              <Button size="sm" color="primary">
                Add Member
              </Button>
            </div>
          </Card.Header.Actions>
        </Card.Header>
        <div className="space-y-4">
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center p-3 bg-gray-50 dark:bg-white/5 rounded-lg">
              <p className="text-2xl font-bold text-gray-900 dark:text-white">24</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">Active Projects</p>
            </div>
            <div className="text-center p-3 bg-gray-50 dark:bg-white/5 rounded-lg">
              <p className="text-2xl font-bold text-gray-900 dark:text-white">18</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">Team Members</p>
            </div>
            <div className="text-center p-3 bg-gray-50 dark:bg-white/5 rounded-lg">
              <p className="text-2xl font-bold text-gray-900 dark:text-white">92%</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">Completion Rate</p>
            </div>
          </div>
        </div>
        <Card.Footer subtitle="Last updated: 5 min ago">
          <Card.Footer.Actions>
            <Button size="sm" color="gray" outlined>
              View Details
            </Button>
          </Card.Footer.Actions>
        </Card.Footer>
      </Card>
    </div>
  ),
};
