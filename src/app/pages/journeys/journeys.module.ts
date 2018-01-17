import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { Journeys } from './journeys.component';
import { JourneysService } from './journeys.service';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { JourneyForm } from './journey-form/journey-form.component';

import { routing } from './journeys.routing';
@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    routing
  ],
  declarations: [
    Journeys,
    JourneyForm
  ],
  providers: [
    JourneysService
  ]
})
export class JourneysModule {}
