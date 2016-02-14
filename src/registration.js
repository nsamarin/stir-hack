var UI = require('ui');
var Accel = require('ui/accel');
var Vibe = require('ui/vibe');

var UP_SHORT = 10;
var UP_LONG = 11;
var SELECT_SHORT = 20;
var SELECT_LONG = 21;
var DOWN_SHORT = 30;
var DOWN_LONG = 31;

var checkPattern = function(clicks, code) {
  if (clicks.length != code.length) return false;
  else { 
    for (var i = 0; i < code.length; i++) {
      if (code[i] == clicks[i]) continue;
      else return false;
    }
      return true;
  }
};


// Test code is = [10, 30, 21];

exports.main = function(cardTitle, callback) {
  Accel.init();
  
  // Create a Card with title and subtitle
  var loginCard = new UI.Card({
     title: cardTitle,
     subtitle: ""
  });
  
  var clicks = [];
  var input = "";
  
  // Register for 'tap' events
  loginCard.on('accelTap', function(e) {
    console.log('axis: ' + e.axis + ', direction:' + e.direction);
    clicks = [];
    input = "";
    // Send a long vibration to the user wrist
    Vibe.vibrate('long');
    loginCard.subtitle(input);
  });
  

  // Display the Card
  loginCard.show();
  
  // Handle short presses for pattern input
  loginCard.on('click', 'up', function() {
    console.log('Up clicked!');
    loginCard.subtitle(input += "*");
    clicks.push(UP_SHORT);
  });
  
  loginCard.on('click', 'down', function() {
    console.log('Down clicked!');
    loginCard.subtitle(input += "*");
    clicks.push(DOWN_SHORT);
  });
  
  loginCard.on('click', 'select', function() {
    console.log('Select clicked!');
    loginCard.subtitle(input += "*");
    clicks.push(SELECT_SHORT);
  });
  
  // Handle long presses for pattern input
  loginCard.on('longClick', 'up', function() {
    console.log('Up long clicked!');
    loginCard.subtitle(input += "*");
    clicks.push(UP_LONG);
  });
  
  loginCard.on('longClick', 'down', function() {
    console.log('Down long clicked!');
    loginCard.subtitle(input += "*");
    clicks.push(DOWN_LONG);
  });
  
  // Accepting press by long select click & pattern check
  loginCard.on('longClick', 'select', function() {
    clicks.push(SELECT_LONG);
    loginCard.hide();
    callback(clicks);
    return;
  });

};

exports.checkPattern = checkPattern;


