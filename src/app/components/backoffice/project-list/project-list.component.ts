// project-list.component.ts
import { Component, OnInit } from '@angular/core';
import { ProjectService } from 'src/app/services/project.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {
editProject(arg0: any) {
throw new Error('Method not implemented.');
}
  projects: any[] = [];

  constructor(private projectService: ProjectService, private router: Router) {}

  ngOnInit(): void {
    this.loadProjects();
  }

  loadProjects(): void {
    this.projectService.getProjects().subscribe({
      next: (data) => {
        this.projects = data;
      },
      error: (error) => {
        console.error('Erreur lors du chargement des projets:', error);
      }
    });
  }

  addProject(): void {
    this.router.navigate(['/projects/add']);
  }

  viewTasks(projectId: number): void {
    this.router.navigate([`/projects/${projectId}/tasks`]);
  }

  deleteProject(projectId: number): void {
    if (confirm('Êtes-vous sûr de vouloir supprimer ce projet ?')) {
      this.projectService.deleteProject(projectId).subscribe({
        next: () => {
          this.projects = this.projects.filter(project => project.idProject !== projectId);
          alert('Projet supprimé avec succès');
        },
        error: (error) => {
          console.error('Erreur lors de la suppression du projet:', error);
          alert('Erreur lors de la suppression du projet');
        }
      });
    }
  }

  addTask(projectId: number): void {
    const task = prompt("Entrez la nouvelle tâche :");
    if (task) {
      this.projectService.addTaskToProject(projectId, task).subscribe({
        next: (response) => {
          // Mettre à jour la liste des tâches du projet concerné
          const projectIndex = this.projects.findIndex(p => p.idProject === projectId);
          if (projectIndex !== -1) {
            if (!this.projects[projectIndex].associatedTasks) {
              this.projects[projectIndex].associatedTasks = [];
            }
            this.projects[projectIndex].associatedTasks.push(response.taskDescription || task);
          }
          alert('Tâche ajoutée avec succès');
        },
        error: (error) => {
          console.error('Erreur lors de l\'ajout de la tâche:', error);
          alert('Erreur lors de l\'ajout de la tâche');
        }
      });
    }
  }

  deleteTask(projectId: number, taskId: number): void {
    if (confirm('Êtes-vous sûr de vouloir supprimer cette tâche ?')) {
      this.projectService.deleteTaskFromProject(projectId, taskId).subscribe({
        next: () => {
          const projectIndex = this.projects.findIndex(p => p.idProject === projectId);
          if (projectIndex !== -1) {
            this.projects[projectIndex].associatedTasks = 
              this.projects[projectIndex].associatedTasks.filter((t: any) => t.id !== taskId);
          }
          alert('Tâche supprimée avec succès');
        },
        error: (error) => {
          console.error('Erreur lors de la suppression de la tâche:', error);
          alert('Erreur lors de la suppression de la tâche');
        }
      });
    }
  }

  editTask(projectId: number, task: any): void {
    const updatedTask = prompt('Modifiez la tâche :', task);
    if (updatedTask && updatedTask !== task) {
      this.projectService.updateTaskForProject(projectId, task.id, updatedTask).subscribe({
        next: () => {
          const projectIndex = this.projects.findIndex(p => p.idProject === projectId);
          if (projectIndex !== -1) {
            const taskIndex = this.projects[projectIndex].associatedTasks.findIndex((t: any) => t.id === task.id);
            if (taskIndex !== -1) {
              this.projects[projectIndex].associatedTasks[taskIndex] = updatedTask;
            }
          }
          alert('Tâche modifiée avec succès');
        },
        error: (error) => {
          console.error('Erreur lors de la modification de la tâche:', error);
        }
      });
    }
  }
}