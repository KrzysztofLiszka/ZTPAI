import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseHttpService } from './base-http.service';
import { Login, Register } from '../models';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends BaseHttpService {

  isLoggedIn: boolean = false;

  updateLoggedIn(value: boolean): void {
    this.isLoggedIn = value;
  }

  loginToSystem(loginData: Login): Observable<any> {
    return this.post<any>('Auth/Login', loginData);
  }

  registerToTheSystem(registerData: Register): Observable<any> {
    return this.post<any>('Auth/Register', registerData);
  }

}
