/**
 * The main application logic
 *
 * 
 */

var UI = require('ui');
var Accel = require('ui/accel');
var menu = require('./menu');
var auth = require('./authenticate');

//Should be securely stored in the DB
var dummyAuthenticationCode = [10, 30, 21];

// Initialize the accelerometer
Accel.init();

auth.main(dummyAuthenticationCode, function(grantAccess) {
  Pebble.addEventListener('appmessage',
  function(e) {
    console.log('Received message: ' + JSON.stringify(e.payload));
  }
);
  console.log(grantAccess);
  if (grantAccess) {
    menu.main();
  }
});

// transactions.main();