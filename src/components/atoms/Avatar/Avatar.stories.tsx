import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from './Avatar';

const meta = {
  title: 'Atoms/Avatar',
  component: Avatar,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    src: {
      control: 'text',
      description: 'Image source URL',
    },
    alt: {
      control: 'text',
      description: 'Alt text for accessibility (required)',
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Avatar size variant',
    },
    circular: {
      control: 'boolean',
      description: 'Whether the avatar should be circular',
    },
    initials: {
      control: 'text',
      description: 'Optional initials to display when no image is provided',
    },
    loading: {
      control: 'select',
      options: ['lazy', 'eager'],
      description: 'Image loading strategy',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

// Sample avatar images (using placeholder service)
const SAMPLE_AVATAR_1 = 'https://i.pravatar.cc/150?img=1';
const SAMPLE_AVATAR_2 = 'https://i.pravatar.cc/150?img=2';
const SAMPLE_AVATAR_3 = 'https://i.pravatar.cc/150?img=3';
const SAMPLE_AVATAR_4 = 'https://i.pravatar.cc/150?img=4';

export const Default: Story = {
  args: {
    src: SAMPLE_AVATAR_1,
    alt: 'John Doe',
  },
};

export const WithInitials: Story = {
  args: {
    alt: 'John Doe',
    initials: 'JD',
  },
};

export const NoImage: Story = {
  args: {
    alt: 'User Avatar',
  },
};

export const Square: Story = {
  args: {
    src: SAMPLE_AVATAR_1,
    alt: 'Organization',
    circular: false,
  },
};

export const SquareWithInitials: Story = {
  args: {
    alt: 'Tech Corp',
    initials: 'TC',
    circular: false,
  },
};

export const ExtraSmall: Story = {
  args: {
    src: SAMPLE_AVATAR_1,
    alt: 'John Doe',
    size: 'xs',
  },
};

export const Small: Story = {
  args: {
    src: SAMPLE_AVATAR_1,
    alt: 'John Doe',
    size: 'sm',
  },
};

export const Medium: Story = {
  args: {
    src: SAMPLE_AVATAR_1,
    alt: 'John Doe',
    size: 'md',
  },
};

export const Large: Story = {
  args: {
    src: SAMPLE_AVATAR_1,
    alt: 'John Doe',
    size: 'lg',
  },
};

export const ExtraLarge: Story = {
  args: {
    src: SAMPLE_AVATAR_1,
    alt: 'John Doe',
    size: 'xl',
  },
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex items-end gap-4">
      <div className="text-center">
        <Avatar src={SAMPLE_AVATAR_1} alt="Extra Small" size="xs" />
        <p className="mt-2 text-xs text-gray-500">xs</p>
      </div>
      <div className="text-center">
        <Avatar src={SAMPLE_AVATAR_1} alt="Small" size="sm" />
        <p className="mt-2 text-xs text-gray-500">sm</p>
      </div>
      <div className="text-center">
        <Avatar src={SAMPLE_AVATAR_1} alt="Medium" size="md" />
        <p className="mt-2 text-xs text-gray-500">md</p>
      </div>
      <div className="text-center">
        <Avatar src={SAMPLE_AVATAR_1} alt="Large" size="lg" />
        <p className="mt-2 text-xs text-gray-500">lg</p>
      </div>
      <div className="text-center">
        <Avatar src={SAMPLE_AVATAR_1} alt="Extra Large" size="xl" />
        <p className="mt-2 text-xs text-gray-500">xl</p>
      </div>
    </div>
  ),
};

export const InitialsSizes: Story = {
  render: () => (
    <div className="flex items-end gap-4">
      <div className="text-center">
        <Avatar alt="Extra Small" initials="JD" size="xs" />
        <p className="mt-2 text-xs text-gray-500">xs</p>
      </div>
      <div className="text-center">
        <Avatar alt="Small" initials="JD" size="sm" />
        <p className="mt-2 text-xs text-gray-500">sm</p>
      </div>
      <div className="text-center">
        <Avatar alt="Medium" initials="JD" size="md" />
        <p className="mt-2 text-xs text-gray-500">md</p>
      </div>
      <div className="text-center">
        <Avatar alt="Large" initials="JD" size="lg" />
        <p className="mt-2 text-xs text-gray-500">lg</p>
      </div>
      <div className="text-center">
        <Avatar alt="Extra Large" initials="JD" size="xl" />
        <p className="mt-2 text-xs text-gray-500">xl</p>
      </div>
    </div>
  ),
};

export const AvatarGroup: Story = {
  render: () => (
    <div className="flex -space-x-2">
      <Avatar
        src={SAMPLE_AVATAR_1}
        alt="User 1"
        size="md"
        className="ring-2 ring-white dark:ring-gray-900"
      />
      <Avatar
        src={SAMPLE_AVATAR_2}
        alt="User 2"
        size="md"
        className="ring-2 ring-white dark:ring-gray-900"
      />
      <Avatar
        src={SAMPLE_AVATAR_3}
        alt="User 3"
        size="md"
        className="ring-2 ring-white dark:ring-gray-900"
      />
      <Avatar
        src={SAMPLE_AVATAR_4}
        alt="User 4"
        size="md"
        className="ring-2 ring-white dark:ring-gray-900"
      />
    </div>
  ),
};

export const AvatarGroupWithCount: Story = {
  render: () => (
    <div className="flex -space-x-2">
      <Avatar
        src={SAMPLE_AVATAR_1}
        alt="User 1"
        size="md"
        className="ring-2 ring-white dark:ring-gray-900"
      />
      <Avatar
        src={SAMPLE_AVATAR_2}
        alt="User 2"
        size="md"
        className="ring-2 ring-white dark:ring-gray-900"
      />
      <Avatar
        src={SAMPLE_AVATAR_3}
        alt="User 3"
        size="md"
        className="ring-2 ring-white dark:ring-gray-900"
      />
      <div className="inline-flex size-8 items-center justify-center rounded-full bg-gray-100 text-xs font-medium text-gray-600 ring-2 ring-white dark:bg-gray-500/20 dark:text-gray-400 dark:ring-gray-900">
        +5
      </div>
    </div>
  ),
};

export const Clickable: Story = {
  args: {
    src: SAMPLE_AVATAR_1,
    alt: 'John Doe',
    onClick: () => alert('Avatar clicked!'),
  },
};

export const UserProfile: Story = {
  render: () => (
    <div className="flex items-center gap-3">
      <Avatar src={SAMPLE_AVATAR_1} alt="John Doe" size="lg" />
      <div>
        <p className="text-sm font-medium text-gray-950 dark:text-white">John Doe</p>
        <p className="text-sm text-gray-500 dark:text-gray-400">john@example.com</p>
      </div>
    </div>
  ),
};

export const UserList: Story = {
  render: () => (
    <div className="space-y-3">
      {[
        { name: 'John Doe', email: 'john@example.com', avatar: SAMPLE_AVATAR_1 },
        { name: 'Jane Smith', email: 'jane@example.com', avatar: SAMPLE_AVATAR_2 },
        { name: 'Bob Johnson', email: 'bob@example.com', initials: 'BJ' },
        { name: 'Alice Williams', email: 'alice@example.com', avatar: SAMPLE_AVATAR_3 },
      ].map((user, index) => (
        <div key={index} className="flex items-center gap-3">
          <Avatar
            src={user.avatar}
            alt={user.name}
            initials={user.initials}
            size="md"
          />
          <div className="flex-1">
            <p className="text-sm font-medium text-gray-950 dark:text-white">{user.name}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">{user.email}</p>
          </div>
        </div>
      ))}
    </div>
  ),
};

export const OrganizationList: Story = {
  render: () => (
    <div className="space-y-3">
      {[
        { name: 'Tech Corp', type: 'Technology', initials: 'TC' },
        { name: 'Design Studio', type: 'Creative Agency', initials: 'DS' },
        { name: 'Marketing Inc', type: 'Marketing', initials: 'MI' },
        { name: 'Finance Group', type: 'Financial Services', initials: 'FG' },
      ].map((org, index) => (
        <div key={index} className="flex items-center gap-3">
          <Avatar
            alt={org.name}
            initials={org.initials}
            circular={false}
            size="md"
          />
          <div className="flex-1">
            <p className="text-sm font-medium text-gray-950 dark:text-white">{org.name}</p>
            <p className="text-sm text-gray-500 dark:text-gray-400">{org.type}</p>
          </div>
        </div>
      ))}
    </div>
  ),
};

export const VariantComparison: Story = {
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="mb-3 text-sm font-medium text-gray-950 dark:text-white">
          With Image
        </h3>
        <div className="flex gap-4">
          <Avatar src={SAMPLE_AVATAR_1} alt="Circular" circular={true} size="lg" />
          <Avatar src={SAMPLE_AVATAR_1} alt="Square" circular={false} size="lg" />
        </div>
      </div>

      <div>
        <h3 className="mb-3 text-sm font-medium text-gray-950 dark:text-white">
          With Initials
        </h3>
        <div className="flex gap-4">
          <Avatar alt="Circular" initials="JD" circular={true} size="lg" />
          <Avatar alt="Square" initials="JD" circular={false} size="lg" />
        </div>
      </div>

      <div>
        <h3 className="mb-3 text-sm font-medium text-gray-950 dark:text-white">
          No Image (Default Icon)
        </h3>
        <div className="flex gap-4">
          <Avatar alt="Circular" circular={true} size="lg" />
          <Avatar alt="Square" circular={false} size="lg" />
        </div>
      </div>
    </div>
  ),
};
