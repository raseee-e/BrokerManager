export default class StockPrice {
  constructor({ id, stockId, price, timestamp }) {
    this.id = id;
    this.stockId = stockId;
    this.price = price;
    this.timestamp = timestamp || new Date();
  }
}