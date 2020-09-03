// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  baseUrl: 'http://localhost:4200',
    production: false,
    apiUrl: 'http://localhost:5000/keycloak-auth-api/rest',

    keycloakRealm: 'keycloak-angular-auth',
    keycloakClient: 'auth-client',
    keycloakBaseUrl: 'http://localhost:5000',
    
  CODEGENERATOR_PATH:window["env"]["CODEGENERATOR_PATH"] || "localhost:8181",
  codegenerator_url:"http://myfakedomain.com:8181/GenerateCode",
  AIOTES_HOSTNAME:window["env"]["AIOTES_HOSTNAME"] || "0",
  AIOTES_API_PORT:window["env"]["AIOTES_API_PORT"] || "0",
  

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
