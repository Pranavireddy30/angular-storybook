import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StepperHorizontalComponent } from './stepper-horizontal.component';

describe('StepperHorizontalComponent', () => {
  let component: StepperHorizontalComponent;
  let fixture: ComponentFixture<StepperHorizontalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StepperHorizontalComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StepperHorizontalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
