import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { includeBearerTokenInterceptor } from 'keycloak-angular';
import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { provideKeycloakAngular } from './keycloak.config';
import { PhoneNumbersModule } from './phone-numbers/phone-numbers-module';

@NgModule({
  declarations: [
    App
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PhoneNumbersModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideKeycloakAngular(),
    provideHttpClient(withInterceptors([includeBearerTokenInterceptor])),
  ],
  bootstrap: [App]
})
export class AppModule { }
