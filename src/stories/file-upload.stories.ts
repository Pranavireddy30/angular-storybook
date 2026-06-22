import type { Meta, StoryObj } from '@storybook/angular';
import { fn } from 'storybook/test';
import { FileUploadComponent } from '../app/components/file-upload/file-upload.component';

const meta: Meta<FileUploadComponent> = {
  title: 'Form/FileUpload',
  component: FileUploadComponent,
  tags: ['autodocs'],
  args: { onFiles: fn() },
};

export default meta;
type Story = StoryObj<FileUploadComponent>;

export const Default: Story = { args: {} };
