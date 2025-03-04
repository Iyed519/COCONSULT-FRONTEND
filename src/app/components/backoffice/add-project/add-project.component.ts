import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProjectService } from 'src/app/services/project.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {
  projectForm!: FormGroup;
  availableTasks = [
    { id: 1, name: "Définition des objectifs" },
    { id: 2, name: "Planification des ressources" },
    { id: 3, name: "Conception et développement" },
    { id: 4, name: "Tests et validation" },
    { id: 5, name: "Déploiement et suivi" }
  ];
  selectedTasks: any[] = [];

  constructor(
    private fb: FormBuilder,
    private projectService: ProjectService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.projectForm = this.fb.group({
      projectName: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', [Validators.required, Validators.minLength(10)]], 
      budget: ['1000', [Validators.required, Validators.min(1000)]],
      startDate: ['', Validators.required],
      endDate: ['', [Validators.required, this.endDateValidator.bind(this)]],
      status: ['planned', Validators.required]
    });
  }

  // Validator to ensure end date is after start date
  endDateValidator(control: any) {
    const startDate = this.projectForm?.get('startDate')?.value;
    const endDate = control.value;

    if (startDate && endDate && new Date(endDate) <= new Date(startDate)) {
      return { endDateInvalid: true };
    }
    return null;
  }

  // Ajouter une tâche sélectionnée
  addTask(event: any) {
    const selectedTaskId = parseInt(event.target.value, 10);
    const selectedTask = this.availableTasks.find(task => task.id === selectedTaskId);

    if (selectedTask && !this.selectedTasks.some(task => task.id === selectedTask.id)) {
      this.selectedTasks.push(selectedTask);
    }
  }

  // Supprimer une tâche de la liste sélectionnée
  removeTask(taskId: number) {
    this.selectedTasks = this.selectedTasks.filter(task => task.id !== taskId);
  }

  onSubmit() {
    if (this.projectForm.valid) {
      const projectData = {
        ...this.projectForm.value,
        tasks: this.selectedTasks
      };

      this.projectService.addProject(projectData).subscribe({
        next: (response) => {
          console.log("Projet ajouté avec succès :", response);
          alert("Projet ajouté avec succès !");
          this.router.navigate(['/projects']);
        },
        error: (error) => {
          console.error("Erreur lors de l'ajout du projet :", error);
          alert("Erreur lors de l'ajout du projet !");
        }
      });
    }
  }
}