import type { Meta, StoryObj } from '@storybook/react-vite';
import { Grid } from './Grid';

const meta: Meta<typeof Grid> = {
  title: 'Molecules/Grid',
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
