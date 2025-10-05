import type { Meta, StoryObj } from '@storybook/react';
import { CheckboxList } from './CheckboxList';

const meta = {
  title: 'Components/Fields/CheckboxList',
  component: CheckboxList,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CheckboxList>;

export default meta;
type Story = StoryObj<typeof meta>;

const technologyOptions = [
  { value: 'react', label: 'React' },
  { value: 'vue', label: 'Vue' },
  { value: 'angular', label: 'Angular' },
  { value: 'svelte', label: 'Svelte' },
];

const technologyOptionsWithDescriptions = [
  {
    value: 'react',
    label: 'React',
    description: 'A JavaScript library for building user interfaces'
  },
  {
    value: 'vue',
    label: 'Vue.js',
    description: 'The Progressive JavaScript Framework'
  },
  {
    value: 'angular',
    label: 'Angular',
    description: 'Platform for building mobile and desktop applications'
  },
  {
    value: 'svelte',
    label: 'Svelte',
    description: 'Cybernetically enhanced web apps'
  },
];

const manyOptions = Array.from({ length: 20 }, (_, i) => ({
  value: `option-${i + 1}`,
  label: `Option ${i + 1}`,
  description: `Description for option ${i + 1}`,
}));

export const Default: Story = {
  args: {
    name: 'technologies',
    label: 'Favorite Technologies',
    options: technologyOptions,
  },
};

export const WithHelperText: Story = {
  args: {
    name: 'technologies',
    label: 'Select Technologies',
    helperText: 'Choose all the technologies you are familiar with',
    options: technologyOptions,
  },
};

export const WithDescriptions: Story = {
  args: {
    name: 'technologies',
    label: 'Favorite Technologies',
    options: technologyOptionsWithDescriptions,
  },
};

export const Required: Story = {
  args: {
    name: 'technologies',
    label: 'Required Selection',
    required: true,
    helperText: 'Please select at least one option',
    options: technologyOptions,
  },
};

export const Disabled: Story = {
  args: {
    name: 'technologies',
    label: 'Disabled List',
    disabled: true,
    defaultValue: ['react', 'vue'],
    options: technologyOptions,
  },
};

export const WithDisabledOptions: Story = {
  args: {
    name: 'technologies',
    label: 'Some Options Disabled',
    options: [
      { value: 'react', label: 'React' },
      { value: 'vue', label: 'Vue', disabled: true },
      { value: 'angular', label: 'Angular' },
      { value: 'svelte', label: 'Svelte', disabled: true },
    ],
  },
};

export const WithDefaultValues: Story = {
  args: {
    name: 'technologies',
    label: 'Pre-selected Options',
    defaultValue: ['react', 'svelte'],
    options: technologyOptions,
    helperText: 'React and Svelte are pre-selected',
  },
};

export const WithColumns: Story = {
  args: {
    name: 'technologies',
    label: 'Grid Layout (2 columns)',
    columns: 2,
    options: technologyOptionsWithDescriptions,
  },
};

export const ThreeColumns: Story = {
  args: {
    name: 'options',
    label: 'Grid Layout (3 columns)',
    columns: 3,
    options: Array.from({ length: 12 }, (_, i) => ({
      value: `option-${i + 1}`,
      label: `Option ${i + 1}`,
    })),
  },
};

export const Searchable: Story = {
  args: {
    name: 'technologies',
    label: 'Searchable List',
    searchable: true,
    options: manyOptions,
    helperText: 'Use the search box to filter options',
  },
};

export const BulkToggleable: Story = {
  args: {
    name: 'technologies',
    label: 'With Bulk Actions',
    bulkToggleable: true,
    options: technologyOptionsWithDescriptions,
    helperText: 'Use "Select all" or "Deselect all" buttons',
  },
};

export const SearchableAndBulkToggleable: Story = {
  args: {
    name: 'options',
    label: 'Searchable with Bulk Actions',
    searchable: true,
    bulkToggleable: true,
    options: manyOptions,
  },
};

export const WithValidation: Story = {
  args: {
    name: 'technologies',
    label: 'Select At Least 2',
    required: true,
    options: technologyOptions,
    validate: (value) => {
      if (value.length < 2) return 'Please select at least 2 technologies';
      return undefined;
    },
  },
};

export const WithError: Story = {
  args: {
    name: 'technologies',
    label: 'With Error',
    options: technologyOptions,
    validate: () => 'This field has an error',
  },
};

export const ManyOptions: Story = {
  args: {
    name: 'options',
    label: 'Large List',
    searchable: true,
    bulkToggleable: true,
    columns: 2,
    options: Array.from({ length: 30 }, (_, i) => ({
      value: `option-${i + 1}`,
      label: `Option ${i + 1}`,
      description: `This is the description for option ${i + 1}`,
    })),
  },
};
