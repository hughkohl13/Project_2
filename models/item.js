
// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var items = {
  all: function(cb) {
    orm.all("items", function(res) {    //Posts to 'items' table
      cb(res);
    });
  },
  available: function(cb) {
    orm.available("items", objColVals, condition, function(res) {
      cb(res);
    });
  },
  borrowed: function(cb) {
    orm.borrowed("items", function(res) {
      cb(res);
    })
  },
  create: function(cols, vals, cb) {
    orm.create("items", cols, vals, function(res) {
      cb(res);
    });
  },
  delete: function(cols, vals, cb) {
    orm.delete("items", cols, vals, function(res) {
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update("items", objColVals, condition, function(res) {
      cb(res);
    });
  },
  owned: function(cb) {
    orm.owned("items", function(res){
      cb(res);
    })
  }
};

// Export the database functions to the controller (items.js).
module.exports = items;
