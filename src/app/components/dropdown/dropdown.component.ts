import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'lib-dropdown',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.scss',
})
export class DropdownComponent {
  @Input()
  options: { label: string; value: string }[] = [];

  @Input()
  placeholder = 'Select...';

  @Input()
  selected?: string;

  @Input()
  primary = false;

  @Input()
  backgroundColor?: string;

  @Input()
  size: 'small' | 'medium' | 'large' = 'medium';

  @Output()
  onSelect = new EventEmitter<string>();

  public get classes(): string[] {
    const mode = this.primary ? 'app-dropdown--primary' : 'app-dropdown--secondary';
    return ['app-dropdown', `app-dropdown--${this.size}`, mode];
  }
}
