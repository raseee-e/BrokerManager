import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { StockService } from '../../services/stock.service';
import { WatchlistService } from '../../services/watchlist.service';
import { Stock } from '../../models/stock.model';

@Component({
  selector: 'app-stock-list',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule, RouterModule],
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.css']
})
export class StockListComponent implements OnInit {
  stocks: Stock[] = [];
  filteredStocks: Stock[] = [];
  newStock: Partial<Stock> = {};

  constructor(private stockService: StockService, private watchlistService: WatchlistService) {}

  ngOnInit() {
    this.loadStocks();
  }

  loadStocks() {
    this.stockService.getStocks().subscribe(data => {
      this.stocks = data;
      this.filteredStocks = data;
    });
  }

  filterStocks(term: string) {
    this.filteredStocks = this.stocks.filter(
      s => s.symbol.toLowerCase().includes(term.toLowerCase()) ||
           s.name.toLowerCase().includes(term.toLowerCase())
    );
  }

  addStock() {
    if (this.newStock.symbol && this.newStock.name) {
      this.stockService.createStock(this.newStock).subscribe(stock => {
        this.stocks.push(stock);
        this.filteredStocks = [...this.stocks];
        this.newStock = {};
      });
    }
  }

  addToWatchlist(stockId: number) {
    this.watchlistService.addToWatchlist(stockId).subscribe({
      next: () => alert('Added to watchlist!'),
      error: err => alert(err.error?.message || 'Could not add to watchlist.')
    });
  }
}