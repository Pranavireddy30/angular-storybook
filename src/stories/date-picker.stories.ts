import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from 'storybook/test';
import { DatePickerComponent } from '../app/app/components/date-picker/date-picker.component';

const meta: Meta<DatePickerComponent> = {
  title: 'Form/DatePicker',
  component: DatePickerComponent,
  tags: ['autodocs'],
  args: { onChange: fn() },
};

export default meta;
type Story = StoryObj<DatePickerComponent>;

export const Default: Story = { args: {} };
