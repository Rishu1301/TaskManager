import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectServiceService } from '../../project.service.service';
import { Project, Task, TeamMember } from '../../projectp';
import { TaskpService } from '../../taskp.service';

@Component({
  selector: 'app-task-assign',
  templateUrl: './task-assign.component.html',
  styleUrls: ['./task-assign.component.css']
})
export class TaskAssignComponent implements OnInit {
  
  showForm = false;
  project: Project | any;
  projectId: number =0;



  task: Task = { id:1, name: '', description: '', assignedTo: 1 };
  

  constructor(
    private taskService: TaskpService,
    private route: ActivatedRoute,
    private projectService: ProjectServiceService,
    
  ) {}

  toggleFormVisibility(): void {
    this.showForm = !this.showForm;
  }
  
  

  ngOnInit(): void {
    const projectId = Number(this.route.snapshot.paramMap.get('id'));
    
    console.log(`Project ID from route: ${projectId}`);
  this.projectService.getProjectById(projectId).subscribe((project) => {
    this.project = project;
    console.log('Project data set in component: ', this.project);

    });
  }

   
  

  createTask(): void {
    if (this.project) {
      this.projectService.addTaskToProject(this.project.id, this.task).subscribe(updatedProject => {
        this.project = updatedProject;
        this.resetForm();
      });
    }
  }

  resetForm(): void {
    this.task = { id: 0, name: '', description: '', assignedTo: 0 };
    this.showForm = false;
  }


  getMemberName(memberId: number): string {
    const member = this.project?.teamMembers.find((m: TeamMember)=> m.id == memberId);
    return member ? member.name : 'Unknown';
  }
}


