import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllTemplateBackComponent } from './components/backoffice/all-template-back/all-template-back.component';
import { AllTemplateFrontComponent } from './components/frontoffice/all-template-front/all-template-front.component';
import { SigninComponent } from './components/frontoffice/signin/signin.component';
import { FinanceComponent } from './components/backoffice/finance/finance.component';
import { PostComponent } from './components/backoffice/post/post.component';
import { AdminComponent } from './components/backoffice/admin/admin.component';
import { CandidateevaluationComponent } from './components/backoffice/candidateevaluation/candidateevaluation.component';
import { NotFoundComponent } from './components/backoffice/not-found/not-found.component';
import { EmploymentevaluationComponent } from './components/backoffice/employmentevaluation/employmentevaluation.component';
import { OperationtaskComponent } from './components/backoffice/operationtask/operationtask.component';
import { CertificationComponent } from './components/backoffice/certification/certification.component';

const routes: Routes = [
   { path: '', component: AllTemplateBackComponent },
  { path: 'login', component: SigninComponent },
{path: 'dash' , component: AllTemplateBackComponent  },
{path: 'horizontal' , component: AllTemplateBackComponent  },
{path: 'finance' , component: FinanceComponent },
{path: 'candidateevaluation' , component: CandidateevaluationComponent },
{path: 'employmentevaluation' , component: EmploymentevaluationComponent },
{path:'post',component: PostComponent},
{path:'operationtask',component: OperationtaskComponent},
{path:'certification',component: CertificationComponent},
{path: 'ad' , component: AdminComponent },
{path: "**" , component: NotFoundComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
