import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StockService } from '../../services/stock.service';
import { Stock } from '../../models/stock.model';
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

  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: ['9 AM', '10 AM', '11 AM', '12 AM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM'],
    datasets: [
      {
        data: [380, 350, 370, 390, 360, 400, 380, 390, 395],
        label: 'IBM',
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

  constructor(private route: ActivatedRoute, private stockService: StockService) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.stockService.getStock(id).subscribe(stock => {
      this.stock = stock;
      // Optionally, update chart data based on stock
      // this.lineChartData.datasets[0].data = ...;
      // this.lineChartData.datasets[0].label = stock.symbol;
    });
  }
}