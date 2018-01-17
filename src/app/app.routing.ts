import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { LoggedInGuard } from './logged-in.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', redirectTo: 'pages/book', canActivate: [LoggedInGuard] }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true });
