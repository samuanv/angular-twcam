import { Routes, RouterModule } from '@angular/router';

import { MyTravels } from './my-travels.component';
import { ModuleWithProviders } from '@angular/core';

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
  {
    path: '',
    component: MyTravels
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
