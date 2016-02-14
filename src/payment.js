var UI = require('ui');
var Vector2 = require('vector2');


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

exports.main = function() {
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
    
    console.log('Item number ' + e.itemIndex + ' was pressed!');
    
    
  
    // Show splash screen while waiting for data
//     self.selectAmountWindow = new UI.Window();
    
//     // Text element to inform user
//     self.selectAmountWindow.add(new UI.Text({
//       position: new Vector2(0, 0),
//       size: new Vector2(144, 168),
//       text:'Choose Amount\n',
//       color:'black',
//       textOverflow:'wrap',
//       textAlign:'center',
//       backgroundColor:'white'
//     }));

    
//     self.selectAmountWindow.show();
    
    
  });

};