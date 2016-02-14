var UI = require('ui');

var contactsSample = [
    {
      "name": "Justinas Alisauskas"
    },
    {
      "name": "Nikita Samarin"
    },
    {
      "name": "Titas Skrebe"
   }
  ];

exports.main = function(callback) {
  this.contacts = [];
  var self = this;
  
  // Populate the transactions array with dummy data from db
  for (var i = 0; i < contactsSample.length; i++) {
    self.contacts.push({
      title: contactsSample[i].name
    });
  }
  
  // Construct Menu to show to user
  this.contactsMenu = new UI.Menu({
    sections: [{
      title: 'Pay a Person',
      items: self.contacts
    }]
  });

  this.contactsMenu.show();
  
    // Add an action for menu options
  this.contactsMenu.on('select', function(e) {
    var contact = e.item.title;
    
    var input = 0;
    
    var paymentCard = new UI.Card({
      title:'Please insert your amount',
      subtitle: "0£",
      textAlign: "center"
    });
    
    // Display the Card
    paymentCard.show();
    
    // Handle short presses for pattern input
    paymentCard.on('click', 'up', function() {
      if (input < 20) {
        input++;
        paymentCard.subtitle(input.toString() + "£");
      }
    });
    
    paymentCard.on('click', 'down', function() {
      if (input > 0) {
        input--;
        paymentCard.subtitle(input.toString() + "£");
      }
    });
    
    var confirmedTransfer = false;
    
    paymentCard.on('click', 'select', function() {
      if (confirmedTransfer) {
        console.log("well played");
        paymentCard.hide();
        self.contactsMenu.hide();
        callback();
        return;
      }
      paymentCard.title("Confirm Transfer");
      paymentCard.subtitle("");
      paymentCard.body("Are you sure you want to send " + input + "£ to " + contact + "?");
      confirmedTransfer = true;
    });
  });
};