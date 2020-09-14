// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
    baseUrl: 'http://localhost:4200',
    production: false,
    codegenerator_url:"http://localhost:8181/GenerateCode",
    keycloakRealm: 'frontend',
    keycloakBaseUrl: 'http://localhost:5000',
    CODEGENERATOR_PATH:window["env"]["CODEGENERATOR_PATH"] || "localhost:8181",
    AIOTES_HOSTNAME:window["env"]["AIOTES_HOSTNAME"] || "0",
    AIOTES_API_PORT:window["env"]["AIOTES_API_PORT"] || "0"
};
