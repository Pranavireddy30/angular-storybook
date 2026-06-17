import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
})
export class InputComponent {
  @Input()
  type: 'text' | 'password' | 'email' | 'number' = 'text';

  @Input()
  placeholder = '';

  @Input()
  primary = false;

  @Input()
  backgroundColor?: string;

  @Input()
  size: 'small' | 'medium' | 'large' = 'medium';

  @Input()
  value = '';

  @Output()
  onInput = new EventEmitter<Event>();

  @Output()
  onChange = new EventEmitter<Event>();

  public get classes(): string[] {
    const mode = this.primary ? 'app-input--primary' : 'app-input--secondary';

    return ['app-input', `app-input--${this.size}`, mode];
  }
}
