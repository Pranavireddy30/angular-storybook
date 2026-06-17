import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-password-input',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './password-input.component.html',
  styleUrl: './password-input.component.scss',
})
export class PasswordInputComponent {
  @Input() placeholder = '';
  @Input() value = '';
  @Output() input = new EventEmitter<string>();

  show = false;

  onInput(ev: Event) {
    const v = (ev.target as HTMLInputElement).value;
    this.value = v;
    this.input.emit(v);
  }

  toggle() { this.show = !this.show; }
}
