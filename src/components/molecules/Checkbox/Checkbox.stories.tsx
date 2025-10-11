import type { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './Checkbox';

const meta = {
  title: 'Molecules/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: 'default',
    label: 'I agree to the terms and conditions',
  },
};

export const WithHelperText: Story = {
  args: {
    name: 'helper',
    label: 'Subscribe to newsletter',
    helperText: 'Get the latest updates and offers delivered to your inbox.',
  },
};

export const Required: Story = {
  args: {
    name: 'required',
    label: 'I accept the privacy policy',
    required: true,
    helperText: 'You must accept to continue',
  },
};

export const Disabled: Story = {
  args: {
    name: 'disabled',
    label: 'This option is disabled',
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    name: 'disabled-checked',
    label: 'This option is disabled and checked',
    disabled: true,
    defaultValue: true,
  },
};

export const ReadOnly: Story = {
  args: {
    name: 'readonly',
    label: 'This option is read-only',
    readOnly: true,
    defaultValue: true,
  },
};

export const WithValidation: Story = {
  args: {
    name: 'validation',
    label: 'I agree to the terms',
    required: true,
    validate: (value) => {
      if (!value) return 'You must accept the terms to continue';
      return undefined;
    },
  },
};

export const StackedLayout: Story = {
  args: {
    name: 'stacked',
    label: 'Enable notifications',
    inline: false,
    helperText: 'Receive notifications about your account activity',
  },
};

export const InlineLayout: Story = {
  args: {
    name: 'inline',
    label: 'Enable two-factor authentication',
    inline: true,
    helperText: 'Add an extra layer of security to your account',
  },
};

export const WithError: Story = {
  args: {
    name: 'error',
    label: 'I agree to the terms',
    required: true,
    validate: () => 'This field is required',
  },
};

export const Checked: Story = {
  args: {
    name: 'checked',
    label: 'Already checked by default',
    defaultValue: true,
    helperText: 'This checkbox starts in a checked state',
  },
};
