import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllTemplateBackComponent } from './components/backoffice/all-template-back/all-template-back.component';
import { AllTemplateFrontComponent } from './components/frontoffice/all-template-front/all-template-front.component';
import { SigninComponent } from './components/frontoffice/signin/signin.component';
import { AdminComponent } from './components/backoffice/admin/admin.component';
import { LiabilityListComponent } from './components/backoffice/Liability/liability-list/liability-list.component';
import { LiabilityFormComponent } from './components/backoffice/Liability/liability-form/liability-form.component';
import { HomeComponent } from './components/backoffice/home/home.component';

const routes: Routes = [
   { path: '',
    component:AllTemplateBackComponent,
    children:[
      { path:'aziz', component:HomeComponent },
      { path: 'liability-list', component: LiabilityListComponent }
    ]  },  
   
   { path: 'liability-form', component: LiabilityFormComponent }, // for creating
   { path: 'liability-form/:id', component: LiabilityFormComponent },
  { path: 'login', component: SigninComponent },
{path: 'dash' , component: AllTemplateBackComponent  },
{path: 'horizontal' , component: AllTemplateBackComponent  },
{path: 'ad' , component: AdminComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
