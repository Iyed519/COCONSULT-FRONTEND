import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { FullCalendarModule } from '@fullcalendar/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { CalendarOptions } from '@fullcalendar/core/internal';



//frontoffice
import { AllTemplateFrontComponent } from './components/frontoffice/all-template-front/all-template-front.component';
import { HeaderFrontComponent } from './components/frontoffice/header-front/header-front.component';
import { FooterFrontComponent } from './components/frontoffice/footer-front/footer-front.component';


//backoffice
import { FooterBackComponent } from './components/backoffice/footer-back/footer-back.component';
import { HeaderBackComponent } from './components/backoffice/header-back/header-back.component';
import { AllTemplateBackComponent } from './components/backoffice/all-template-back/all-template-back.component';

import { HorizontalComponent } from './components/backoffice/sidebarstyle/horizontal/horizontal.component';
import { NavbarBackComponent } from './components/backoffice/navbar-back/navbar-back.component';
import { HomeComponent } from './components/backoffice/home/home.component';
import { LoginComponent} from "./components/frontoffice/login/login.component";
import { RegisterComponent } from './components/frontoffice/register/register.component';
import { ActivateAccountComponent } from './components/frontoffice/activate-account/activate-account.component';
import {CodeInputModule} from "angular-code-input";
import {HttpTokenInterceptor} from "./services/interceptor/http-token.interceptor";


@NgModule({
  declarations: [
    AppComponent,
    AllTemplateFrontComponent,
    HeaderFrontComponent,
    FooterFrontComponent,
    FooterBackComponent,
    HeaderBackComponent,
    AllTemplateBackComponent,
    HorizontalComponent,
    NavbarBackComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ActivateAccountComponent
  ],
  imports: [
    RouterModule.forRoot([]),
    BrowserModule,
    AppRoutingModule,
    FullCalendarModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-top-center',
      closeButton: true,
      timeOut: 3000,
      preventDuplicates: true,
      progressBar: false,
    }),
    MatToolbarModule,
    MatCardModule,
    MatIconModule,
    CodeInputModule,
    HttpClientModule,
  ],
  providers: [
    HttpClient,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpTokenInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
