import { Routes, RouterModule } from '@angular/router';

import { Journeys } from './journeys.component';
import { ModuleWithProviders } from '@angular/core';

// noinspection TypeScriptValidateTypes

export const routes: Routes = [
  {
    path: '',
    component: Journeys
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
