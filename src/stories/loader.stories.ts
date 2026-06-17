import type { Meta, StoryObj } from '@storybook/angular';
import { LoaderComponent } from '../app/app/components/loader/loader.component';

const meta: Meta<LoaderComponent> = {
  title: 'Feedback/Loader',
  component: LoaderComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<LoaderComponent>;

export const Default: Story = { args: { size: 48 } };
