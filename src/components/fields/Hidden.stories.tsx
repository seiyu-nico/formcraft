import type { Meta, StoryObj } from '@storybook/react';
import { Hidden } from './Hidden';

const meta = {
  title: 'Components/Fields/Hidden',
  component: Hidden,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Hidden>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: 'user_id',
    value: '12345',
  },
  render: (args) => (
    <div>
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
        Hidden field (not visible in the UI, but check the DOM)
      </p>
      <Hidden {...args} />
      <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
        Field name: <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">{args.name}</code>
        <br />
        Value: <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">{args.value}</code>
      </p>
    </div>
  ),
};

export const MultipleHiddenFields: Story = {
  render: () => (
    <div className="space-y-2">
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
        Multiple hidden fields (check the DOM)
      </p>
      <Hidden name="user_id" value="12345" />
      <Hidden name="session_token" value="abc-def-ghi" />
      <Hidden name="redirect_url" value="/dashboard" />
      <div className="text-sm text-gray-500 dark:text-gray-500 mt-4 space-y-1">
        <div>
          <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">user_id: 12345</code>
        </div>
        <div>
          <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">session_token: abc-def-ghi</code>
        </div>
        <div>
          <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">redirect_url: /dashboard</code>
        </div>
      </div>
    </div>
  ),
};
