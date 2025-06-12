import express from 'express';
import stockController from '../controllers/stock.controller.js';

const router = express.Router();

router.get('/', stockController.getAllStocks);
router.get('/:id', stockController.getStockById);
router.post('/', stockController.createStock);

export default router;