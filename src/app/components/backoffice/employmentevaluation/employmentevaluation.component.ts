import { Component, OnInit } from '@angular/core';
import { EmploymentevaluationService } from 'src/app/services/employmentevaluation.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-employmentevaluation',
  templateUrl: './employmentevaluation.component.html',
  styleUrls: ['./employmentevaluation.component.css']
})
export class EmploymentevaluationComponent implements OnInit {
  evaluations: any[] = [];
  selectedEvaluation: any = null;
  newEvaluation: any = {
    employeeName: '',
    performanceScore: null,
    feedback: ''
  };

  constructor(private evaluationService: EmploymentevaluationService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.getAllEvaluations();
  }

  // Récupérer toutes les évaluations
  getAllEvaluations(): void {
    this.evaluationService.getAll().subscribe((data) => {
      this.evaluations = data;
    });
  }

  // Récupérer une évaluation spécifique
  getEvaluation(id: number): void {
    this.evaluationService.getById(id).subscribe((data) => {
      this.selectedEvaluation = data;
    });
  }

  // Créer ou mettre à jour une évaluation
  saveEvaluation(): void {
    if (this.selectedEvaluation) {
      // Mettre à jour
      this.evaluationService.update(this.selectedEvaluation.id, this.selectedEvaluation).subscribe(() => {
        this.getAllEvaluations();
        this.selectedEvaluation = null;
        this.showSuccessMessage('Evaluation updated successfully!');
      });
    } else {
      // Créer une nouvelle évaluation
      this.evaluationService.create(this.newEvaluation).subscribe(() => {
        this.getAllEvaluations();
        this.newEvaluation = { employeeName: '', performanceScore: null, feedback: '' };
        this.showSuccessMessage('Evaluation added successfully!');
      });
    }
  }

  // Show success message
  showSuccessMessage(message: string): void {
    this.snackBar.open(message, 'Close', {
      duration: 3000, // 3 seconds
      horizontalPosition: 'right',
      verticalPosition: 'top',
      panelClass: ['success-snackbar']
    });
  }

  // Supprimer une évaluation
  deleteEvaluation(id: number): void {
    this.evaluationService.delete(id).subscribe(() => {
      this.getAllEvaluations();
      this.showSuccessMessage('Evaluation deleted successfully!');
    });
  }

  // Sélectionner une évaluation pour mise à jour
  selectForUpdate(evaluation: any): void {
    this.selectedEvaluation = { ...evaluation }; // Cloner l'évaluation pour éviter les mutations directes
  }

  // Annuler la mise à jour
  cancelUpdate(): void {
    this.selectedEvaluation = null;
  }
}
