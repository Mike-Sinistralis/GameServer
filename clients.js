class Clients {
  constructor() {
    this.clients = {};
  }

  connect(id, client) {
    this.clients[id] = client;
  }

  disconnect(id) {
    delete this.clients[id];
  }

  broadcast(event, message) {
    for (id in clients) {
      this.clients[key].emit(event, message);
    }
  }

  broadcastTo(id, event, message) {
    this.clients[id].emit(event, message);
  }
}

module.exports = Clients;
