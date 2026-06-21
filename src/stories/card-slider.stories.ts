import type { Meta, StoryObj } from '@storybook/angular';
import { CardSliderComponent } from '../app/components/card-slider/card-slider.component';
import { CardComponent } from '../app/components/card/card.component';

const meta: Meta<CardSliderComponent> = {
  title: 'Layout/CardSlider',
  component: CardSliderComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<CardSliderComponent>;

export const Default: Story = {
  render: () => ({
    template: `
      <lib-card-slider>
        <lib-card title="One"></lib-card>
        <lib-card title="Two"></lib-card>
        <lib-card title="Three"></lib-card>
      </lib-card-slider>
    `,
  }),
};
