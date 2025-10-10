import type { Meta, StoryObj } from '@storybook/react';
import { Label } from './Label';

const meta = {
  title: 'Components/UI/Label',
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

export const WithInput: Story = {
  render: (args) => (
    <div className="w-80 space-y-2">
      <Label {...args} />
      <input
        type="text"
        id={args.htmlFor}
        className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-600"
        placeholder="入力してください"
      />
    </div>
  ),
  args: {
    children: 'ユーザー名',
    htmlFor: 'username-with-input',
    required: true,
  },
};

export const DarkMode: Story = {
  render: (args) => (
    <div className="dark w-80 space-y-4 rounded-lg bg-gray-900 p-6">
      <div className="space-y-2">
        <Label {...args} />
        <input
          type="text"
          id={args.htmlFor}
          className="w-full rounded-lg border border-gray-600 bg-gray-800 px-3 py-2 text-sm text-white focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500"
          placeholder="入力してください"
        />
      </div>
    </div>
  ),
  args: {
    children: 'ユーザー名',
    htmlFor: 'username-dark',
    required: true,
  },
};

export const MultipleFields: Story = {
  render: () => (
    <div className="w-96 space-y-6 rounded-lg border border-gray-200 p-6">
      <div className="space-y-2">
        <Label htmlFor="name" required>
          氏名
        </Label>
        <input
          type="text"
          id="name"
          className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-600"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email" required>
          メールアドレス
        </Label>
        <input
          type="email"
          id="email"
          className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-600"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="bio">
          自己紹介
        </Label>
        <textarea
          id="bio"
          rows={3}
          className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-600"
        />
      </div>
    </div>
  ),
};
