import { Injectable } from '@angular/core';
import { Observable, filter, of, switchMap, tap } from 'rxjs';
import { ProjectP, Task } from './projectp'; // Adjust the path as needed
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

  
  getProjects(): Observable<ProjectP[]> {
    return this.http.get<ProjectP[]>(`${this.apiURL}/projects`).pipe(
      tap(projects => console.log('Fetched projects:', projects))
    );
  }

  getProjectById(id: number): Observable<ProjectP | undefined> {
    
    return this.http.get<ProjectP>(`${this.apiURL}/projects/${id}`);
  }
  addTaskToProject(projectId: number, task: Task): Observable<ProjectP> {
    return this.getProjectById(projectId).pipe(
      filter((project): project is ProjectP => project !== undefined),
      switchMap((project: ProjectP) => {
        project.tasks.push(task);
        return this.http.put<ProjectP>(`${this.apiURL}/projects/${projectId}`, project, this.httpOptions);
      })
    );
  }
}
