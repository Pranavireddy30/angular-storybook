import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from 'storybook/test';
import { PopupComponent } from '../app/components/popup/popup.component';

const meta: Meta<PopupComponent> = {
  title: 'Overlay/Popup',
  component: PopupComponent,
  tags: ['autodocs'],
  args: { close: fn() },
};

export default meta;
type Story = StoryObj<PopupComponent>;

export const Default: Story = {
  args: { open: true, title: 'Preview Popup' },
  render: args => ({ props: args, template: `<lib-popup [open]="open" [title]="title">Hello popup</lib-popup>` }),
};
