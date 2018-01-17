import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { Flights } from './flights.component';

import { FlightsService } from './flights.services';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { routing } from './flights.routing';
@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    routing,
    NgxDatatableModule
  ],
  declarations: [
    Flights
  ],
  providers: [
    FlightsService
  ]
})
export class FlightsModule {}
