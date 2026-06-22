import type { Meta, StoryObj } from '@storybook/angular';

import { CardComponent } from '../app/components/card/card.component';

const meta: Meta<CardComponent> = {
  title: 'Layout/Card',
  component: CardComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<CardComponent>;

export const Default: Story = {
  args: { title: 'Card title', subtitle: 'Card subtitle' },
};
