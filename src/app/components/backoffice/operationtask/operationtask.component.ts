import { Component, OnInit } from '@angular/core';
import { OperationtaskService } from 'src/app/services/operationtask.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-operationtask',
  templateUrl: './operationtask.component.html',
  styleUrls: ['./operationtask.component.css']
})
export class OperationtaskComponent implements OnInit {
  operationTasks: any[] = [];
  selectedTask: any = null;
  taskForm: FormGroup;

  constructor(
    private operationTaskService: OperationtaskService,
    private fb: FormBuilder
  ) {
    this.taskForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', [Validators.required, Validators.minLength(5)]],
      status: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.getAllTasks();
  }

  // Fetch all operation tasks
  getAllTasks(): void {
    this.operationTaskService.getAll().subscribe((data) => {
      this.operationTasks = data;
    });
  }

  // Fetch a specific operation task
  getTask(id: number): void {
    this.operationTaskService.getById(id).subscribe((data) => {
      this.selectedTask = data;
      this.taskForm.patchValue(this.selectedTask);
    });
  }

  // Create or update an operation task
  saveTask(): void {
    if (this.taskForm.invalid) {
      return;
    }
    if (this.selectedTask) {
      // Update existing task
      this.operationTaskService.update(this.selectedTask.id, this.taskForm.value).subscribe(() => {
        this.getAllTasks();
        this.selectedTask = null;
        this.taskForm.reset();
      });
    } else {
      // Create a new task
      this.operationTaskService.create(this.taskForm.value).subscribe(() => {
        this.getAllTasks();
        this.taskForm.reset();
      });
    }
  }

  // Delete an operation task
  deleteTask(id: number): void {
    this.operationTaskService.delete(id).subscribe(() => {
      this.getAllTasks();
    });
  }

  // Select task for updating
  selectForUpdate(task: any): void {
    this.selectedTask = { ...task }; // Clone task to prevent direct mutations
    this.taskForm.patchValue(this.selectedTask);
  }

  // Cancel update
  cancelUpdate(): void {
    this.selectedTask = null;
    this.taskForm.reset();
  }
}
