import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './Badge';

const meta = {
  title: 'Components/UI/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'gray'],
      description: 'Color variant of the badge',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the badge',
    },
    dot: {
      control: 'boolean',
      description: 'Whether to show a dot indicator',
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Badge',
  },
};

export const Primary: Story = {
  args: {
    children: 'Primary',
    color: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary',
    color: 'secondary',
  },
};

export const Success: Story = {
  args: {
    children: 'Success',
    color: 'success',
  },
};

export const Danger: Story = {
  args: {
    children: 'Danger',
    color: 'danger',
  },
};

export const Warning: Story = {
  args: {
    children: 'Warning',
    color: 'warning',
  },
};

export const Info: Story = {
  args: {
    children: 'Info',
    color: 'info',
  },
};

export const Gray: Story = {
  args: {
    children: 'Gray',
    color: 'gray',
  },
};

export const Small: Story = {
  args: {
    children: 'Small',
    size: 'sm',
  },
};

export const Medium: Story = {
  args: {
    children: 'Medium',
    size: 'md',
  },
};

export const Large: Story = {
  args: {
    children: 'Large',
    size: 'lg',
  },
};

export const WithDot: Story = {
  args: {
    children: 'Active',
    color: 'success',
    dot: true,
  },
};

export const WithIcon: Story = {
  args: {
    children: 'New',
    color: 'primary',
    icon: '✨',
  },
};

export const AllColors: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge color="primary">Primary</Badge>
      <Badge color="secondary">Secondary</Badge>
      <Badge color="success">Success</Badge>
      <Badge color="danger">Danger</Badge>
      <Badge color="warning">Warning</Badge>
      <Badge color="info">Info</Badge>
      <Badge color="gray">Gray</Badge>
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <Badge size="sm">Small</Badge>
      <Badge size="md">Medium</Badge>
      <Badge size="lg">Large</Badge>
    </div>
  ),
};

export const WithDots: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge color="success" dot>
        Active
      </Badge>
      <Badge color="danger" dot>
        Error
      </Badge>
      <Badge color="warning" dot>
        Warning
      </Badge>
      <Badge color="info" dot>
        Processing
      </Badge>
      <Badge color="gray" dot>
        Inactive
      </Badge>
    </div>
  ),
};

export const StatusBadges: Story = {
  render: () => (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-2">
        <span className="text-sm">注文状況:</span>
        <Badge color="info" dot>
          処理中
        </Badge>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm">配送状況:</span>
        <Badge color="warning" dot>
          配送準備中
        </Badge>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm">支払い:</span>
        <Badge color="success" dot>
          完了
        </Badge>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-sm">在庫:</span>
        <Badge color="danger" dot>
          在庫切れ
        </Badge>
      </div>
    </div>
  ),
};

export const DarkMode: Story = {
  render: () => (
    <div className="dark rounded-lg bg-gray-900 p-6">
      <div className="flex flex-wrap gap-2">
        <Badge color="primary">Primary</Badge>
        <Badge color="secondary">Secondary</Badge>
        <Badge color="success">Success</Badge>
        <Badge color="danger">Danger</Badge>
        <Badge color="warning">Warning</Badge>
        <Badge color="info">Info</Badge>
        <Badge color="gray">Gray</Badge>
      </div>
    </div>
  ),
};

export const InTable: Story = {
  render: () => (
    <div className="w-full max-w-2xl overflow-hidden rounded-lg border border-gray-200">
      <table className="w-full">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-4 py-3 text-left text-sm font-medium">ユーザー</th>
            <th className="px-4 py-3 text-left text-sm font-medium">ステータス</th>
            <th className="px-4 py-3 text-left text-sm font-medium">役割</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 bg-white">
          <tr>
            <td className="px-4 py-3 text-sm">山田太郎</td>
            <td className="px-4 py-3">
              <Badge color="success" dot size="sm">
                アクティブ
              </Badge>
            </td>
            <td className="px-4 py-3">
              <Badge color="primary" size="sm">
                管理者
              </Badge>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-3 text-sm">佐藤花子</td>
            <td className="px-4 py-3">
              <Badge color="warning" dot size="sm">
                保留中
              </Badge>
            </td>
            <td className="px-4 py-3">
              <Badge color="secondary" size="sm">
                編集者
              </Badge>
            </td>
          </tr>
          <tr>
            <td className="px-4 py-3 text-sm">鈴木一郎</td>
            <td className="px-4 py-3">
              <Badge color="gray" dot size="sm">
                非アクティブ
              </Badge>
            </td>
            <td className="px-4 py-3">
              <Badge color="gray" size="sm">
                閲覧者
              </Badge>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  ),
};

export const WithIconAndDot: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge color="success" icon="✓" dot>
        完了
      </Badge>
      <Badge color="danger" icon="✗" dot>
        エラー
      </Badge>
      <Badge color="warning" icon="⚠" dot>
        警告
      </Badge>
      <Badge color="info" icon="ℹ" dot>
        情報
      </Badge>
    </div>
  ),
};
