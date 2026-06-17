import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './checkbox.component.html',
  styleUrl: './checkbox.component.scss',
})
export class CheckboxComponent {
  @Input()
  label = '';

  @Input()
  checked = false;

  @Input()
  primary = false;

  @Input()
  backgroundColor?: string;

  @Output()
  onChange = new EventEmitter<Event>();

  public get classes(): string[] {
    const mode = this.primary ? 'app-checkbox--primary' : 'app-checkbox--secondary';
    return ['app-checkbox', mode];
  }
}
