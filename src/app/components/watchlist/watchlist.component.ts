import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WatchlistService } from '../../services/watchlist.service';
import { Stock } from '../../models/stock.model';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-watchlist',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.css']
})
export class WatchlistComponent implements OnInit {
  stocks: Stock[] = [];
  constructor(private watchlistService: WatchlistService) {}
  ngOnInit() {
    this.watchlistService.getWatchlist().subscribe(stocks => this.stocks = stocks);
  }
  remove(stockId: number) {
    this.watchlistService.removeFromWatchlist(stockId).subscribe(() => {
      this.stocks = this.stocks.filter(s => s.id !== stockId);
    });
  }
}