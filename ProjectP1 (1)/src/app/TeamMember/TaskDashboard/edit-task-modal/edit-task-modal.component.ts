// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-edit-task-modal',
//   templateUrl: './edit-task-modal.component.html',
//   styleUrl: './edit-task-modal.component.css'
// })
// export class EditTaskModalComponent {

// }

// import { Component, EventEmitter, Input, Output } from '@angular/core';
// import { User } from '../User';

// @Component({
//   selector: 'app-edit-task-modal',
//   templateUrl: './edit-task-modal.component.html',
//   styleUrls: ['./edit-task-modal.component.css']
// })
// export class EditTaskModalComponent {
//   @Input() task: User | null = null;
//   @Output() close = new EventEmitter<User>();

//   updatedTask: User | null = null;

//   ngOnInit() {
//     this.updatedTask = { ...this.task };
//   }

//   save() {
//     this.close.emit(this.updatedTask);
//   }

//   cancel() {
//     this.close.emit(null);
//   }
// }



import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../../../User';

@Component({
  selector: 'app-edit-task-modal',
  templateUrl: './edit-task-modal.component.html',
  styleUrls: ['./edit-task-modal.component.css']
})
export class EditTaskModalComponent implements OnInit {
  @Input() task: User | null = null;
  @Output() close = new EventEmitter<User | null>();

  updatedTask: User | null = null;

  ngOnInit() {
    if (this.task) {
      this.updatedTask = { ...this.task };
    }
  }

  save() {
    if (this.updatedTask) {
      this.close.emit(this.updatedTask);
    }
  }

  cancel() {
    this.close.emit(null);
  }
}

// import { Component, Input, Output, EventEmitter } from '@angular/core';
// import { User } from '../User';

// @Component({
//   selector: 'app-edit-task-modal',
//   templateUrl: './edit-task-modal.component.html',
//   styleUrls: ['./edit-task-modal.component.css']
// })
// export class EditTaskModalComponent {
//   @Input() task: User | null = null;
//   @Output() close = new EventEmitter<User | null>();

//   save() {
//     // Implement save logic here, update task details
//     if (this.updatedTask) {
//     this.close.emit(this.task);
//   }
// }

//   cancel() {
//     this.close.emit(null);
//   }



