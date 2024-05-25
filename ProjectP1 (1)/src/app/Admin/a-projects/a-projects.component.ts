import { Component } from '@angular/core';
import { project } from '../../admin-auth';
import { ProjectService } from '../../project.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-a-projects',
  templateUrl: './a-projects.component.html',
  styleUrl: './a-projects.component.css'
})
export class AProjectsComponent {
  projects: project[] = [];

  constructor(private projectService: ProjectService, private route:Router) {}

  ngOnInit(): void {
    console.log("working");
    
    this.projectService.getData().subscribe(
      (data: project[]) => { // Assuming data is of type Project[]
        this.projects = data; // Assign the projects data from the API response directly
      },
      (error) => {
        console.error('Error fetching projects:', error);
        // Handle error scenario
      }
    );
  }
}
