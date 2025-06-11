// Mock database (replace with actual database logic)
const notifications = [];

// Get all notifications
const getAllNotifications = (req, res) => {
  res.status(200).json(notifications);
};

// Get a notification by ID
const getNotificationById = (req, res) => {
  const { id } = req.params;
  const notification = notifications.find((n) => n.id === parseInt(id));
  if (!notification) {
    return res.status(404).json({ message: 'Notification not found' });
  }
  res.status(200).json(notification);
};

// Create a new notification
const createNotification = (req, res) => {
  const { userId, stockId, direction } = req.body;
  const newNotification = {
    id: notifications.length + 1,
    userId,
    stockId,
    direction,
    createdAt: new Date(),
  };
  notifications.push(newNotification);
  res.status(201).json(newNotification);
};

// Delete a notification by ID
const deleteNotification = (req, res) => {
  const { id } = req.params;
  const index = notifications.findIndex((n) => n.id === parseInt(id));
  if (index === -1) {
    return res.status(404).json({ message: 'Notification not found' });
  }
  notifications.splice(index, 1);
  res.status(200).json({ message: 'Notification deleted successfully' });
};

export default {
  getAllNotifications,
  getNotificationById,
  createNotification,
  deleteNotification,
};