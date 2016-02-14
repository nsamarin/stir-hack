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
  console.log(grantAccess);
  if (grantAccess) {
    menu.main();
  }
  else {
    authFail.show();
  }
});


authFail.on('click', 'select', function() {
  console.log('Select from FAIL clicked!');
});