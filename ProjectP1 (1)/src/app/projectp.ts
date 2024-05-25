// src/app/project.ts
export interface TeamMember {
    id: number;
    name: string;
    role: string;
  }
  
  export interface Task {
    id: number;
    name: string;
    description: string;
    assignedTo: number;
  }
  
  export interface Project {
    id: number;
    name: string;
    description: string;
    clientName: string;
    dueDate: Date;
    assignedDate: Date;
    teamMembers: TeamMember[];
    tasks: Task[];
  }
  
