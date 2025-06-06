const express = require('express');
const cors = require('cors');
const path = require('path');
const notificationRoutes = require('./routes/notification.routes');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Serve Angular app
app.use(express.static(path.join(__dirname, '../public')));

// Routes
app.use('/api/notifications', notificationRoutes);

module.exports = app;