import type { Meta, StoryObj } from '@storybook/react-vite';
import { Grid } from './Grid';
import { TextInput } from '../fields/TextInput';

const meta: Meta<typeof Grid> = {
  title: 'Components/Layout/Grid',
  component: Grid,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Grid>;

const SampleBox = ({ children }: { children: React.ReactNode }) => (
  <div className="rounded-lg bg-primary-100 dark:bg-primary-900/20 p-4 text-center text-sm text-primary-900 dark:text-primary-100">
    {children}
  </div>
);

export const Default: Story = {
  args: {
    columns: 2,
    children: (
      <>
        <SampleBox>Column 1</SampleBox>
        <SampleBox>Column 2</SampleBox>
        <SampleBox>Column 3</SampleBox>
        <SampleBox>Column 4</SampleBox>
      </>
    ),
  },
};

export const ThreeColumns: Story = {
  args: {
    columns: 3,
    children: (
      <>
        <SampleBox>Column 1</SampleBox>
        <SampleBox>Column 2</SampleBox>
        <SampleBox>Column 3</SampleBox>
        <SampleBox>Column 4</SampleBox>
        <SampleBox>Column 5</SampleBox>
        <SampleBox>Column 6</SampleBox>
      </>
    ),
  },
};

export const FourColumns: Story = {
  args: {
    columns: 4,
    children: (
      <>
        <SampleBox>Column 1</SampleBox>
        <SampleBox>Column 2</SampleBox>
        <SampleBox>Column 3</SampleBox>
        <SampleBox>Column 4</SampleBox>
      </>
    ),
  },
};

export const Responsive: Story = {
  args: {
    columns: {
      default: 1,
      sm: 2,
      md: 3,
      lg: 4,
    },
    children: (
      <>
        <SampleBox>Column 1</SampleBox>
        <SampleBox>Column 2</SampleBox>
        <SampleBox>Column 3</SampleBox>
        <SampleBox>Column 4</SampleBox>
        <SampleBox>Column 5</SampleBox>
        <SampleBox>Column 6</SampleBox>
        <SampleBox>Column 7</SampleBox>
        <SampleBox>Column 8</SampleBox>
      </>
    ),
  },
};

export const WithFormFields: Story = {
  args: {
    columns: {
      default: 1,
      md: 2,
    },
    children: (
      <>
        <TextInput name="firstName" label="First Name" placeholder="John" />
        <TextInput name="lastName" label="Last Name" placeholder="Doe" />
        <TextInput name="email" label="Email" type="email" placeholder="john@example.com" />
        <TextInput name="phone" label="Phone" type="tel" placeholder="+1 (555) 123-4567" />
      </>
    ),
  },
};

export const ComplexLayout: Story = {
  args: {
    columns: {
      default: 1,
      lg: 3,
    },
    children: (
      <>
        <TextInput name="street" label="Street Address" placeholder="123 Main St" />
        <TextInput name="city" label="City" placeholder="New York" />
        <TextInput name="state" label="State" placeholder="NY" />
        <TextInput name="zip" label="ZIP Code" placeholder="10001" />
        <TextInput name="country" label="Country" placeholder="USA" />
      </>
    ),
  },
};

export const NestedGrids: Story = {
  render: () => (
    <div className="space-y-6">
      <Grid columns={2}>
        <div className="space-y-4">
          <h3 className="text-sm font-medium text-gray-950 dark:text-white">Left Column</h3>
          <Grid columns={1}>
            <TextInput name="field1" label="Field 1" placeholder="Value 1" />
            <TextInput name="field2" label="Field 2" placeholder="Value 2" />
          </Grid>
        </div>
        <div className="space-y-4">
          <h3 className="text-sm font-medium text-gray-950 dark:text-white">Right Column</h3>
          <Grid columns={1}>
            <TextInput name="field3" label="Field 3" placeholder="Value 3" />
            <TextInput name="field4" label="Field 4" placeholder="Value 4" />
          </Grid>
        </div>
      </Grid>
    </div>
  ),
};
