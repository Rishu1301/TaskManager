import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AdminAuthService } from '../../../admin-auth.service';
import { AdminAuth } from '../../../admin-auth';

@Component({
  selector: 'app-login',
  templateUrl: './login1.component.html',
  styleUrls: ['./login1.component.css']
})
export class Login1Component implements OnInit {
passwordInput: any;
  loginError: string | undefined;
  constructor(private adminAuthService: AdminAuthService, private router: Router) {}

  @ViewChild('loginText')
  loginText!: ElementRef;
  @ViewChild('loginForm')
  loginForm!: ElementRef;
  @ViewChild('loginBtn')
  loginBtn!: ElementRef;
  @ViewChild('signupBtn')
  signupBtn!: ElementRef;
  @ViewChild('signupLink')
  signupLink!: ElementRef;

  ngOnInit(): void {
    // Initialization logic
  }

  switchToSignupAd() {
    this.loginForm.nativeElement.style.marginLeft = '-50%';
    this.loginText.nativeElement.style.marginLeft = '-50%';
  }

  switchToLoginAd() {
    this.loginForm.nativeElement.style.marginLeft = '0%';
    this.loginText.nativeElement.style.marginLeft = '0%';
  }

  login(email: string, password: string): void {
    this.adminAuthService.login(email, password).subscribe(
      (loggedIn) => {
        if (loggedIn) {
          console.log('Login successful');
          // Redirect to dashboard or desired page upon successful login
          alert("Welcome To REVTASK")
          this.router.navigate(['/AdminHome'])
          
        } else {
          this.loginError = 'Invalid email or password';
          console.warn('Invalid email or password');
          alert("Enter the Correct email or password")
          // Show error message to the user
        }
      },
      (error) => {
        console.error('An error occurred while logging in', error);
      },
    );
  }
  

  signup(username: string, email: string, password: string): void {
    console.log(username);
    const adminData: AdminAuth = { username, email, password };
    this.adminAuthService.signup(adminData).subscribe(
      (newAdmin) => {
        console.log('Signup successful', newAdmin);
      },
      (error) => {
        console.log('Signup failed', error);
      }
    );
  }
  
}
