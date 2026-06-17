import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'lib-radio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './radio.component.html',
  styleUrl: './radio.component.scss',
})
export class RadioComponent {
  @Input()
  label = '';

  @Input()
  name = '';

  @Input()
  value = '';

  @Input()
  checked = false;

  @Input()
  primary = false;

  @Output()
  onChange = new EventEmitter<Event>();

  public get classes(): string[] {
    const mode = this.primary ? 'app-radio--primary' : 'app-radio--secondary';
    return ['app-radio', mode];
  }
}
