import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonComponent } from './button.component';

describe('ButtonComponent', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render button with label', () => {
    component.label = 'Click me';
    fixture.detectChanges();
    const button = fixture.nativeElement.querySelector('button');
    expect(button.textContent).toContain('Click me');
  });

  it('should emit onClick when button is clicked', () => {
    spyOn(component.onClick, 'emit');
    const button = fixture.nativeElement.querySelector('button');
    button.click();
    expect(component.onClick.emit).toHaveBeenCalled();
  });

  it('should apply primary class when primary is true', () => {
    component.primary = true;
    fixture.detectChanges();
    const button = fixture.nativeElement.querySelector('button');
    expect(button.className).toContain('app-button--primary');
  });

  it('should apply secondary class when primary is false', () => {
    component.primary = false;
    fixture.detectChanges();
    const button = fixture.nativeElement.querySelector('button');
    expect(button.className).toContain('app-button--secondary');
  });
});
