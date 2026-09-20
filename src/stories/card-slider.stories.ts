import type { Meta, StoryObj } from '@storybook/angular';
import { moduleMetadata } from '@storybook/angular';
import { CardSliderComponent } from '../app/components/card-slider/card-slider.component';
import { CardComponent } from '../app/components/card/card.component';

const meta: Meta<CardSliderComponent> = {
  title: 'Layout/CardSlider',
  component: CardSliderComponent,
  tags: ['autodocs'],
  decorators: [
    moduleMetadata({
      imports: [CardSliderComponent, CardComponent],
    }),
  ],
};

export default meta;
type Story = StoryObj<CardSliderComponent>;

export const Default: Story = {
  render: () => ({
    template: `
      <div style="width: 100%; padding: 20px; background: #f5f5f5;">
        <h2>Card Slider with 3 Cards Visible</h2>
        <lib-card-slider [cardsPerView]="3">
          <lib-card 
            title="Card 1" 
            subtitle="First item"
            [elevated]="true">
            <p>This is the first card in the slider.</p>
          </lib-card>
          <lib-card 
            title="Card 2" 
            subtitle="Second item"
            [elevated]="true">
            <p>This is the second card in the slider.</p>
          </lib-card>
          <lib-card 
            title="Card 3" 
            subtitle="Third item"
            [elevated]="true">
            <p>This is the third card in the slider.</p>
          </lib-card>
          <lib-card 
            title="Card 4" 
            subtitle="Fourth item"
            [elevated]="true">
            <p>This is the fourth card in the slider.</p>
          </lib-card>
          <lib-card 
            title="Card 5" 
            subtitle="Fifth item"
            [elevated]="true">
            <p>This is the fifth card in the slider.</p>
          </lib-card>
          <lib-card 
            title="Card 6" 
            subtitle="Sixth item"
            [elevated]="true">
            <p>This is the sixth card in the slider.</p>
          </lib-card>
        </lib-card-slider>
      </div>
    `,
  }),
};

export const TwoCardsVisible: Story = {
  render: () => ({
    template: `
      <div style="width: 100%; padding: 20px; background: #f5f5f5;">
        <h2>Card Slider with 2 Cards Visible</h2>
        <lib-card-slider [cardsPerView]="2">
          <lib-card 
            title="Product A" 
            subtitle="Electronics"
            [elevated]="true">
            <p>Premium quality product</p>
          </lib-card>
          <lib-card 
            title="Product B" 
            subtitle="Electronics"
            [elevated]="true">
            <p>Best seller item</p>
          </lib-card>
          <lib-card 
            title="Product C" 
            subtitle="Electronics"
            [elevated]="true">
            <p>Latest collection</p>
          </lib-card>
          <lib-card 
            title="Product D" 
            subtitle="Electronics"
            [elevated]="true">
            <p>Customer favorite</p>
          </lib-card>
        </lib-card-slider>
      </div>
    `,
  }),
};
