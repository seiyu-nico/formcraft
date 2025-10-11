import type { Meta, StoryObj } from '@storybook/react';
import { EmptyState } from './EmptyState';
import { Button } from '../atoms/Button';

const meta = {
  title: 'Molecules/EmptyState',
  component: EmptyState,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    heading: {
      control: 'text',
      description: 'The main heading text (required)',
    },
    description: {
      control: 'text',
      description: 'Optional description text below the heading',
    },
    icon: {
      control: false,
      description: 'Optional icon to display above the heading',
    },
    iconColor: {
      control: 'select',
      options: ['gray', 'primary', 'danger', 'info', 'success', 'warning'],
      description: 'Icon color variant',
    },
    iconSize: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Icon size variant',
    },
    footer: {
      control: false,
      description: 'Optional footer content (typically action buttons)',
    },
    headingTag: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      description: 'Heading HTML tag',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes',
    },
  },
} satisfies Meta<typeof EmptyState>;

export default meta;
type Story = StoryObj<typeof meta>;

// User icon SVG
const UserIcon = (
  <svg
    className="h-full w-full"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
    />
  </svg>
);

// Inbox icon SVG
const InboxIcon = (
  <svg
    className="h-full w-full"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"
    />
  </svg>
);

// Folder icon SVG
const FolderIcon = (
  <svg
    className="h-full w-full"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
    />
  </svg>
);

// Plus icon SVG
const PlusIcon = (
  <svg
    className="h-5 w-5"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
  </svg>
);

export const Default: Story = {
  args: {
    heading: 'No users yet',
    description: 'Get started by creating a new user.',
    icon: UserIcon,
  },
};

export const WithAction: Story = {
  args: {
    heading: 'No users yet',
    description: 'Get started by creating a new user.',
    icon: UserIcon,
    footer: (
      <Button size="sm" leftIcon={PlusIcon}>
        Create User
      </Button>
    ),
  },
};

export const MultipleActions: Story = {
  args: {
    heading: 'No projects found',
    description: 'Create a new project or import an existing one to get started.',
    icon: FolderIcon,
    iconColor: 'info',
    footer: (
      <div className="flex gap-2">
        <Button size="sm" leftIcon={PlusIcon}>
          Create Project
        </Button>
        <Button size="sm" variant="outline">
          Import Project
        </Button>
      </div>
    ),
  },
};

export const NoIcon: Story = {
  args: {
    heading: 'No results found',
    description: 'Try adjusting your search or filter to find what you are looking for.',
  },
};

export const NoDescription: Story = {
  args: {
    heading: 'No items',
    icon: InboxIcon,
  },
};

export const DangerIcon: Story = {
  args: {
    heading: 'No data available',
    description: 'There was an error loading the data. Please try again.',
    icon: (
      <svg
        className="h-full w-full"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
        />
      </svg>
    ),
    iconColor: 'danger',
  },
};

export const SuccessIcon: Story = {
  args: {
    heading: 'All caught up!',
    description: 'You have no pending notifications.',
    icon: (
      <svg
        className="h-full w-full"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    iconColor: 'success',
  },
};

export const WarningIcon: Story = {
  args: {
    heading: 'Limited access',
    description: 'You do not have permission to view this content.',
    icon: (
      <svg
        className="h-full w-full"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
        />
      </svg>
    ),
    iconColor: 'warning',
  },
};

export const GrayIcon: Story = {
  args: {
    heading: 'No messages',
    description: 'Your inbox is empty.',
    icon: InboxIcon,
    iconColor: 'gray',
  },
};

export const SmallIcon: Story = {
  args: {
    heading: 'No items',
    icon: FolderIcon,
    iconSize: 'sm',
  },
};

export const LargeIcon: Story = {
  args: {
    heading: 'No items',
    icon: FolderIcon,
    iconSize: 'xl',
  },
};

export const LongContent: Story = {
  args: {
    heading: 'Your search did not return any results',
    description:
      'We could not find any items matching your search criteria. Please try adjusting your filters, using different keywords, or broadening your search parameters to find what you are looking for.',
    icon: (
      <svg
        className="h-full w-full"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    ),
    footer: (
      <div className="flex flex-col gap-2">
        <Button size="sm">Clear Filters</Button>
        <Button size="sm" variant="ghost">
          View All Items
        </Button>
      </div>
    ),
  },
};
