import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { ToastrModule } from 'ngx-toastr';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { FullCalendarModule } from '@fullcalendar/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
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
import { SigninComponent } from './components/frontoffice/signin/signin.component';
import { HorizontalComponent } from './components/backoffice/sidebarstyle/horizontal/horizontal.component';
import { AdminComponent } from './components/backoffice/admin/admin.component';
import { LiabilityListComponent } from './components/backoffice/Liability/liability-list/liability-list.component';
import { LiabilityFormComponent } from './components/backoffice/Liability/liability-form/liability-form.component';
import { NavbarBackComponent } from './components/backoffice/navbar-back/navbar-back.component';
import { HomeComponent } from './components/backoffice/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    AllTemplateFrontComponent,
    HeaderFrontComponent,
    FooterFrontComponent,
    FooterBackComponent,
    HeaderBackComponent,
    AllTemplateBackComponent,
    SigninComponent,
    HorizontalComponent,
    AdminComponent,
    LiabilityListComponent,
    LiabilityFormComponent,
    NavbarBackComponent,
    HomeComponent
  ],
  imports: [
    RouterModule.forRoot([]), 
    BrowserModule,
    AppRoutingModule,
    FullCalendarModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
