var UI = require('ui');

// Show splash screen while waiting for data
var splashWindow = new UI.Window();
var Vector2 = require('vector2');

var UP_SHORT = 10;
var UP_LONG = 11;
var SELECT_SHORT = 20;
var SELECT_LONG = 21;
var DOWN_SHORT = 30;
var DOWN_LONG = 31;


// Create a Card with title and subtitle
var loginScreen = new UI.Card({
   title:'Enter the right button combination'
});
  
exports.main = function() {
  
  this.clicks = [];
  var self = this;

  // Add Event Listeners to the Login Screen for short presses
  loginScreen.on('click', 'up', function() {
    console.log('Up clicked!');
    self.clicks.push(UP_SHORT);
    console.log(self.clicks);
  });
    
  loginScreen.on('click', 'down', function() {
     console.log('Down clicked!');
    self.clicks.push(DOWN_SHORT);
  });
  
  loginScreen.on('click', 'select', function() {
     console.log('Select clicked!');
    self.clicks.push(SELECT_SHORT);
  });
  
  // Add Event Listeners to the Login Screen for long presses
  loginScreen.on('longClick', 'up', function() {
    console.log('Up clicked for long!');
    self.clicks.push(UP_LONG);
  });
    
  loginScreen.on('longClick', 'down', function() {
     console.log('Down clicked for long!!');
     self.clicks.push(DOWN_LONG);
  });

      
  loginScreen.on('longClick', 'select', function() {
     console.log('Select clicked!', self.clicks);
  });

  //Display the Login Screen
  loginScreen.show();
};


