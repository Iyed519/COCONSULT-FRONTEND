import {Component, Input} from '@angular/core';
import {TrainingResponse} from "../../../../../services/models/training-response";
@Component({
  selector: 'app-training-card',
  templateUrl: './training-card.component.html',
  styleUrls: ['./training-card.component.css']
})
export class TrainingCardComponent {

  private _training: TrainingResponse = {};
  private _trainingCover: string | undefined;

  get trainingCover(): string | undefined {
    if (this._training.trainingCover) {
      return 'data:image/jpg;base64,' + this._training.trainingCover;
    }
    return 'https://picsum.photos/200/300';
  }


  get training(): TrainingResponse {
    return this._training;
  }

  @Input()
  set training(value: TrainingResponse) {
    this._training = value;
  }


}
