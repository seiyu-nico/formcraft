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
  render: (args) => (
    <div className="w-[600px]">
      <Repeater name="items" label="Items">
        <TextInput name="value" label="Value" />
      </Repeater>
    </div>
  ),
};

export const MultipleFields: Story = {
  render: (args) => (
    <div className="w-[600px]">
      <Repeater name="members" label="Team Members">
        <div className="grid grid-cols-2 gap-4">
          <TextInput name="name" label="Name" />
          <TextInput name="email" label="Email" type="email" />
        </div>
      </Repeater>
    </div>
  ),
};

export const WithDefaultValues: Story = {
  render: (args) => (
    <div className="w-[600px]">
      <Repeater
        name="contacts"
        label="Contacts"
        defaultValue={[
          { id: '1', name: 'John Doe', email: 'john@example.com' },
          { id: '2', name: 'Jane Smith', email: 'jane@example.com' },
        ]}
      >
        <div className="grid grid-cols-2 gap-4">
          <TextInput name="name" label="Name" />
          <TextInput name="email" label="Email" type="email" />
        </div>
      </Repeater>
    </div>
  ),
};

export const WithSelectFields: Story = {
  render: (args) => (
    <div className="w-[600px]">
      <Repeater name="roles" label="User Roles">
        <div className="grid grid-cols-2 gap-4">
          <TextInput name="name" label="Name" />
          <Select
            name="role"
            label="Role"
            options={[
              { value: 'member', label: 'Member' },
              { value: 'admin', label: 'Administrator' },
              { value: 'owner', label: 'Owner' },
            ]}
          />
        </div>
      </Repeater>
    </div>
  ),
};

export const WithMinItems: Story = {
  render: (args) => (
    <div className="w-[600px]">
      <Repeater
        name="required_items"
        label="Required Items (Min: 2)"
        minItems={2}
        defaultValue={[{ id: '1' }, { id: '2' }]}
        helperText="You must have at least 2 items"
      >
        <TextInput name="value" label="Value" />
      </Repeater>
    </div>
  ),
};

export const WithMaxItems: Story = {
  render: (args) => (
    <div className="w-[600px]">
      <Repeater
        name="limited_items"
        label="Limited Items (Max: 3)"
        maxItems={3}
        helperText="You can add up to 3 items"
      >
        <TextInput name="value" label="Value" />
      </Repeater>
    </div>
  ),
};

export const Required: Story = {
  render: (args) => (
    <div className="w-[600px]">
      <Repeater name="required_repeater" label="Required Repeater" required>
        <TextInput name="value" label="Value" required />
      </Repeater>
    </div>
  ),
};

export const Disabled: Story = {
  render: (args) => (
    <div className="w-[600px]">
      <Repeater
        name="disabled_repeater"
        label="Disabled Repeater"
        disabled
        defaultValue={[
          { id: '1', value: 'Item 1' },
          { id: '2', value: 'Item 2' },
        ]}
      >
        <TextInput name="value" label="Value" disabled />
      </Repeater>
    </div>
  ),
};

export const ReadOnly: Story = {
  render: (args) => (
    <div className="w-[600px]">
      <Repeater
        name="readonly_repeater"
        label="Read-only Repeater"
        readOnly
        defaultValue={[
          { id: '1', value: 'Item 1' },
          { id: '2', value: 'Item 2' },
        ]}
      >
        <TextInput name="value" label="Value" readOnly />
      </Repeater>
    </div>
  ),
};

export const NotReorderable: Story = {
  render: (args) => (
    <div className="w-[600px]">
      <Repeater
        name="not_reorderable"
        label="Not Reorderable"
        reorderable={false}
        defaultValue={[
          { id: '1', value: 'Item 1' },
          { id: '2', value: 'Item 2' },
          { id: '3', value: 'Item 3' },
        ]}
      >
        <TextInput name="value" label="Value" />
      </Repeater>
    </div>
  ),
};

export const CustomItemLabel: Story = {
  render: (args) => (
    <div className="w-[600px]">
      <Repeater
        name="custom_label"
        label="Custom Item Labels"
        itemLabel={(item, index) => item.name || `Item ${index + 1}`}
        defaultValue={[
          { id: '1', name: 'First Item' },
          { id: '2', name: 'Second Item' },
        ]}
      >
        <TextInput name="name" label="Name" />
      </Repeater>
    </div>
  ),
};

export const WithValidation: Story = {
  render: (args) => (
    <div className="w-[600px]">
      <Repeater
        name="validated_repeater"
        label="Validated Repeater"
        validate={(items) => {
          if (items.length < 2) {
            return 'You must have at least 2 items';
          }
          return undefined;
        }}
      >
        <TextInput name="value" label="Value" />
      </Repeater>
    </div>
  ),
};

export const CustomAddLabel: Story = {
  render: (args) => (
    <div className="w-[600px]">
      <Repeater name="custom_add_label" label="Tasks" addActionLabel="Add new task">
        <TextInput name="task" label="Task" />
      </Repeater>
    </div>
  ),
};
