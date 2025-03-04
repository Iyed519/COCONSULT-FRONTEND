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

// Frontoffice
import { AllTemplateFrontComponent } from './components/frontoffice/all-template-front/all-template-front.component';
import { HeaderFrontComponent } from './components/frontoffice/header-front/header-front.component';
import { FooterFrontComponent } from './components/frontoffice/footer-front/footer-front.component';
import { SigninComponent } from './components/frontoffice/signin/signin.component';

// Backoffice
import { FooterBackComponent } from './components/backoffice/footer-back/footer-back.component';
import { HeaderBackComponent } from './components/backoffice/header-back/header-back.component';
import { AllTemplateBackComponent } from './components/backoffice/all-template-back/all-template-back.component';
import { HorizontalComponent } from './components/backoffice/sidebarstyle/horizontal/horizontal.component';
import { FinanceComponent } from './components/backoffice/finance/finance.component';
import { AdminComponent } from './components/backoffice/admin/admin.component';
import { ProjectListComponent } from './components/backoffice/project-list/project-list.component';
import { AddProjectComponent } from './components/backoffice/add-project/add-project.component';
import { AddTaskComponent } from './components/backoffice/add-task/add-task.component';
import { EditProjectComponent } from './edit-project/edit-project.component';

@NgModule({
  declarations: [
    AppComponent,
    AllTemplateFrontComponent,
    HeaderFrontComponent,
    FooterFrontComponent,
    SigninComponent,
    FooterBackComponent,
    HeaderBackComponent,
    AllTemplateBackComponent,
    HorizontalComponent,
    FinanceComponent,
    AdminComponent,
    ProjectListComponent,
    AddProjectComponent,
    AddTaskComponent,
    EditProjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,  // ✅ Ajout du module de routing
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
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
