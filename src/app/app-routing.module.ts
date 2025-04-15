import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./FRONTEND/pages/login/login.component";
import {RegisterComponent} from "./FRONTEND/pages/register/register.component";
import {ActivateAccountComponent} from "./FRONTEND/pages/activate-account/activate-account.component";

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {path: 'activate-account', component: ActivateAccountComponent },
  {path: 'trainings', loadChildren:() => import('./modules/training/training.module').then(m => m.TrainingModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
