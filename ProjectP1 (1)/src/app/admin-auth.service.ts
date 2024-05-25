import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, map, of, throwError } from 'rxjs';
import { AdminAuth } from './admin-auth';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthService {
  private apiUrl = 'http://localhost:3000/AdminAuth';  // JSON server URL

  constructor(private http: HttpClient) {}
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  login(email: string, password: string): Observable<boolean> {
    return this.http.get<AdminAuth[]>(`${this.apiUrl}`).pipe(
      map(admins => {
        // Find the admin with matching email
        const admin = admins.find(admin => admin.email === email);

        // If admin with matching email is found
        if (admin) {
          // Verify password
          if (admin.password === password) {
            return true; // User authenticated successfully
          } else {
            return false; // Incorrect password
          }
        } else {
          return false; // No matching user found
        }
      }),
      catchError(error => {
        console.error('An error occurred while logging in', error);
        throw error; // Propagate the error
      })
    );
  }

  signup(adminData: AdminAuth): Observable<AdminAuth> {
    return this.http.post<AdminAuth>(this.apiUrl, adminData)
      
  }

 
}
