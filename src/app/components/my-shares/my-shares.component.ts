import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StockService } from '../../services/stock.service';
import { Router } from '@angular/router';
import { AlertComponent } from '../alert/alert.component';

@Component({
  selector: 'app-my-shares',
  standalone: true,
  imports: [CommonModule, AlertComponent],
  templateUrl: "./my-shares.component.html",
  styleUrls: ["./my-shares.component.css"]
})
export class MySharesComponent implements OnInit {
  shares: any[] = [];
  alertMessage = '';

  constructor(private stockService: StockService, private router: Router) {}

  ngOnInit() {
    if (!this.isLoggedIn()) {
      this.alertMessage = 'Please log in to view your shares.';
      setTimeout(() => this.router.navigate(['/login']), 2000);
      return;
    }
    this.stockService.getMyShares().subscribe(shares => this.shares = shares);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }
}