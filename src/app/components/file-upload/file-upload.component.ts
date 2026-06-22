import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter, HostListener } from '@angular/core';

@Component({
  selector: 'lib-file-upload',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './file-upload.component.html',
  styleUrl: './file-upload.component.scss',
})
export class FileUploadComponent {
  @Input() accept = '';
  @Input() multiple = false;

  @Output() onFiles = new EventEmitter<FileList | null>();

  @HostListener('drop', ['$event'])
  onDrop(event: DragEvent) {
    event.preventDefault();
    this.onFiles.emit(event.dataTransfer?.files ?? null);
  }

  @HostListener('dragover', ['$event'])
  onDragOver(event: DragEvent) { event.preventDefault(); }

  change(ev: Event) { this.onFiles.emit((ev.target as HTMLInputElement).files); }
}
