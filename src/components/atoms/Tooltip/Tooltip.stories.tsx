import type { Meta, StoryObj } from '@storybook/react';
import { Tooltip } from './Tooltip';
import { Button } from '../Button/Button';

const meta = {
  title: 'Atoms/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    position: {
      control: 'select',
      options: ['top', 'bottom', 'left', 'right'],
      description: 'Position of the tooltip',
    },
  },
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    content: 'これはツールチップです',
    children: <Button>ホバーしてください</Button>,
  },
};

export const Top: Story = {
  args: {
    content: '上に表示されます',
    position: 'top',
    children: <Button>上</Button>,
  },
};

export const Bottom: Story = {
  args: {
    content: '下に表示されます',
    position: 'bottom',
    children: <Button>下</Button>,
  },
};

export const Left: Story = {
  args: {
    content: '左に表示されます',
    position: 'left',
    children: <Button>左</Button>,
  },
};

export const Right: Story = {
  args: {
    content: '右に表示されます',
    position: 'right',
    children: <Button>右</Button>,
  },
};

export const LongContent: Story = {
  args: {
    content: 'これは非常に長いツールチップのテキストです。複数行にわたる場合の表示を確認できます。',
    children: <Button>長いテキスト</Button>,
  },
  decorators: [
    (Story) => (
      <div className="w-96">
        <Story />
      </div>
    ),
  ],
};

export const WithIcon: Story = {
  render: (args) => (
    <div className="flex items-center gap-2">
      <span className="text-sm">フィールド名</span>
      <Tooltip {...args}>
        <button className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
          ⓘ
        </button>
      </Tooltip>
    </div>
  ),
  args: {
    content: 'このフィールドの詳細な説明がここに表示されます。',
    position: 'top',
  },
};

export const MultipleTooltips: Story = {
  render: () => (
    <div className="flex gap-4">
      <Tooltip content="保存します" position="top">
        <Button color="primary">保存</Button>
      </Tooltip>
      <Tooltip content="キャンセルします" position="top">
        <Button color="secondary">キャンセル</Button>
      </Tooltip>
      <Tooltip content="削除します" position="top">
        <Button color="danger">削除</Button>
      </Tooltip>
    </div>
  ),
};

export const DarkMode: Story = {
  render: (args) => (
    <div className="dark rounded-lg bg-gray-900 p-8">
      <Tooltip {...args}>
        <Button>ホバーしてください</Button>
      </Tooltip>
    </div>
  ),
  args: {
    content: 'ダークモードでのツールチップ',
    position: 'top',
  },
};

export const OnTextInput: Story = {
  render: (args) => (
    <div className="w-80 space-y-2">
      <div className="flex items-center gap-2">
        <label htmlFor="username" className="block text-sm font-medium">
          ユーザー名
        </label>
        <Tooltip {...args}>
          <button className="text-gray-500 hover:text-gray-700" type="button">
            ?
          </button>
        </Tooltip>
      </div>
      <input
        type="text"
        id="username"
        className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm focus:border-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-600"
        placeholder="入力してください"
      />
    </div>
  ),
  args: {
    content: '3〜20文字の英数字で入力してください',
    position: 'right',
  },
};

export const WithKeyboardFocus: Story = {
  render: (args) => (
    <div className="space-y-4">
      <p className="text-sm text-gray-600">
        Tabキーでフォーカスを移動するとツールチップが表示されます
      </p>
      <div className="flex gap-4">
        <Tooltip {...args}>
          <button className="rounded-lg border border-gray-300 px-4 py-2 hover:bg-gray-100">
            ボタン1
          </button>
        </Tooltip>
        <Tooltip content="2番目のボタン" position="top">
          <button className="rounded-lg border border-gray-300 px-4 py-2 hover:bg-gray-100">
            ボタン2
          </button>
        </Tooltip>
        <Tooltip content="3番目のボタン" position="top">
          <button className="rounded-lg border border-gray-300 px-4 py-2 hover:bg-gray-100">
            ボタン3
          </button>
        </Tooltip>
      </div>
    </div>
  ),
  args: {
    content: '最初のボタン',
    position: 'top',
  },
};
