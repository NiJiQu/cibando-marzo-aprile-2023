import { Injectable } from '@angular/core';
import { Subject, ReplaySubject, Observable } from 'rxjs';
import { user } from '../models/user.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  apiBaseUrl = 'api/users';

  datiUtente = new ReplaySubject;
  userRole = new ReplaySubject;

  constructor(private http: HttpClient) { }

  addUser(user: any): Observable<user>{
    return this.http.post<any>(`${this.apiBaseUrl}/signup`, user);
  }

  getUser(email: string): Observable<any> {
    const emailUtente = {'email': email};
    return this.http.post<any>(`${this.apiBaseUrl}/user`, emailUtente);
  }
}
