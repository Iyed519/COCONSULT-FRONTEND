import {Component, Input} from '@angular/core';
import {TrainingResponse} from "../../../../../services/models/training-response";

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css']
})
export class BookCardComponent {
  private _training: TrainingResponse = {};
  private _trainingCover: string | undefined;

  get trainingCover(): string | undefined {
    if (this._training.trainingCover) {
      return this._trainingCover;
    }
    return this._trainingCover;
  }

  get training(): TrainingResponse {
    return this._training;
  }

  @Input()
  set training(value: TrainingResponse) {
    this._training = value;
  }

}
