import {
  createInterceptorCondition,
  INCLUDE_BEARER_TOKEN_INTERCEPTOR_CONFIG,
  IncludeBearerTokenCondition,
  provideKeycloak,
} from 'keycloak-angular';

// Every request to the backend API gets the Keycloak access token.
const apiCondition = createInterceptorCondition<IncludeBearerTokenCondition>({
  urlPattern: /^\/api(\/.*)?$/i,
});

export const provideKeycloakAngular = () => [
  provideKeycloak({
    config: {
      url: 'http://localhost:8080',
      realm: 'ekospol',
      clientId: 'ekospol-frontend',
    },
    initOptions: {
      onLoad: 'login-required',
      pkceMethod: 'S256',
      checkLoginIframe: false,
    },
  }),
  {
    provide: INCLUDE_BEARER_TOKEN_INTERCEPTOR_CONFIG,
    useValue: [apiCondition],
  },
];
