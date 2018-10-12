import { NgModule } from '@angular/core';
import { LoginComponent } from './login.component';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './login-form/login-form.component';
import { LoginSocialComponent } from './login-social/login-social.component';

@NgModule({
  declarations: [
    LoginComponent,
    LoginFormComponent,
    LoginSocialComponent
   ],
  exports: [ LoginComponent ],
  imports: [ CommonModule ]
})
export class LoginModule {}
