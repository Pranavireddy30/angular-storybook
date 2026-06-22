import type { Meta, StoryObj } from '@storybook/angular';
import { StepperHorizontalComponent } from '../app/components/stepper-horizontal/stepper-horizontal.component';

const meta: Meta<StepperHorizontalComponent> = {
  title: 'Navigation/StepperHorizontal',
  component: StepperHorizontalComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<StepperHorizontalComponent>;

export const Default: Story = { args: { steps: ['Shipping','Payment','Review'] } };
