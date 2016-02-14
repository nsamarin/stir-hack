var UI = require('ui');
var transactions = require('./viewTransactions');
var contacts = require('./payment');

// Construct Menu to show to user

var mainAccSum = 5000;
var mainAccNum = 12345678;
var budget = 50;
var remainingBudget = 30;

var menuItems = [
  {
    title: mainAccSum.toString() + "£",
    subtitle: mainAccNum.toString()
  },
  {
    title: remainingBudget.toString() + "/" + budget.toString(),
    subtitle: "Weekly budget"
  },
  {
    title: "View transactions",
    //subtitle: "Only three left!"
  },
  {
    title: "Make a Payment",
    //subtitle: "Only three left!"
  }
];

var resultsMenu = new UI.Menu({
  sections: [{
    title: 'Main menu',
    items: menuItems
  }]
});


// Show the Menu
exports.main = function(){
  resultsMenu.show();
  
  // Register for 'tap' events
  resultsMenu.on('accelTap', function(e) {
    console.log('TAP!');
    console.log('axis: ' + e.axis + ', direction:' + e.direction);
    resultsMenu.items(0,   {
      title: "150£",
      subtitle: mainAccNum.toString()
    });
  });
  
  // Add an action for menu options
  resultsMenu.on('select', function(e) {
    
    if (e.itemIndex === 0) {}
    if (e.itemIndex == 1) {}
    if (e.itemIndex == 2) transactions.main();
    if (e.itemIndex == 3) contacts.main();
    
    console.log('Item number ' + e.itemIndex + ' was pressed!');
  });
};