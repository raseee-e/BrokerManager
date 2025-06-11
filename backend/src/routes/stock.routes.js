import express from 'express';
import stockController from '../controllers/stock.controller.js';

const router = express.Router();

router.get('/', stockController.getAllStocks);
router.get('/:id', stockController.getStockById);

export default router;