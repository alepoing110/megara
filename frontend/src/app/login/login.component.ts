import { AuthService } from './../services/auth.service';
import { TokenService } from './../services/token.service';
import { JarwisService } from './../services/jarwis.service';
import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  usuario: string;
  password: string;

  public form = {
    email: null,
    password: null
  };

  public error = null;

  constructor(
    private Jarwis: JarwisService,
    private Token: TokenService,
    private router: Router,
    private Auth: AuthService) { }

  ingresar(){
    console.log(this.usuario);
    console.log(this.password);
  }

  onSubmit() {
    this.Jarwis.login(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error),
      );
  }

  handleResponse(data) {
    this.Token.handle(data.access_token);
    this.Auth.changeAuthStatus(true);
    this.router.navigateByUrl('/profile');
  }

  handleError(error) {
    this.error = error.error.error;
  }
  ngOnInit() {
  }

}
