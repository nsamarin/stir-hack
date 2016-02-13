/**
 * The main application logic
 *
 * 
 */
var UI = require('ui');
var menu = require('./menu');
var auth = require('./authenticate');
var transactions = require('./viewTransactions');


//Should be securely stored in the DB
var dummyAuthenticationCode = [10, 30, 21];

auth.main(dummyAuthenticationCode, function(grantAccess) {
  Pebble.addEventListener('appmessage',
  function(e) {
    console.log('Received message: ' + JSON.stringify(e.payload));
  }
);
  console.log(grantAccess);
  if (grantAccess) menu.main();
});

// transactions.main();