var orm = require("../config/orm.js");

//orm.selectAll();

// Find a pet in the pets table by an animal_name of Rachel.
// orm.insertOne("burger");

// Find the buyer with the most pets.
// orm.updateOne(1);

var items = {
  get: function(cb) {
      orm.selectAllItems( function(res) {
        cb(res);
      });
  },
  getOwned: function(cb) {
    orm.selectItemsOwned( function(res) {
      cb(res);
    });
  },
  getOwnedCatId: function(categoryId, cb) {
    orm.selectItemsOwnedCatId(categoryId, function(res) {
      cb(res);
    });
  },
  getOwnedText: function(searchText, cb) {
    orm.selectItemsOwnedText(searchText, function(res) {
      cb(res);
    });
  },
  getId: function(itemId,cb) {
    orm.selectItemId(itemId,function(res) {
      cb(res);
    });
  },  
  getPending: function(cb) {
    orm.selectItemPending( function(res) {
      cb(res);
    });
  },
  add: function(cb) {
      orm.insertItem( function(res) {
      cb(res);
    });
  }
  // getAvailable: function(cb) {
  //   orm.selectAllAvailable( function(res) {
  //     cb(res);
  //   });
  // },
  // getBorrowed: function(burg) {
  //   orm.allBorrowed(burg);   
  // }
}
module.exports = items;