import { Component, OnInit } from '@angular/core';
import { project } from '../../project';
import { ProjectService } from '../../project.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-t-home',
  templateUrl: './t-home.component.html',
  styleUrl: './t-home.component.css'
})
export class THomeComponent implements OnInit {
  projects: project[] = [];

  constructor(private projectService: ProjectService, private router: Router) { }

  ngOnInit(): void {
    this.projectService.getData().subscribe(response => {
      this.projects = response;
    });
  }

  onProjectSelect(event: Event): void {
    const selectedProjectId = (event.target as HTMLSelectElement).value;
    if (selectedProjectId) {
      // this.router.navigate(['tUserProject/:projectId',selectedProjectId]);
      this.router.navigate(['tUserProject', selectedProjectId]);
    }
  }

  // projects = [
  //   { projectId: 1, projectName: 'Project Alpha' },
  //   { projectId: 2, projectName: 'Project Beta' },
  //   { projectId: 3, projectName: 'Project Gamma' },
  // ];

  // constructor(private router: Router) {}

  // ngOnInit(): void {}

  // selectProject(projectId: number): void {
  //   this.router.navigate(['/user-nav/project-detail', projectId]);
  // }

  logout(): void {
    // Implement logout logic here (e.g., clearing tokens, redirecting to login)
    this.router.navigate(['/home']);
  }


  redirecthome(){
    this.router.navigate(['user-nav/project-detail'])

  }

  redirect() {
    this.router.navigate(['./tUserDashboard']);
  } 

  // ngOnInit(): void {}
  //   selectProject(projectId: number): void {
  //     this.router.navigate(['/project-detail', projectId]);
    
  
  //   logout(): void {
  //     this.authService.logout();
  //     this.router.navigate(['/login']);
  // }

}
