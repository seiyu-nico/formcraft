import type { Meta, StoryObj } from '@storybook/react';
import { ErrorText } from './ErrorText';
import { Label } from './Label';

const meta = {
  title: 'Components/UI/ErrorText',
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

export const WithInput: Story = {
  render: (args) => (
    <div className="w-80 space-y-2">
      <Label htmlFor="email" required>
        メールアドレス
      </Label>
      <input
        type="email"
        id="email"
        className="w-full rounded-lg border border-red-600 px-3 py-2 text-sm focus:border-red-600 focus:outline-none focus:ring-2 focus:ring-red-600"
        placeholder="example@email.com"
        value="invalid-email"
        readOnly
      />
      <ErrorText {...args} />
    </div>
  ),
  args: {
    children: 'メールアドレスの形式が正しくありません。',
  },
};

export const DarkMode: Story = {
  render: (args) => (
    <div className="dark w-80 space-y-2 rounded-lg bg-gray-900 p-6">
      <Label htmlFor="password" required>
        パスワード
      </Label>
      <input
        type="password"
        id="password"
        className="w-full rounded-lg border border-red-500 bg-gray-800 px-3 py-2 text-sm text-white focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500"
        value="123"
        readOnly
      />
      <ErrorText {...args} />
    </div>
  ),
  args: {
    children: 'パスワードは8文字以上で入力してください。',
  },
};

export const MultipleErrors: Story = {
  render: () => (
    <div className="w-96 space-y-6 rounded-lg border border-gray-200 p-6">
      <div className="space-y-2">
        <Label htmlFor="username" required>
          ユーザー名
        </Label>
        <input
          type="text"
          id="username"
          className="w-full rounded-lg border border-red-600 px-3 py-2 text-sm focus:border-red-600 focus:outline-none focus:ring-2 focus:ring-red-600"
          value=""
          readOnly
        />
        <ErrorText>このフィールドは必須です。</ErrorText>
      </div>

      <div className="space-y-2">
        <Label htmlFor="email" required>
          メールアドレス
        </Label>
        <input
          type="email"
          id="email"
          className="w-full rounded-lg border border-red-600 px-3 py-2 text-sm focus:border-red-600 focus:outline-none focus:ring-2 focus:ring-red-600"
          value="invalid"
          readOnly
        />
        <ErrorText>メールアドレスの形式が正しくありません。</ErrorText>
      </div>

      <div className="space-y-2">
        <Label htmlFor="age" required>
          年齢
        </Label>
        <input
          type="number"
          id="age"
          className="w-full rounded-lg border border-red-600 px-3 py-2 text-sm focus:border-red-600 focus:outline-none focus:ring-2 focus:ring-red-600"
          value="150"
          readOnly
        />
        <ErrorText>年齢は0〜120の範囲で入力してください。</ErrorText>
      </div>
    </div>
  ),
};

export const WithIcon: Story = {
  render: (args) => (
    <div className="w-80 space-y-2">
      <Label htmlFor="phone" required>
        電話番号
      </Label>
      <input
        type="tel"
        id="phone"
        className="w-full rounded-lg border border-red-600 px-3 py-2 text-sm focus:border-red-600 focus:outline-none focus:ring-2 focus:ring-red-600"
        value="123"
        readOnly
      />
      <div className="flex items-start gap-1">
        <span className="text-red-600 dark:text-red-400">⚠</span>
        <ErrorText className="mt-0">{args.children}</ErrorText>
      </div>
    </div>
  ),
  args: {
    children: '電話番号の形式が正しくありません。',
  },
};
