var orm = require("../config/orm.js");

var user = {
  all: function(cb) {
    orm.all("users", function(res) {    //Posts to 'items' table
      cb(res);
    });
  },
  create: function(cols, vals, cb) {
    orm.create("users", cols, vals, function(res) {
      cb(res);
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
  },
  borrowed: function(cb) {
      orm.borrowed(function(res){
          cb(res);
      })
  }
};

module.export = user