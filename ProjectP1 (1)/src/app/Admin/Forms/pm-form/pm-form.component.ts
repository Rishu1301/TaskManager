import { Component } from '@angular/core';

@Component({
  selector: 'app-pm-form',
  templateUrl: './pm-form.component.html',
  styleUrl: './pm-form.component.css'
})
export class PmFormComponent {
  userData = {
    username: '',
    email: '',
    password: ''
  };


  handleSubmit(){
    if(!(this.userData.email&&this.userData.password&&this.userData.username)){
    alert('You have missed some things');
  }
  else{
    alert('You have done correctly for user')
  }
}
}
