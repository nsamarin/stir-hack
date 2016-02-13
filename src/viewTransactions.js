var UI = require('ui');

var transactionsSample = [
    {
      "date": "01/02/2015",
      "amount": "10£",
      "reference": "Tesco"
    },
    {
      "date": "02/03/2015",
      "amount": "5£",
      "reference": "Lidl"
    },
    {
      "date": "15/03/2015",
      "amount": "7£",
      "reference": "Sainsbury's"
   }
  ];

exports.main = function() {
  this.transactions = [];
  var self = this;
  
  // Populate the transactions array with dummy data from db
  for (var i = 0; i < transactionsSample.length; i++) {
    self.transactions.push({
      title: transactionsSample[i].reference,
      subtitle: transactionsSample[i].amount + " - " + transactionsSample[i].date
    });
  }
  
  // Construct Menu to show to user
  this.transactionsMenu = new UI.Menu({
    sections: [{
      title: 'Last Transactions',
      items: self.transactions
    }]
  });

  this.transactionsMenu.show();
  

};