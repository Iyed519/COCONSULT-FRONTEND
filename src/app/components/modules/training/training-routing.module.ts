import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from "./pages/main/main.component";
import {TrainingListComponent} from "./pages/training-list/training-list.component";
import {MyTrainingsComponent} from "./pages/my-trainings/my-trainings.component";
import {ManageTrainingComponent} from "./pages/manage-training/manage-training.component";

const routes: Routes = [
  {path: '', component: MainComponent,
  children: [
    {path: '', component: TrainingListComponent },
    {path: 'my-trainings', component: MyTrainingsComponent },
    {path: 'manage-training', component: ManageTrainingComponent},
    {path: 'manage-training/:trainingId', component: ManageTrainingComponent}

  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrainingRoutingModule {

}
