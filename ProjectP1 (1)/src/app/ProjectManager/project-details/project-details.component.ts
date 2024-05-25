import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// import { ProjectService } from '../project-service.service';
import { Project, Task } from '../../projectp';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css']
})
export class ProjectDetailsComponent{
  project: Project | undefined;
  // newTask: Task = { Taskid: 0, TaskName: '',assignedTo: 0}
  //  status: '', priority: '', dueDate: new Date(), assignedTo: 0 };

  // constructor(private route: ActivatedRoute, private router: Router, private projectService: ProjectService) {}

  // ngOnInit(): void {
  //   const projectId = Number(this.route.snapshot.paramMap.get('id'));
  //   this.projectService.getProjectById(projectId).subscribe(project => {
  //     this.project = project;
  //   });
  // }

  // addMember(): void {
  //   // Logic to add a member
  // }

  // removeMember(memberId: number): void {
  //   if (this.project) {
  //     this.project.teamMembers = this.project.teamMembers.filter(member => member.id !== memberId);
  //   }
  // }

  // viewTaskAssign(): void {
  //   if (this.project) {
  //     this.router.navigate([`/project-manager/projects/${this.project.id}/task-assign`]);
  //   }
  // }

  // createTask(): void {
  //   if (this.project) {
  //     this.newTask.id = this.project.tasks.length + 1;
  //     this.project.tasks.push({ ...this.newTask });
  //     this.newTask = { id: 0, name: '', description: '', status: '', priority: '', dueDate: new Date(), assignedTo: 0 }; // Reset form
  //   }
  // }

  // getAssignedMemberName(memberId: number): string {
  //   const member = this.project?.teamMembers.find(m => m.id === memberId);
  //   return member ? member.name : 'Unknown';
  // }
}
