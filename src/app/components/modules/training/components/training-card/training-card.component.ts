import {Component, EventEmitter, Input, Output} from '@angular/core';
import {TrainingResponse} from "../../../../../services/models/training-response";
@Component({
  selector: 'app-training-card',
  templateUrl: './training-card.component.html',
  styleUrls: ['./training-card.component.css']
})
export class TrainingCardComponent {

  private _training: TrainingResponse = {};
  private _trainingCover: string | undefined;
  private _manage: Boolean = false;
  // ------------------------------------
  get manage(): Boolean {
    return this._manage;
  }

  set manage(value: Boolean) {
    this._manage = value;
  }
  //----------------------------------------
  get trainingCover(): string | undefined {
    if (this._training.trainingCover) {
      return 'data:image/jpg;base64,' + this._training.trainingCover;
    }
    return 'https://picsum.photos/200/300';
  }
  //---------------------------------------

  get training(): TrainingResponse {
    return this._training;
  }

  @Input()
  set training(value: TrainingResponse) {
    this._training = value;
  }
  @Output() private share: EventEmitter<TrainingResponse> = new EventEmitter<TrainingResponse>();
  @Output() private addToWaitingList: EventEmitter<TrainingResponse> = new EventEmitter<TrainingResponse>();
  @Output() private details: EventEmitter<TrainingResponse> = new EventEmitter<TrainingResponse>();
  @Output() private enroll: EventEmitter<TrainingResponse> = new EventEmitter<TrainingResponse>();
  @Output() private edit: EventEmitter<TrainingResponse> = new EventEmitter<TrainingResponse>();




  onShowDetails() {
    this.details.emit(this._training)
  }

  onAddToWaitingList() {
    this.addToWaitingList.emit(this._training);
  }

  onEdit() {
    this.edit.emit(this._training);
  }

  onShare() {
    this.share.emit(this._training);
  }

  onEnroll() {
    this.enroll.emit(this._training);
  }
}
