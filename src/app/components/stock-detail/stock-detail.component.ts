import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StockService } from '../../services/stock.service';
import { WatchlistService } from '../../services/watchlist.service';
import { Stock } from '../../models/stock.model';
import { StockPrice } from '../../models/stock-price.model';
import { CommonModule } from '@angular/common';
import { NgChartsModule } from 'ng2-charts';
import { ChartConfiguration } from 'chart.js';
import { FormsModule } from '@angular/forms';
import { AlertComponent } from "../alert/alert.component";

@Component({
  selector: 'app-stock-details',
  standalone: true,
  imports: [
    CommonModule,
    NgChartsModule,
    FormsModule,
    AlertComponent
],
  templateUrl: './stock-detail.component.html',
  styleUrls: ['./stock-detail.component.css']
})
export class StockDetailsComponent implements OnInit {
  stock?: Stock;
  loading = true;
  noPrices = false;
  isWatched = false;
  watchLoading = false;
  showBuyModal = false;
  buyQuantity = 1;
  buyLoading = false;
  buyMessage = '';

  alertMessage = '';

  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: [],
    datasets: [
      {
        data: [],
        label: '',
        fill: false,
        tension: 0.4,
        borderColor: '#1976d2', 
        borderWidth: 3,       
        backgroundColor: '#1976d2',
        pointBackgroundColor: '#fff',
        pointBorderColor: '#1976d2',
        pointRadius: 6,
        pointHoverRadius: 8,
      }
    ]
  };

  public lineChartOptions: ChartConfiguration<'line'>['options'] = {
    responsive: true,
    plugins: {
      legend: { display: true }
    },
    scales: {
      y: {
        beginAtZero: false,
        grid: { color: '#e0e0e0' }
      },
      x: {
        grid: { color: '#e0e0e0' }
      }
    }
  };

  constructor(
    private route: ActivatedRoute,
    private stockService: StockService,
    private watchlistService: WatchlistService,
    private router: Router
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.stockService.getStock(id).subscribe(stock => {
      this.stock = stock;
      this.lineChartData.datasets[0].label = stock.symbol;

      this.stockService.getStockPrices(id).subscribe(prices => {
        this.loading = false;
        if (!prices.length) {
          this.noPrices = true;
          return;
        }
        prices.sort((a, b) => a.timestamp.localeCompare(b.timestamp));
        this.lineChartData.labels = prices.map(p => p.timestamp);
        this.lineChartData.datasets[0].data = prices.map(p => p.price);
      }, () => {
        this.loading = false;
        this.noPrices = true;
      });

      this.watchlistService.getWatchlist().subscribe(watchlist => {
        this.isWatched = !!watchlist.find(s => s.id === stock.id);
      });
    });
  }

  showAlert(msg: string) {
    this.alertMessage = msg;
    setTimeout(() => this.alertMessage = '', 2500);
  }

  toggleWatch() {
    if (!this.isLoggedIn()) {
      this.showAlert('Please log in to use your watchlist.');
      return;
    }
    if (!this.stock) return;
    this.watchLoading = true;
    if (this.isWatched) {
      this.watchlistService.removeFromWatchlist(this.stock.id).subscribe({
        next: () => {
          this.isWatched = false;
          this.watchLoading = false;
        },
        error: () => { this.watchLoading = false; }
      });
    } else {
      this.watchlistService.addToWatchlist(this.stock.id).subscribe({
        next: () => {
          this.isWatched = true;
          this.watchLoading = false;
        },
        error: () => { this.watchLoading = false; }
      });
    }
  }

  openBuyModal() {
    if (!this.isLoggedIn()) {
      this.showAlert('Please log in to buy shares.');
      return;
    }
    this.showBuyModal = true;
    this.buyQuantity = 1;
    this.buyMessage = '';
  }
  closeBuyModal() {
    this.showBuyModal = false;
    this.buyMessage = '';
  }
  confirmBuy() {
    if (!this.stock || this.buyQuantity < 1) return;
    this.buyLoading = true;
    this.buyMessage = '';
    this.stockService.buyShare(this.stock.id, this.buyQuantity).subscribe({
      next: () => {
        this.buyMessage = 'Successfully bought!';
        this.buyLoading = false;
        setTimeout(() => this.closeBuyModal(), 1000);
      },
      error: err => {
        this.buyMessage = err.error?.message || 'Could not buy share.';
        this.buyLoading = false;
      }
    });
  }

  goBack() {
    this.router.navigate(['/stocks']);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }
}

