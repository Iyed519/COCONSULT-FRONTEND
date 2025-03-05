import { Component, OnInit } from '@angular/core';
import { CandidateevaluationService } from 'src/app/services/candidateevaluation.service';

@Component({
  selector: 'app-candidateevaluation',
  templateUrl: './candidateevaluation.component.html',
  styleUrls: ['./candidateevaluation.component.css']
})
export class CandidateevaluationComponent implements OnInit {
  evaluations: any[] = [];
  selectedEvaluation: any = null;
  newEvaluation: any = {
    candidateName: '',
    score: null,
    feedback: ''
  };

  constructor(private evaluationService: CandidateevaluationService) { }

  ngOnInit(): void {
    this.getAllEvaluations();
  }

  // Fetch all evaluations
  getAllEvaluations(): void {
    this.evaluationService.getAll().subscribe((data) => {
      this.evaluations = data;
    });
  }

  // Fetch a specific evaluation
  getEvaluation(id: number): void {
    this.evaluationService.get(id).subscribe((data) => {
      this.selectedEvaluation = data;
    });
  }

  // Create or update evaluation
  saveEvaluation(): void {
    if (this.selectedEvaluation) {
      // Update the evaluation
      this.evaluationService.update(this.selectedEvaluation.id, this.selectedEvaluation).subscribe(() => {
        this.getAllEvaluations();
        this.selectedEvaluation = null;
      });
    } else {
      // Create a new evaluation
      this.evaluationService.create(this.newEvaluation).subscribe(() => {
        this.getAllEvaluations();
        this.newEvaluation = { candidateName: '', score: null, feedback: '' };
      });
    }
  }

  // Delete an evaluation
  deleteEvaluation(id: number): void {
    this.evaluationService.delete(id).subscribe(() => {
      this.getAllEvaluations();
    });
  }

  // Select evaluation for updating
  selectForUpdate(evaluation: any): void {
    this.selectedEvaluation = { ...evaluation }; // Clone the evaluation to prevent direct mutations
  }

  // Cancel updating
  cancelUpdate(): void {
    this.selectedEvaluation = null;
  }
}
