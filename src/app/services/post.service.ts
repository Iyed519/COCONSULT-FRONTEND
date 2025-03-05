import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private apiUrl = 'http://localhost:9000/hr'; //backend

  constructor(private http: HttpClient) {}

  getAll(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl+'/getAllPosts');
  }

  create(post: any): Observable<any> {
    return this.http.post<any>(this.apiUrl+'/addPost', post);
  }

  update(id: number, post: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl+'updatePost'}/${id}`, post);
  }

  delete(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl+'/deletePost'}/${id}`);
  }
}
