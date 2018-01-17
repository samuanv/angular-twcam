// user.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { UtilsService } from './utils.service';

@Injectable()
export class UserService {
  private loggedIn = false;
  private role;
  private email;
  constructor(
    private http: HttpClient,
    private utils: UtilsService,
    private router: Router
  ) {
    this.loggedIn = !!localStorage.getItem('auth_token');
    this.role = localStorage.getItem('role');
    this.email = localStorage.getItem('email');
  }

  login(authToken, role, email) {
    localStorage.setItem('auth_token', authToken);
    localStorage.setItem('role', role);
    localStorage.setItem('email', email);
    this.loggedIn = true;
    this.role = role;
    this.email = email;
    /* this.http.post(this.utils.get_url('GET ACCOUNT INFO'),{}).subscribe(res => {
       if (res.status === 200) {
         let body = JSON.parse(res.text());
         localStorage.setItem('auth_token', authToken);
         localStorage.setItem('email', body.email);
         localStorage.setItem('fullname', body.fullname);
         this.loggedIn = true;
       }
     });*/
  }
  logout() {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('email');
    localStorage.removeItem('role');
    this.loggedIn = false;
    this.role = undefined;
    this.email = undefined;
    this.router.navigate(['login']);
  }
  getEmail() {
    return this.email;
  }
  getRole() {
    return this.role;
  }
  isAdmin() {
    return this.role === 'admin';
  }
  isUser() {
    return this.role === 'user';

  }
  isEmployee() {
    return this.role === 'employee';
  }
  isLoggedIn() {
    return this.loggedIn;
  }
}
