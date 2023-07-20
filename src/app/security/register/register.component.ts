import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SecurityService } from '../security.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  constructor(private securityService: SecurityService) {}

  ngOnInit() {}
  registerUser(form: NgForm) {
    this.securityService.userRegister({
      email: form.value.email,
      password: form.value.password,
      lastName: form.value.lastname,
      name: form.value.name,
      userName: form.value.username,
      userid: '',
      token: '',
    });
  }
}
