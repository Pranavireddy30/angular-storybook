import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from 'storybook/test';
import { IconKebabComponent } from '../app/components/icon-kebab/icon-kebab.component';

const meta: Meta<IconKebabComponent> = {
  title: 'Icons/Kebab',
  component: IconKebabComponent,
  tags: ['autodocs'],
  args: { onClick: fn() },
};

export default meta;
type Story = StoryObj<IconKebabComponent>;

export const Default: Story = { args: {} };
