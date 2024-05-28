import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../client.service';



@Component({
  selector: 'app-client-info',
  templateUrl: './client-info.component.html',
  styleUrls: ['./client-info.component.css']
})
export class PMClientInfoComponent implements OnInit {
  clients: any[] = [];

  constructor(private clientService: ClientService) { }

  ngOnInit(): void {
    this.clientService.getProjects().subscribe(
      data => {
        this.processProjectsData(data);
      },
      error => {
        console.error('Error fetching projects:', error);
      }
    );
  }

  private processProjectsData(projectsData: any): void {
    if (projectsData && Array.isArray(projectsData)) {
      const clientMap = new Map();

      projectsData.forEach(project => {
        if (!clientMap.has(project.clientName)) {
          clientMap.set(project.clientName, { name: project.clientName, projects: 0, tasksCompleted: 0, effort: '0h' });
        }
        const client = clientMap.get(project.clientName);
        client.projects += 1;
        client.tasksCompleted += project.tasks.length;
        const averageEffortPerTask = 8; // Example average effort per task
        client.effort = `${parseInt(client.effort) + project.tasks.length * averageEffortPerTask}h`;
      });

      this.clients = Array.from(clientMap.values());
    } else {
      console.error('Unexpected projects data format:', projectsData);
    }
  }
}
