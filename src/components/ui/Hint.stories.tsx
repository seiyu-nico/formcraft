import type { Meta, StoryObj } from '@storybook/react';
import { Hint } from './Hint';
import { Label } from './Label';

const meta = {
  title: 'Components/UI/Hint',
  component: Hint,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
      description: 'Hint text content',
    },
    icon: {
      control: false,
      description: 'Optional icon to display',
    },
    iconTooltip: {
      control: 'text',
      description: 'Optional tooltip text for the icon',
    },
    color: {
      control: 'select',
      options: ['gray', 'primary', 'danger', 'info', 'success', 'warning'],
      description: 'Color variant',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
} satisfies Meta<typeof Hint>;

export default meta;
type Story = StoryObj<typeof meta>;

// Information icon SVG
const InformationIcon = (
  <svg
    className="h-full w-full"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

// Question mark icon SVG
const QuestionIcon = (
  <svg
    className="h-full w-full"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

// Exclamation icon SVG
const ExclamationIcon = (
  <svg
    className="h-full w-full"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
    />
  </svg>
);

export const Default: Story = {
  args: {
    children: 'This is a helpful hint',
  },
};

export const WithIcon: Story = {
  args: {
    children: 'Maximum 255 characters',
    icon: InformationIcon,
  },
};

export const WithIconTooltip: Story = {
  args: {
    children: 'Maximum 255 characters',
    icon: InformationIcon,
    iconTooltip: 'This field has a character limit',
  },
};

export const IconOnly: Story = {
  args: {
    icon: QuestionIcon,
    iconTooltip: 'Need help? Click for more information',
  },
};

export const TextOnly: Story = {
  args: {
    children: 'Enter your full legal name as it appears on official documents',
  },
};

export const PrimaryColor: Story = {
  args: {
    children: 'This is important information',
    icon: InformationIcon,
    color: 'primary',
  },
};

export const DangerColor: Story = {
  args: {
    children: 'This action cannot be undone',
    icon: ExclamationIcon,
    color: 'danger',
  },
};

export const InfoColor: Story = {
  args: {
    children: 'Did you know? You can use keyboard shortcuts',
    icon: InformationIcon,
    color: 'info',
  },
};

export const SuccessColor: Story = {
  args: {
    children: 'Your changes have been saved automatically',
    icon: (
      <svg
        className="h-full w-full"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    color: 'success',
  },
};

export const WarningColor: Story = {
  args: {
    children: 'Please review this field carefully',
    icon: ExclamationIcon,
    color: 'warning',
  },
};

export const InFormLabel: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <div className="flex items-start justify-between gap-x-3">
          <Label htmlFor="name" required>
            Full Name
          </Label>
          <Hint icon={InformationIcon} iconTooltip="Enter your full legal name">
            Required
          </Hint>
        </div>
        <input
          id="name"
          type="text"
          className="mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
          placeholder="John Doe"
        />
      </div>

      <div>
        <div className="flex items-start justify-between gap-x-3">
          <Label htmlFor="email">Email Address</Label>
          <Hint color="info">Optional</Hint>
        </div>
        <input
          id="email"
          type="email"
          className="mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
          placeholder="john@example.com"
        />
      </div>

      <div>
        <div className="flex items-start justify-between gap-x-3">
          <Label htmlFor="password" required>
            Password
          </Label>
          <Hint icon={InformationIcon} iconTooltip="Must be at least 8 characters">
            Min 8 characters
          </Hint>
        </div>
        <input
          id="password"
          type="password"
          className="mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
        />
      </div>

      <div>
        <div className="flex items-start justify-between gap-x-3">
          <Label htmlFor="bio">Biography</Label>
          <Hint color="gray">500 / 1000</Hint>
        </div>
        <textarea
          id="bio"
          rows={4}
          className="mt-2 block w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500 dark:border-gray-700 dark:bg-gray-900 dark:text-white"
          placeholder="Tell us about yourself..."
        />
      </div>
    </div>
  ),
};

export const LongText: Story = {
  args: {
    children:
      'This is a longer hint text that demonstrates how the component handles wrapping when the content exceeds the available width. The text will wrap naturally.',
    icon: InformationIcon,
    iconTooltip: 'Additional information',
  },
};

export const MultipleHints: Story = {
  render: () => (
    <div className="space-y-4">
      <Hint color="gray">Maximum 255 characters</Hint>
      <Hint color="primary" icon={InformationIcon}>
        This is important
      </Hint>
      <Hint color="info" icon={QuestionIcon} iconTooltip="Click for help">
        Need assistance?
      </Hint>
      <Hint color="success">Saved automatically</Hint>
      <Hint color="warning" icon={ExclamationIcon}>
        Review carefully
      </Hint>
      <Hint color="danger" icon={ExclamationIcon}>
        Cannot be undone
      </Hint>
    </div>
  ),
};
