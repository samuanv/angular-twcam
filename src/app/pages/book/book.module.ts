import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { Book } from './book.component';

import { BookService } from './book.service';
import { FlightsService } from '../flights/flights.services';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { routing } from './book.routing';


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
    Book
  ],
  providers: [
    BookService, FlightsService
  ]
})
export class BookModule {}
