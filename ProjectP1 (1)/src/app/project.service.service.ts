import { Injectable } from '@angular/core';
import { Observable, filter, of, switchMap, tap } from 'rxjs';
import { Project, Task } from './projectp'; // Adjust the path as needed
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProjectServiceService {
  apiURL='http://localhost:3001';
  
  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  
  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(`${this.apiURL}/projects`).pipe(
      tap(projects => console.log('Fetched projects:', projects))
    );
  }

  getProjectById(id: number): Observable<Project | undefined> {
    
    return this.http.get<Project>(`${this.apiURL}/projects/${id}`);
  }
  addTaskToProject(projectId: number, task: Task): Observable<Project> {
    return this.getProjectById(projectId).pipe(
      filter((project): project is Project => project !== undefined),
      switchMap((project: Project) => {
        project.tasks.push(task);
        return this.http.put<Project>(`${this.apiURL}/projects/${projectId}`, project, this.httpOptions);
      })
    );
  }
}
