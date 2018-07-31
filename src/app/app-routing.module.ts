import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent} from './dashboard/dashboard.component';
import { HeatMapComponent } from './heat-map/heat-map.component';
import { SettingsComponent } from './settings/settings.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  { path: '', component:  LoginComponent, pathMatch: 'full' },
  { path: 'login',  component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent},
  { path: 'heatMap', component: HeatMapComponent},
  { path: 'setting', component: SettingsComponent},
  { path: 'user', component: UserComponent},
  {path: '**', redirectTo: '/404'} 
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
