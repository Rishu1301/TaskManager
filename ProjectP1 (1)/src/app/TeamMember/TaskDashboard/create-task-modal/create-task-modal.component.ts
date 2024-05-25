// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-create-task-modal',
//   templateUrl: './create-task-modal.component.html',
//   styleUrl: './create-task-modal.component.css'
// })
// export class CreateTaskModalComponent {

// }

// import { Component, EventEmitter, Output } from '@angular/core';
// import { User } from '../User';

// @Component({
//   selector: 'app-create-task-modal',
//   templateUrl: './create-task-modal.component.html',
//   styleUrls: ['./create-task-modal.component.css']
// })
// export class CreateTaskModalComponent {
//   @Output() close = new EventEmitter<User>();

//   newTask: User = {
//     projectId: 0,
//     taskId: 0,
//     taskName: '',
//     assignTo: '',
//     assignDate: new Date(),
//     dueDate: new Date(),
//     priority: 'Low',
//     status: 'Open'
//   };

//   save() {
//     this.close.emit(this.newTask);
//   }

//   cancel() {
//     this.close.emit(null);
//   }
// }


import { Component, EventEmitter, Output } from '@angular/core';
import { User } from '../../../User';

@Component({
  selector: 'app-create-task-modal',
  templateUrl: './create-task-modal.component.html',
  styleUrls: ['./create-task-modal.component.css']
})
export class CreateTaskModalComponent {
  @Output() close = new EventEmitter<User | null>();

  newTask: User = {
    projectId: 0,
    taskId: 0,
    taskName: '',
    assignTo: '',
    assignDate: new Date(),
    dueDate: new Date(),
    priority: 'Low',
    status: 'Open'
  };

  save() {
    console.log("Task to save: ", this.newTask);
    this.close.emit(this.newTask);
  }

  cancel() {
    this.close.emit(null);
  }
}
