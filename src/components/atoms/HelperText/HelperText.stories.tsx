import type { Meta, StoryObj } from '@storybook/react';
import { HelperText } from './HelperText';

const meta = {
  title: 'Atoms/HelperText',
  component: HelperText,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof HelperText>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'このフィールドに関する補足説明がここに入ります。',
  },
};

export const ShortText: Story = {
  args: {
    children: '3文字以上入力してください。',
  },
};

export const LongText: Story = {
  args: {
    children:
      'このフィールドは非常に長い説明文を持つことができます。複数行にわたる場合でも適切に表示されます。ユーザーに詳細な情報を提供するために使用できます。',
  },
  decorators: [
    (Story) => (
      <div className="w-96">
        <Story />
      </div>
    ),
  ],
};

export const HTMLContent: Story = {
  args: {
    children: (
      <>
        詳細は
        <a href="#" className="text-primary-600 underline hover:text-primary-700">
          利用規約
        </a>
        をご確認ください。
      </>
    ),
  },
};
