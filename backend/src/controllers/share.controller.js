import db from '../services/database.service.js';

export const buyShare = async (req, res) => {
  const userId = req.userId;
  const { stockId, quantity } = req.body;
  if (!userId || !stockId || !quantity) return res.status(400).json({ message: 'Missing data' });
  try {
    await db.query(
      'INSERT INTO shares (user_id, stock_id, quantity) VALUES ($1, $2, $3)',
      [userId, stockId, quantity]
    );
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