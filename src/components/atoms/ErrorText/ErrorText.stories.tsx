import type { Meta, StoryObj } from '@storybook/react';
import { ErrorText } from './ErrorText';

const meta = {
  title: 'Atoms/ErrorText',
  component: ErrorText,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof ErrorText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'このフィールドは必須です。',
  },
};

export const ValidationError: Story = {
  args: {
    children: 'メールアドレスの形式が正しくありません。',
  },
};

export const LongError: Story = {
  args: {
    children:
      'パスワードは8文字以上で、大文字、小文字、数字、記号をそれぞれ1文字以上含める必要があります。',
  },
  decorators: [
    (Story) => (
      <div className="w-96">
        <Story />
      </div>
    ),
  ],
};
