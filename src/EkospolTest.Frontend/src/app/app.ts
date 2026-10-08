import { Component, inject } from '@angular/core';
import Keycloak from 'keycloak-js';

@Component({
  selector: 'app-root',
  standalone: false,
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  private readonly keycloak = inject(Keycloak);

  protected readonly username = this.keycloak.tokenParsed?.['preferred_username'] as string | undefined;

  protected logout(): void {
    this.keycloak.logout({ redirectUri: window.location.origin });
  }
}
