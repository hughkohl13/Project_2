var express = require("express");

var router = express.Router();

// Import the model (user.js) to use its database functions.
var users = require("../models/user.js");


router.get("/", function (req, res) {
  users.all(function (data) {
    var showUsers = {
      users: data
    };
    console.log(showUsers);
    res.render("index", showUsers);
  });
});

router.post("/api/user/", function (req, res) {
  users.create([
    "first_name", "last_name", "email",
    "password", "postal", "address",
  ], [
      req.body.first_name,
      req.body.last_name,
      req.body.email,
      req.body.password,
      req.body.postal,
      req.body.address
    ], function (result) {
      res.json({ id: result.insertId });
    });
});

router.put("/api/user/:id", function (req, res) {
  var condition = "id = " + req.params.id;

  console.log(condition);

  users.update(
    {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      password: req.body.password,
      postal: req.body.post,
      address: req.body.address
    },
    condition,
    function(result) {
      if (result.changedRows === 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      }
      res.status(200).end();
    }
  );
});


// router.get("/api/user/:id", function (req, res) {
//   var userID = req.params.id
//   // var condition = userID;

//   console.log(userID);

//   users.all(userID, function (result) {
//     if (result.changedRows == 0) {
//       return res.status(404).end();
//     } else {
//       console.log("Result: " + result)
//       res.status(200).end();
//       res.status(200).end();
//     }
//   });
// });





// Export routes for server.js to use.
module.exports = router;