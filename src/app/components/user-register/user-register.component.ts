import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent {
  user = { username: '', email: '', password: '' };
  message = '';
  redirecting = false;

  constructor(private http: HttpClient, private router: Router) {}

  register() {
    this.http.post('/api/users/register', this.user).subscribe({
      next: () => {
        this.message = 'Registration successful!';
        this.redirecting = true;
        setTimeout(() => {
          this.router.navigate(['/login']);
        }, 2000);
      },
      error: err => this.message = err.error?.message || 'Registration failed.'
    });
  }
}