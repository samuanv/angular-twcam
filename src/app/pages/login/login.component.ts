import { Component, OnInit } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../shared/services/auth.service';
import { UserService } from '../../../shared/services/user.service';

import 'style-loader!./login.scss';

@Component({
  selector: 'login',
  templateUrl: './login.html',
  styles: ['./login.scss']
})
export class Login implements OnInit {

  public form: FormGroup;
  public email: AbstractControl;
  public password: AbstractControl;
  public press = false;

  constructor(fb: FormBuilder, private auth: AuthService, private userService: UserService, private router: Router) {
    this.form = fb.group({
      'email': ['', Validators.compose([Validators.required, Validators.minLength(4), Validators.email])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])]
    });
    this.email = this.form.controls['email'];
    this.password = this.form.controls['password'];
  }
  ngOnInit() {
    if (this.userService.isLoggedIn()) {
      this.router.navigate(['pages']);
    }
  }
  public onSubmit(values: any): void {

    if (this.form.valid) {
      this.auth.login({
        username: values.email,
        password: values.password,
      }).subscribe(res => {
        res = JSON.parse(res);
        this.userService.login(res.access_token, res.role, res.email);
      /*  if (res.status === 200) {
          let body = JSON.parse(res.text());
          console.log(body);
          this.userService.login(
            body.access_token
          );*/
          if (res.role === 'employee') {
            this.router.navigate(['pages/flights']);
          } else {

            this.router.navigate(['pages']);
          }
       // }
      });
    }
  }


}
