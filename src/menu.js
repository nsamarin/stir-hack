var UI = require('ui');
var transactions = require('./viewTransactions');
var accounts = require('./accounts');
var contacts = require('./payment');
var Accel = require('ui/accel');
var Vibe = require('ui/vibe');


// Construct Menu to show to user

var mainAccSum = 500;
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


// Show the Menu
exports.main = function(){
  
  Accel.init();
  
  var resultsMenu = new UI.Menu({
    sections: [{
      title: 'Main menu',
      items: menuItems
    }]
  });
  resultsMenu.show();
  
  
  // Register for 'tap' events
  resultsMenu.on('accelTap', function(e) {
    console.log('axis: ' + e.axis + ', direction:' + e.direction);
    // Send a long vibration to the user wrist
    Vibe.vibrate('long');
    
    accounts.main(function(update){
        resultsMenu.item(0, 0, {title: "150£", 
                               subtitle: menuItems[0].subtitle});

    });
  });
  
  // Add actions for menu options
  resultsMenu.on('select', function(e) {
    
    if (e.itemIndex === 0) {
      accounts.main(function(update){
        resultsMenu.item(0, 0, { title: update.balance.toString() + "£", 
                               subtitle: update.accountNo.toString() });

      });
    }
    if (e.itemIndex == 1) {}
    if (e.itemIndex == 2) transactions.main();
    if (e.itemIndex == 3) contacts.main();
    
    console.log('Item number ' + e.itemIndex + ' was pressed!');
  });
};