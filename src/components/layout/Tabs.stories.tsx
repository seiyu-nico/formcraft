import type { Meta, StoryObj } from '@storybook/react';
import { Tabs } from './Tabs';
import { TabItem } from './Tabs.types';
import { useState } from 'react';

const meta = {
  title: 'Components/Layout/Tabs',
  component: Tabs,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

const basicTabs: TabItem[] = [
  {
    id: 'tab1',
    label: '基本情報',
    content: (
      <div>
        <h3 className="text-lg font-medium">基本情報</h3>
        <p className="mt-2 text-sm text-gray-600">ユーザーの基本情報を入力してください。</p>
      </div>
    ),
  },
  {
    id: 'tab2',
    label: '連絡先',
    content: (
      <div>
        <h3 className="text-lg font-medium">連絡先</h3>
        <p className="mt-2 text-sm text-gray-600">連絡先情報を入力してください。</p>
      </div>
    ),
  },
  {
    id: 'tab3',
    label: '設定',
    content: (
      <div>
        <h3 className="text-lg font-medium">設定</h3>
        <p className="mt-2 text-sm text-gray-600">アカウント設定を管理します。</p>
      </div>
    ),
  },
];

export const Default: Story = {
  args: {
    items: basicTabs,
  },
};

export const WithIcons: Story = {
  args: {
    items: [
      {
        id: 'profile',
        label: 'プロフィール',
        icon: '👤',
        content: <div className="text-sm">プロフィール情報</div>,
      },
      {
        id: 'settings',
        label: '設定',
        icon: '⚙️',
        content: <div className="text-sm">設定画面</div>,
      },
      {
        id: 'notifications',
        label: '通知',
        icon: '🔔',
        content: <div className="text-sm">通知設定</div>,
      },
    ],
  },
};

export const WithBadges: Story = {
  args: {
    items: [
      {
        id: 'all',
        label: 'すべて',
        badge: 24,
        badgeColor: 'gray',
        content: <div className="text-sm">すべてのアイテム（24件）</div>,
      },
      {
        id: 'active',
        label: 'アクティブ',
        badge: 5,
        badgeColor: 'primary',
        content: <div className="text-sm">アクティブなアイテム（5件）</div>,
      },
      {
        id: 'pending',
        label: '保留中',
        badge: 3,
        badgeColor: 'warning',
        content: <div className="text-sm">保留中のアイテム（3件）</div>,
      },
      {
        id: 'completed',
        label: '完了',
        badge: 16,
        badgeColor: 'success',
        content: <div className="text-sm">完了したアイテム（16件）</div>,
      },
    ],
  },
};

export const WithDisabledTab: Story = {
  args: {
    items: [
      {
        id: 'enabled1',
        label: '有効なタブ1',
        content: <div className="text-sm">このタブは有効です</div>,
      },
      {
        id: 'disabled',
        label: '無効なタブ',
        disabled: true,
        content: <div className="text-sm">このタブは表示されません</div>,
      },
      {
        id: 'enabled2',
        label: '有効なタブ2',
        content: <div className="text-sm">このタブも有効です</div>,
      },
    ],
  },
};

export const Contained: Story = {
  args: {
    items: basicTabs,
    contained: true,
  },
};

export const Controlled: Story = {
  render: () => {
    const [activeTab, setActiveTab] = useState('tab1');

    return (
      <div className="space-y-4">
        <div className="flex gap-2">
          <button
            onClick={() => setActiveTab('tab1')}
            className="rounded bg-gray-200 px-3 py-1 text-sm"
          >
            タブ1を表示
          </button>
          <button
            onClick={() => setActiveTab('tab2')}
            className="rounded bg-gray-200 px-3 py-1 text-sm"
          >
            タブ2を表示
          </button>
          <button
            onClick={() => setActiveTab('tab3')}
            className="rounded bg-gray-200 px-3 py-1 text-sm"
          >
            タブ3を表示
          </button>
        </div>
        <Tabs
          items={basicTabs}
          activeTab={activeTab}
          onTabChange={(tabId) => {
            console.log('Tab changed to:', tabId);
            setActiveTab(tabId);
          }}
        />
      </div>
    );
  },
};

export const DarkMode: Story = {
  render: (args) => (
    <div className="dark rounded-lg bg-gray-900 p-6">
      <Tabs {...args} />
    </div>
  ),
  args: {
    items: basicTabs,
    contained: true,
  },
};

export const WithFormContent: Story = {
  args: {
    items: [
      {
        id: 'personal',
        label: '個人情報',
        content: (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">氏名</label>
              <input
                type="text"
                className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2"
                placeholder="山田太郎"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">メールアドレス</label>
              <input
                type="email"
                className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2"
                placeholder="yamada@example.com"
              />
            </div>
          </div>
        ),
      },
      {
        id: 'security',
        label: 'セキュリティ',
        content: (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">現在のパスワード</label>
              <input
                type="password"
                className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">新しいパスワード</label>
              <input
                type="password"
                className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2"
              />
            </div>
          </div>
        ),
      },
      {
        id: 'preferences',
        label: '環境設定',
        content: (
          <div className="space-y-4">
            <div className="flex items-center">
              <input type="checkbox" id="notifications" className="mr-2" />
              <label htmlFor="notifications" className="text-sm text-gray-700">
                メール通知を受け取る
              </label>
            </div>
            <div className="flex items-center">
              <input type="checkbox" id="newsletter" className="mr-2" />
              <label htmlFor="newsletter" className="text-sm text-gray-700">
                ニュースレターを受け取る
              </label>
            </div>
          </div>
        ),
      },
    ],
    contained: true,
  },
};

export const ManyTabs: Story = {
  args: {
    items: Array.from({ length: 10 }, (_, i) => ({
      id: `tab${i + 1}`,
      label: `タブ ${i + 1}`,
      content: <div className="text-sm">タブ {i + 1} のコンテンツ</div>,
    })),
  },
};
