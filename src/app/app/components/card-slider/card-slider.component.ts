import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-slider.component.html',
  styleUrl: './card-slider.component.scss',
})
export class CardSliderComponent {
  @Input() gap = 12;
  current = 0;

  prev() { this.current = Math.max(0, this.current - 1); }
  next() { this.current = this.current + 1; }
}
