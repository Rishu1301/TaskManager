// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-change-status-modal',
//   templateUrl: './change-status-modal.component.html',
//   styleUrl: './change-status-modal.component.css'
// })
// export class ChangeStatusModalComponent {

// }

// import { Component, EventEmitter, Input, Output } from '@angular/core';
// import { User } from '../User';

// @Component({
//   selector: 'app-change-status-modal',
//   templateUrl: './change-status-modal.component.html',
//   styleUrls: ['./change-status-modal.component.css']
// })
// export class ChangeStatusModalComponent {
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
  selector: 'app-change-status-modal',
  templateUrl: './change-status-modal.component.html',
  styleUrls: ['./change-status-modal.component.css']
})
export class ChangeStatusModalComponent implements OnInit {
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


