import type { Meta, StoryObj } from '@storybook/angular';
import { BarGraphComponent } from '../app/app/components/bar-graph/bar-graph.component';

const meta: Meta<BarGraphComponent> = {
  title: 'Data/BarGraph',
  component: BarGraphComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<BarGraphComponent>;

export const Default: Story = {
  args: {
    data: [
      { label: 'Jan', value: 30 },
      { label: 'Feb', value: 50 },
      { label: 'Mar', value: 20 },
      { label: 'Apr', value: 60 },
    ],
    width: 360,
    height: 160,
  },
};
