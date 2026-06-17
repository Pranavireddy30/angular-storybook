import type { Meta, StoryObj } from '@storybook/angular';
import { PieChartComponent } from '../app/app/components/pie-chart/pie-chart.component';

const meta: Meta<PieChartComponent> = {
  title: 'Data/PieChart',
  component: PieChartComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<PieChartComponent>;

export const Default: Story = {
  args: { slices: [ { label: 'A', value: 30, color: '#ff7f50' }, { label: 'B', value: 50, color: '#87ceeb' }, { label: 'C', value: 20, color: '#ffd700' } ] },
};
