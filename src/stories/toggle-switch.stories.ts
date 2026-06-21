import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from 'storybook/test';
import { ToggleSwitchComponent } from '../app/components/toggle-switch/toggle-switch.component';

const meta: Meta<ToggleSwitchComponent> = {
  title: 'Form/ToggleSwitch',
  component: ToggleSwitchComponent,
  tags: ['autodocs'],
  args: { change: fn() },
};

export default meta;
type Story = StoryObj<ToggleSwitchComponent>;

export const Default: Story = { args: { checked: false } };
