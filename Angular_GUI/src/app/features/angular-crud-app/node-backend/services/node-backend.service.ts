import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NodeBackendService {
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {}

  getUserList(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  addUser(userDetails: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, userDetails);
  }

  updateUserDetails(userId: number, userDetails: any): Observable<any> {
    const url = `${this.apiUrl}/${userId}`;
    return this.http.put<any>(url, userDetails);
  }

  deleteUser(userId: number): Observable<any> {
    const url = `${this.apiUrl}/${userId}`;
    return this.http.delete<any>(url);
  }
}
