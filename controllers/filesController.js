var express = require("express");
var path = require("path");
// var app = express();
var router = express.Router();

// Html pages
router.get('/', function(req, res) {
  // res.send('Hello from api GET all burgers route.');
  res.sendFile(path.join(__dirname, "./../public/index.html"));
});
router.get('/home', function(req, res) {
  // res.send('Hello from api GET all burgers route.');
  res.sendFile(path.join(__dirname, "./../public/index.html"));
});
router.get('/login', function(req, res) {
// res.send('Hello from api GET all burgers route.');
res.sendFile(path.join(__dirname, "./../public/login.html"));
});
router.get('/postitem/page', function(req, res) {
// res.send('Hello from api items route.');
res.sendFile(path.join(__dirname, "./../public/postitem.html"));
});
router.get('/signup/page', function(req, res) {
  res.sendFile(path.join(__dirname, "./../public/signup.html"));
  });
router.get('/borrowed/page', function(req, res) {
  res.sendFile(path.join(__dirname, "./../public/borrowed.html"));
  });
router.get('/owned/page', function(req, res) {
  res.sendFile(path.join(__dirname, "./../public/owned.html"));
  });
router.get('/items/page', function(req, res) {
  res.sendFile(path.join(__dirname, "./../public/items.html"));
  });
router.get('/search', function(req, res) {
  res.sendFile(path.join(__dirname, "./../public/search.html"));
  });

// Front end Javascript
router.get("/js/owned", function(req,res) {
  res.sendFile(path.join(__dirname, "./../public/assets/js/owned.js"));
});
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
router.get("/js/signup", function(req,res) {
  res.sendFile(path.join(__dirname, "./../public/assets/js/signup.js"));
});
router.get("/js/app", function(req,res) {
  res.sendFile(path.join(__dirname, "./../public/assets/js/app.js"));
});
router.get("/js/common", function(req,res) {
  res.sendFile(path.join(__dirname, "./../public/assets/js/common.js"));
});
router.get("/js/login", function(req,res) {
  res.sendFile(path.join(__dirname, "./../public/assets/js/login.js"));
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
router.get("/image/signup", function(req,res) {
  res.sendFile(path.join(__dirname, "./../public/assets/images/background_tools3.jpg"));
});
router.get("/uploads/:image", function(req,res) {
  console.log(req.params);
  res.sendFile(path.join(__dirname, "./../uploads/"+req.params.image));
});

module.exports = router;