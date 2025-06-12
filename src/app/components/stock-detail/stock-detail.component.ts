import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StockService } from '../../services/stock.service';
import { Stock } from '../../models/stock.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-stock-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './stock-detail.component.html',
  styleUrls: ['./stock-detail.component.css']
})
export class StockDetailsComponent implements OnInit {
  stock?: Stock;

  constructor(private route: ActivatedRoute, private stockService: StockService) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.stockService.getStock(id).subscribe(stock => this.stock = stock);
  }
}