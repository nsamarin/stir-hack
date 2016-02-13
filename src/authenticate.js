
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


exports.main = function() {
  // Display the Card
  loginCard.show();
  
  loginCard.on('click', 'up', function() {
    console.log('Up clicked!');
  });
  
  wind.on('click', 'up', function() {
  console.log('Up clicked!');
});

}

