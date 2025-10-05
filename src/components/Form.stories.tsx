import type { Meta, StoryObj } from '@storybook/react';
import { Form } from './Form';
import { TextInput } from './fields/TextInput';
import { TextArea } from './fields/TextArea';
import { Section } from './layout/Section';

const meta = {
  title: 'Components/Form',
  component: Form,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Form>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="w-[600px]">
      <Form
        onSubmit={(values) => {
          console.log('Form submitted:', values);
          alert(JSON.stringify(values, null, 2));
        }}
      >
        <TextInput
          name="name"
          label="Name"
          placeholder="Enter your name"
          required
        />

        <TextInput
          name="email"
          label="Email"
          type="email"
          placeholder="your.email@example.com"
          required
        />

        <TextArea
          name="message"
          label="Message"
          placeholder="Enter your message"
          rows={4}
        />

        <button
          type="submit"
          className="w-full rounded-lg bg-primary-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2 transition dark:bg-primary-500 dark:hover:bg-primary-400"
        >
          Submit
        </button>
      </Form>
    </div>
  ),
};

export const WithValidation: Story = {
  render: () => (
    <div className="w-[600px]">
      <Form
        onSubmit={(values) => {
          console.log('Form submitted:', values);
          alert('Form submitted successfully!\n\n' + JSON.stringify(values, null, 2));
        }}
        validate={(values) => {
          const errors: Record<string, string> = {};

          if (!values.email) {
            errors.email = 'Email is required';
          } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email as string)) {
            errors.email = 'Invalid email address';
          }

          if (!values.password) {
            errors.password = 'Password is required';
          } else if ((values.password as string).length < 8) {
            errors.password = 'Password must be at least 8 characters';
          }

          return errors;
        }}
      >
        <TextInput
          name="email"
          label="Email"
          type="email"
          placeholder="your.email@example.com"
          required
        />

        <TextInput
          name="password"
          label="Password"
          type="password"
          placeholder="Enter your password"
          required
          revealable
        />

        <button
          type="submit"
          className="w-full rounded-lg bg-primary-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2 transition dark:bg-primary-500 dark:hover:bg-primary-400"
        >
          Sign In
        </button>
      </Form>
    </div>
  ),
};

export const WithInitialValues: Story = {
  render: () => (
    <div className="w-[600px]">
      <Form
        initialValues={{
          name: 'John Doe',
          email: 'john@example.com',
          bio: 'Software developer',
        }}
        onSubmit={(values) => {
          console.log('Form submitted:', values);
          alert('Profile updated!\n\n' + JSON.stringify(values, null, 2));
        }}
      >
        <TextInput
          name="name"
          label="Name"
          defaultValue="John Doe"
        />

        <TextInput
          name="email"
          label="Email"
          type="email"
          defaultValue="john@example.com"
        />

        <TextArea
          name="bio"
          label="Bio"
          defaultValue="Software developer"
          rows={3}
        />

        <button
          type="submit"
          className="w-full rounded-lg bg-primary-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2 transition dark:bg-primary-500 dark:hover:bg-primary-400"
        >
          Update Profile
        </button>
      </Form>
    </div>
  ),
};

export const UserRegistration: Story = {
  render: () => (
    <div className="w-[700px]">
      <Form
        onSubmit={(values) => {
          console.log('Registration submitted:', values);
          alert('Registration successful!\n\n' + JSON.stringify(values, null, 2));
        }}
      >
        <Section heading="Account Information" description="Create your account">
          <TextInput
            name="username"
            label="Username"
            placeholder="johndoe"
            required
            helperText="This will be your unique identifier"
          />

          <TextInput
            name="email"
            label="Email Address"
            type="email"
            placeholder="john@example.com"
            required
          />

          <TextInput
            name="password"
            label="Password"
            type="password"
            placeholder="Enter a strong password"
            required
            revealable
            helperText="Must be at least 8 characters"
          />
        </Section>

        <Section heading="Personal Information" description="Tell us about yourself">
          <TextInput
            name="firstName"
            label="First Name"
            placeholder="John"
            required
          />

          <TextInput
            name="lastName"
            label="Last Name"
            placeholder="Doe"
            required
          />

          <TextArea
            name="bio"
            label="Bio"
            placeholder="Tell us about yourself..."
            rows={4}
            helperText="Optional"
          />
        </Section>

        <div className="flex gap-3">
          <button
            type="button"
            className="flex-1 rounded-lg bg-white px-4 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-gray-300 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2 transition dark:bg-white/5 dark:text-white dark:ring-white/10 dark:hover:bg-white/10"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="flex-1 rounded-lg bg-primary-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2 transition dark:bg-primary-500 dark:hover:bg-primary-400"
          >
            Create Account
          </button>
        </div>
      </Form>
    </div>
  ),
};
