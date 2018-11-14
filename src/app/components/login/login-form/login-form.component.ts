import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'mc-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  // tslint:disable-next-line:no-inferrable-types
  tipoCadastro: boolean = false;



  formCadastro: FormGroup;
  formLogin: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    ) {

      this.formCadastro = this.formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]]
      });

      this.formLogin = this.formBuilder.group({
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(6)]]
      });
  }

  mudarForm(cadastro: boolean) {

    this.tipoCadastro = cadastro;

  }

  login() {

    const email = this.formLogin.get('email').value;
    const password = this.formLogin.get('password').value;
    this.authService.loginEmail(email, password);
    this.formLogin.reset();

  }

  Cadastro() {

    const email = this.formCadastro.get('email').value;
    const password = this.formCadastro.get('password').value;
    this.authService.registerEmail(email, password);
    this.formLogin.reset();

  }


}
