import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import jwtDecode from "jwt-decode";
import {tokenStorageService} from "./token-storage.service";

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

  //hàm này để lấy value đưa về back-end
  login(obj): Observable<any> {
    return this.httpClient.post(AUTH_API + 'signIn', {
      username: obj.username,
      password: obj.password
    }, this.httpOptions);
  }


  // Hàm này để lấy giá trị username từ token
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

  // Hàm này để lưu token sau khi đăng nhập
  setToken(token: string): void {
    this.token = token;
  }
}