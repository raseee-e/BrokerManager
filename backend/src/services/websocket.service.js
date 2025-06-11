let wss = null;

export function setWebSocketServer(server) {
  wss = server;
}

export function broadcast(data) {
  if (!wss) return;
  wss.clients.forEach((client) => {
    if (client.readyState === 1) { // 1 === WebSocket.OPEN
      client.send(JSON.stringify(data));
    }
  });
}