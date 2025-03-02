import type { Meta, StoryObj } from '@storybook/react';
import { EditableContent } from './EditableContent';
import { EditText } from '../../core/Text/EditText';
import { Text } from '../../core/Text';

const meta: Meta<typeof EditableContent> = {
  title: 'Components/EditableContent',
  component: EditableContent,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof EditableContent>;

export const Default: Story = {
  args: {
    initialValue: 'Initial text value',
    onSave: (newValue) => console.log('Saved:', newValue),
    editComponent: EditText,
    displayComponent: Text,
  },
};
