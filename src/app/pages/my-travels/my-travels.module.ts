import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { routing } from './my-travels.routing';
import { MyTravels } from './my-travels.component';
import { MyTravelsService } from './my-travels.service';


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
    MyTravels
  ],
  providers: [
    MyTravelsService
  ]
})
export class MyTravelsModule {}
