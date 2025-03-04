import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllTemplateBackComponent } from './components/backoffice/all-template-back/all-template-back.component';
import { ProjectListComponent } from './components/backoffice/project-list/project-list.component';
import { AddProjectComponent } from './components/backoffice/add-project/add-project.component';
import { EditProjectComponent } from './edit-project/edit-project.component';
import { AddTaskComponent } from './components/backoffice/add-task/add-task.component';
import { FinanceComponent } from './components/backoffice/finance/finance.component';
import { AdminComponent } from './components/backoffice/admin/admin.component';
import { SigninComponent } from './components/frontoffice/signin/signin.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },  // Redirection vers Dashboard
  { path: 'dashboard', component: AllTemplateBackComponent },
  { path: 'projects', component: ProjectListComponent },
  { path: 'add-project', component: AddProjectComponent },
  { path: 'edit-project/:id', component: EditProjectComponent },  // Route for editing a project
  { path: 'add-task', component: AddTaskComponent },
  { path: 'finance', component: FinanceComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'signin', component: SigninComponent },  // Page de connexion si besoin
  { path: '**', redirectTo: 'dashboard' }  // Redirection si la route n'existe pas
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }