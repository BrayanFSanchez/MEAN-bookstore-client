import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

import { User } from './user.model';
import { LoginData } from './login-data.model';
import { enviroment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SecurityService {
  private token: string | undefined = '';
  baseUrl = enviroment.baseUrl;

  securityChange = new Subject<boolean>();
  private user!: User | null;

  loadUser(): void {
    const tokenBrowser = localStorage.getItem('token');
    if (!tokenBrowser) {
      return;
    }

    this.token = tokenBrowser;
    this.securityChange.next(true);

    this.http.get<User>(`${this.baseUrl}/user`).subscribe((response) => {
      this.token = response.token;
      this.user = {
        email: response.email,
        name: response.name,
        lastName: response.lastName,
        token: response.token,
        password: '',
        userName: response.userName,
        userid: response.userid,
      };

      this.securityChange.next(true);
      localStorage.setItem('token', response.token!);
    });
  }

  getToken() {
    return this.token;
  }

  constructor(private router: Router, private http: HttpClient) {}

  userRegister(usr: User): void {
    this.http
      .post<User>(`${this.baseUrl}/user/register`, usr)
      .subscribe((response) => {
        this.token = response.token;
        this.user = {
          email: response.email,
          name: response.name,
          lastName: response.lastName,
          token: response.token,
          password: '',
          userName: response.userName,
          userid: response.userid,
        };

        this.securityChange.next(true);
        localStorage.setItem('token', response.token!);
        this.router.navigate(['/']);
      });
  }

  login(loginData: LoginData): void {
    this.http
      .post<User>(`${this.baseUrl}/user/login`, loginData)
      .subscribe((response) => {
        this.token = response.token;
        this.user = {
          email: response.email,
          name: response.name,
          lastName: response.lastName,
          token: response.token,
          password: '',
          userName: response.userName,
          userid: response.userid,
        };

        this.securityChange.next(true);
        localStorage.setItem('token', response.token!);
        this.router.navigate(['/']);
      });
  }

  Logout() {
    this.user = null;
    this.securityChange.next(false);
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  getUser() {
    return { ...this.user };
  }

  onSession() {
    return this.token != null;
  }
}
