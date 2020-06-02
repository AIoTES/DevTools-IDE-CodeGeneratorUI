import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse } from '@angular/common/http';

import 'rxjs/add/operator/do';
import { Observable } from 'rxjs';
import { KeycloakServiceService } from '../services/keycloak-service.service';




@Injectable()
export class SecuredHttpInterceptor implements HttpInterceptor {

    /**
     * Intercepts the http request and add the bearer token of the currently logged user.
     * 
     * @param request http request
     * @param next http handler
     */
    intercept( request: HttpRequest<any>, next: HttpHandler ): Observable<HttpEvent<any>> {
        //const started = Date.now();
        if ( KeycloakServiceService.auth.authz != null && KeycloakServiceService.auth.loggedIn && KeycloakServiceService.auth.authz.authenticated ) {
            KeycloakServiceService.getToken();
            let kcToken = KeycloakServiceService.auth.authz.token;
            request = request.clone( {
                setHeaders: {
                    Authorization: 'Bearer ' + kcToken
                }
            } );
        }
        return next.handle( request );
    }
}