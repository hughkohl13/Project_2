// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "",
<<<<<<< HEAD
  database: "StufferDB"
=======
  database: "lender_db" // added lender.db
>>>>>>> 2416b176b562572ed8ea896c098289b6c00eba26
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
