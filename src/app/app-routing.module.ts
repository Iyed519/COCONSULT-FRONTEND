import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllTemplateBackComponent } from './components/backoffice/all-template-back/all-template-back.component';
import { AllTemplateFrontComponent } from './components/frontoffice/all-template-front/all-template-front.component';
import {authGuard} from "../services/guard/auth.guard";
import {LoginComponent} from "./components/frontoffice/login/login.component";

const routes: Routes = [
  { path: '', component: AllTemplateBackComponent },
  { path: 'login', component: LoginComponent },
  {path: 'dash' , component: AllTemplateBackComponent, canActivate: [authGuard] },
  {path: 'horizontal' , component: AllTemplateBackComponent,canActivate: [authGuard]  },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
