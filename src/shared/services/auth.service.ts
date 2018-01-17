import { Injectable, Inject } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

// Only when server is unavailable - To Remove
import { Subscriber } from 'rxjs/Subscriber';

import { UtilsService } from './utils.service';

interface Auth {
  username: string;
  password: string;
}

@Injectable()

export class AuthService {

  constructor(
    private http: HttpClient,
    private utils: UtilsService
  ) { }

  signup(formData: Auth): Observable<any> {
    return this.http.post(
      this.utils.get_url('signup'),
      JSON.stringify(formData));
  }

  login(formData: Auth): Observable<any> {
    /*
        let url_params = 'username='+formData.username+'&'+
          'password='+formData.password;
        return this.http.post(
          this.utils.get_url('login?'+url_params),
          {}
        );
        */
    let object = {};
    if (formData.username === 'admin@admin') {
      // Simulate when server is unavailable
      object = {
        access_token: 'token',
        email: formData.username,
        fullname: 'User Name',
        role: 'admin',
        status: 200,
      };
    } else if (formData.username === 'employee@employee') {
      // Simulate when server is unavailable
      object = {
        access_token: 'token',
        email: formData.username,
        fullname: 'Employee Name',
        role: 'employee',
        status: 200,
      };
    } else {
      // Simulate when server is unavailable
      object = {
        access_token: 'token',
        email: formData.username,
        fullname: 'User Name',
        role: 'user',
        status: 200,
      };
    }

    const result = JSON.stringify(object);

    return new Observable<any>(
      (subscriber: Subscriber<any>) => subscriber.next(result)
    );
  }
}
