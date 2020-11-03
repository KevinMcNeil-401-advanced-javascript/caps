'use strict';

const EventEmitter = require('events');
const eventManager = new EventEmitter();


//event on

//As a vendor, I want to alert the system when I have a package to be picked up
//As a driver, I want to be notified when there is a package to be delivered

eventManager.on('pickup', pickupHandler);
eventManager.on('inTransit', inTransitHandler);
eventManager.on('delivered', deliveredHandler);

eventManager.emit('pickup', 'flowers')


function pickupHandler(item){
  let time = timeStamp();
  console.log(`Alert Driver: ${item}: is ready be picked up at ${time}`)
}

function inTransitHandler(item){
  let time = timeStamp();
  console.log(`Alert Vendor: ${item} picked up at ${time} and is in transit to destination!`)
}

function deliveredHandler(item){
  let time = timeStamp();
  console.log(`Alert Vendor: ${item} was delivered at ${time}`)
}

function timeStamp() {
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, '0');
  let mm = String(today.getMonth() + 1).padStart(2, '0');
  let yyyy = today.getFullYear();
  let hour = String(today.getHours()).padStart(2, '0');
  var time = hour + ":" + String(today.getMinutes()).padStart(2, '0');
  today = `${yyyy}-${mm}-${dd}T${time}:00`;
  return today;
}