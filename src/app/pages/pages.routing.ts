import { Routes, RouterModule } from '@angular/router';
import { Pages } from './pages.component';
import { ModuleWithProviders } from '@angular/core';
import { LoggedInGuard } from '../logged-in.guard';
import { AdminInGuard } from '../admin-in.guard';
import { EmployeeInGuard } from '../employee-in.guard';
import { UserInGuard } from '../user-in.guard';
// noinspection TypeScriptValidateTypes

// export function loadChildren(path) { return System.import(path); };

export const routes: Routes = [
  {
    path: 'login',
    loadChildren: 'app/pages/login/login.module#LoginModule'
  },
  {
    path: 'pages',
    component: Pages,
    children: [
      { path: '', redirectTo: 'book', pathMatch: 'full', canActivate: [LoggedInGuard] },
      { path: 'flights', loadChildren: 'app/pages/flights/flights.module#FlightsModule',
       canActivate: [ EmployeeInGuard] },
      { path: 'journeys', loadChildren: 'app/pages/journeys/journeys.module#JourneysModule',
       canActivate: [ EmployeeInGuard] },
       { path: 'book', loadChildren: 'app/pages/book/book.module#BookModule',
       canActivate: [ UserInGuard] },
       { path: 'my-travels', loadChildren: 'app/pages/my-travels/my-travels.module#MyTravelsModule',
       canActivate: [ UserInGuard] }
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
