import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAuth0 } from '@auth0/auth0-angular';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),
    provideAuth0({
      domain: 'dev-qg80x6j0zuz5e4em.us.auth0.com',
      clientId: 'cP9FqgXcDYpEt0EvUDwJ8GMziJjq7fsN',
      authorizationParams: {
        redirect_uri: window.location.origin,
      },
    }), provideAnimationsAsync(),
         provideHttpClient(),
  ]
};
