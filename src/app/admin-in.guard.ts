// logged-in.guard.ts
import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { UserService } from '../shared/services/user.service';

@Injectable()
export class AdminInGuard implements CanActivate {
  constructor(private user: UserService) {}

  canActivate() {
    return this.user.isAdmin();
  }

}
