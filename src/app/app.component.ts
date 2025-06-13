import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { StockListComponent } from "./components/stock-list/stock-list.component"
import { HttpClient } from '@angular/common/http';
import { WebsocketService } from './services/websocket.service';
import { AlertComponent } from './components/alert/alert.component'; // if not already imported

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule, HomeComponent, StockListComponent, AlertComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  username: string | null = null;
  alertMessage = '';

  constructor(private http: HttpClient, private wsService: WebsocketService) {}

  ngOnInit() {
    if (this.isLoggedIn()) {
      this.fetchUsername();
    }
    this.wsService.connect().subscribe({
      next: msg => {
        // Show a notification, update UI, etc.
        console.log('WebSocket message:', msg);
        // Example: alert on certain events
        if (msg.type === 'heartbeat') {
          // Show a toast or notification
        }
        if (msg.type === 'stock-bought') {
          this.showAlert(msg.message);
        }
      },
      error: err => console.error('WebSocket error', err),
      complete: () => console.log('WebSocket closed')
    });
  }

  showAlert(msg: string) {
    this.alertMessage = msg;
    setTimeout(() => this.alertMessage = '', 3000);
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
