import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { KeycloakGuardGuard } from './guards/keycloak-guard.guard';


export const routes: Routes = [
	{ path: '',  canActivate: [KeycloakGuardGuard],component: MainComponent,  },
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
