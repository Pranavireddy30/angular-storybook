import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IconKebabComponent } from './icon-kebab.component';

describe('IconKebabComponent', () => {
  let component: IconKebabComponent;
  let fixture: ComponentFixture<IconKebabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IconKebabComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconKebabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
