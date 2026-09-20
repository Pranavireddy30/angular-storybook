import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyStorybook } from './my-storybook';

describe('MyStorybook', () => {
  let component: MyStorybook;
  let fixture: ComponentFixture<MyStorybook>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyStorybook],
    }).compileComponents();

    fixture = TestBed.createComponent(MyStorybook);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
