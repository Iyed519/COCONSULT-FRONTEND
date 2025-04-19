import {Component, OnInit} from '@angular/core';
import {TrainingService} from "../../../../../services/services/training.service";
import {Router} from "@angular/router";
import {PageResponseTrainingResponse} from "../../../../../services/models/page-response-training-response";
import {TrainingResponse} from "../../../../../services/models/training-response";
import {TrainingCardComponent} from "../../components/training-card/training-card.component";


@Component({
  selector: 'app-my-trainings',
  templateUrl: './my-trainings.component.html',
  styleUrls: ['./my-trainings.component.css']
})
export class MyTrainingsComponent implements OnInit {
  trainingResponse: PageResponseTrainingResponse = {};
  page: number = 0 ;
  size: number = 1  ;
  message: string = '';
  level: string = '';
  constructor(
    private trainingService: TrainingService,
    private router: Router) {

  }

  ngOnInit(): void {
    this.findAllTrainings();
  }

  private findAllTrainings() {
    this.trainingService.findAllTrainingsByTrainee({
      page: this.page,
      size: this.size
    }).subscribe({
      next: (trainings) => {
        this.trainingResponse = trainings;
      }
    });
  }

  goToFirstPage() {
    this.page = 0;
    this.findAllTrainings();
  }

  goToPreviousPage() {
    this.page--;
    this.findAllTrainings()
  }

  goToPage(page: number) {
    this.page = page;// page is index (l index ta3 html)
    this.findAllTrainings();
  }

  goToNextPage() {
    this.page++;
    this.findAllTrainings();
  }

  goToLastPage() {
    this.page = this.trainingResponse.totalPages as number -1;
    this.findAllTrainings();
  }
  get isLastPage(): boolean {
    return this.page == this.trainingResponse.totalPages as number -1;
  }
  unEnrollFromTraining(training: TrainingResponse) {
    this.message = ''
    this.trainingService.unEnrollFromTraining({
      'training-id': training.id as number
    }).subscribe({
      next: () => {
        this.level = 'success';
        this.message = 'successfully unenrolled from this Training';
        this.findAllTrainings();
        },
      error: (err) => {
        console.log(err);
        this.level = 'error';
        this.message = err.error.error;
      }
    });
  }

  addToWaitingList(training: TrainingResponse) {

  }

  ShareBook(training: TrainingResponse) {

  }
}
