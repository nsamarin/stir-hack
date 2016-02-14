/**
 * The main application logic
 *
 * 
 */

var UI = require('ui');
var menu = require('./menu');
var auth = require('./authenticate');

//Should be securely stored in the DB
var dummyAuthenticationCode = [10, 30, 21];

// Create a Card with title and subtitle
var authFail = new UI.Card({
   title:'Incorrect Pattern!'
});

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
  else authFail.show();
});

// transactions.main();