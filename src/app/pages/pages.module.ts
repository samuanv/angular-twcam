import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { routing } from './pages.routing';
import { HttpClientModule } from '@angular/common/http';
import { Pages } from './pages.component';

@NgModule({
  imports: [
    CommonModule,
    routing,
    FormsModule,
    HttpClientModule
  ],
  declarations: [
    Pages,
  ],
})
export class PagesModule {
}
