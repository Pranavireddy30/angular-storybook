import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-toggle-switch',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toggle-switch.component.html',
  styleUrl: './toggle-switch.component.scss',
})
export class ToggleSwitchComponent {
  @Input() checked = false;
  @Input() disabled = false;
  @Output() change = new EventEmitter<boolean>();

  toggle() {
    if (this.disabled) return;
    this.checked = !this.checked;
    this.change.emit(this.checked);
  }
}
