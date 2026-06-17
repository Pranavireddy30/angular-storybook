import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-graph',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './graph.component.html',
  styleUrl: './graph.component.scss',
})
export class GraphComponent {
  @Input() data: number[] = [];
  @Input() stroke = '#555ab9';

  get points(): string {
    if (!this.data || this.data.length === 0) return '';
    const w = 300; const h = 120; const max = Math.max(...this.data);
    return this.data.map((v, i) => `${(i/(this.data.length-1))*w},${h - (v/max)*h}`).join(' ');
  }
}
