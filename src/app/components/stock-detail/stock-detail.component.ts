import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StockService } from '../../services/stock.service';
import { WatchlistService } from '../../services/watchlist.service';
import { Stock } from '../../models/stock.model';
import { StockPrice } from '../../models/stock-price.model';
import { CommonModule } from '@angular/common';
import { NgChartsModule } from 'ng2-charts';
import { ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-stock-details',
  standalone: true,
  imports: [
    CommonModule,
    NgChartsModule
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

  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: [],
    datasets: [
      {
        data: [],
        label: '',
        fill: true,
        tension: 0.4,
        borderColor: '#3f51b5',
        backgroundColor: 'rgba(63,81,181,0.08)',
        pointBackgroundColor: '#3f51b5',
        pointBorderColor: '#fff',
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
        grid: { color: '#f44336' }
      },
      x: {
        grid: { color: '#f44336' }
      }
    }
  };

  constructor(
    private route: ActivatedRoute,
    private stockService: StockService,
    private watchlistService: WatchlistService
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
        // Sort by timestamp string (e.g., '09:00', '10:00')
        prices.sort((a, b) => a.timestamp.localeCompare(b.timestamp));
        this.lineChartData.labels = prices.map(p => p.timestamp);
        this.lineChartData.datasets[0].data = prices.map(p => p.price);
      }, () => {
        this.loading = false;
        this.noPrices = true;
      });

      // Check if on watchlist
      this.watchlistService.getWatchlist().subscribe(watchlist => {
        this.isWatched = !!watchlist.find(s => s.id === stock.id);
      });
    });
  }

  toggleWatch() {
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
}
