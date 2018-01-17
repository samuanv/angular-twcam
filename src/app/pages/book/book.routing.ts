import { Routes, RouterModule } from '@angular/router';

import { Book } from './book.component';
import { ModuleWithProviders } from '@angular/core';

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
  {
    path: '',
    component: Book
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
