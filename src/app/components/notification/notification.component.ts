import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NotificationService } from '../../services/notification.service';
import { Notification } from '../../models/notification.model';

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  notifications: Notification[] = [];
  newNotification: Partial<Notification> = {};

  constructor(private notificationService: NotificationService) {}

  ngOnInit() {
    this.loadNotifications();
  }

  loadNotifications() {
    this.notificationService.getNotifications().subscribe(data => {
      this.notifications = data;
    });
  }

  addNotification() {
    if (this.newNotification.userId && this.newNotification.stockId && this.newNotification.direction) {
      this.notificationService.createNotification(this.newNotification).subscribe(notification => {
        this.notifications.push(notification);
        this.newNotification = {};
      });
    }
  }

  deleteNotification(id: number) {
    this.notificationService.deleteNotification(id).subscribe(() => {
      this.notifications = this.notifications.filter(n => n.id !== id);
    });
  }

  markAllAsRead() {
    // Implement as needed, or just clear for demo
    this.notifications = [];
  }
}