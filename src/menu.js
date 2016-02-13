var UI = require('ui');
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

// Show the Menu, hide the splash
exports.main = function(){
  resultsMenu.show();
};
//splashWindow.hide();