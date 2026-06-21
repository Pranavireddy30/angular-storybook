import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from 'storybook/test';
import { InputComponent } from '../app/components/input/input.component';

const meta: Meta<InputComponent> = {
  title: 'Form/Input',
  component: InputComponent,
  tags: ['autodocs'],
  args: { onInput: fn(), onChange: fn() },
};

export default meta;
type Story = StoryObj<InputComponent>;

export const Text: Story = { args: { placeholder: 'Enter text', type: 'text' } };
export const Password: Story = { args: { placeholder: 'Enter password', type: 'password' } };
