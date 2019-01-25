var connection = require("./connection.js");
var orm = {
  selectAllUsers: function (cb)
  {
      var query = connection.query(
      "SELECT ID, FIRST_NAME, LAST_NAME, EMAIL, PASSWORD, POSTAL, ADDRESS FROM USERS"
      , function(err, result) {
        if (err) throw err;
      //   console.log(result);
        cb(result);
      });    
  }, 
insertUser: function (req, cb)
{
    var query = connection.query(
    "INSERT INTO USERS(FIRST_NAME, LAST_NAME, EMAIL) VALUES (?, ?, ?)"
    ,[req.body.first_name, req.body.last_name, req.body.email]
    , function(err, result) {
      if (err) throw err;
   //   console.log(result);
      cb(result);
    });    
}
}
module.exports = orm;