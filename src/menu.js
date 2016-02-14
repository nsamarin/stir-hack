var UI = require('ui');
var Accel = require('ui/accel');
var Vibe = require('ui/vibe');
var wBudget = require('./weeklyBudget');

var transactions = require('./viewTransactions');
var accounts = require('./accounts');
var contacts = require('./payment');
var registration = require('./registration');



// Construct Menu to show to user

var mainAccSum = 500;
var mainAccNum = 12345678;
var budget = 50;
var remainingBudget = 30;

var menuItems = [
  {
    title: mainAccSum.toString() + "£",
    subtitle: "Acc No: " + mainAccNum.toString()
  },
  {
    title: remainingBudget.toString() + "/" + budget.toString() + "£",
    subtitle: "Weekly Budget"
  },
  {
    title: "View transactions"
  },
  {
    title: "Make a Payment"
  },
  {
    title: "Change Pattern"
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
    resultsMenu.item(0, 0, {title: "150£", subtitle: menuItems[0].subtitle});
  });
  
  // Add actions for menu options
  resultsMenu.on('select', function(e) {
    
    if (e.itemIndex === 0) {
      accounts.main(function(update){
        resultsMenu.item(0, 0, { title: update.balance.toString() + "£", 
                               subtitle: "Acc No: " + update.accountNo.toString() });

      });
    }
    if (e.itemIndex == 1) {
        wBudget.main(budget, remainingBudget, function(update){
          console.log("update is ", update);
          resultsMenu.item(0, 1, { title: update + "/" + budget + "£", 
                               subtitle: "Weekly budget" });
      });
      
    }
    if (e.itemIndex == 2) transactions.main();
    if (e.itemIndex == 3) contacts.main();
    if (e.itemIndex == 4) {
      registration.main("Please insert new pattern", function(x){
        registration.main("Please confirm new pattern", function(y){
        var card = new UI.Card({});
          if (registration.checkPattern(x,y)) card.title("New pattern set up!");
          else card.title("Patterns do not match up!");
          card.show();
          setTimeout(function(){ card.hide(); }, 3000);
        });
      });
      
    }
    console.log('Item number ' + e.itemIndex + ' was pressed!');
  });
};