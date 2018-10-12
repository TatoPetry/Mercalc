import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../components/login/login.component';
import { ListaComponent } from '../components/lista/lista.component';
import { PrincipalComponent } from '../components/principal/principal.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'lista',
    component: ListaComponent
  },
  {
    path: 'principal',
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
