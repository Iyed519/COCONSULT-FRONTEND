import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task.service';
import { ProjectService } from 'src/app/services/project.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  taskForm: FormGroup;
  projectId!: string;
  project: any;

  constructor(
    private fb: FormBuilder,
    private taskService: TaskService,
    private projectService: ProjectService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.taskForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      assignedTo: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      status: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.projectId = this.route.snapshot.paramMap.get('projectId')!;
    this.projectService.getProject(+this.projectId).subscribe(project => {
      this.project = project;
    });
  }

  onSubmit() {
    if (this.taskForm.valid) {
      this.taskService.addTask(this.projectId, this.taskForm.value).subscribe(() => {
        this.router.navigate([`/projects/${this.projectId}/tasks`]);
      });
    }
  }

  deleteTask(taskId: number): void {
    this.project.associatedTasks = this.project.associatedTasks.filter((task: any) => task.id !== taskId);
  }

  addTask(): void {
    const newTask = this.taskForm.value;
    this.project.associatedTasks.push(newTask);
    this.taskForm.reset();
  }
}