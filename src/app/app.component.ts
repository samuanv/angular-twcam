import { Component, OnInit } from '@angular/core';
import { UserService } from '../shared/services/user.service';
import { AlertService } from '../shared/services/alert.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  constructor(private user: UserService, private alert: AlertService) { }

  ngOnInit() {

  }
  public getAlerts() {
    return this.alert.getAlerts();
  }
  public closeAlert(al) {
    this.alert.closeAlert(al);
  }
  public isLoggedIn(): boolean {
    // console.log(this.user.isLoggedIn());
    return this.user.isLoggedIn();
  }
  public isAdmin(): boolean {
    return this.user.isAdmin();
  }
  public isEmployee(): boolean {
    return this.user.isEmployee();
  }
  public isUser(): boolean {
    return this.user.isUser();
  }
  public getRole(): string {
    return this.user.getRole();
  }
  public getEmail(): string {
    return this.user.getEmail();
  }
  public logout(): void {
    this.user.logout();
  }
}
