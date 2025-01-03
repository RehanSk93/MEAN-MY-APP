import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {userLists} from './api-const'

@Injectable({
  providedIn: 'root',
})
export class NodeBackendService {
  private apiUrl = userLists;

  constructor(private http: HttpClient) {}

  getUserList(): Observable<any> {
    return this.http.get<any[]>(this.apiUrl);
  }

  createUser(userDetails: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, userDetails);
  }

  updateUserDetails(userId: any, userDetails: any): Observable<any> {
    const _url = `${this.apiUrl}/${userId}`;
    console.log('_URL', _url);
    console.log('userDetails', userDetails);
    
    return this.http.patch<any>(_url, userDetails);
  }

  deleteUser(userId: number): Observable<any> {
    const url = `${this.apiUrl}/${userId}`;
    return this.http.delete<any>(url);
  }
}
