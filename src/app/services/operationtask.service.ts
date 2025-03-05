import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OperationtaskService {
  private apiUrl = 'http://localhost:9000/hr';

  constructor(private http: HttpClient) { }

  // Get all operation tasks
  getAll(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl+'/getAllOperationTasks');
  }

  // Get operation task by ID
  getById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl+'/getOperationTaskById/{id'}/${id}`);
  }

  // Create a new operation task
  create(operationTask: any): Observable<any> {
    return this.http.post<any>(this.apiUrl+'/addOperationTask', operationTask);
  }

  // Update an existing operation task
  update(id: number, operationTask: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl+'/updateOperationTask'}/${id}`, operationTask);
  }

  // Delete an operation task
  delete(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl+'/deleteOperationTask'}/${id}`);
  }
}