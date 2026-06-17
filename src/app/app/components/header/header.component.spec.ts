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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display logout button when user is logged in', () => {
    component.user = { name: 'John Doe' };
    fixture.detectChanges();
    const logoutButton = fixture.nativeElement.querySelector('app-button[label="Log out"]');
    expect(logoutButton).toBeTruthy();
  });

  it('should display login and signup buttons when user is logged out', () => {
    component.user = null;
    fixture.detectChanges();
    const loginButton = fixture.nativeElement.querySelector('app-button[label="Log in"]');
    const signupButton = fixture.nativeElement.querySelector('app-button[label="Sign up"]');
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
    spyOn(component.onLogin, 'emit');
    component.user = null;
    fixture.detectChanges();
    const loginButton = fixture.nativeElement.querySelector('app-button[label="Log in"]');
    loginButton.click();
    expect(component.onLogin.emit).toHaveBeenCalled();
  });

  it('should emit onLogout when logout button is clicked', () => {
    spyOn(component.onLogout, 'emit');
    component.user = { name: 'John Doe' };
    fixture.detectChanges();
    const logoutButton = fixture.nativeElement.querySelector('app-button[label="Log out"]');
    logoutButton.click();
    expect(component.onLogout.emit).toHaveBeenCalled();
  });
});
