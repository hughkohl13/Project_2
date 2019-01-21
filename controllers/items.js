var express = require("express");

var router = express.Router();

// Import the model (stuffer.js) to use its database functions.
var items = require("../models/items.js");


router.get("/", function(req, res) {
    items.all(function(data) {
      var showItems = {
        items: data
      };
      console.log(showItems);
      res.render("index", showItems);
    });
});

router.post("/api/item/", function(req, res) {
    items.create([
      "item_name", "description", "category_id", "owner_id"
    ], [
      req.body.item_name,
      req.body.description,
      req.body.category_id,
    ], function(result) {
      res.json({ id: result.insertId });
    });
});

router.put("/api/item/:id", function(req, res) {
  var itemID = req.params.id
  var condition = itemID;

  console.log(condition);

  items.update(condition, function(result) {
    if (result.changedRows == 0) {
      return res.status(404).end();
    } else {
      console.log("Result: " + result)
      res.status(200).end();
      res.status(200).end();
    }
  });
});