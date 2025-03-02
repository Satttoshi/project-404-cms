import type { Meta, StoryObj } from '@storybook/react';
import { Text } from './Text';

const meta: Meta<typeof Text> = {
  title: 'Components/Text',
  component: Text,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: {
    children: 'Default Text Content',
  },
};

export const WithLongContent: Story = {
  args: {
    children: 'This is a longer example of content inside the Text component to demonstrate how it handles larger amounts of text.',
  },
};
