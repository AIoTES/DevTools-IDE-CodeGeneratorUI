import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

declare var Keycloak: any;

@Injectable()
export class KeycloakServiceService {

    static auth: any = {};
    static redirectUrl: string;
    /**
     * Initialized keycloak client
     */
    static init(): Promise<any> {
        console.log(" keycloak service init")
        let keycloakAuth: any = new Keycloak('assets/config.json');
        KeycloakServiceService.auth.loggedIn = false;
        return new Promise(( resolve, reject ) => {
            keycloakAuth.init( { onLoad: 'check-sso' } )
                .then(() => {
                  KeycloakServiceService.auth.loggedIn = true;
                  KeycloakServiceService.auth.authz = keycloakAuth;
                  KeycloakServiceService.auth.registerUrl = KeycloakServiceService.auth.authz.createRegisterUrl();
                  KeycloakServiceService.auth.logoutUrl = keycloakAuth.authServerUrl + "/realms/" + environment.keycloakRealm + "/protocol/openid-connect/logout?redirect_uri=" + environment.baseUrl + "/index.html";
                  
                  resolve();
                } )
                .catch(() => {
                    console.log("REJECT")
                    reject();
                } );
        } );
    }

    /**
     * Checks if the logged user is a member of the specified group
     * 
     * @param groupName group name defined in keycloak
     */
    static hasGroup( groupName: string ): boolean {
        return KeycloakServiceService.auth.authz != null && KeycloakServiceService.auth.authz.authenticated && KeycloakServiceService.auth.authz.idTokenParsed.groups.indexOf( "/" + groupName ) !== -1 ? true : false;
    }

    /**
     * Checks if the logged user is a member of the specified groups
     * 
     * @param groupNames a list of group names defined in keycloak
     */
    static hasGroups( groupNames: string[] ): boolean {
        if ( !groupNames ) {
            return false;
        }
        return groupNames.some( e => {
            if ( typeof e === "string" ) {
                return KeycloakServiceService.hasGroup( e );
            }
        } );
    }

    /**
     * Checks if the logged user has the role specified
     * 
     * @param roleName The name of the role
     * @param resource The keycloak client
     */
    static hasRole( roleName: string, resource?: string ): boolean {
        return KeycloakServiceService.auth.authz.hasRealmRole( roleName ) || KeycloakServiceService.auth.authz.hasResourceRole( roleName ) || KeycloakServiceService.auth.authz.hasResourceRole( roleName, resource );
    }

    /**
     * Logout the current user
     */
    static logout() {
        console.log( '*** LOGOUT' );
        KeycloakServiceService.auth.authz.logout( { redirectUri: KeycloakServiceService.auth.logoutUrl } );
        KeycloakServiceService.auth.loggedIn = false;
        KeycloakServiceService.auth.authz = null;
    }

    /**
     * Redirects to keycloak login page
     */
    static login() {
      KeycloakServiceService.auth.authz.login();
    }

    /**
     * Returns the token of the currently logged user
     */
    static getToken(): Promise<string> {
        return new Promise<string>(( resolve, reject ) => {
            if ( KeycloakServiceService.auth.authz.token ) {
              KeycloakServiceService.auth.authz.updateToken( 5 )
                    .success(() => {
                        resolve( <string>KeycloakServiceService.auth.authz.token );
                    } )
                    .error(() => {
                        reject( 'Failed to refresh token' );
                    } );
            }
        } );
    }

    /**
     * Returns true if the current user is logged in
     */
    static isLogged(): boolean {
        return KeycloakServiceService.auth.authz != null && KeycloakServiceService.auth.authz.authenticated;
    }
    
    /**
     * Returns keycloak registration url
     */
    static createRegisterUrl() {
        return KeycloakServiceService.auth.registerUrl;
    }
}
