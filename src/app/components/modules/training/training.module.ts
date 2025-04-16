import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrainingRoutingModule } from './training-routing.module';
import { MainComponent } from './pages/main/main.component';
import { MenuComponent } from './components/menu/menu.component';
import { TrainingListComponent } from './pages/training-list/training-list.component';
import { BookCardComponent } from './components/book-card/book-card.component';


@NgModule({
  declarations: [
    MainComponent,
    MenuComponent,
    TrainingListComponent,
    BookCardComponent
  ],
  imports: [
    CommonModule,
    TrainingRoutingModule
  ]
})
export class TrainingModule { }
