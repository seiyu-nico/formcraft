import type { Meta, StoryObj } from '@storybook/react';
import { Slider } from './Slider';

const meta = {
  title: 'Molecules/Slider',
  component: Slider,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: 'volume',
    label: 'Volume',
  },
  render: (args) => (
    <div className="w-[400px]">
      <Slider {...args} />
    </div>
  ),
};

export const WithValue: Story = {
  args: {
    name: 'brightness',
    label: 'Brightness',
    showValue: true,
    defaultValue: 50,
  },
  render: (args) => (
    <div className="w-[400px]">
      <Slider {...args} />
    </div>
  ),
};

export const CustomRange: Story = {
  args: {
    name: 'price',
    label: 'Price Range',
    min: 0,
    max: 1000,
    step: 50,
    defaultValue: 500,
    showValue: true,
  },
  render: (args) => (
    <div className="w-[400px]">
      <Slider {...args} />
    </div>
  ),
};

export const FormattedValue: Story = {
  args: {
    name: 'temperature',
    label: 'Temperature',
    min: -20,
    max: 40,
    step: 1,
    defaultValue: 20,
    showValue: true,
    formatValue: (value) => `${value}°C`,
  },
  render: (args) => (
    <div className="w-[400px]">
      <Slider {...args} />
    </div>
  ),
};

export const Percentage: Story = {
  args: {
    name: 'opacity',
    label: 'Opacity',
    min: 0,
    max: 100,
    step: 5,
    defaultValue: 75,
    showValue: true,
    formatValue: (value) => `${value}%`,
  },
  render: (args) => (
    <div className="w-[400px]">
      <Slider {...args} />
    </div>
  ),
};

export const Currency: Story = {
  args: {
    name: 'budget',
    label: 'Budget',
    min: 0,
    max: 10000,
    step: 100,
    defaultValue: 5000,
    showValue: true,
    formatValue: (value) => `$${value.toLocaleString()}`,
  },
  render: (args) => (
    <div className="w-[400px]">
      <Slider {...args} />
    </div>
  ),
};

export const WithHelperText: Story = {
  args: {
    name: 'quality',
    label: 'Image Quality',
    helperText: 'Higher quality results in larger file sizes',
    min: 1,
    max: 100,
    defaultValue: 80,
    showValue: true,
  },
  render: (args) => (
    <div className="w-[400px]">
      <Slider {...args} />
    </div>
  ),
};

export const Required: Story = {
  args: {
    name: 'required_slider',
    label: 'Required Slider',
    required: true,
    defaultValue: 50,
    showValue: true,
  },
  render: (args) => (
    <div className="w-[400px]">
      <Slider {...args} />
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    name: 'disabled_slider',
    label: 'Disabled Slider',
    disabled: true,
    defaultValue: 60,
    showValue: true,
  },
  render: (args) => (
    <div className="w-[400px]">
      <Slider {...args} />
    </div>
  ),
};

export const ReadOnly: Story = {
  args: {
    name: 'readonly_slider',
    label: 'Read-only Slider',
    readOnly: true,
    defaultValue: 75,
    showValue: true,
  },
  render: (args) => (
    <div className="w-[400px]">
      <Slider {...args} />
    </div>
  ),
};

export const WithValidation: Story = {
  args: {
    name: 'validated_slider',
    label: 'Age (must be 18 or older)',
    min: 0,
    max: 100,
    defaultValue: 16,
    showValue: true,
    validate: (value) => {
      if (value < 18) {
        return 'You must be at least 18 years old';
      }
      return undefined;
    },
  },
  render: (args) => (
    <div className="w-[400px]">
      <Slider {...args} />
    </div>
  ),
};

export const FineControl: Story = {
  args: {
    name: 'precision',
    label: 'Precision Control',
    min: 0,
    max: 10,
    step: 0.1,
    defaultValue: 5.5,
    showValue: true,
  },
  render: (args) => (
    <div className="w-[400px]">
      <Slider {...args} />
    </div>
  ),
};

export const Rating: Story = {
  args: {
    name: 'rating',
    label: 'Rate this product',
    min: 1,
    max: 5,
    step: 1,
    defaultValue: 3,
    showValue: true,
    formatValue: (value) => '⭐'.repeat(value),
  },
  render: (args) => (
    <div className="w-[400px]">
      <Slider {...args} />
    </div>
  ),
};
