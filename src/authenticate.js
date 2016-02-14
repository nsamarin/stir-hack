var UI = require('ui');

var UP_SHORT = 10;
var UP_LONG = 11;
var SELECT_SHORT = 20;
var SELECT_LONG = 21;
var DOWN_SHORT = 30;
var DOWN_LONG = 31;

// Create a Card with title and subtitle
var loginCard = new UI.Card({
   title:'Please insert your pattern'
});

// Test code is = [10, 30, 21];

exports.main = function(authCode, callback) {
  
  this.clicks = [];
  var self = this;
  
  // Display the Card
  loginCard.show();
  
  loginCard.on('click', 'up', function() {
    console.log('Up clicked!');
    self.clicks.push(UP_SHORT);
  });
  
  loginCard.on('click', 'down', function() {
    console.log('Down clicked!');
    self.clicks.push(DOWN_SHORT);
  });
  
  loginCard.on('click', 'select', function() {
    console.log('Select clicked!');
    self.clicks.push(SELECT_SHORT);
  });
  
  loginCard.on('longClick', 'up', function() {
    console.log('Up long clicked!');
    self.clicks.push(UP_LONG);
  });
  
  loginCard.on('longClick', 'down', function() {
    console.log('Down long clicked!');
    self.clicks.push(DOWN_LONG);
  });
  
  loginCard.on('longClick', 'select', function() {
    self.clicks.push(SELECT_LONG);
    console.log('Select long clicked!', self.clicks, authCode);
    loginCard.hide();
    if (self.clicks.length != authCode.length) {
      callback(false);
      return;
    }
    else { 
      for (var i = 0; i < authCode.length; i++) {
        if (authCode[i] == self.clicks[i]) continue;
        else {
          callback(false);
          return;
        }
      }
      callback(true);
    }
  });

};

