import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-pie-chart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pie-chart.component.html',
  styleUrl: './pie-chart.component.scss',
})
export class PieChartComponent {
  @Input() slices: { label: string; value: number; color?: string }[] = [];

  get total() { return this.slices.reduce((s, c) => s + (c.value || 0), 0); }

  // Returns SVG path for arc slice
  arcPath(startAngle: number, endAngle: number, radius = 50) {
    const large = endAngle - startAngle > Math.PI ? 1 : 0;
    const x1 = 50 + radius * Math.cos(startAngle);
    const y1 = 50 + radius * Math.sin(startAngle);
    const x2 = 50 + radius * Math.cos(endAngle);
    const y2 = 50 + radius * Math.sin(endAngle);
    return `M50 50 L ${x1} ${y1} A ${radius} ${radius} 0 ${large} 1 ${x2} ${y2} Z`;
  }

  getPaths() {
    let angle = -Math.PI/2;
    return this.slices.map(s => {
      const portion = this.total ? (s.value / this.total) : 0;
      const next = angle + portion * Math.PI * 2;
      const path = this.arcPath(angle, next);
      angle = next;
      return { path, color: s.color || '#'+Math.floor(Math.random()*16777215).toString(16), label: s.label };
    });
  }
}
