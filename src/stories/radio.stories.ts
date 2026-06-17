import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from 'storybook/test';

import { RadioComponent } from '../app/app/components/radio/radio.component';

const meta: Meta<RadioComponent> = {
  title: 'Form/Radio',
  component: RadioComponent,
  tags: ['autodocs'],
  args: { onChange: fn() },
};

export default meta;
type Story = StoryObj<RadioComponent>;

export const Default: Story = {
  args: { label: 'Option 1', name: 'example', value: '1', checked: false },
};
