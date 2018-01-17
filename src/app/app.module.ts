import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { routing } from './app.routing';

// Pages
import { PagesModule } from './pages/pages.module';

// Providers
import { AuthService } from '../shared/services/auth.service';
import { UserService } from '../shared/services/user.service';
import { UtilsService } from '../shared/services/utils.service';
import { AlertService } from '../shared/services/alert.service';

import { LoggedInGuard } from './logged-in.guard';
import { AdminInGuard } from './admin-in.guard';
import { EmployeeInGuard } from './employee-in.guard';
// MaterialDesign
import { MatToolbarModule, MatButtonModule } from '@angular/material';
// Bootstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserInGuard } from './user-in.guard';

// Application wide providers
const APP_PROVIDERS = [AuthService, UserService, UtilsService, LoggedInGuard, AdminInGuard, EmployeeInGuard, AlertService, UserInGuard];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule.forRoot(),
    HttpClientModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    PagesModule,
    routing,
    MatToolbarModule,
    MatButtonModule
  ],
  providers: [APP_PROVIDERS],
  bootstrap: [AppComponent]
})
export class AppModule {}
