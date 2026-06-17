import type { Meta, StoryObj } from '@storybook/angular';
import { StepperVerticalComponent } from '../app/app/components/stepper-vertical/stepper-vertical.component';

const meta: Meta<StepperVerticalComponent> = {
  title: 'Navigation/StepperVertical',
  component: StepperVerticalComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<StepperVerticalComponent>;

export const Default: Story = { args: { steps: ['Step A','Step B','Step C'] } };
