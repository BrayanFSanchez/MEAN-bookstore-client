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
    console.log(form);
    this.securityService.userRegister({
      email: form.value.email,
      password: form.value.password,
      lastname: form.value.lastname,
      name: form.value.name,
      username: form.value.username,
      userid: '',
    });
  }
}
