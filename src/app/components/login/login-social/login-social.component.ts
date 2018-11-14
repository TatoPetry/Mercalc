import { Component } from '@angular/core';
import { AuthService } from 'src/app/core/services/auth.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'mc-login-social',
  templateUrl: './login-social.component.html',
  styleUrls: ['./login-social.component.css']
})
export class LoginSocialComponent {



  constructor( private socialAuth: AuthService) {
  }

  loginGoogle() {
    this.socialAuth.loginGoogle();
  }

  loginFacebook() {
    this.socialAuth.loginFacebook();
  }
}
