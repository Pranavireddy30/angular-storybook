import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'lib-date-picker',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './date-picker.component.html',
  styleUrl: './date-picker.component.scss',
})
export class DatePickerComponent {
  @Input() value?: string;
  @Input() min?: string;
  @Input() max?: string;

  @Output() onChange = new EventEmitter<string>();

  change(ev: Event) {
    const v = (ev.target as HTMLInputElement).value;
    this.value = v;
    this.onChange.emit(v);
  }
}
