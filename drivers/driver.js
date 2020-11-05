'use strict';

const net = require('net');

const client = new net.Socket();

const host = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 3000;
client.connect(PORT, host, () => console.log('client connected on port', PORT))

let messages = [];

client.on('data', function (data) {
  let event = JSON.parse(data);
  console.log(new Date().toUTCString(), event.event, event.payload);
});



client.on('close', function () {
  console.log('Connection closed');
});