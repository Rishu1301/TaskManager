import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './User';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  private apiUrl = 'http://localhost:3000/tasks';

  constructor(private http: HttpClient) { }

  getTasks(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }

  createTask(task: User): Observable<User> {
    return this.http.post<User>(this.apiUrl, task);
  }

  updateTask(task: User): Observable<User> {
    return this.http.put<User>(`${this.apiUrl}/${task.taskId}`,task);
  }
}