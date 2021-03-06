// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
    baseUrl: 'https://localhost:4200',
    production: false,
    codegenerator_url:"https://activage-test1.lst.tfo.upm.es:8081/development/codegenerator",
    keycloakRealm: 'activage',
    keycloakBaseUrl: 'https://activage-test.lst.tfo.upm.es:8081',
    CODEGENERATOR_PATH:window["env"]["CODEGENERATOR_PATH"] || "localhost:8181",
    AIOTES_HOSTNAME:window["env"]["AIOTES_HOSTNAME"] || "0",
    AIOTES_API_PORT:window["env"]["AIOTES_API_PORT"] || "0",
  

};
