import type { Meta, StoryObj } from '@storybook/react';
import { Sidebar } from './Sidebar';
import { SidebarGroup } from './Sidebar.types';

const meta = {
  title: 'Components/Layout/Sidebar',
  component: Sidebar,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

const basicGroups: SidebarGroup[] = [
  {
    id: 'main',
    items: [
      {
        id: 'dashboard',
        label: 'ダッシュボード',
        icon: (
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
        ),
        url: '#dashboard',
        active: true,
      },
      {
        id: 'users',
        label: 'ユーザー',
        icon: (
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
            />
          </svg>
        ),
        url: '#users',
        badge: 12,
        badgeColor: 'primary',
      },
      {
        id: 'settings',
        label: '設定',
        icon: (
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        ),
        url: '#settings',
      },
    ],
  },
];

const groupedNavigation: SidebarGroup[] = [
  {
    id: 'main',
    items: [
      {
        id: 'dashboard',
        label: 'ダッシュボード',
        icon: (
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
        ),
        url: '#dashboard',
        active: true,
      },
    ],
  },
  {
    id: 'content',
    label: 'コンテンツ',
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
        />
      </svg>
    ),
    collapsible: true,
    items: [
      {
        id: 'posts',
        label: '投稿',
        url: '#posts',
        badge: 5,
        badgeColor: 'warning',
      },
      {
        id: 'pages',
        label: 'ページ',
        url: '#pages',
      },
      {
        id: 'media',
        label: 'メディア',
        url: '#media',
        badge: 120,
        badgeColor: 'gray',
      },
    ],
  },
  {
    id: 'settings',
    label: '設定',
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
        />
      </svg>
    ),
    collapsible: true,
    items: [
      {
        id: 'general',
        label: '一般設定',
        url: '#general',
      },
      {
        id: 'security',
        label: 'セキュリティ',
        url: '#security',
      },
      {
        id: 'notifications',
        label: '通知',
        url: '#notifications',
        badge: 3,
        badgeColor: 'danger',
      },
    ],
  },
];

const nestedNavigation: SidebarGroup[] = [
  {
    id: 'main',
    label: 'メイン',
    collapsible: true,
    items: [
      {
        id: 'products',
        label: '製品管理',
        url: '#products',
        childItems: [
          {
            id: 'all-products',
            label: 'すべての製品',
            url: '#all-products',
            active: true,
          },
          {
            id: 'categories',
            label: 'カテゴリ',
            url: '#categories',
          },
          {
            id: 'tags',
            label: 'タグ',
            url: '#tags',
          },
        ],
      },
      {
        id: 'orders',
        label: '注文',
        url: '#orders',
        badge: 8,
        badgeColor: 'warning',
      },
    ],
  },
];

export const Default: Story = {
  args: {
    groups: basicGroups,
    logo: (
      <div className="text-xl font-bold text-primary-600 dark:text-primary-400">FormCraft</div>
    ),
    logoUrl: '#',
  },
};

export const WithGroups: Story = {
  args: {
    groups: groupedNavigation,
    logo: (
      <div className="text-xl font-bold text-primary-600 dark:text-primary-400">FormCraft</div>
    ),
    logoUrl: '#',
  },
};

export const WithNestedItems: Story = {
  args: {
    groups: nestedNavigation,
    logo: (
      <div className="text-xl font-bold text-primary-600 dark:text-primary-400">FormCraft</div>
    ),
    logoUrl: '#',
  },
};

export const Collapsible: Story = {
  args: {
    groups: groupedNavigation,
    logo: (
      <div className="text-xl font-bold text-primary-600 dark:text-primary-400">FormCraft</div>
    ),
    logoUrl: '#',
    collapsible: true,
  },
};

export const WithFooter: Story = {
  args: {
    groups: basicGroups,
    logo: (
      <div className="text-xl font-bold text-primary-600 dark:text-primary-400">FormCraft</div>
    ),
    logoUrl: '#',
    footer: (
      <div className="flex items-center gap-x-3 rounded-lg p-2 hover:bg-gray-100 dark:hover:bg-white/5">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-100 text-primary-600 dark:bg-primary-900/50 dark:text-primary-400">
          JD
        </div>
        <div className="flex-1">
          <div className="text-sm font-medium text-gray-700 dark:text-gray-200">
            John Doe
          </div>
          <div className="text-xs text-gray-500 dark:text-gray-400">john@example.com</div>
        </div>
      </div>
    ),
  },
};

export const DarkMode: Story = {
  render: (args) => (
    <div className="dark min-h-screen bg-gray-900">
      <Sidebar {...args} />
    </div>
  ),
  args: {
    groups: groupedNavigation,
    logo: (
      <div className="text-xl font-bold text-primary-600 dark:text-primary-400">FormCraft</div>
    ),
    logoUrl: '#',
    collapsible: true,
  },
};
