var orm = require("../config/orm.js");

var users = {
  all: function(cb) {
    orm.all("users", function(res) {    //Posts to 'users' table
      cb(res);
    });
  },
  available: function(cb) {
    orm.available("users", objColVals, condition, function(res) {
      cb(res);
    });
  },
  borrowed: function(cb) {
    orm.borrowed("users", function(res) {
      cb(res);
    })
  },
  create: function(cols, vals, cb) {
    orm.create("users", cols, vals, function(res) {
      cb(res);
    });
  },
  delete: function(cols, vals, cb) {
    orm.delete("users", cols, vals, function(res) {
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update("users", objColVals, condition, function(res) {
      cb(res);
    });
  },
  owned: function(cb) {
    orm.owned("users", function(res){
      cb(res);
    })
  }
};

// Export the database functions to the controller (user.js).
module.export = user