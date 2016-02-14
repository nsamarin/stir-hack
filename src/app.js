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
  title:'Incorrect Pattern!',
  subtitle: 'Press select to retry'  
});

// Callback function for auth.main()
var authenticationCallback = function(grantAccess) {
  console.log(grantAccess);
  if (grantAccess) {
    menu.main();
  }
  else {
    authFail.show();
  }
};

// Start main stuff here
auth.main(dummyAuthenticationCode, authenticationCallback);

// If we fail, then start again after pressing select
authFail.on('click', 'select', function() {
  console.log('Select from FAIL clicked!');
  authFail.hide();
  auth.main(dummyAuthenticationCode, authenticationCallback);
});