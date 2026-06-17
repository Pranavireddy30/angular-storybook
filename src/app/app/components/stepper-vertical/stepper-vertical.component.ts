import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-stepper-vertical',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stepper-vertical.component.html',
  styleUrl: './stepper-vertical.component.scss',
})
export class StepperVerticalComponent {
  @Input() steps: string[] = [];
  @Input() current = 0;
  @Output() stepChange = new EventEmitter<number>();

  go(i: number) { this.current = i; this.stepChange.emit(i); }
}
