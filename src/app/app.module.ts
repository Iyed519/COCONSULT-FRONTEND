import { NgModule ,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
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
import { MatSnackBarModule } from '@angular/material/snack-bar';


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
import { FinanceComponent } from './components/backoffice/finance/finance.component';
import { AdminComponent } from './components/backoffice/admin/admin.component';
import { PostComponent } from './components/backoffice/post/post.component';
import { CandidateevaluationComponent } from './components/backoffice/candidateevaluation/candidateevaluation.component';
import { EmploymentevaluationComponent } from './components/backoffice/employmentevaluation/employmentevaluation.component';
import { CertificationComponent } from './components/backoffice/certification/certification.component';
import { OperationtaskComponent } from './components/backoffice/operationtask/operationtask.component';


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
    FinanceComponent,
    AdminComponent,
    PostComponent,
    CandidateevaluationComponent,
    EmploymentevaluationComponent,
    CertificationComponent,
    OperationtaskComponent
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
    MatSnackBarModule,
  ],
  schemas:[CUSTOM_ELEMENTS_SCHEMA], 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
