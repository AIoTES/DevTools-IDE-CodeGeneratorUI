import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { KeycloakServiceService } from './app/services/keycloak-service.service';


if (environment.production) {
  enableProdMode();
}

KeycloakServiceService.init().then(() => {
  console.log("keycloack service init ok");
  const platform = platformBrowserDynamic();
  platform.bootstrapModule( AppModule );
} )
.catch( function( error ) {
console.log( "keycloack service " + JSON.stringify( error ) );
return;
} );
