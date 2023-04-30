import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BaseHttpService } from './base-http.service';
import { Login } from '../models';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends BaseHttpService {

  loginToSystem(loginData: Login): Observable<any> {
    return this.post<any>('Auth/Login', loginData);
  }
}
