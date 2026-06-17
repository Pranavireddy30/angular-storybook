import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-stepper-horizontal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stepper-horizontal.component.html',
  styleUrl: './stepper-horizontal.component.scss',
})
export class StepperHorizontalComponent {
  @Input() steps: string[] = [];
  @Input() current = 0;
  @Output() stepChange = new EventEmitter<number>();

  go(i: number) { this.current = i; this.stepChange.emit(i); }
}
