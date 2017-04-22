import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnnuairesComponent } from './annuaires.component';
import { AnnuaireDetailComponent } from './annuaire-detail.component';
import { LoginComponent } from './login.component';


const routes: Routes = [
  
 
  {
    path: 'detail/:id',
    component: AnnuaireDetailComponent
  },
  {
    path: 'annuaires',
    component: AnnuairesComponent
  }, 
  {
    path: 'login',
    component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routedComponents = [ AnnuairesComponent, AnnuaireDetailComponent,LoginComponent];
