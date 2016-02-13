var UI = require('ui');

// Show splash screen while waiting for data
var splashWindow = new UI.Window();
var Vector2 = require('vector2');

var clicks = {
  upClicks: 0,
  upLongClicks: 0,
  selectClicks: 0,
  selectLongClicks: 0,
  downclicks: 0,
  downLongClicks: 0
};

exports.main = function() {
  // Text element to inform user
var text = new UI.Text({
  position: new Vector2(0, 0),
  size: new Vector2(144, 168),
  text:'Please insert your pattern',
  font:'GOTHIC_28_BOLD',
  color:'black',
  textOverflow:'wrap',
  textAlign:'center',
  backgroundColor:'white'
});

// Add to splashWindow and show
splashWindow.add(text);
splashWindow.show();
}

