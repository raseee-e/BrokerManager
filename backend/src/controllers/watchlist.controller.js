import db from '../services/database.service.js';

export const addToWatchlist = async (req, res) => {
  const userId = req.userId;
  const { stockId } = req.body;
  if (!userId || !stockId) return res.status(400).json({ message: 'Missing user or stock' });
  try {
    await db.query(
      'INSERT INTO watchlist (user_id, stock_id) VALUES ($1, $2) ON CONFLICT DO NOTHING',
      [userId, stockId]
    );
    res.status(201).json({ message: 'Added to watchlist' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getWatchlist = async (req, res) => {
  const userId = req.userId;
  try {
    const result = await db.query(
      `SELECT s.* FROM watchlist w JOIN stocks s ON w.stock_id = s.id WHERE w.user_id = $1`,
      [userId]
    );
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const removeFromWatchlist = async (req, res) => {
  const userId = req.userId;
  const { stockId } = req.params;
  try {
    await db.query(
      'DELETE FROM watchlist WHERE user_id = $1 AND stock_id = $2',
      [userId, stockId]
    );
    res.json({ message: 'Removed from watchlist' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};