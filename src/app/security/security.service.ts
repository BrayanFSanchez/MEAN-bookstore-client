import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

import { User } from './user.model';
import { LoginData } from './login-data.model';

@Injectable()
export class SecurityService {
  securityChange = new Subject<boolean>();
  private user!: User | null;

  constructor(private router: Router) {}

  userRegister(usr: User) {
    this.user = {
      email: usr.email,
      userid: Math.round(Math.random() * 10000).toString(),
      name: usr.name,
      lastname: usr.lastname,
      username: usr.username,
      password: '',
    };

    this.securityChange.next(true);
    this.router.navigate(['/']);
  }

  login(loginData: LoginData) {
    this.user = {
      email: loginData.email,
      userid: Math.round(Math.random() * 10000).toString(),
      name: '',
      lastname: '',
      username: '',
      password: '',
    };
    this.securityChange.next(true);
    this.router.navigate(['/']);
  }

  Logout() {
    this.user = null;
    this.securityChange.next(false);
    this.router.navigate(['/login']);
  }

  getUser() {
    return { ...this.user };
  }

  onSession() {
    return this.user != null;
  }
}
