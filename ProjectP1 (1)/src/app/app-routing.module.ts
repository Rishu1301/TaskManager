import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AHomeComponent } from './Admin/a-home/a-home.component';
import { THomeComponent } from './TeamMember/t-home/t-home.component';

import {TSignupComponent} from './TeamMember/t-signup/t-signup.component';
import { Login1Component } from './Admin/a-signup/login1/login1.component';
import { ATasksComponent } from './Admin/a-tasks/a-tasks.component';
import { AProjectsComponent } from './Admin/a-projects/a-projects.component';
import { UserDashboardComponent } from './TeamMember/TaskDashboard/user-dashboard/user-dashboard.component';
import { ProjectDetailComponent } from './TeamMember/TaskDashboard/project-detail/project-detail.component';
import { ADashboardComponent } from './Admin/a-dashboard/a-dashboard.component';
import { ProjectManagerLoginComponent } from './ProjectManager/login/login.component';
import { PmNavbarComponent } from './ProjectManager/navbar/navbar.component';
import { ProjectManagerComponent } from './ProjectManager/project-manager/project-manager.component';
import {PMDashboardComponent } from './ProjectManager/dashboard/dashboard.component';
import { PMClientInfoComponent } from './ProjectManager/client-info/client-info.component';
import { PMProjectsComponent } from './ProjectManager/projects/projects.component';


const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  }, 
  {
    path:'AdminHome',
    component:AHomeComponent
  },
  {
    path:'Memlogin',
    component:TSignupComponent
  },
  {
    path:"AdminLogin",
    component:Login1Component
  },
  {
    path:'AdminTasks',
    component:ATasksComponent
  },
  {
    path:'AdminProjects',
    component:AProjectsComponent,
    children:[
     { path: '', redirectTo: 'Ahome', pathMatch: 'full'},
     { path: 'AdminHome', component: AHomeComponent }]
  },
  {
    path:'AdminTasks',
    component:ATasksComponent
  },
  {
    path:'tHome',
    component:THomeComponent,
  },
  {
    path:'tUserDashboard',
    component:UserDashboardComponent
  },
  {
    path:'tUserProject',
    component:ProjectDetailComponent,
    
  },
  { path: "tUserProject/:projectId", component: ProjectDetailComponent },
  {
    path:'AdminDashboard',
    component:ADashboardComponent
  },
  {
    path:'ProjectManegerLogin',
    component:ProjectManagerLoginComponent
  },
  {
    path:'PmHomePage',
    component:ProjectManagerComponent
  },
  {
    path:"PmnavBar",
    component:PmNavbarComponent
  },
  {
    path:"PMDashboard",
    component:PMDashboardComponent
  },
  {
    path:'PmClientInfo',
    component:PMClientInfoComponent
  },
  {
    path:'PMProjects',
    component:PMProjectsComponent
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
