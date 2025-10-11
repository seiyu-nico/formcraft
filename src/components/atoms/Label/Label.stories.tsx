import type { Meta, StoryObj } from '@storybook/react';
import { Label } from './Label';

const meta = {
  title: 'Atoms/Label',
  component: Label,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    required: {
      control: 'boolean',
      description: 'Whether the field is required',
    },
    srOnly: {
      control: 'boolean',
      description: 'Whether the label should only be visible to screen readers',
    },
  },
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'ユーザー名',
    htmlFor: 'username',
  },
};

export const Required: Story = {
  args: {
    children: 'メールアドレス',
    htmlFor: 'email',
    required: true,
  },
};

export const ScreenReaderOnly: Story = {
  args: {
    children: '検索',
    htmlFor: 'search',
    srOnly: true,
  },
};

export const LongLabel: Story = {
  args: {
    children: 'この項目は非常に長いラベルを持つフィールドです',
    htmlFor: 'long',
    required: true,
  },
};
