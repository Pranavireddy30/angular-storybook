import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from 'storybook/test';
import { AutocompleteComponent } from '../app/app/components/autocomplete/autocomplete.component';

const meta: Meta<AutocompleteComponent> = {
  title: 'Form/Autocomplete',
  component: AutocompleteComponent,
  tags: ['autodocs'],
  args: { onInput: fn(), onSelect: fn() },
};

export default meta;
type Story = StoryObj<AutocompleteComponent>;

export const Default: Story = {
  args: { suggestions: ['Apple','Banana','Cherry','Date','Elderberry'], placeholder: 'Search...' },
};
