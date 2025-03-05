import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CandidateevaluationService {

  private apiUrl = 'http://localhost:9000/hr'; //backend

  constructor(private http: HttpClient) { }

  // Create a new candidate evaluation
  create(evaluation: any): Observable<any> {
    return this.http.post<any>(this.apiUrl+ '/addCandidateEvaluation', evaluation);
  }

  // Get all candidate evaluations
  getAll(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl+ '/getAllCandidateEvaluations');
  }

  // Get a specific candidate evaluation
  get(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl+'/getCandidateEvaluationById/{id}'}/${id}`);
  }

  // Update a candidate evaluation
  update(id: number, evaluation: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl+'/updateCandidateEvaluation'}/${id}`, evaluation);
  }

  // Delete a candidate evaluation
  delete(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl+'/deleteCandidateEvaluation'}/${id}`);
  }
}
