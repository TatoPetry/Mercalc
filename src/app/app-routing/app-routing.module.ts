import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from '../components/login/login.component';
import { ListaComponent } from '../components/lista/lista.component';
import { PrincipalComponent } from '../components/principal/principal.component';
import { AuthGuard } from '../core/guard/auth.guard';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'lista/:id',
    component: ListaComponent
  },
  {
    path: 'principal/:id',
    component: PrincipalComponent
  },
  {
    path: '**',
    component: LoginComponent
  }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
