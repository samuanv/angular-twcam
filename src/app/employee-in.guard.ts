// logged-in.guard.ts
import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { UserService } from '../shared/services/user.service';

@Injectable()
export class EmployeeInGuard implements CanActivate {
  constructor(private user: UserService) {}

  canActivate() {
    if (this.user.isAdmin()) {
      return true;
    }
    return this.user.isEmployee();
  }

}
