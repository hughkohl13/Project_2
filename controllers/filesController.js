var express = require("express");
var path = require("path");
// var app = express();
var router = express.Router();

// Front end Javascript
router.get("/lib", function(req,res) {
  res.sendFile(path.join(__dirname, "./../public/assets/js/lib.js"));
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

// css
router.get("/css/reset", function(req,res) {
  res.sendFile(path.join(__dirname, "./../public/assets/css/reset.css"));
});
router.get("/css/style", function(req,res) {
  res.sendFile(path.join(__dirname, "./../public/assets/css/style.css"));
});
router.get("/css/styles", function(req,res) {
  res.sendFile(path.join(__dirname, "./../public/assets/css/styles.css"));
});
// Images
router.get("/image/stuffer", function(req,res) {
  res.sendFile(path.join(__dirname, "./../public/assets/images/Stuffer_Logo_Main.png"));
});
router.get("/image/lending", function(req,res) {
  res.sendFile(path.join(__dirname, "./../public/assets/images/Stuffer_characters/Lending.png"));
});
router.get("/image/borrowing", function(req,res) {
  res.sendFile(path.join(__dirname, "./../public/assets/images/Stuffer_characters/Borrowing.png"));
});
router.get("/image/sharing", function(req,res) {
  res.sendFile(path.join(__dirname, "./../public/assets/images/Stuffer_characters/Sharing.png"));
});
router.get("/image/concrete", function(req,res) {
  res.sendFile(path.join(__dirname, "./../public/assets/images/concrete_seamless.png"));
});
router.get("/uploads/:image", function(req,res) {
  console.log(req.params);
  res.sendFile(path.join(__dirname, "./../uploads/"+req.params.image));
});
module.exports = router;