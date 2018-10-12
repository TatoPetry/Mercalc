import { Component } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'mc-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  // tslint:disable-next-line:no-inferrable-types
  cadastro: boolean = false;

  mudarForm(cadastro: boolean) {
    this.cadastro = cadastro;
  }

}
