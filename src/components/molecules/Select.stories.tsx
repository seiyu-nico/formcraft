import type { Meta, StoryObj } from '@storybook/react';
import { Select } from './Select';

const meta = {
  title: 'Molecules/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

const statusOptions = [
  { value: 'draft', label: 'Draft' },
  { value: 'reviewing', label: 'Reviewing' },
  { value: 'published', label: 'Published' },
];

const countryOptions = [
  { value: 'us', label: 'United States' },
  { value: 'uk', label: 'United Kingdom' },
  { value: 'ca', label: 'Canada' },
  { value: 'au', label: 'Australia' },
  { value: 'jp', label: 'Japan' },
];

const roleOptions = [
  { value: 'admin', label: 'Administrator' },
  { value: 'editor', label: 'Editor' },
  { value: 'viewer', label: 'Viewer' },
  { value: 'guest', label: 'Guest', disabled: true },
];

export const Default: Story = {
  args: {
    name: 'status',
    label: 'Status',
    options: statusOptions,
  },
};

export const WithPlaceholder: Story = {
  args: {
    name: 'country',
    label: 'Country',
    placeholder: 'Select a country',
    options: countryOptions,
  },
};

export const WithHelperText: Story = {
  args: {
    name: 'role',
    label: 'User Role',
    helperText: 'Choose the role for this user',
    options: roleOptions,
  },
};

export const Required: Story = {
  args: {
    name: 'required',
    label: 'Status',
    required: true,
    placeholder: 'Select status',
    options: statusOptions,
  },
};

export const Disabled: Story = {
  args: {
    name: 'disabled',
    label: 'Disabled Select',
    disabled: true,
    options: statusOptions,
    defaultValue: 'draft',
  },
};

export const ReadOnly: Story = {
  args: {
    name: 'readonly',
    label: 'Read Only Select',
    readOnly: true,
    options: statusOptions,
    defaultValue: 'published',
  },
};

export const WithDefaultValue: Story = {
  args: {
    name: 'default',
    label: 'Country',
    options: countryOptions,
    defaultValue: 'jp',
    helperText: 'Japan is selected by default',
  },
};

export const Multiple: Story = {
  args: {
    name: 'multiple',
    label: 'Select Multiple Countries',
    multiple: true,
    options: countryOptions,
    helperText: 'Hold Ctrl/Cmd to select multiple options',
  },
};

export const MultipleWithDefault: Story = {
  args: {
    name: 'multiple-default',
    label: 'Favorite Countries',
    multiple: true,
    options: countryOptions,
    defaultValue: ['us', 'jp'],
    helperText: 'US and Japan are selected by default',
  },
};

export const WithPrefix: Story = {
  args: {
    name: 'prefix',
    label: 'Currency',
    prefix: '$',
    options: [
      { value: 'usd', label: 'USD' },
      { value: 'eur', label: 'EUR' },
      { value: 'gbp', label: 'GBP' },
      { value: 'jpy', label: 'JPY' },
    ],
  },
};

export const WithSuffix: Story = {
  args: {
    name: 'suffix',
    label: 'Duration',
    suffix: 'days',
    options: [
      { value: '7', label: '7' },
      { value: '14', label: '14' },
      { value: '30', label: '30' },
      { value: '90', label: '90' },
    ],
  },
};

export const WithDisabledOptions: Story = {
  args: {
    name: 'disabled-options',
    label: 'Role',
    options: roleOptions,
    helperText: 'Guest role is disabled',
  },
};

export const WithValidation: Story = {
  args: {
    name: 'validation',
    label: 'Status',
    required: true,
    placeholder: 'Select status',
    options: statusOptions,
    validate: (value) => {
      if (!value || value === '') return 'Please select a status';
      return undefined;
    },
  },
};

export const WithError: Story = {
  args: {
    name: 'error',
    label: 'Country',
    placeholder: 'Select a country',
    options: countryOptions,
    validate: () => 'This field has an error',
  },
};

export const LongOptionsList: Story = {
  args: {
    name: 'long',
    label: 'Select a Number',
    placeholder: 'Choose a number',
    options: Array.from({ length: 50 }, (_, i) => ({
      value: String(i + 1),
      label: `Option ${i + 1}`,
    })),
    helperText: 'This select has many options',
  },
};
