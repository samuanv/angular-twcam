import { Routes, RouterModule } from '@angular/router';

import { Flights } from './flights.component';
import { ModuleWithProviders } from '@angular/core';

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
  {
    path: '',
    component: Flights
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
