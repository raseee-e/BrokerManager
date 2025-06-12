import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user-login.component.html',
  styleUrls: ["./user-login.component.css"]
})
export class UserLoginComponent {
  credentials = { email: '', password: '' };
  message = '';

  constructor(private http: HttpClient, private router: Router) {}

  login() {
    this.http.post<{ token: string, username: string }>('/api/users/login', this.credentials).subscribe({
      next: res => {
        localStorage.setItem('token', res.token);
        localStorage.setItem('username', res.username); // Make sure your backend returns username
        this.message = 'Login successful!';
        this.router.navigate(['/stocks']); // Redirect to stocks page
      },
      error: err => this.message = err.error?.message || 'Login failed.'
    });
  }
}