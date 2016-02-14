var UI = require('ui');

exports.main = function(budgetLimitSample,remainingBudgetSample,callback) {
 //var self = this;
 // Construct Menu to show to user
 var budgetCard = new UI.Card({
   title: "Limit: " + budgetLimitSample.toString() + "£",
   subtitle: "Remaining: " + remainingBudgetSample + "£"
 });
 budgetCard.show();
 budgetCard.on('click', 'up', function() {
   remainingBudgetSample += 1;
   budgetCard.subtitle("Remaining: " + remainingBudgetSample.toString() + "£");
 });
 budgetCard.on('click', 'down', function() {
   remainingBudgetSample -= 1;
   budgetCard.subtitle("Remaining: " + remainingBudgetSample.toString() + "£");
 });
  
 budgetCard.on('click', 'select', function() {
    budgetCard.hide();
    callback(remainingBudgetSample);
 });

};