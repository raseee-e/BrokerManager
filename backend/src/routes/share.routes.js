import express from 'express';
import jwt from 'jsonwebtoken';
import * as shareController from '../controllers/share.controller.js';

const router = express.Router();

router.use((req, res, next) => {
  const auth = req.headers.authorization;
  if (!auth) return res.status(401).json({ message: 'No token' });
  const token = auth.split(' ')[1];
  try {
    const decoded = jwt.verify(token, 'your_jwt_secret');
    req.userId = decoded.id;
    next();
  } catch {
    return res.status(401).json({ message: 'Invalid token' });
  }
});

router.post('/', shareController.buyShare);
router.get('/', shareController.getMyShares);

export default router;