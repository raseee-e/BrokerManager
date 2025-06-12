import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { StockListComponent } from "./components/stock-list/stock-list.component"
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule, HomeComponent, StockListComponent], // Remove NotificationComponent
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  username: string | null = null;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    if (this.isLoggedIn()) {
      this.fetchUsername();
    }
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  getUsername(): string {
    return this.username || localStorage.getItem('username') || 'Account';
  }

  fetchUsername() {
    const token = localStorage.getItem('token');
    if (!token) return;
    this.http.get<{ username: string }>('/api/users/me', {
      headers: { Authorization: `Bearer ${token}` }
    }).subscribe({
      next: (user: any) => {
        this.username = user.username;
        localStorage.setItem('username', user.username);
      },
      error: () => {
        this.username = null;
        localStorage.removeItem('token');
        localStorage.removeItem('username');
      }
    });
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    window.location.href = '/';
  }
}
