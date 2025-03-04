import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProjectService } from 'src/app/services/project.service';

@Component({
  selector: 'app-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.css']
})
export class EditProjectComponent implements OnInit {
  projectForm!: FormGroup;
  projectId!: number;
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
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.projectId = this.route.snapshot.params['id'];
    this.loadProject();

    this.projectForm = this.fb.group({
      projectName: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', [Validators.required, Validators.minLength(10)]],
      budget: ['1000', [Validators.required, Validators.min(1000)]],
      startDate: ['', Validators.required],
      endDate: ['', [Validators.required, this.endDateValidator.bind(this)]],
      status: ['planned', Validators.required]
    });
  }

  loadProject(): void {
    this.projectService.getProject(this.projectId).subscribe({
      next: (project) => {
        this.projectForm.patchValue(project);
        this.selectedTasks = project.associatedTasks || [];
      },
      error: (error) => {
        console.error('Erreur lors du chargement du projet:', error);
      }
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

      this.projectService.updateProject(this.projectId, projectData).subscribe({
        next: () => {
          alert('Projet modifié avec succès');
          this.router.navigate(['/projects']);
        },
        error: (error) => {
          console.error('Erreur lors de la modification du projet:', error);
          alert('Erreur lors de la modification du projet');
        }
      });
    }
  }
}