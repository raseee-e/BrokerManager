export default class Notification {
  constructor({ id, userId, stockId, direction, createdAt }) {
    this.id = id;
    this.userId = userId;
    this.stockId = stockId;
    this.direction = direction;
    this.createdAt = createdAt || new Date();
  }
}