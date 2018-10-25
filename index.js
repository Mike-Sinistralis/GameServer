const http = require('http');
const socketIo = require('socket.io');

const Clients = require('./clients');

const server = http.createServer();
const io = socketIo(server);

const clients = new Clients();

io.on('connection', client => {
  clients.connect('someId', client);
  console.log(`${client} has connected`);

  client.on('echo', () => client.emit('test', 'hello'));

  setTimeout(() => { client.emit('test', 'aloha')}, 5000);

  client.on('disconnect', () => clients.disconnect('someId'));
});

server.listen(3000);

console.log('Server listening on port 3000');
