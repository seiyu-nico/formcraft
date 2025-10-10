import type { Meta, StoryObj } from '@storybook/react';
import { HelperText } from './HelperText';
import { Label } from './Label';

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

export const WithInput: Story = {
  render: (args) => (
    <div className="w-80 space-y-2">
      <Label htmlFor="username" required>
        ユーザー名
      </Label>
      <input
        type="text"
        id="username"
        className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-600"
        placeholder="入力してください"
      />
      <HelperText {...args} />
    </div>
  ),
  args: {
    children: '3〜20文字の英数字で入力してください。',
  },
};

export const DarkMode: Story = {
  render: (args) => (
    <div className="dark w-80 space-y-2 rounded-lg bg-gray-900 p-6">
      <Label htmlFor="email" required>
        メールアドレス
      </Label>
      <input
        type="email"
        id="email"
        className="w-full rounded-lg border border-gray-600 bg-gray-800 px-3 py-2 text-sm text-white focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500"
        placeholder="example@email.com"
      />
      <HelperText {...args} />
    </div>
  ),
  args: {
    children: '確認メールが送信されます。',
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
        <HelperText>姓と名の間にスペースを入れてください。</HelperText>
      </div>

      <div className="space-y-2">
        <Label htmlFor="password" required>
          パスワード
        </Label>
        <input
          type="password"
          id="password"
          className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-600"
        />
        <HelperText>8文字以上の英数字と記号を組み合わせてください。</HelperText>
      </div>

      <div className="space-y-2">
        <Label htmlFor="bio">自己紹介</Label>
        <textarea
          id="bio"
          rows={3}
          className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-600"
        />
        <HelperText>200文字以内で自己紹介を入力してください（任意）。</HelperText>
      </div>
    </div>
  ),
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
