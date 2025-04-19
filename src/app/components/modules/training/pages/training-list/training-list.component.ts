import {Component, OnInit} from '@angular/core';
import {TrainingService} from "../../../../../services/services/training.service";
import {Router} from "@angular/router";
import {PageResponseTrainingResponse} from "../../../../../services/models/page-response-training-response";
import {TrainingResponse} from "../../../../../services/models/training-response";

@Component({
  selector: 'app-training-list',
  templateUrl: './training-list.component.html',
  styleUrls: ['./training-list.component.css']
})
export class TrainingListComponent implements OnInit {
  trainingResponse: PageResponseTrainingResponse = {};
  page: number = 0 ;
  size: number = 5  ;
  // message: string = '';
  level: string = '';
  constructor(
    private trainingService: TrainingService,
    private router: Router) {

  }

  ngOnInit(): void {
    this.findAllTrainings();
  }

  private findAllTrainings() {
    this.trainingService.findAllTrainings({
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


  //     (enroll)="enrollToTraining($event)" fel front
  // enrollToTraining(training: TrainingResponse) {
  //   this.message = ''
  //   this.trainingService.enrollToTraining({
  //     'training-id': training.id as number
  //   }).subscribe({
  //     next: () => {
  //       this.level = 'success';
  //       this.message = 'You have successfully enrolled to ' + training.name + 'training';
  //     },
  //      error (err):void => {
  //       console.log(err);
  //       this.level = 'error';
  //       this.message = err.error.error;
  //     }
  //   })
  // }
}
