import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SecurityService } from '../security.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  constructor(private securityService: SecurityService) {}

  loginUser(form: NgForm) {
    this.securityService.login({
      email: form.value.email,
      password: form.value.password,
    });
  }
}
