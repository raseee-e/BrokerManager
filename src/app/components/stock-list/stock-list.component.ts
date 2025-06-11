import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { StockService } from '../../services/stock.service';
import { Stock } from '../../models/stock.model';

@Component({
  selector: 'app-stock-list',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.css']
})
export class StockListComponent implements OnInit {
  stocks: Stock[] = [];

  constructor(private stockService: StockService) {}

  ngOnInit() {
    this.stockService.getStocks().subscribe(data => this.stocks = data);
  }
}