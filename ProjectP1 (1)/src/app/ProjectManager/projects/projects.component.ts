
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectServiceService } from '../../project.service.service'; // Adjust the path as needed
import { Project } from '../../projectp'; // Ensure this path is correct
import { Observable } from 'rxjs';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  
  
  projects: Observable<Project[]> | undefined;

  constructor(private projectService: ProjectServiceService, private router: Router) {}

  ngOnInit(): void {
    this.projects = this.projectService.getProjects();
  }

  


  viewProjectDetails(projectId: number): void {
    
    this.router.navigate([`/project-manager/projects/${projectId}`]);
  }

  viewTaskAssign(projectId: number): void {
    console.log("projectid in assign task is ",projectId);
    this.router.navigate([`/project-manager/projects/${projectId}/task-assign`]);
  }
  assignTask(projectId: number): void {
    this.router.navigate([`/project-manager/projects/${projectId}/task-assign`]);
  }
  createProject(){
    
  }
}
