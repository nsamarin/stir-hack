/**
 * 
 *
 * 
 */

var UI = require('ui');

var clicks = {
  upClicks: 0,
  upLongClicks: 0,
  selectClicks: 0,
  selectLongClicks: 0,
  downclicks: 0,
  downLongClicks: 0
};


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
