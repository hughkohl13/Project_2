var connection = require("./connection.js");

// all: function(tableInput, cb) {
//     var queryString = "SELECT * FROM " + tableInput + ";";
//     connection.query(queryString, function(err, result) {
//       if (err) {
//         throw err;
//       }
//       cb(result);
//     });
//   },

var orm = {
    selectAllImages: function (cb)
    {
        var query = connection.query(
        "SELECT ID, ORIGINALNAME, PATH FROM IMAGES WHERE MIMETYPE in('image/jpeg','image/png')"
        , function(err, result) {
          if (err) throw err;
       //   console.log(result);
          cb(result);
        });    
    },
    selectImageId: function (imageId, cb)
    {
        var query = connection.query(
        "SELECT ID, ORIGINALNAME, PATH FROM IMAGES WHERE MIMETYPE in('image/jpeg','image/png') AND ID= ?"
        ,[imageId]
        , function(err, result) {
          if (err) throw err;
       //   console.log(result);
          cb(result);
        });    
    },
    selectAllItems: function (cb)
    {
        var query = connection.query(
        "SELECT ID, CATEGORY_ID, OWNER_ID, BORROWER_ID,  IMAGE_ID,  ITEM_NAME FROM ITEMS"
        , function(err, result) {
          if (err) throw err;
        //   console.log(result);
          cb(result);
        });    
    },          
    selectItemId: function (itemId, cb)
    {
        var query = connection.query(
        "SELECT ID, CATEGORY_ID, OWNER_ID, BORROWER_ID,  IMAGE_ID,  ITEM_NAME, DESCRIPTION, PENDING FROM ITEMS WHERE ID = ?"
        ,[itemId]
        , function(err, result) {
          if (err) throw err;
        //   console.log(result);
          cb(result);
        });    
    },
    selectItemPending: function (cb)
    {
        var query = connection.query(
        "SELECT ID, CATEGORY_ID, OWNER_ID, BORROWER_ID,  IMAGE_ID,  ITEM_NAME, DESCRIPTION FROM ITEMS WHERE PENDING = 1"
        , function(err, result) {
          if (err) throw err;
        //   console.log(result);
          cb(result);
        });    
    },   
    selectItemsOwned: function(cb){
      var queryString = "SELECT I.ITEM_NAME, I.DESCRIPTION, C.NAME CATEGORY_NAME, IM.PATH IMAGE_PATH, IM.NAME IMAGE_NAME FROM ITEMS I INNER JOIN CATEGORIES C ON (C.ID = I.CATEGORY_ID) LEFT JOIN IMAGES IM ON (IM.ID = I.IMAGE_ID) WHERE OWNER_ID = 1 ORDER BY I.CREATEDAT DESC";
      
      console.log(queryString);
      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
    
        cb(result);
      });
      },
    selectItemsBorrowed: function(cb){
      var queryString = "SELECT I.ITEM_NAME, C.NAME CATEGORY_NAME, IM.NAME IMAGE_NAME FROM ITEMS I INNER JOIN CATEGORIES C ON (C.ID = I.CATEGORY_ID) LEFT JOIN IMAGES IM ON (IM.ID = I.IMAGE_ID)";
      
      console.log(queryString);
      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }

      cb(result);
      });
    },
    selectItemsAvailable: function(cb) {
      var queryString = "SELECT I.ITEM_NAME, C.NAME CATEGORY_NAME, IM.NAME IMAGE_NAME FROM ITEMS I INNER JOIN CATEGORIES C ON (C.ID = I.CATEGORY_ID) LEFT JOIN IMAGES IM ON (IM.ID = I.IMAGE_ID) WHERE I.OWNER_ID <> ? AND WHERE AVAILABLE_DATE IS NULL AND I.LOCATION = ? AND (? IS NULL OR CATEGORY_ID = ?) "
    },
    selectAllCategories: function (cb)
    {
        var query = connection.query(
        "SELECT ID, NAME FROM CATEGORIES"
        , function(err, result) {
          if (err) throw err;
        //   console.log(result);
          cb(result);
        });    
    },     

    selectAllUsers: function(cb) {
      var query = connection.query(
        "SELECT ID, FIRST_NAME, LAST_NAME, EMAIL, ADDRESS, POSTAL FROM USERS"
        , function(err, result) {
          if (err) throw err;
        //   console.log(result);
          cb(result);
        });    
    },     
    
    
    // selectAllDevoured: function (cb)
    // {
    //     var query = connection.query(
    //     "SELECT * FROM BURGERS WHERE DEVOURED = 1"
    //     , function(err, result) {
    //       if (err) throw err;
    //    //   console.log(result);
    //       cb(result);
    //     });    
    // },
    // insertOne: function(burgerName)
    // {
    //     var query = connection.query(
    //         "INSERT INTO BURGERS SET ?",
    //         {
    //           burger_name: burgerName
    //         },
    //         function(err, res) {
    //           console.log(res.affectedRows + " burger inserted!\n");
    //         }
    //       );
    // },

    // updateOne: function(burgerId)
    // {
    //     var query = connection.query(
    //         "UPDADE BURGERS SET DEVOURED = true WHERE ID = ?",
    //         {
    //           id: burgerId
    //         },
    //         function(err, res) {
    //           console.log(res.affectedRows + " burger updated!\n");
    //         }
    //       );
    // }
  };
  
module.exports = orm;