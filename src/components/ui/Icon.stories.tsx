import type { Meta, StoryObj } from '@storybook/react';
import { Icon } from './Icon';

const meta = {
  title: 'Components/UI/Icon',
  component: Icon,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Size of the icon',
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'gray', 'inherit'],
      description: 'Color of the icon',
    },
  },
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: '⭐',
  },
};

export const Primary: Story = {
  args: {
    children: '🎨',
    color: 'primary',
  },
};

export const Success: Story = {
  args: {
    children: '✓',
    color: 'success',
    size: 'lg',
  },
};

export const Danger: Story = {
  args: {
    children: '✗',
    color: 'danger',
    size: 'lg',
  },
};

export const Warning: Story = {
  args: {
    children: '⚠',
    color: 'warning',
    size: 'lg',
  },
};

export const Info: Story = {
  args: {
    children: 'ℹ',
    color: 'info',
    size: 'lg',
  },
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex items-end gap-4">
      <Icon size="xs">⭐</Icon>
      <Icon size="sm">⭐</Icon>
      <Icon size="md">⭐</Icon>
      <Icon size="lg">⭐</Icon>
      <Icon size="xl">⭐</Icon>
    </div>
  ),
};

export const AllColors: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <Icon color="primary" size="lg">
        ●
      </Icon>
      <Icon color="secondary" size="lg">
        ●
      </Icon>
      <Icon color="success" size="lg">
        ●
      </Icon>
      <Icon color="danger" size="lg">
        ●
      </Icon>
      <Icon color="warning" size="lg">
        ●
      </Icon>
      <Icon color="info" size="lg">
        ●
      </Icon>
      <Icon color="gray" size="lg">
        ●
      </Icon>
    </div>
  ),
};

export const WithText: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Icon color="success" size="md">
        ✓
      </Icon>
      <span className="text-sm">タスク完了</span>
    </div>
  ),
};

export const InButton: Story = {
  render: () => (
    <button className="inline-flex items-center gap-2 rounded-lg bg-primary-600 px-4 py-2 text-white hover:bg-primary-500">
      <Icon size="sm" color="inherit">
        ➕
      </Icon>
      <span>新規作成</span>
    </button>
  ),
};

export const DarkMode: Story = {
  render: () => (
    <div className="dark rounded-lg bg-gray-900 p-6">
      <div className="flex flex-wrap gap-4">
        <Icon color="primary" size="lg">
          ●
        </Icon>
        <Icon color="success" size="lg">
          ●
        </Icon>
        <Icon color="danger" size="lg">
          ●
        </Icon>
        <Icon color="warning" size="lg">
          ●
        </Icon>
        <Icon color="info" size="lg">
          ●
        </Icon>
        <Icon color="gray" size="lg">
          ●
        </Icon>
      </div>
    </div>
  ),
};

export const EmojiIcons: Story = {
  render: () => (
    <div className="grid grid-cols-4 gap-4">
      <div className="flex flex-col items-center gap-2">
        <Icon size="xl">📧</Icon>
        <span className="text-xs text-gray-600">メール</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon size="xl">📁</Icon>
        <span className="text-xs text-gray-600">フォルダ</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon size="xl">⚙️</Icon>
        <span className="text-xs text-gray-600">設定</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Icon size="xl">👤</Icon>
        <span className="text-xs text-gray-600">ユーザー</span>
      </div>
    </div>
  ),
};

export const StatusIcons: Story = {
  render: () => (
    <div className="space-y-3">
      <div className="flex items-center gap-2">
        <Icon color="success" size="md">
          ✓
        </Icon>
        <span className="text-sm">処理成功</span>
      </div>
      <div className="flex items-center gap-2">
        <Icon color="danger" size="md">
          ✗
        </Icon>
        <span className="text-sm">処理失敗</span>
      </div>
      <div className="flex items-center gap-2">
        <Icon color="warning" size="md">
          ⚠
        </Icon>
        <span className="text-sm">警告あり</span>
      </div>
      <div className="flex items-center gap-2">
        <Icon color="info" size="md">
          ℹ
        </Icon>
        <span className="text-sm">情報</span>
      </div>
    </div>
  ),
};

export const WithSVG: Story = {
  render: () => (
    <Icon size="lg" color="primary">
      <svg
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 13l4 4L19 7"
        />
      </svg>
    </Icon>
  ),
};
