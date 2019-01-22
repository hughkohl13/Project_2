var orm = require("../config/orm.js");

var user = {
  all: function(cb) {
    orm.all("users", function(res) {    
      cb(res);
    });
  },
  create: function(cols, vals, cb) {                     //Posts to 'users' table
    orm.create("users", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update("users", objColVals, condition, function(res) {
      cb(res);
    });
  },
};

// Export the database functions to the controller (user.js).
module.export = user