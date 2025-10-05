import type { Meta, StoryObj } from '@storybook/react-vite';
import { UserRegistrationWithSidebar } from './UserRegistrationWithSidebar';

const meta: Meta<typeof UserRegistrationWithSidebar> = {
  title: 'Examples/User Registration',
  component: UserRegistrationWithSidebar,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof UserRegistrationWithSidebar>;

export const WithSidebar: Story = {};
