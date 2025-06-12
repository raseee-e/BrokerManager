import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Stock } from '../models/stock.model';

@Injectable({ providedIn: 'root' })
export class StockService {
  private apiUrl = '/api/stocks';

  constructor(private http: HttpClient) {}

  getStocks(): Observable<Stock[]> {
    return this.http.get<any[]>(this.apiUrl).pipe(
      map(stocks =>
        stocks.map(s => ({
          id: s.id,
          name: s.name,
          symbol: s.symbol,
          openRate: s.openrate,
          closeRate: s.closerate,
          peakPrice: s.peakprice,
          lowPrice: s.lowprice,
          currentRate: s.currentrate,
          yearLow: s.yearlow,
          yearHigh: s.yearhigh
        }))
      )
    );
  }

  createStock(stock: Partial<Stock>): Observable<Stock> {
    return this.http.post<Stock>(this.apiUrl, stock);
  }

  getStock(id: number): Observable<Stock> {
    return this.http.get<any>(`${this.apiUrl}/${id}`).pipe(
      map(s => ({
        id: s.id,
        name: s.name,
        symbol: s.symbol,
        openRate: s.openrate,
        closeRate: s.closerate,
        peakPrice: s.peakprice,
        lowPrice: s.lowprice,
        currentRate: s.currentrate,
        yearLow: s.yearlow,
        yearHigh: s.yearhigh
      }))
    );
  }
}