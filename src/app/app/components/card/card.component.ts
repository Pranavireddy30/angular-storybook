import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'lib-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input()
  title = '';

  @Input()
  subtitle = '';

  @Input()
  image?: string;

  @Input()
  elevated = false;

  public get classes(): string[] {
    return ['app-card', this.elevated ? 'app-card--elevated' : 'app-card--flat'];
  }
}
