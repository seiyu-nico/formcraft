import type { Meta, StoryObj } from '@storybook/react';
import { Radio } from './Radio';

const meta = {
  title: 'Components/Fields/Radio',
  component: Radio,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

const statusOptions = [
  { value: 'draft', label: 'Draft' },
  { value: 'reviewing', label: 'Reviewing' },
  { value: 'published', label: 'Published' },
];

const statusOptionsWithDescriptions = [
  {
    value: 'draft',
    label: 'Draft',
    description: 'Not visible to the public'
  },
  {
    value: 'reviewing',
    label: 'Reviewing',
    description: 'Being reviewed by editors'
  },
  {
    value: 'published',
    label: 'Published',
    description: 'Visible to everyone'
  },
];

const booleanOptions = [
  { value: 'yes', label: 'Yes' },
  { value: 'no', label: 'No' },
];

export const Default: Story = {
  args: {
    name: 'status',
    label: 'Status',
    options: statusOptions,
  },
};

export const WithHelperText: Story = {
  args: {
    name: 'status',
    label: 'Publication Status',
    helperText: 'Choose the publication status for this article',
    options: statusOptions,
  },
};

export const WithDescriptions: Story = {
  args: {
    name: 'status',
    label: 'Status',
    options: statusOptionsWithDescriptions,
  },
};

export const Required: Story = {
  args: {
    name: 'status',
    label: 'Status',
    required: true,
    options: statusOptions,
  },
};

export const Disabled: Story = {
  args: {
    name: 'status',
    label: 'Status',
    disabled: true,
    options: statusOptions,
    defaultValue: 'draft',
  },
};

export const WithDisabledOption: Story = {
  args: {
    name: 'status',
    label: 'Status',
    options: [
      { value: 'draft', label: 'Draft' },
      { value: 'reviewing', label: 'Reviewing' },
      { value: 'published', label: 'Published', disabled: true },
    ],
  },
};

export const ReadOnly: Story = {
  args: {
    name: 'status',
    label: 'Status',
    readOnly: true,
    options: statusOptions,
    defaultValue: 'published',
  },
};

export const WithDefaultValue: Story = {
  args: {
    name: 'status',
    label: 'Status',
    options: statusOptions,
    defaultValue: 'reviewing',
    helperText: '"Reviewing" is selected by default',
  },
};

export const InlineLayout: Story = {
  args: {
    name: 'status',
    label: 'Status',
    inline: true,
    options: statusOptions,
  },
};

export const InlineWithDescriptions: Story = {
  args: {
    name: 'status',
    label: 'Status',
    inline: true,
    options: statusOptionsWithDescriptions,
  },
};

export const BooleanStyle: Story = {
  args: {
    name: 'agree',
    label: 'Do you agree with the terms?',
    options: booleanOptions,
    inline: true,
  },
};

export const WithValidation: Story = {
  args: {
    name: 'status',
    label: 'Status',
    required: true,
    options: statusOptions,
    validate: (value) => {
      if (!value) return 'Please select a status';
      return undefined;
    },
  },
};

export const WithError: Story = {
  args: {
    name: 'status',
    label: 'Status',
    options: statusOptions,
    validate: () => 'This field has an error',
  },
};

export const ManyOptions: Story = {
  args: {
    name: 'priority',
    label: 'Priority Level',
    options: [
      { value: 'critical', label: 'Critical', description: 'Requires immediate attention' },
      { value: 'high', label: 'High', description: 'Should be addressed soon' },
      { value: 'medium', label: 'Medium', description: 'Normal priority' },
      { value: 'low', label: 'Low', description: 'Can wait' },
      { value: 'none', label: 'None', description: 'No priority assigned' },
    ],
  },
};

export const ManyOptionsInline: Story = {
  args: {
    name: 'rating',
    label: 'How would you rate this?',
    inline: true,
    options: [
      { value: '1', label: '1 - Poor' },
      { value: '2', label: '2 - Fair' },
      { value: '3', label: '3 - Good' },
      { value: '4', label: '4 - Very Good' },
      { value: '5', label: '5 - Excellent' },
    ],
  },
};
