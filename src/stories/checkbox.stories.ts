import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from 'storybook/test';

import { CheckboxComponent } from '../app/components/checkbox/checkbox.component';

const meta: Meta<CheckboxComponent> = {
  title: 'Form/Checkbox',
  component: CheckboxComponent,
  tags: ['autodocs'],
  args: { onChange: fn() },
};

export default meta;
type Story = StoryObj<CheckboxComponent>;

export const Default: Story = {
  args: { label: 'Accept terms', checked: false },
};
