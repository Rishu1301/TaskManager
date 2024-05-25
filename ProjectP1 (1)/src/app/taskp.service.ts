import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from './projectp';

@Injectable({
  providedIn: 'root'
})
export class TaskpService {
  private apiUrl = 'http://localhost:3001';


  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };


  getTasks(): Observable<Task> {
    return this.http.get<Task>(`${this.apiUrl}/tasks`);
  }

  createTask(task: Task): Observable<Task> {
    return this.http.post<Task>(`${this.apiUrl}/tasks`,task);
  }
  

  updateTask(task: Task): Observable<Task> {
    return this.http.put<Task>(`${this.apiUrl}/tasks/${task.id}`,task);
  }
  addTask(task:Task){
    return this.http.post<Task>(`${this.apiUrl}/tasks`,task);

  }
}
