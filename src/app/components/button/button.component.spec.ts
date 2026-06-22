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
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render button with label', async () => {
    component.label = 'Click me';
    fixture.detectChanges();
    await fixture.whenStable();
    const button = fixture.nativeElement.querySelector('button');
    expect(button).toBeTruthy();
    expect((button.textContent || '').trim()).toContain('Click me');
  });

  it('should emit onClick when button is clicked', () => {
    vi.spyOn(component.onClick, 'emit' as any);
    const button = fixture.nativeElement.querySelector('button');
    expect(button).toBeTruthy();
    button.click();
    fixture.detectChanges();
    expect(component.onClick.emit).toHaveBeenCalled();
  });

  it('should apply primary class when primary is true', () => {
    component.primary = true;
    fixture.detectChanges();
    const button = fixture.nativeElement.querySelector('button');
    expect(button).toBeTruthy();
    expect(Array.from((button.className || '').split(' '))).toContain('app-button--primary');
  });

  it('should apply secondary class when primary is false', () => {
    component.primary = false;
    fixture.detectChanges();
    const button = fixture.nativeElement.querySelector('button');
    expect(button.className).toContain('app-button--secondary');
  });
});
