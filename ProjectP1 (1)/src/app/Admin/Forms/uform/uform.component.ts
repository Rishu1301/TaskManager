import { Component } from '@angular/core';

@Component({
  selector: 'app-uform',
  templateUrl: './uform.component.html',
  styleUrl: './uform.component.css'
})
export class UFormComponent {
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
