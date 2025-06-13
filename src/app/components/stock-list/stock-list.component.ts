import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { StockService } from '../../services/stock.service';
import { WatchlistService } from '../../services/watchlist.service';
import { Stock } from '../../models/stock.model';
import { AlertComponent } from "../alert/alert.component";

@Component({
  selector: 'app-stock-list',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule, RouterModule, AlertComponent],
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.css']
})
export class StockListComponent implements OnInit {
  stocks: Stock[] = [];
  filteredStocks: Stock[] = [];
  newStock: Partial<Stock> = {};

  selectedStock?: Stock;
  showBuyModal = false;
  buyQuantity = 1;
  buyLoading = false;
  buyMessage = '';

  alertMessage = '';

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

  showAlert(msg: string) {
    this.alertMessage = msg;
    setTimeout(() => this.alertMessage = '', 2500);
  }

  addToWatchlist(stockId: number) {
    if (!this.isLoggedIn()) {
      this.showAlert('Please log in to add to your watchlist.');
      return;
    }
    this.watchlistService.addToWatchlist(stockId).subscribe({
      next: () => this.showAlert('Added to watchlist!'),
      error: err => this.showAlert(err.error?.message || 'Could not add to watchlist.')
    });
  }

  openBuyModal(stock: Stock) {
    if (!this.isLoggedIn()) {
      this.showAlert('Please log in to buy shares.');
      return;
    }
    this.selectedStock = stock;
    this.showBuyModal = true;
    this.buyQuantity = 1;
    this.buyMessage = '';
  }
  closeBuyModal() {
    this.showBuyModal = false;
    this.buyMessage = '';
  }
  confirmBuy() {
    if (!this.selectedStock || this.buyQuantity < 1) return;
    this.buyLoading = true;
    this.buyMessage = '';
    this.stockService.buyShare(this.selectedStock.id, this.buyQuantity).subscribe({
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
  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }
}