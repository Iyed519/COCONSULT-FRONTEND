import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:9000/api/finance';
  private apiUrlhr = 'http://localhost:9000/api/hr';


  constructor(private http: HttpClient) {}

  findAllAssets(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  findAllPosts(): Observable<any> {
    return this.http.get<any>(this.apiUrlhr);
  }


}
