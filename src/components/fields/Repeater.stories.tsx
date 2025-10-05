import type { Meta, StoryObj } from '@storybook/react';
import { Repeater } from './Repeater';
import { TextInput } from './TextInput';
import { Select } from './Select';

const meta = {
  title: 'Components/Fields/Repeater',
  component: Repeater,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Repeater>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: 'items',
    label: 'Items',
    children: (item, index, updateItem) => (
      <TextInput
        name={`items[${index}].value`}
        label="Value"
        defaultValue={item.value || ''}
        onChange={(value) => updateItem({ value })}
      />
    ),
  },
  render: (args) => (
    <div className="w-[600px]">
      <Repeater {...args} />
    </div>
  ),
};

export const MultipleFields: Story = {
  args: {
    name: 'members',
    label: 'Team Members',
    children: (item, index, updateItem) => (
      <div className="grid grid-cols-2 gap-4">
        <TextInput
          name={`members[${index}].name`}
          label="Name"
          defaultValue={item.name || ''}
          onChange={(value) => updateItem({ name: value })}
        />
        <TextInput
          name={`members[${index}].email`}
          label="Email"
          type="email"
          defaultValue={item.email || ''}
          onChange={(value) => updateItem({ email: value })}
        />
      </div>
    ),
  },
  render: (args) => (
    <div className="w-[600px]">
      <Repeater {...args} />
    </div>
  ),
};

export const WithDefaultValues: Story = {
  args: {
    name: 'contacts',
    label: 'Contacts',
    defaultValue: [
      { id: '1', name: 'John Doe', email: 'john@example.com' },
      { id: '2', name: 'Jane Smith', email: 'jane@example.com' },
    ],
    children: (item, index, updateItem) => (
      <div className="grid grid-cols-2 gap-4">
        <TextInput
          name={`contacts[${index}].name`}
          label="Name"
          defaultValue={item.name || ''}
          onChange={(value) => updateItem({ name: value })}
        />
        <TextInput
          name={`contacts[${index}].email`}
          label="Email"
          type="email"
          defaultValue={item.email || ''}
          onChange={(value) => updateItem({ email: value })}
        />
      </div>
    ),
  },
  render: (args) => (
    <div className="w-[600px]">
      <Repeater {...args} />
    </div>
  ),
};

export const WithSelectFields: Story = {
  args: {
    name: 'roles',
    label: 'User Roles',
    children: (item, index, updateItem) => (
      <div className="grid grid-cols-2 gap-4">
        <TextInput
          name={`roles[${index}].name`}
          label="Name"
          defaultValue={item.name || ''}
          onChange={(value) => updateItem({ name: value })}
        />
        <Select
          name={`roles[${index}].role`}
          label="Role"
          options={[
            { value: 'member', label: 'Member' },
            { value: 'admin', label: 'Administrator' },
            { value: 'owner', label: 'Owner' },
          ]}
          defaultValue={item.role || ''}
          onChange={(value) => updateItem({ role: value })}
        />
      </div>
    ),
  },
  render: (args) => (
    <div className="w-[600px]">
      <Repeater {...args} />
    </div>
  ),
};

export const WithMinItems: Story = {
  args: {
    name: 'required_items',
    label: 'Required Items (Min: 2)',
    minItems: 2,
    defaultValue: [{ id: '1' }, { id: '2' }],
    helperText: 'You must have at least 2 items',
    children: (item, index, updateItem) => (
      <TextInput
        name={`required_items[${index}].value`}
        label="Value"
        defaultValue={item.value || ''}
        onChange={(value) => updateItem({ value })}
      />
    ),
  },
  render: (args) => (
    <div className="w-[600px]">
      <Repeater {...args} />
    </div>
  ),
};

export const WithMaxItems: Story = {
  args: {
    name: 'limited_items',
    label: 'Limited Items (Max: 3)',
    maxItems: 3,
    helperText: 'You can add up to 3 items',
    children: (item, index, updateItem) => (
      <TextInput
        name={`limited_items[${index}].value`}
        label="Value"
        defaultValue={item.value || ''}
        onChange={(value) => updateItem({ value })}
      />
    ),
  },
  render: (args) => (
    <div className="w-[600px]">
      <Repeater {...args} />
    </div>
  ),
};

export const Required: Story = {
  args: {
    name: 'required_repeater',
    label: 'Required Repeater',
    required: true,
    children: (item, index, updateItem) => (
      <TextInput
        name={`required_repeater[${index}].value`}
        label="Value"
        required
        defaultValue={item.value || ''}
        onChange={(value) => updateItem({ value })}
      />
    ),
  },
  render: (args) => (
    <div className="w-[600px]">
      <Repeater {...args} />
    </div>
  ),
};

export const Disabled: Story = {
  args: {
    name: 'disabled_repeater',
    label: 'Disabled Repeater',
    disabled: true,
    defaultValue: [
      { id: '1', value: 'Item 1' },
      { id: '2', value: 'Item 2' },
    ],
    children: (item, index, updateItem) => (
      <TextInput
        name={`disabled_repeater[${index}].value`}
        label="Value"
        disabled
        defaultValue={item.value || ''}
        onChange={(value) => updateItem({ value })}
      />
    ),
  },
  render: (args) => (
    <div className="w-[600px]">
      <Repeater {...args} />
    </div>
  ),
};

export const ReadOnly: Story = {
  args: {
    name: 'readonly_repeater',
    label: 'Read-only Repeater',
    readOnly: true,
    defaultValue: [
      { id: '1', value: 'Item 1' },
      { id: '2', value: 'Item 2' },
    ],
    children: (item, index, updateItem) => (
      <TextInput
        name={`readonly_repeater[${index}].value`}
        label="Value"
        readOnly
        defaultValue={item.value || ''}
        onChange={(value) => updateItem({ value })}
      />
    ),
  },
  render: (args) => (
    <div className="w-[600px]">
      <Repeater {...args} />
    </div>
  ),
};

export const NotReorderable: Story = {
  args: {
    name: 'not_reorderable',
    label: 'Not Reorderable',
    reorderable: false,
    defaultValue: [
      { id: '1', value: 'Item 1' },
      { id: '2', value: 'Item 2' },
      { id: '3', value: 'Item 3' },
    ],
    children: (item, index, updateItem) => (
      <TextInput
        name={`not_reorderable[${index}].value`}
        label="Value"
        defaultValue={item.value || ''}
        onChange={(value) => updateItem({ value })}
      />
    ),
  },
  render: (args) => (
    <div className="w-[600px]">
      <Repeater {...args} />
    </div>
  ),
};

export const CustomItemLabel: Story = {
  args: {
    name: 'custom_label',
    label: 'Custom Item Labels',
    itemLabel: (item, index) => item.name || `Item ${index + 1}`,
    defaultValue: [
      { id: '1', name: 'First Item' },
      { id: '2', name: 'Second Item' },
    ],
    children: (item, index, updateItem) => (
      <TextInput
        name={`custom_label[${index}].name`}
        label="Name"
        defaultValue={item.name || ''}
        onChange={(value) => updateItem({ name: value })}
      />
    ),
  },
  render: (args) => (
    <div className="w-[600px]">
      <Repeater {...args} />
    </div>
  ),
};

export const WithValidation: Story = {
  args: {
    name: 'validated_repeater',
    label: 'Validated Repeater',
    validate: (items) => {
      if (items.length < 2) {
        return 'You must have at least 2 items';
      }
      return undefined;
    },
    children: (item, index, updateItem) => (
      <TextInput
        name={`validated_repeater[${index}].value`}
        label="Value"
        defaultValue={item.value || ''}
        onChange={(value) => updateItem({ value })}
      />
    ),
  },
  render: (args) => (
    <div className="w-[600px]">
      <Repeater {...args} />
    </div>
  ),
};

export const CustomAddLabel: Story = {
  args: {
    name: 'custom_add_label',
    label: 'Tasks',
    addActionLabel: 'Add new task',
    children: (item, index, updateItem) => (
      <TextInput
        name={`custom_add_label[${index}].task`}
        label="Task"
        defaultValue={item.task || ''}
        onChange={(value) => updateItem({ task: value })}
      />
    ),
  },
  render: (args) => (
    <div className="w-[600px]">
      <Repeater {...args} />
    </div>
  ),
};
