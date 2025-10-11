import type { Meta, StoryObj } from '@storybook/react-vite';
import { TextInput } from './TextInput';

const meta: Meta<typeof TextInput> = {
  title: 'Molecules/TextInput',
  component: TextInput,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'tel', 'url', 'number'],
    },
    required: { control: 'boolean' },
    disabled: { control: 'boolean' },
    readOnly: { control: 'boolean' },
    revealable: { control: 'boolean' },
    copyable: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof TextInput>;

export const Default: Story = {
  args: {
    name: 'username',
    label: 'Username',
    placeholder: 'Enter your username',
  },
};

export const WithHelperText: Story = {
  args: {
    name: 'email',
    label: 'Email',
    type: 'email',
    placeholder: 'you@example.com',
    helperText: 'We will never share your email with anyone else.',
  },
};

export const Required: Story = {
  args: {
    name: 'name',
    label: 'Full Name',
    required: true,
    placeholder: 'John Doe',
  },
};

export const Disabled: Story = {
  args: {
    name: 'disabled',
    label: 'Disabled Field',
    disabled: true,
    defaultValue: 'This field is disabled',
  },
};

export const ReadOnly: Story = {
  args: {
    name: 'readonly',
    label: 'Read Only Field',
    readOnly: true,
    defaultValue: 'This field is read only',
  },
};

export const Password: Story = {
  args: {
    name: 'password',
    label: 'Password',
    type: 'password',
    placeholder: '••••••••',
  },
};

export const PasswordRevealable: Story = {
  args: {
    name: 'password',
    label: 'Password',
    type: 'password',
    placeholder: '••••••••',
    revealable: true,
    helperText: 'Click the eye icon to show/hide password',
  },
};

export const Email: Story = {
  args: {
    name: 'email',
    label: 'Email Address',
    type: 'email',
    placeholder: 'you@example.com',
  },
};

export const Number: Story = {
  args: {
    name: 'age',
    label: 'Age',
    type: 'number',
    minValue: 0,
    maxValue: 120,
    step: 1,
  },
};

export const Tel: Story = {
  args: {
    name: 'phone',
    label: 'Phone Number',
    type: 'tel',
    placeholder: '+1 (555) 123-4567',
  },
};

export const URL: Story = {
  args: {
    name: 'website',
    label: 'Website',
    type: 'url',
    placeholder: 'https://example.com',
  },
};

export const WithPrefix: Story = {
  args: {
    name: 'price',
    label: 'Price',
    type: 'number',
    prefix: '$',
    placeholder: '0.00',
    step: 0.01,
  },
};

export const WithSuffix: Story = {
  args: {
    name: 'weight',
    label: 'Weight',
    type: 'number',
    suffix: 'kg',
    placeholder: '0',
  },
};

export const Copyable: Story = {
  args: {
    name: 'api-key',
    label: 'API Key',
    defaultValue: 'sk_test_1234567890abcdef',
    copyable: true,
    readOnly: true,
    helperText: 'Click the copy icon to copy to clipboard',
  },
};

export const WithValidation: Story = {
  args: {
    name: 'username',
    label: 'Username',
    placeholder: 'Enter username',
    required: true,
    minLength: 3,
    maxLength: 20,
    helperText: 'Username must be between 3 and 20 characters',
    validate: (value: string) => {
      if (!value) return 'Username is required';
      if (value.length < 3) return 'Username must be at least 3 characters';
      if (value.length > 20) return 'Username must be at most 20 characters';
      if (!/^[a-zA-Z0-9_]+$/.test(value))
        return 'Username can only contain letters, numbers, and underscores';
      return undefined;
    },
  },
};

export const WithPattern: Story = {
  args: {
    name: 'code',
    label: 'Product Code',
    pattern: '[A-Z]{2}[0-9]{4}',
    placeholder: 'AB1234',
    helperText: 'Format: Two uppercase letters followed by four digits',
  },
};
