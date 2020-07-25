import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl = 'http://localhost:5000/api/auth/';
  constructor(private http: HttpClient ) { }

  login(model: any) {
    return this.http.post(this.baseUrl + 'login', model)
    .pipe(
      map((Response: any) => {
        const user = Response; // user is a token object
        if (user) {
          localStorage.setItem('token', user.token); // user.token is to match what is going on in our object
        }
      })
    );
  }
  Register(model: any) {
    return this.http.post(this.baseUrl + 'register', model);
  }


}
