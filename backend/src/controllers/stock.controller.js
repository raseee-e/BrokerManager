const getAllStocks = (req, res) => {
  // TODO: Replace with real DB logic
  res.status(200).json([{ id: 1, symbol: 'AAPL', name: 'Apple Inc.' }]);
};

const getStockById = (req, res) => {
  // TODO: Replace with real DB logic
  const { id } = req.params;
  if (id === '1') {
    res.status(200).json({ id: 1, symbol: 'AAPL', name: 'Apple Inc.' });
  } else {
    res.status(404).json({ message: 'Stock not found' });
  }
};

export default {
  getAllStocks,
  getStockById,
};