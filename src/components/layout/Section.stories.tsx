import type { Meta, StoryObj } from '@storybook/react-vite';
import { Section } from './Section';
import { Grid } from './Grid';
import { TextInput } from '../fields/TextInput';

const meta: Meta<typeof Section> = {
  title: 'Components/Layout/Section',
  component: Section,
  tags: ['autodocs'],
  argTypes: {
    iconColor: {
      control: 'select',
      options: ['gray', 'primary', 'danger', 'success', 'warning', 'info'],
    },
    iconSize: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    collapsible: { control: 'boolean' },
    collapsed: { control: 'boolean' },
    aside: { control: 'boolean' },
    compact: { control: 'boolean' },
    persistCollapsed: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof Section>;

export const Default: Story = {
  args: {
    heading: 'User Information',
    children: (
      <div className="space-y-4">
        <p className="text-gray-600 dark:text-gray-300">
          This is the section content. You can put any components here.
        </p>
      </div>
    ),
  },
};

export const WithDescription: Story = {
  args: {
    heading: 'Personal Details',
    description: 'Update your personal information and contact details.',
    children: (
      <div className="space-y-4">
        <p className="text-gray-600 dark:text-gray-300">Section content goes here.</p>
      </div>
    ),
  },
};

export const WithIcon: Story = {
  args: {
    heading: 'User Profile',
    description: 'Manage your profile settings',
    icon: (
      <svg className="h-full w-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
        />
      </svg>
    ),
    iconColor: 'primary',
    children: (
      <div className="space-y-4">
        <p className="text-gray-600 dark:text-gray-300">Profile information section.</p>
      </div>
    ),
  },
};

export const Collapsible: Story = {
  args: {
    heading: 'Advanced Settings',
    description: 'Configure advanced options (click to expand/collapse)',
    collapsible: true,
    children: (
      <div className="space-y-4">
        <p className="text-gray-600 dark:text-gray-300">
          These settings are collapsible. Click the header to toggle.
        </p>
      </div>
    ),
  },
};

export const CollapsedByDefault: Story = {
  args: {
    heading: 'Optional Information',
    description: 'Additional optional fields',
    collapsible: true,
    collapsed: true,
    children: (
      <div className="space-y-4">
        <p className="text-gray-600 dark:text-gray-300">
          This section is collapsed by default.
        </p>
      </div>
    ),
  },
};

export const Compact: Story = {
  args: {
    heading: 'Compact Section',
    description: 'A more compact layout with reduced padding',
    compact: true,
    children: (
      <div className="space-y-2">
        <p className="text-gray-600 dark:text-gray-300">This section uses compact spacing.</p>
      </div>
    ),
  },
};

export const Aside: Story = {
  args: {
    heading: 'Profile Information',
    description: 'Update your account profile information and email address.',
    aside: true,
    children: (
      <div className="space-y-4">
        <p className="text-gray-600 dark:text-gray-300">
          On large screens, the heading and description appear on the left,
          while content appears on the right.
        </p>
      </div>
    ),
  },
};

export const WithForm: Story = {
  args: {
    heading: 'Contact Information',
    description: 'Update your contact details',
    icon: (
      <svg className="h-full w-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
    iconColor: 'info',
    children: (
      <div className="space-y-4">
        <TextInput name="email" label="Email Address" type="email" placeholder="you@example.com" />
        <TextInput name="phone" label="Phone Number" type="tel" placeholder="+1 (555) 123-4567" />
      </div>
    ),
  },
};

export const WithGrid: Story = {
  args: {
    heading: 'Personal Information',
    description: 'Enter your personal details',
    children: (
      <Grid columns={{ default: 1, md: 2 }}>
        <TextInput name="firstName" label="First Name" placeholder="John" />
        <TextInput name="lastName" label="Last Name" placeholder="Doe" />
        <TextInput name="email" label="Email" type="email" placeholder="john@example.com" />
        <TextInput name="phone" label="Phone" type="tel" placeholder="+1 (555) 123-4567" />
      </Grid>
    ),
  },
};

export const DangerSection: Story = {
  args: {
    heading: 'Danger Zone',
    description: 'Irreversible and destructive actions',
    icon: (
      <svg className="h-full w-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
        />
      </svg>
    ),
    iconColor: 'danger',
    children: (
      <div className="space-y-4">
        <p className="text-sm text-gray-600 dark:text-gray-300">
          Once you delete your account, there is no going back. Please be certain.
        </p>
      </div>
    ),
  },
};

export const SuccessSection: Story = {
  args: {
    heading: 'Setup Complete',
    description: 'Your account has been successfully configured',
    icon: (
      <svg className="h-full w-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
    ),
    iconColor: 'success',
    children: (
      <div className="space-y-4">
        <p className="text-sm text-gray-600 dark:text-gray-300">
          Everything is ready to go. You can start using your account now.
        </p>
      </div>
    ),
  },
};

export const NestedSections: Story = {
  render: () => (
    <div className="space-y-6">
      <Section heading="Account Settings" description="Manage your account preferences">
        <div className="space-y-4">
          <Section heading="Profile" compact>
            <Grid columns={{ default: 1, md: 2 }}>
              <TextInput name="username" label="Username" placeholder="johndoe" />
              <TextInput name="displayName" label="Display Name" placeholder="John Doe" />
            </Grid>
          </Section>

          <Section heading="Security" compact collapsible>
            <div className="space-y-4">
              <TextInput
                name="currentPassword"
                label="Current Password"
                type="password"
                placeholder="••••••••"
              />
              <TextInput
                name="newPassword"
                label="New Password"
                type="password"
                placeholder="••••••••"
              />
            </div>
          </Section>
        </div>
      </Section>
    </div>
  ),
};
