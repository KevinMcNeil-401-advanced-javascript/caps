'use strict';

const net = require('net');

const client = new net.Socket();

const host = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 3000;
client.connect(PORT, host, () => console.log('client connected on port', PORT))

client.on('data', function (data) {
  let event = JSON.parse(data);
  if(event.event === 'pickup')
  console.log(new Date().toUTCString(), event.event, event.payload);
});

function sendMessage(text) {
  console.log('sending', text);
  let message = `${text}`;
  let event = JSON.stringify({ event: 'pickup', payload: message });
  client.write(event);
}

let msg = 'flowers'
 sendMessage(msg);

client.on('close', function () {
  console.log('Connection closed');
});