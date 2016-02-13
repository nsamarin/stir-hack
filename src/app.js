/**
 * 
 *
 * 
 */
var UI = require('ui');
var menu = require('./menu');
var auth = require('./authenticate');


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




// // Create a Card with title and subtitle
// var card = new UI.Card({
//   title:'JP Morgan',
//   subtitle:'Enter the right button combination'
// });

// card.on('click', 'up', function() {
//   console.log('Up clicked!');
// });

// // Display the Card
// card.show();
