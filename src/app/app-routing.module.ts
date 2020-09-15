import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { KeycloakGuardGuard as AuthGuard  } from './guards/keycloak-guard.guard';
import { FileNavigatorComponent } from './file-navigator/file-navigator.component';
import { environment} from '../environments/environment';

export const routes: Routes = [
  { path: 'development/codegenerator/ui',  canActivate: [AuthGuard],component: MainComponent  },
  { path: 'development/codegenerator/ui/FileNavigator',  canActivate: [AuthGuard],component: FileNavigatorComponent  }

]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
