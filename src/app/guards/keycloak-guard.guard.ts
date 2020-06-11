import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, Route, CanLoad } from '@angular/router';
import { KeycloakServiceService } from '../services/keycloak-service.service';
import { PermissionGuard } from '../models/permission-guard';

@Injectable({
  providedIn: 'root'
})
export class KeycloakGuardGuard implements CanActivate, CanLoad{
  
  constructor( public router: Router, private keycloakService: KeycloakServiceService ) {
  }

  canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot ): boolean {
    let url: string = state.url;
    return this.checkLogin( url );
}
    /**
     * Checks if a user is logged in before activating the secured page.
     * @param url
     */
    checkLogin( url: string ): boolean {
        console.log("check login")
      if ( KeycloakServiceService.auth.loggedIn && KeycloakServiceService.auth.authz.authenticated ) {
          return true;
      } else {
        KeycloakServiceService.login();
          return false;
      }
  }

    /**
     * Checks if the logged in user have enough privilege to load the page. Group can be specified in the app-routing.module routes. 
     * Note that currently keycloak is not sending the list of roles that's why we are using groups.
     * @param route The route
     */
    canLoad( route: Route ): boolean {
      if ( !( KeycloakServiceService.auth.loggedIn && KeycloakServiceService.auth.authz.authenticated ) ) {
        KeycloakServiceService.login();
          return false;
      }

      let data = route.data["Permission"] as PermissionGuard;
      console.log( data.Role );
      if ( data.Role ) {
          let hasDefined = KeycloakServiceService.hasRole( data.Role )
          if ( hasDefined )
              return true;

          if ( data.RedirectTo && data.RedirectTo !== undefined )
              this.router.navigate( [data.RedirectTo] );

          return false;

      } else {
          console.log('unrole');

          if ( Array.isArray( data.Only ) && Array.isArray( data.Except ) ) {
              throw "Can't use both 'Only' and 'Except' in route data.";
          }

          if ( Array.isArray( data.Only ) ) {
              let hasDefined = KeycloakServiceService.hasGroups( data.Only )
              if ( hasDefined )
                  return true;

              if ( data.RedirectTo && data.RedirectTo !== undefined )
                  this.router.navigate( [data.RedirectTo] );

              return false;
          }

          if ( Array.isArray( data.Except ) ) {
              let hasDefined = KeycloakServiceService.hasGroups( data.Except )
              if ( !hasDefined )
                  return true;

              if ( data.RedirectTo && data.RedirectTo !== undefined )
                  this.router.navigate( [data.RedirectTo] );

              return false;
          }
      }
  }
}
