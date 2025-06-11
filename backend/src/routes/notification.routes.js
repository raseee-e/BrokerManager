import express from 'express';
import notificationController from '../controllers/notification.controller.js';

const router = express.Router();

// Define routes
router.get('/', notificationController.getAllNotifications);
router.get('/:id', notificationController.getNotificationById);
router.post('/', notificationController.createNotification);
router.delete('/:id', notificationController.deleteNotification);

export default router;