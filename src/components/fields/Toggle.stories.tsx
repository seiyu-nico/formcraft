import type { Meta, StoryObj } from '@storybook/react';
import { Toggle } from './Toggle';

const meta = {
  title: 'Components/Fields/Toggle',
  component: Toggle,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Toggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: 'default',
    label: 'Enable notifications',
  },
};

export const WithHelperText: Story = {
  args: {
    name: 'helper',
    label: 'Two-factor authentication',
    helperText: 'Add an extra layer of security to your account',
  },
};

export const Required: Story = {
  args: {
    name: 'required',
    label: 'Accept terms and conditions',
    required: true,
    helperText: 'Required to continue',
  },
};

export const Disabled: Story = {
  args: {
    name: 'disabled',
    label: 'This toggle is disabled',
    disabled: true,
  },
};

export const DisabledOn: Story = {
  args: {
    name: 'disabled-on',
    label: 'This toggle is disabled and on',
    disabled: true,
    defaultValue: true,
  },
};

export const ReadOnly: Story = {
  args: {
    name: 'readonly',
    label: 'This toggle is read-only',
    readOnly: true,
    defaultValue: true,
  },
};

export const WithValidation: Story = {
  args: {
    name: 'validation',
    label: 'Enable premium features',
    required: true,
    validate: (value) => {
      if (!value) return 'You must enable this to continue';
      return undefined;
    },
  },
};

export const StackedLayout: Story = {
  args: {
    name: 'stacked',
    label: 'Dark mode',
    inline: false,
    helperText: 'Switch to dark mode for better viewing at night',
  },
};

export const InlineLayout: Story = {
  args: {
    name: 'inline',
    label: 'Email notifications',
    inline: true,
    helperText: 'Receive email updates about your account',
  },
};

export const WithError: Story = {
  args: {
    name: 'error',
    label: 'Accept privacy policy',
    required: true,
    validate: () => 'You must accept the privacy policy',
  },
};

export const OnByDefault: Story = {
  args: {
    name: 'on',
    label: 'Already enabled',
    defaultValue: true,
    helperText: 'This toggle starts in the on state',
  },
};
