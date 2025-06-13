let wss = null;

export function setWebSocketServer(server) {
  wss = server;
}

export function getWebSocketServer() {
  return wss;
}