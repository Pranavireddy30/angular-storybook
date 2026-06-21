import type { Meta, StoryObj } from '@storybook/angular';
import { GraphComponent } from '../app/components/graph/graph.component';

const meta: Meta<GraphComponent> = {
  title: 'Data/Graph',
  component: GraphComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<GraphComponent>;

export const Default: Story = { args: { data: [10, 20, 18, 30, 22, 40, 28] } };
