import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display logout button when user is logged in', () => {
    component.user = { name: 'John Doe' };
    fixture.detectChanges();
    const buttons = fixture.nativeElement.querySelectorAll('lib-button button');
    const logoutButton = Array.from(buttons).find((b: any) => b.textContent.trim().includes('Log out')) as HTMLElement | undefined;
    expect(logoutButton).toBeTruthy();
  });

  it('should display login and signup buttons when user is logged out', () => {
    component.user = null;
    fixture.detectChanges();
    const buttons = fixture.nativeElement.querySelectorAll('lib-button button');
    const loginButton = Array.from(buttons).find((b: any) => b.textContent.trim().includes('Log in')) as HTMLElement | undefined;
    const signupButton = Array.from(buttons).find((b: any) => b.textContent.trim().includes('Sign up')) as HTMLElement | undefined;
    expect(loginButton).toBeTruthy();
    expect(signupButton).toBeTruthy();
  });

  it('should display welcome message when user is logged in', () => {
    component.user = { name: 'Jane Doe' };
    fixture.detectChanges();
    const welcomeText = fixture.nativeElement.textContent;
    expect(welcomeText).toContain('Welcome');
    expect(welcomeText).toContain('Jane Doe');
  });

  it('should emit onLogin when login button is clicked', () => {
    vi.spyOn(component.onLogin, 'emit' as any);
    component.user = null;
    fixture.detectChanges();
    const buttons = fixture.nativeElement.querySelectorAll('lib-button button');
    const loginButton = Array.from(buttons).find((b: any) => b.textContent.trim().includes('Log in')) as HTMLElement | undefined;
    expect(loginButton).toBeTruthy();
    (loginButton as HTMLElement).click();
    fixture.detectChanges();
    expect(component.onLogin.emit).toHaveBeenCalled();
  });

  it('should emit onLogout when logout button is clicked', () => {
    vi.spyOn(component.onLogout, 'emit' as any);
    component.user = { name: 'John Doe' };
    fixture.detectChanges();
    const buttons = fixture.nativeElement.querySelectorAll('lib-button button');
    const logoutButton = Array.from(buttons).find((b: any) => b.textContent.trim().includes('Log out')) as HTMLElement | undefined;
    expect(logoutButton).toBeTruthy();
    (logoutButton as HTMLElement).click();
    fixture.detectChanges();
    expect(component.onLogout.emit).toHaveBeenCalled();
  });
});
