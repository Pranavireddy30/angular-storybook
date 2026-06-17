import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from 'storybook/test';
import { PasswordInputComponent } from '../app/app/components/password-input/password-input.component';

const meta: Meta<PasswordInputComponent> = {
  title: 'Form/PasswordInput',
  component: PasswordInputComponent,
  tags: ['autodocs'],
  args: { input: fn() },
};

export default meta;
type Story = StoryObj<PasswordInputComponent>;

export const Default: Story = { args: { placeholder: 'Enter password' } };
