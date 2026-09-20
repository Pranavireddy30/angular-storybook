import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from 'storybook/test';
import { IconKebabComponent } from '../app/components/icon-kebab/icon-kebab.component';

const meta: Meta<IconKebabComponent> = {
  title: 'Icons/Kebab',
  component: IconKebabComponent,
  tags: ['autodocs'],
  args: { onClick: fn(), open: true },
};

export default meta;
type Story = StoryObj<IconKebabComponent>;

export const Default: Story = {
  render: args => ({
    props: args,
    template: `
      <div style="padding: 24px; min-height: 220px;">
        <lib-icon-kebab [open]="open" [items]="items" [placement]="'right'"></lib-icon-kebab>
      </div>
    `,
  }),
  args: {
    open: true,
    items: [
      { label: 'Add to Trip', icon: '+' },
      { label: 'Request Policy Exemption', icon: '!' },
      { label: 'Replay Transaction', icon: '↺' },
    ],
  },
};
