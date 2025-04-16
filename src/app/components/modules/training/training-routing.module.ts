import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from "./pages/main/main.component";
import {TrainingListComponent} from "./pages/training-list/training-list.component";

const routes: Routes = [
  {path: '', component: MainComponent,
  children: [
    {
      path: '',
      component: TrainingListComponent
    }
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrainingRoutingModule { }
