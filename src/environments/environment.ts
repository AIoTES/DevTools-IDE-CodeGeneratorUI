// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  baseUrl: 'http://myfakedomain.com:4200',
  production: false,
  apiUrl: 'http://myfakedomain.com:5000/CodeGenerator/rest',
  codegenerator_url:"http://myfakedomain.com:8181/GenerateCode",
  keycloakRealm: 'CodeGenerator',
  keycloakClient: 'CodeGenerator',
  keycloakBaseUrl: 'http://myfakedomain.com:5000/',
  test: window["env"]["apiUrl"] || "default",
  CODEGENERATOR_PATH:window["env"]["CODEGENERATOR_PATH"] || "default",
  AIOTES_HOSTNAME:window["env"]["AIOTES_HOSTNAME"] || "default",
  AIOTES_API_PORT:window["env"]["AIOTES_API_PORT"] || "default",
  

};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
