import express from 'express';
import userController from '../controllers/user.controller.js';
import jwt from 'jsonwebtoken';

const router = express.Router();

router.post('/register', userController.registerUser);
router.post('/login', userController.loginUser);
router.get('/me', (req, res) => {
  const auth = req.headers.authorization;
  if (!auth) return res.status(401).json({ message: 'No token' });
  const token = auth.split(' ')[1];
  try {
    const decoded = jwt.verify(token, 'your_jwt_secret');
    req.userId = decoded.id;
  } catch {
    return res.status(401).json({ message: 'Invalid token' });
  }
  userController.getUserById(req, res);
});

export default router;