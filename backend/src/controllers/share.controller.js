import db from '../services/database.service.js';
import { getWebSocketServer } from '../services/websocket.service.js';

export const buyShare = async (req, res) => {
  const userId = req.userId;
  const { stockId, quantity } = req.body;
  if (!userId || !stockId || !quantity) return res.status(400).json({ message: 'Missing data' });
  try {
    await db.query(
      'INSERT INTO shares (user_id, stock_id, quantity) VALUES ($1, $2, $3)',
      [userId, stockId, quantity]
    );

    // Fetch username and stock symbol for the notification
    const userResult = await db.query('SELECT username FROM users WHERE id = $1', [userId]);
    const stockResult = await db.query('SELECT symbol FROM stocks WHERE id = $1', [stockId]);
    const username = userResult.rows[0]?.username || 'Someone';
    const symbol = stockResult.rows[0]?.symbol || 'a stock';

    // Broadcast notification to all WebSocket clients
    const wss = getWebSocketServer();
    if (wss) {
      const notification = {
        type: 'stock-bought',
        message: `${username} bought ${quantity} share(s) of ${symbol}.`
      };
      wss.clients.forEach(client => {
        if (client.readyState === 1) {
          client.send(JSON.stringify(notification));
        }
      });
    }

    res.status(201).json({ message: 'Share bought' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getMyShares = async (req, res) => {
  const userId = req.userId;
  try {
    const result = await db.query(
      `SELECT s.*, st.symbol, st.name FROM shares s JOIN stocks st ON s.stock_id = st.id WHERE s.user_id = $1`,
      [userId]
    );
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};