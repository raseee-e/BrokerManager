import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Stock } from '../models/stock.model';
import { StockPrice } from '../models/stock-price.model';

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
  getStockPrices(stockId: number): Observable<StockPrice[]> {
  return this.http.get<any[]>(`/api/stocks/${stockId}/prices`).pipe(
    map(prices => prices.map(p => ({
      id: p.id,
      stockId: p.stock_id,
      price: p.price,
      timestamp: p.time,
      currency: p.currency ?? 'USD'
    })))
  );
}

buyShare(stockId: number, quantity: number) {
  const token = localStorage.getItem('token');
  const headers = token ? new HttpHeaders({ Authorization: `Bearer ${token}` }) : undefined;
  return this.http.post('/api/shares', { stockId, quantity }, { headers });
}

getMyShares() {
  const token = localStorage.getItem('token');
  const headers = token ? new HttpHeaders({ Authorization: `Bearer ${token}` }) : undefined;
  return this.http.get<any[]>('/api/shares', { headers, responseType: 'json' as const });
}
}