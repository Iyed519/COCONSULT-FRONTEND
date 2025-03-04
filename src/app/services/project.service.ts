import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private apiUrl = 'http://localhost:8080/api/projects';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  constructor(private http: HttpClient) { }

  getProjects(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getProject(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  addProject(project: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, project, this.httpOptions);
  }

  updateProject(id: number, project: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, project, this.httpOptions);
  }

  deleteProject(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }

  addTaskToProject(projectId: number, task: string): Observable<any> {
    const taskData = { taskDescription: task }; // Ajustez selon votre modèle backend
    return this.http.post<any>(`${this.apiUrl}/${projectId}/tasks`, taskData, this.httpOptions);
  }

  deleteTaskFromProject(projectId: number, taskId: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${projectId}/tasks/${taskId}`);
  }

  updateTaskForProject(projectId: number, taskId: number, updatedTask: string): Observable<any> {
    const taskData = { taskDescription: updatedTask };
    return this.http.put<any>(`${this.apiUrl}/${projectId}/tasks/${taskId}`, taskData, this.httpOptions);
  }

  getProjectTasks(projectId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/${projectId}/tasks`);
  }
}