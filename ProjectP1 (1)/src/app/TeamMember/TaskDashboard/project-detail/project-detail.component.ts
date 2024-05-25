import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from '../../../project.service';
import { project } from '../../../project';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {

  projectId: number | undefined;
  project: project | undefined;

  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService
  ) { }

  ngOnInit(): void {
    // Get the project ID from the route parameters
    this.route.params.subscribe(params => {
      this.projectId = +params['projectId'];
      // Fetch project details based on project ID
      this.getProjectDetails(this.projectId);
    });
  }

  getProjectDetails(id: number): void {
    this.projectService.getData().subscribe(projects => {
      this.project = projects.find(project => project.projectId === id);
    });
  }
  
  // projectId: number | undefined;
  // project: any;

  // projects = [
  //   { projectId: 1, projectName: 'Project Alpha', projectDescription: 'Description of Project Alpha', clientName: 'Client A', clientInfo: 'Client A Info', assignDate: '2024-01-01', dueDate: '2024-01-15' },
  //   { projectId: 2, projectName: 'Project Beta', projectDescription: 'Description of Project Beta', clientName: 'Client B', clientInfo: 'Client B Info', assignDate: '2024-02-01', dueDate: '2024-02-15' },
  //   { projectId: 3, projectName: 'Project Gamma', projectDescription: 'Description of Project Gamma', clientName: 'Client C', clientInfo: 'Client C Info', assignDate: '2024-03-01', dueDate: '2024-03-15' }
  // ];

  // constructor(private route: ActivatedRoute) {}

  // ngOnInit(): void {
  //   this.route.params.subscribe(params => {
  //     this.projectId = +params['projectId'];
  //     this.loadProjectDetails(this.projectId);
  //   });
  // }

  // loadProjectDetails(projectId: number): void {
  //   this.project = this.projects.find(p => p.projectId === projectId);
  // }
}
