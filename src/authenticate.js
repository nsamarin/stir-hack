var UI = require('ui');

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

exports.main = function(authCode, callback) {
  
  // Create a Card with title and subtitle
  var loginCard = new UI.Card({
     title:'Please insert your pattern',
     subtitle: ""
  });
  
  var clicks = [];
  var input = "";
  
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
    console.log('Select long clicked!', clicks, authCode);
    loginCard.hide();
    callback(checkPattern(clicks, authCode));
    return;
  });

};

