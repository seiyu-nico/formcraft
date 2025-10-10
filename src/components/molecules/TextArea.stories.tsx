import type { Meta, StoryObj } from '@storybook/react-vite';
import { TextArea } from './TextArea';

const meta: Meta<typeof TextArea> = {
  title: 'Molecules/TextArea',
  component: TextArea,
  tags: ['autodocs'],
  argTypes: {
    required: { control: 'boolean' },
    disabled: { control: 'boolean' },
    readOnly: { control: 'boolean' },
    autosize: { control: 'boolean' },
    resize: {
      control: 'select',
      options: ['none', 'both', 'horizontal', 'vertical'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof TextArea>;

export const Default: Story = {
  args: {
    name: 'description',
    label: 'Description',
    placeholder: 'Enter a description...',
  },
};

export const WithHelperText: Story = {
  args: {
    name: 'bio',
    label: 'Biography',
    placeholder: 'Tell us about yourself...',
    helperText: 'A brief description of your background and experience.',
  },
};

export const Required: Story = {
  args: {
    name: 'message',
    label: 'Message',
    required: true,
    placeholder: 'Your message here...',
  },
};

export const Disabled: Story = {
  args: {
    name: 'disabled',
    label: 'Disabled Field',
    disabled: true,
    defaultValue: 'This field is disabled and cannot be edited.',
  },
};

export const ReadOnly: Story = {
  args: {
    name: 'readonly',
    label: 'Read Only Field',
    readOnly: true,
    defaultValue: 'This field is read-only and cannot be edited.',
  },
};

export const WithRows: Story = {
  args: {
    name: 'content',
    label: 'Content',
    rows: 8,
    placeholder: 'Enter your content here...',
    helperText: 'This textarea has 8 rows.',
  },
};

export const Autosize: Story = {
  args: {
    name: 'autosize',
    label: 'Auto-sizing Text Area',
    autosize: true,
    placeholder: 'Type multiple lines and watch the textarea grow...',
    helperText: 'This textarea automatically adjusts its height based on content.',
  },
};

export const ResizeNone: Story = {
  args: {
    name: 'resize-none',
    label: 'No Resize',
    resize: 'none',
    placeholder: 'This textarea cannot be resized...',
    helperText: 'Resize is disabled.',
  },
};

export const ResizeBoth: Story = {
  args: {
    name: 'resize-both',
    label: 'Resize Both',
    resize: 'both',
    placeholder: 'This textarea can be resized in both directions...',
    helperText: 'You can resize this both horizontally and vertically.',
  },
};

export const ResizeHorizontal: Story = {
  args: {
    name: 'resize-horizontal',
    label: 'Resize Horizontal',
    resize: 'horizontal',
    placeholder: 'This textarea can only be resized horizontally...',
    helperText: 'You can resize this horizontally only.',
  },
};

export const WithMaxLength: Story = {
  args: {
    name: 'tweet',
    label: 'Tweet',
    maxLength: 280,
    placeholder: "What's happening?",
    helperText: 'Maximum 280 characters.',
  },
};

export const WithValidation: Story = {
  args: {
    name: 'comment',
    label: 'Comment',
    placeholder: 'Enter your comment...',
    required: true,
    minLength: 10,
    maxLength: 500,
    helperText: 'Comment must be between 10 and 500 characters',
    validate: (value: string) => {
      if (!value) return 'Comment is required';
      if (value.length < 10) return 'Comment must be at least 10 characters';
      if (value.length > 500) return 'Comment must be at most 500 characters';
      return undefined;
    },
  },
};

export const LongContent: Story = {
  args: {
    name: 'article',
    label: 'Article',
    rows: 12,
    placeholder: 'Write your article here...',
    defaultValue: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.

Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.`,
  },
};
