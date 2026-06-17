import type { Meta, StoryObj } from '@storybook/angular';
import { CardSliderComponent } from '../app/app/components/card-slider/card-slider.component';
import { CardComponent } from '../app/app/components/card/card.component';

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
      <app-card-slider>
        <app-card title="One"></app-card>
        <app-card title="Two"></app-card>
        <app-card title="Three"></app-card>
      </app-card-slider>
    `,
  }),
};
