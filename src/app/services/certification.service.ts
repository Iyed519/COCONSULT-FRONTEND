import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CertificationService {
  private apiUrl = 'http://localhost:9000/hr'; 

  constructor(private http: HttpClient) { }

  // Récupérer toutes les certifications
  getAll(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl + '/getAllCertifications');
  }

  // Récupérer une certification par ID
  getById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl+'/getCertificationById/{id}'}/${id}`);
  }

  // Créer une nouvelle certification
  create(certification: any): Observable<any> {
    return this.http.post<any>(this.apiUrl+'/addCertification', certification);
  }

  // Mettre à jour une certification existante //zeyda? or conditionned
  update(id: number, certification: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl+'/updateCertification'}/${id}`, certification);
  }

  // Supprimer une certification
  delete(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl+'/deleteCertification'}/${id}`);
  }
}
