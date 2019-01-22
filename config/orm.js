
var connection = require("../config/connection.js");

function printQuestionMarks(num) {
  var arr = [];
  for (var i = 0; i < num; i++) {
    arr.push("?");
  }
  return arr.toString();
}

// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
  var arr = [];

  for (var key in ob) {
    var value = ob[key];
    if (Object.hasOwnProperty.call(ob, key)) {
      if (typeof value === "string" && value.indexOf(" ") >= 0) {
        value = "'" + value + "'";
      }
      arr.push(key + "=" + value);
    }
  }

  return arr.toString();
}

// Object for all our SQL statement functions.
var orm = {
  all: function(tableInput, cb) {
    var queryString = "SELECT * FROM " + tableInput + ";";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  owned: function(cb){
  var queryString = "SELECT I.ITEM_NAME, C.NAME CATEGORY_NAME, IM.NAME IMAGE_NAME FROM ITEMS I INNER JOIN CATEGORIES C ON (C.ID = I.CATEGORY_ID) LEFT JOIN IMAGES IM ON (IM.ID = I.IMAGE_ID)";
  
  console.log(queryString);
  connection.query(queryString, function(err, result) {
    if (err) {
      throw err;
    }
    
    cb(result);
  });
  },
  borrowed: function(cb){
    // var queryString = "SELECT I.ITEM_NAME, C.NAME CATEGORY_NAME, IM.NAME IMAGE_NAME FROM ITEMS I INNER JOIN CATEGORIES C ON (C.ID = I.CATEGORY_ID) LEFT JOIN IMAGES IM ON (IM.ID = I.IMAGE_ID)";
    
    // console.log(queryString);
    // connection.query(queryString, function(err, result) {
    //   if (err) {
    //     throw err;
    //   }
    orm.owned(cb);
    // cb(result);
    // });
  },
  available: function(cb) {
    var queryString = "SELECT I.ITEM_NAME, C.NAME CATEGORY_NAME, IM.NAME IMAGE_NAME FROM ITEMS I INNER JOIN CATEGORIES C ON (C.ID = I.CATEGORY_ID) LEFT JOIN IMAGES IM ON (IM.ID = I.IMAGE_ID) WHERE I.OWNER_ID <> ? AND WHERE AVAILABLE_DATE IS NULL AND I.LOCATION = ? AND (? IS NULL OR CATEGORY_ID = ?) "
  },
  create: function(table, cols, vals, cb) {
    var queryString = "INSERT INTO " + table;

    queryString += " (";
    queryString += cols.toString();
    queryString += ") ";
    queryString += "VALUES (";
    queryString += printQuestionMarks(vals.length);
    queryString += ") ";

    console.log(queryString);

    connection.query(queryString, vals, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },
  update: function(table, objColVals, condition, cb) {
    var queryString = "UPDATE " + table;

    queryString += " SET ";
    queryString += objToSql(objColVals);
    queryString += " WHERE ";
    queryString += condition;

    console.log(queryString);
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  },
  delete: function(table, condition, cb) {
    var queryString = "DELETE FROM " + table;
    queryString += " WHERE ";
    queryString += condition;

    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
  }
};

module.exports = orm;