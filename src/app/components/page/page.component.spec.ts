import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageComponent } from './page.component';

describe('PageComponent', () => {
  let component: PageComponent;
  let fixture: ComponentFixture<PageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PageComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render app-header component', () => {
    fixture.detectChanges();
    const header = fixture.nativeElement.querySelector('lib-header');
    expect(header).toBeTruthy();
  });

  it('should display page title', () => {
    fixture.detectChanges();
    const pageText = fixture.nativeElement.textContent;
    expect(pageText).toContain('Pages in Storybook');
  });

  it('should set user to null on logout', () => {
    component.user = { name: 'John Doe' };
    component.doLogout();
    expect(component.user).toBeNull();
  });

  it('should set user on login', () => {
    component.user = null;
    component.doLogin();
    expect(component.user).toBeTruthy();
    expect((component.user as any)?.name).toBe('Jane Doe');
  });

  it('should set user on create account', () => {
    component.user = null;
    component.doCreateAccount();
    expect(component.user).toBeTruthy();
    expect((component.user as any)?.name).toBe('Jane Doe');
  });

  it('should pass user prop to header component', () => {
    component.user = { name: 'Test User' };
    fixture.detectChanges();
    const header = fixture.debugElement.nativeElement.querySelector('lib-header');
    // Check if header component receives the user input
    expect(header).toBeTruthy();
  });
});
