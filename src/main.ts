import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { KeycloakServiceService } from './app/services/keycloak-service.service';

if (environment.production) {
  enableProdMode();
}

KeycloakServiceService.init().then(() => {
  console.log("kc init ok");
  const platform = platformBrowserDynamic();
  platform.bootstrapModule( AppModule );
} )
.catch( function( error ) {
console.log( "kc init ko " + JSON.stringify( error ) );
return;
} );

// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.error(err));
