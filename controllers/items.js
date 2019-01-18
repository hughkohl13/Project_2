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

router.post("/api/Stuffer/", function(req, res) {

    stuffer.create([
      req.body.item_name
    ], function(result) {
      res.json({ id: result.insertId });
    });
});