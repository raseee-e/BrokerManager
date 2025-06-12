import db from '../services/database.service.js';

const getAllStocks = async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM stocks');
    res.status(200).json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getStockById = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await db.query('SELECT * FROM stocks WHERE id = $1', [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ message: 'Stock not found' });
    }
    res.status(200).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const createStock = async (req, res) => {
  const { symbol, name, description } = req.body;
  if (!symbol || !name) {
    return res.status(400).json({ message: 'Symbol and name are required' });
  }
  try {
    const result = await db.query(
      'INSERT INTO stocks (symbol, name, description) VALUES ($1, $2, $3) RETURNING *',
      [symbol, name, description || '']
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};



export default {
  getAllStocks,
  getStockById,
  createStock,
};