import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private apiUrl = 'http://localhost:8080/api/tasks';  // L'URL de votre backend

  constructor(private http: HttpClient) { }

  addTask(projectId: string, task: any): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/projects/${projectId}`, task);
  }
}
