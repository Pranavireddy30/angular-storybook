import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'lib-autocomplete',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './autocomplete.component.html',
  styleUrl: './autocomplete.component.scss',
})
export class AutocompleteComponent {
  @Input() suggestions: string[] = [];
  @Input() placeholder = '';
  @Input() value = '';

  @Output() onInput = new EventEmitter<string>();
  @Output() onSelect = new EventEmitter<string>();

  public filtered: string[] = [];

  onChange(ev: Event) {
    const v = (ev.target as HTMLInputElement).value;
    this.value = v;
    this.filtered = this.suggestions.filter(s => s.toLowerCase().includes(v.toLowerCase()));
    this.onInput.emit(v);
  }

  select(item: string) {
    this.value = item;
    this.filtered = [];
    this.onSelect.emit(item);
  }
}
