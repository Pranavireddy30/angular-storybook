import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.scss',
})
export class TableComponent {
  @Input() columns: { key: string; label: string }[] = [];
  @Input() data: any[] = [];
  @Input() pageSize = 5;
  @Input() showPaginator = false;

  page = 0;

  get totalPages() { return Math.max(1, Math.ceil(this.data.length / this.pageSize)); }

  get paged() {
    if (!this.showPaginator) return this.data;
    const start = this.page * this.pageSize;
    return this.data.slice(start, start + this.pageSize);
  }

  prev() { if (this.page > 0) this.page--; }
  next() { if (this.page < this.totalPages - 1) this.page++; }
}
