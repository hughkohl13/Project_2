var express = require("express");
var path = require("path");
var images = require("../models/images.js");
var items = require("../models/items.js");
var categories = require("../models/categories.js");

// var app = express();
var router = express.Router();


router.get('/search/page', function (req, res) {
    res.sendFile(path.join(__dirname, "./../public/search.html"));
});

router.get('/js/search', function (req, res) {
    res.sendFile(path.join(__dirname, "./../public/assets/js/search.js"));
});

module.exports = router;