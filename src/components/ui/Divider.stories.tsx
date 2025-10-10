import type { Meta, StoryObj } from '@storybook/react';
import { Divider } from './Divider';

const meta = {
  title: 'Components/UI/Divider',
  component: Divider,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'Orientation of the divider',
    },
    label: {
      control: 'text',
      description: 'Optional text to display in the divider',
    },
    labelPosition: {
      control: 'select',
      options: ['left', 'center', 'right'],
      description: 'Label position when text is provided',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
} satisfies Meta<typeof Divider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const WithLabel: Story = {
  args: {
    label: 'OR',
  },
};

export const WithLabelLeft: Story = {
  args: {
    label: 'Section Title',
    labelPosition: 'left',
  },
};

export const WithLabelRight: Story = {
  args: {
    label: 'End',
    labelPosition: 'right',
  },
};

export const Vertical: Story = {
  render: () => (
    <div className="flex h-32 items-center gap-4">
      <div>Left Content</div>
      <Divider orientation="vertical" />
      <div>Right Content</div>
    </div>
  ),
};

export const InContent: Story = {
  render: () => (
    <div className="space-y-4">
      <p className="text-sm text-gray-700 dark:text-gray-200">
        This is the first paragraph of content. It contains some information that you might find
        useful.
      </p>
      <Divider />
      <p className="text-sm text-gray-700 dark:text-gray-200">
        This is the second paragraph of content, separated by a divider. It provides additional
        context.
      </p>
      <Divider />
      <p className="text-sm text-gray-700 dark:text-gray-200">
        And here is the third paragraph, also separated by a divider for clear visual distinction.
      </p>
    </div>
  ),
};

export const InForm: Story = {
  render: () => (
    <div className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Name</label>
        <input
          type="text"
          className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm dark:border-gray-700 dark:bg-gray-900 dark:text-white"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">Email</label>
        <input
          type="email"
          className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm dark:border-gray-700 dark:bg-gray-900 dark:text-white"
        />
      </div>

      <Divider label="Additional Information" />

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
          Phone
        </label>
        <input
          type="tel"
          className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm dark:border-gray-700 dark:bg-gray-900 dark:text-white"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
          Address
        </label>
        <input
          type="text"
          className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm dark:border-gray-700 dark:bg-gray-900 dark:text-white"
        />
      </div>
    </div>
  ),
};

export const LoginForm: Story = {
  render: () => (
    <div className="mx-auto w-full max-w-sm space-y-4 rounded-xl bg-white p-6 shadow-sm ring-1 ring-gray-950/5 dark:bg-gray-900 dark:ring-white/10">
      <div>
        <h2 className="text-lg font-semibold text-gray-950 dark:text-white">Sign In</h2>
        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
          Enter your credentials to continue
        </p>
      </div>

      <div className="space-y-3">
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
            Email
          </label>
          <input
            type="email"
            className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm dark:border-gray-700 dark:bg-gray-800 dark:text-white"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-200">
            Password
          </label>
          <input
            type="password"
            className="mt-1 block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm dark:border-gray-700 dark:bg-gray-800 dark:text-white"
          />
        </div>

        <button className="w-full rounded-lg bg-primary-600 px-4 py-2 text-sm font-semibold text-white hover:bg-primary-700">
          Sign In
        </button>
      </div>

      <Divider label="OR" />

      <button className="w-full rounded-lg border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-50 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800">
        Continue with Google
      </button>
    </div>
  ),
};

export const VerticalInNavigation: Story = {
  render: () => (
    <nav className="flex items-center gap-4 rounded-lg bg-white px-4 py-3 shadow-sm ring-1 ring-gray-950/5 dark:bg-gray-900 dark:ring-white/10">
      <a
        href="#"
        className="text-sm font-medium text-gray-700 hover:text-gray-950 dark:text-gray-200 dark:hover:text-white"
      >
        Dashboard
      </a>
      <Divider orientation="vertical" className="h-4" />
      <a
        href="#"
        className="text-sm font-medium text-gray-700 hover:text-gray-950 dark:text-gray-200 dark:hover:text-white"
      >
        Projects
      </a>
      <Divider orientation="vertical" className="h-4" />
      <a
        href="#"
        className="text-sm font-medium text-gray-700 hover:text-gray-950 dark:text-gray-200 dark:hover:text-white"
      >
        Team
      </a>
      <Divider orientation="vertical" className="h-4" />
      <a
        href="#"
        className="text-sm font-medium text-gray-700 hover:text-gray-950 dark:text-gray-200 dark:hover:text-white"
      >
        Settings
      </a>
    </nav>
  ),
};

export const SectionHeaders: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <Divider label="Personal Information" labelPosition="left" />
        <div className="mt-4 space-y-3">
          <p className="text-sm text-gray-700 dark:text-gray-200">Name: John Doe</p>
          <p className="text-sm text-gray-700 dark:text-gray-200">Email: john@example.com</p>
          <p className="text-sm text-gray-700 dark:text-gray-200">Phone: +1 234 567 8900</p>
        </div>
      </div>

      <div>
        <Divider label="Company Information" labelPosition="left" />
        <div className="mt-4 space-y-3">
          <p className="text-sm text-gray-700 dark:text-gray-200">Company: Tech Corp</p>
          <p className="text-sm text-gray-700 dark:text-gray-200">Position: Senior Developer</p>
          <p className="text-sm text-gray-700 dark:text-gray-200">Department: Engineering</p>
        </div>
      </div>

      <div>
        <Divider label="Preferences" labelPosition="left" />
        <div className="mt-4 space-y-3">
          <p className="text-sm text-gray-700 dark:text-gray-200">Theme: Dark Mode</p>
          <p className="text-sm text-gray-700 dark:text-gray-200">Language: English</p>
          <p className="text-sm text-gray-700 dark:text-gray-200">Timezone: UTC-8</p>
        </div>
      </div>
    </div>
  ),
};

export const WithSpacing: Story = {
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="mb-2 text-sm font-medium text-gray-950 dark:text-white">Default Spacing</h3>
        <p className="text-sm text-gray-700 dark:text-gray-200">Content above</p>
        <Divider className="my-4" />
        <p className="text-sm text-gray-700 dark:text-gray-200">Content below</p>
      </div>

      <div>
        <h3 className="mb-2 text-sm font-medium text-gray-950 dark:text-white">Large Spacing</h3>
        <p className="text-sm text-gray-700 dark:text-gray-200">Content above</p>
        <Divider className="my-8" />
        <p className="text-sm text-gray-700 dark:text-gray-200">Content below</p>
      </div>

      <div>
        <h3 className="mb-2 text-sm font-medium text-gray-950 dark:text-white">Small Spacing</h3>
        <p className="text-sm text-gray-700 dark:text-gray-200">Content above</p>
        <Divider className="my-2" />
        <p className="text-sm text-gray-700 dark:text-gray-200">Content below</p>
      </div>
    </div>
  ),
};

export const AllLabelPositions: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="mb-3 text-sm font-medium text-gray-950 dark:text-white">Left Position</h3>
        <Divider label="Section" labelPosition="left" />
      </div>

      <div>
        <h3 className="mb-3 text-sm font-medium text-gray-950 dark:text-white">Center Position</h3>
        <Divider label="Section" labelPosition="center" />
      </div>

      <div>
        <h3 className="mb-3 text-sm font-medium text-gray-950 dark:text-white">Right Position</h3>
        <Divider label="Section" labelPosition="right" />
      </div>
    </div>
  ),
};
