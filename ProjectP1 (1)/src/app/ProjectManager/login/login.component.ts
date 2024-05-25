import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private router: Router) { }

  login(): void {
    if (this.username === 'admin' && this.password === 'admin') {
      this.router.navigate(['/project-manager']);
    } else {
      alert('Invalid credentials');
    }
  }
}
