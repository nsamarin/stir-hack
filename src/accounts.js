var UI = require('ui');

var selectedAcc = 0;

var accountsSample = [
    {
      "accountNo": 123456,
      "balance": 500,
      "isMain": true
    },
    {
      "accountNo": 7654321,
      "balance": 200,
      "isMain": false
    }
  ];

// Create a Card with title and subtitle

exports.main = function(callback) {
  this.accounts = [];
  var self = this;
  
  // Populate the transactions array with dummy data from db
  for (var i = 0; i < accountsSample.length; i++) {
    var end = accountsSample[i].isMain ? ", Main" : "";
    self.accounts.push({
      title: accountsSample[i].balance.toString(),
      subtitle: accountsSample[i].accountNo.toString() + end 
    });
  }
  
  // Construct Menu to show to user
  this.accountsMenu = new UI.Menu({
    sections: [{
      title: 'Select to set MainAcc',
      items: self.accounts
    }]
  });
  
  this.accountsMenu.show();
  this.accountsMenu.on('select', function(e) {
    accountsSample[selectedAcc].isMain = false;
    selectedAcc = e.itemIndex;
    accountsSample[selectedAcc].isMain = true;
    self.accountsMenu.hide();
    callback(accountsSample[selectedAcc]);
  });
  
};