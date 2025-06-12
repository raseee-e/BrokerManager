import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Stock } from '../models/stock.model';

@Injectable({ providedIn: 'root' })
export class WatchlistService {
  private apiUrl = '/api/watchlist';

  private getAuthHeaders() {
    const token = localStorage.getItem('token');
    return token ? { headers: new HttpHeaders({ Authorization: `Bearer ${token}` }) } : {};
  }

  addToWatchlist(stockId: number): Observable<any> {
    return this.http.post(this.apiUrl, { stockId }, this.getAuthHeaders());
  }

  getWatchlist(): Observable<Stock[]> {
    return this.http.get<any[]>(this.apiUrl, this.getAuthHeaders()).pipe(
      map(stocks => stocks.map(s => ({
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
      })))
    );
  }

  removeFromWatchlist(stockId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${stockId}`, this.getAuthHeaders());
  }

  constructor(private http: HttpClient) {}
}