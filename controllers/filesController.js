var express = require("express");
var path = require("path");
// var app = express();
var router = express.Router();

router.get("/lib", function(req,res) {
  res.sendFile(path.join(__dirname, "./../public/assets/js/lib.js"));
});
router.get("/css/reset", function(req,res) {
  res.sendFile(path.join(__dirname, "./../public/assets/css/reset.css"));
});
router.get("/css/styles", function(req,res) {
  res.sendFile(path.join(__dirname, "./../public/assets/css/styles.css"));
});
router.get("/image/concrete", function(req,res) {
  res.sendFile(path.join(__dirname, "./../public/assets/images/concrete_seamless.png"));
});
router.get("/image/stuffer", function(req,res) {
  res.sendFile(path.join(__dirname, "./../public/assets/images/Stuffer_Logo.png"));
});
router.get("/js/stuffer", function(req,res) {
  res.sendFile(path.join(__dirname, "./../public/assets/js/Stuffer.js"));
});
router.get("/js/postitem", function(req,res) {
  res.sendFile(path.join(__dirname, "./../public/assets/js/postitem.js"));
});
router.get("/js/index", function(req,res) {
  res.sendFile(path.join(__dirname, "./../public/assets/js/index.js"));
});

module.exports = router;