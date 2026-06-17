import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from 'storybook/test';

import { DropdownComponent } from '../app/app/components/dropdown/dropdown.component';

const meta: Meta<DropdownComponent> = {
  title: 'Form/Dropdown',
  component: DropdownComponent,
  tags: ['autodocs'],
  args: { onSelect: fn() },
};

export default meta;
type Story = StoryObj<DropdownComponent>;

export const Default: Story = {
  args: {
    options: [
      { label: 'Option A', value: 'a' },
      { label: 'Option B', value: 'b' },
      { label: 'Option C', value: 'c' },
    ],
    placeholder: 'Choose an option',
  },
};
