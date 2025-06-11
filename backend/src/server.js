import http from 'http';
import { WebSocketServer } from 'ws';
import app from './app.js';
import { setWebSocketServer } from './services/websocket.service.js';

const PORT = process.env.PORT || 3000;

const server = http.createServer(app);

// Create WebSocket server
const wss = new WebSocketServer({ server });
setWebSocketServer(wss);

wss.on('connection', (ws) => {
  console.log('WebSocket connection established');

  ws.on('message', (message) => {
    console.log('Received:', message);
  });

  ws.on('close', () => {
    console.log('WebSocket connection closed');
  });
});

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});