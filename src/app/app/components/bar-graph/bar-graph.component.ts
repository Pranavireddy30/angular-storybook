import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bar-graph',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bar-graph.component.html',
  styleUrl: './bar-graph.component.scss',
})
export class BarGraphComponent {
  @Input() data: { label: string; value: number; color?: string }[] = [];
  @Input() width = 300;
  @Input() height = 120;
  @Input() barGap = 8;

  get bars() {
    const max = this.data.length ? Math.max(...this.data.map(d => d.value)) : 1;
    const count = this.data.length || 1;
    const totalGap = this.barGap * Math.max(0, count - 1);
    const barWidth = (this.width - totalGap) / count;
    return this.data.map((d, i) => {
      const h = max ? (d.value / max) * this.height : 0;
      const x = i * (barWidth + this.barGap);
      const y = this.height - h;
      return { ...d, x, y, w: barWidth, h, color: d.color || '#555ab9' };
    });
  }
}
