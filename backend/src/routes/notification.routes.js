const express = require('express');
const router = express.Router();
const notificationController = require('../controllers/notification.controller');

// Define routes
router.get('/', notificationController.getAllNotifications);
router.get('/:id', notificationController.getNotificationById);
router.post('/', notificationController.createNotification);
router.delete('/:id', notificationController.deleteNotification);

module.exports = router;