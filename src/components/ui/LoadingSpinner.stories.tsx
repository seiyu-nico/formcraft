import type { Meta, StoryObj } from '@storybook/react';
import { LoadingSpinner } from './LoadingSpinner';
import { Button } from './Button';

const meta = {
  title: 'Components/UI/LoadingSpinner',
  component: LoadingSpinner,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Size of the spinner',
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'gray', 'white'],
      description: 'Color of the spinner',
    },
  },
} satisfies Meta<typeof LoadingSpinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};

export const Primary: Story = {
  args: {
    color: 'primary',
    size: 'lg',
  },
};

export const Success: Story = {
  args: {
    color: 'success',
    size: 'lg',
  },
};

export const Danger: Story = {
  args: {
    color: 'danger',
    size: 'lg',
  },
};

export const Warning: Story = {
  args: {
    color: 'warning',
    size: 'lg',
  },
};

export const Info: Story = {
  args: {
    color: 'info',
    size: 'lg',
  },
};

export const Gray: Story = {
  args: {
    color: 'gray',
    size: 'lg',
  },
};

export const White: Story = {
  render: (args) => (
    <div className="rounded-lg bg-gray-900 p-8">
      <LoadingSpinner {...args} />
    </div>
  ),
  args: {
    color: 'white',
    size: 'lg',
  },
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex items-end gap-4">
      <LoadingSpinner size="xs" />
      <LoadingSpinner size="sm" />
      <LoadingSpinner size="md" />
      <LoadingSpinner size="lg" />
      <LoadingSpinner size="xl" />
    </div>
  ),
};

export const AllColors: Story = {
  render: () => (
    <div className="flex flex-wrap gap-4">
      <LoadingSpinner color="primary" size="lg" />
      <LoadingSpinner color="secondary" size="lg" />
      <LoadingSpinner color="success" size="lg" />
      <LoadingSpinner color="danger" size="lg" />
      <LoadingSpinner color="warning" size="lg" />
      <LoadingSpinner color="info" size="lg" />
      <LoadingSpinner color="gray" size="lg" />
    </div>
  ),
};

export const InButton: Story = {
  render: () => (
    <Button color="primary" loading>
      処理中...
    </Button>
  ),
};

export const WithText: Story = {
  render: () => (
    <div className="flex items-center gap-2">
      <LoadingSpinner size="sm" />
      <span className="text-sm text-gray-600">読み込み中...</span>
    </div>
  ),
};

export const CenteredInCard: Story = {
  render: () => (
    <div className="w-96 rounded-lg border border-gray-200 p-8">
      <div className="flex flex-col items-center justify-center gap-3">
        <LoadingSpinner size="xl" />
        <p className="text-sm text-gray-600">データを読み込んでいます</p>
      </div>
    </div>
  ),
};

export const DarkMode: Story = {
  render: () => (
    <div className="dark rounded-lg bg-gray-900 p-8">
      <div className="flex flex-wrap gap-4">
        <LoadingSpinner color="primary" size="lg" />
        <LoadingSpinner color="success" size="lg" />
        <LoadingSpinner color="danger" size="lg" />
        <LoadingSpinner color="warning" size="lg" />
        <LoadingSpinner color="info" size="lg" />
        <LoadingSpinner color="white" size="lg" />
      </div>
    </div>
  ),
};

export const InlineWithContent: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <LoadingSpinner size="sm" color="primary" />
        <span className="text-sm">ユーザーを読み込み中...</span>
      </div>
      <div className="flex items-center gap-2">
        <LoadingSpinner size="sm" color="success" />
        <span className="text-sm">保存しています...</span>
      </div>
      <div className="flex items-center gap-2">
        <LoadingSpinner size="sm" color="warning" />
        <span className="text-sm">処理中...</span>
      </div>
    </div>
  ),
};

export const FullPageLoading: Story = {
  render: () => (
    <div className="flex h-64 w-full items-center justify-center rounded-lg bg-gray-50">
      <div className="flex flex-col items-center gap-4">
        <LoadingSpinner size="xl" color="primary" />
        <div className="text-center">
          <p className="text-lg font-medium text-gray-900">ページを読み込んでいます</p>
          <p className="text-sm text-gray-600">しばらくお待ちください...</p>
        </div>
      </div>
    </div>
  ),
};

export const OverlayLoading: Story = {
  render: () => (
    <div className="relative h-64 w-96 rounded-lg border border-gray-200">
      <div className="p-4">
        <h3 className="text-lg font-medium">コンテンツ</h3>
        <p className="mt-2 text-sm text-gray-600">
          このコンテンツは読み込み中にオーバーレイで覆われます。
        </p>
      </div>
      <div className="absolute inset-0 flex items-center justify-center rounded-lg bg-white/80 backdrop-blur-sm">
        <LoadingSpinner size="xl" color="primary" />
      </div>
    </div>
  ),
};
