import { Injectable } from '@angular/core';
import {JwtHelperService} from "@auth0/angular-jwt";

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  set token(token: string) {
    localStorage.setItem('token', token);
  }
  getToken(){
    return localStorage.getItem('token');
  }
  isTokenNotValid(){
    return !this.isTokenValid;
  }
  isTokenValid(){
    const token = this.getToken();
    if (!token) {
      return false;
    }
    //decode a token
    const jwthelper = new JwtHelperService();
    //expiring date
    const isTokenExpired = jwthelper.isTokenExpired(token);
    if (isTokenExpired) {
      localStorage.clear();
      return false;
    }
    return true;
  }
}
