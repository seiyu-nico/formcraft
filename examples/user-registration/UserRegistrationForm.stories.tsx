import type { Meta, StoryObj } from '@storybook/react-vite';
import { UserRegistrationForm } from './UserRegistrationForm';

const meta: Meta<typeof UserRegistrationForm> = {
  title: 'Examples/User Registration',
  component: UserRegistrationForm,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: `
A comprehensive user registration form showcasing the usage of multiple FormCraft components:

- **Multiple Sections**: Organized form fields into logical groups
- **Grid Layout**: Responsive column layouts for better space utilization
- **Field Validation**: Built-in validation for required fields and formats
- **Collapsible Sections**: Optional sections can be collapsed to reduce clutter
- **Icons**: Visual indicators for each section
- **Mixed Field Types**: TextInput and TextArea components working together

This example demonstrates how to build a real-world form using FormCraft components.
        `,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof UserRegistrationForm>;

export const Default: Story = {};
