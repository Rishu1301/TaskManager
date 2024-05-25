import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { project } from '../../admin-auth';
import { ProjectService } from '../../project.service';

@Component({
  selector: 'app-a-home',
  templateUrl: './a-home.component.html',
  styleUrl: './a-home.component.css'
 
})
export class AHomeComponent {
  projects: project[] = [];

  constructor(private projectService: ProjectService, private route:Router) {}

  fetchProjects(): void {
    this.route.navigate(['/AdminProjects']);

  }
  fetchTask():void{
    this.route.navigate(['/AdminTasks'])
  }

  
}
