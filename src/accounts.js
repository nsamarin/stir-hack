var UI = require('ui');

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

exports.main = function() {
  this.accounts = [];
  var self = this;
  
  // Populate the transactions array with dummy data from db
  for (var i = 0; i < accountsSample.length; i++) {
    self.accounts.push({
      title: accountsSample[i].balance.toString(),
      subtitle: accountsSample[i].accountNo.toString()
    });
  }
  
  // Construct Menu to show to user
  this.accountsMenu = new UI.Menu({
    sections: [{
      title: 'Accounts',
      items: self.accounts
    }]
  });

  this.accountsMenu.show();
};