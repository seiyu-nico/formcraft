import type { Meta, StoryObj } from '@storybook/react-vite';
import { UserRegistrationTwoColumn } from './UserRegistrationTwoColumn';

const meta: Meta<typeof UserRegistrationTwoColumn> = {
  title: 'Examples/User Registration',
  component: UserRegistrationTwoColumn,
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof UserRegistrationTwoColumn>;

export const TwoColumnSections: Story = {};
