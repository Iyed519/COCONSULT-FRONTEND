import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllTemplateBackComponent } from './components/backoffice/all-template-back/all-template-back.component';
import { AllTemplateFrontComponent } from './components/frontoffice/all-template-front/all-template-front.component';
import { HomeComponent } from './components/backoffice/home/home.component';
import {LoginComponent} from "./components/frontoffice/login/login.component";
import {RegisterComponent} from "./components/frontoffice/register/register.component";
import {ActivateAccountComponent} from "./components/frontoffice/activate-account/activate-account.component";

const routes: Routes = [
   { path: '',
    component:AllTemplateBackComponent,
    children:[
      { path:'aziz', component:HomeComponent },
        { path: 'dash' , component: AllTemplateBackComponent  },

    ]  },
    {path: 'dash' , component: AllTemplateBackComponent  },
    {path: 'home' ,component: AllTemplateFrontComponent },
    {path: 'login' , component: LoginComponent },
    {path: 'register' , component: RegisterComponent },
    {path: 'activate-account' , component: ActivateAccountComponent },
    {path: 'horizontal' , component: AllTemplateBackComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
