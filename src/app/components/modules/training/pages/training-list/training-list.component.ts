import {Component, OnInit} from '@angular/core';
import {TrainingService} from "../../../../../services/services/training.service";
import {Router} from "@angular/router";
import {PageResponseTrainingResponse} from "../../../../../services/models/page-response-training-response";

@Component({
  selector: 'app-training-list',
  templateUrl: './training-list.component.html',
  styleUrls: ['./training-list.component.css']
})
export class TrainingListComponent implements OnInit {
  trainingResponse: PageResponseTrainingResponse = {};
  page: number = 1 ;
  size: number = 5;
  constructor(
    private trainingService: TrainingService,
    private router: Router) {

  }

  ngOnInit(): void {
    this.findAllBooks();
  }

  private findAllBooks() {
    this.trainingService.findAllTrainings({
      page: this.page,
      size: this.size
    }).subscribe({
      next: (trainings) => {
        this.trainingResponse = trainings;
      }
    });
  }
}
