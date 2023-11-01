import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import jwtDecode from "jwt-decode";
import {tokenStorageService} from "./token-storage.service";
import {User} from "../../user/module/user";

const AUTH_API = 'http://localhost:8080/api/auth/';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  httpOptions: any;
  isLoggedIn: boolean;
  private token: string;
  private tokenStorageService: tokenStorageService


  constructor(private httpClient: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      'Access-Control-Allow-Origin': 'http://localhost:4200',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS'
    };
  }

  login(obj): Observable<any> {
    return this.httpClient.post(AUTH_API + 'signIn', {
      username: obj.username,
      password: obj.password
    }, this.httpOptions);
  }

  getUsernameFromToken(): string {
    const token = tokenStorageService.getToken();
    if (token) {
      const decodedToken = jwtDecode(token);
      if (decodedToken && decodedToken['sub']) {
        console.log("dT:" + decodedToken);
        return decodedToken['sub'];
      }
    }
    return null;
  }

  setToken(token: string): void {
    this.token = token;
  }

  isUserLoggedIn(): boolean {
    if(this.token != null){
      return true
    }
    return false
  }
}
