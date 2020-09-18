import { BrowserModule } from '@angular/platform-browser';
import { NgModule,APP_INITIALIZER } from '@angular/core';
import { MatTableModule } from '@angular/material/table'  
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SecuredHttpInterceptor } from './interceptors/secured-http.interceptor';
import { KeycloakServiceService } from './services/keycloak-service.service';
import { KeycloakGuardGuard } from './guards/keycloak-guard.guard';
import { FileNavigatorComponent } from './file-navigator/file-navigator.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatButtonModule} from '@angular/material/button'; 
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    FileNavigatorComponent
  ],
  imports: [
    MatTableModule,
    MatSelectModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatPaginatorModule
    
  ],
  providers: [
    KeycloakServiceService,
    KeycloakGuardGuard,
    {
        provide: HTTP_INTERCEPTORS,
        useClass: SecuredHttpInterceptor,
        multi: true
    },
],
  bootstrap: [AppComponent]
})
export class AppModule { }
