import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmploymentevaluationService {
  private apiUrl = 'http://localhost:9000/hr';

  constructor(private http: HttpClient) { }

  // Récupérer toutes les évaluations
  getAll(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl+'/getAllEmploymentEvaluations');
  }

  // Récupérer une évaluation par ID
  getById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl+'/getEmploymentEvaluationById/{id}'}/${id}`);
  }

  // Créer une nouvelle évaluation
  create(evaluation: any): Observable<any> {
    return this.http.post<any>(this.apiUrl+'/addEmploymentEvaluation', evaluation);
  }

  // Mettre à jour une évaluation
  update(id: number, evaluation: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl+'/updateEmploymentEvaluation'}/${id}`, evaluation);
  }

  // Supprimer une évaluation
  delete(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl+'/deleteEmploymentEvaluation'}/${id}`);
  }
}
