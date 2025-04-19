import { Component } from '@angular/core';

@Component({
  selector: 'app-manage-training',
  templateUrl: './manage-training.component.html',
  styleUrls: ['./manage-training.component.css']
})
export class ManageTrainingComponent {
  errorMsg: Array<string> = [];
  selectedPicture: string | undefined;

  onFileSelected($event: Event) {
    
  }
}
