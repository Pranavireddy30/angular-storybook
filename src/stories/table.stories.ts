import type { Meta, StoryObj } from '@storybook/angular';
import { TableComponent } from '../app/components/table/table.component';

const meta: Meta<TableComponent> = {
  title: 'Data/Table',
  component: TableComponent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<TableComponent>;

const sample = Array.from({length: 22}).map((_, i) => ({ id: i+1, name: `Item ${i+1}`, value: Math.round(Math.random()*100) }));

export const Default: Story = { args: { columns: [{ key: 'id', label: 'ID' }, { key: 'name', label: 'Name' }, { key: 'value', label: 'Value' }], data: sample } };

export const WithPaginator: Story = { args: { columns: [{ key: 'id', label: 'ID' }, { key: 'name', label: 'Name' }, { key: 'value', label: 'Value' }], data: sample, showPaginator: true, pageSize: 5 } };
