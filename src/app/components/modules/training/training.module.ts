import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrainingRoutingModule } from './training-routing.module';
import { MainComponent } from './pages/main/main.component';
import { MenuComponent } from './components/menu/menu.component';
import { TrainingListComponent } from './pages/training-list/training-list.component';
import { TrainingCardComponent } from './components/training-card/training-card.component';
import { RatingComponent } from './components/rating/rating.component';


@NgModule({
  declarations: [
    MainComponent,
    MenuComponent,
    TrainingListComponent,
    TrainingCardComponent,
    RatingComponent,
  ],
  imports: [
    CommonModule,
    TrainingRoutingModule
  ]
})
export class TrainingModule { }
