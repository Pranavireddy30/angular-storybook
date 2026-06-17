import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-icon-kebab',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './icon-kebab.component.html',
  styleUrl: './icon-kebab.component.scss',
})
export class IconKebabComponent {
  @Output() onClick = new EventEmitter<Event>();
}
