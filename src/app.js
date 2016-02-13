/**
 * 
 *
 * 
 */

var UI = require('ui');

// Create a Card with title and subtitle
var card = new UI.Card({
  title:'PebbleRecognition',
  subtitle:'Enter the right button combination'
});

card.on('click', 'up', function() {
  console.log('Up clicked!');
});

// Display the Card
card.show();