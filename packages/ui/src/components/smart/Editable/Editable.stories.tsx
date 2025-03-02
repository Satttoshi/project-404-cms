import type { Meta, StoryObj } from '@storybook/react';
import { Editable } from './Editable';
import { EditText } from '../../core/Text';
import { Text } from '../../core/Text';

const meta: Meta<typeof Editable> = {
  title: 'Components/Editable',
  component: Editable,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Editable>;

export const Default: Story = {
  args: {
    initialValue: 'Initial text value',
    onSave: (newValue) => console.log('Saved:', newValue),
    editComponent: EditText,
    displayComponent: Text,
  },
};
