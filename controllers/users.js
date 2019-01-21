var express = require("express");

var router = express.Router();

// Import the model (stuffer.js) to use its database functions.
var items = require("../models/item.js");


router.get("/", function(req, res) {
    users.all(function(data) {
      var showUsers = {
        users: data
      };
      console.log(showUsers);
      res.render("index", showUsers);
    });
});

router.post("/api/users/", function(req, res) {

    stuffer.create([
      req.body.item_name
    ], function(result) {
      res.json({ id: result.insertId });
    });
});

router.put("/api/item/:id", function(req, res) {
  var itemID = req.params.id
  var condition = itemID;

  console.log(condition);

  item.update(condition, function(result) {
    if (result.changedRows == 0) {
      return res.status(404).end();
    } else {
      console.log("Result: " + result)
      res.status(200).end();
      res.status(200).end();
    }
  });
});