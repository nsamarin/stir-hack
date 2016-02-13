/**
 * 
 *
 * 
 */

var UI = require('ui');
var auth = require('./authenticate');

//auth.main();


 // Create a Card with title and subtitle
 var card = new UI.Card({
   title:'Test Card',
   subtitle:'Enter the right button combination'
 });

 card.on('click', 'up', function() {
   console.log('Up clicked!');
   
   var transactionId = Pebble.sendAppMessage( { '0': 42, '1': 'String value' },
       function(e) {
           console.log('Successfully delivered message with transactionId='
                   + e.data.transactionId);
       },
       function(e) {
           console.log('Unable to deliver message with transactionId='
                   + e.data.transactionId
                   + ' Error is: ' + e.error.message);
       }
       );
   
 });

 // Display the Card
 card.show();
