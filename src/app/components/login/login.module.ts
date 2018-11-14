import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { LoginSocialComponent } from './login-social/login-social.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    LoginComponent,
    LoginFormComponent,
    LoginSocialComponent
   ],
  exports: [ LoginComponent ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
   ]
})
export class LoginModule {}
