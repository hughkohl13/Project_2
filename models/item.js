// Contains boilerplate code to handle user input from front end (which is sent through stufferController.js)
// and sends it to orm so request can be understood by MySQL. MySQL is then read/updated accordingly.
// Model defines what data the app should contain, it updates the app to reflect added item.

// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var items = {
  all: function(cb) {
    orm.all("items", function(res) {    //Posts to 'items' table
      cb(res);
    });
  },
  create: function(cols, vals, cb) {
    orm.create("items", cols, vals, function(res) {
      cb(res);
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

// Export the database functions to the controller (stufferController.js).
module.exports = items;
