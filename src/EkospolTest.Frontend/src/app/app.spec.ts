import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import Keycloak from 'keycloak-js';
import { App } from './app';
import { PhoneNumbersModule } from './phone-numbers/phone-numbers-module';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterModule.forRoot([]),
        PhoneNumbersModule
      ],
      declarations: [
        App
      ],
      providers: [
        provideHttpClient(),
        provideHttpClientTesting(),
        { provide: Keycloak, useValue: { tokenParsed: { preferred_username: 'testuser' } } }
      ],
    })
      .compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render the logged in user', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.user span')?.textContent).toContain('testuser');
  });
});
