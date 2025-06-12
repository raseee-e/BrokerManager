import { StockPrice } from "./stock-price.model";

export interface Stock {
  id: number;
  name: string;
  openRate: number;
  closeRate: number;
  peakPrice: number;
  lowPrice: number;
  currentRate: number;
  yearLow: number;
  yearHigh: number;
  symbol: string;

}