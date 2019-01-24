var connection = require("../config/connection.js");
var express = require("express");
var path = require("path");
var multer  = require("multer");
var upload = multer({ dest: "uploads/" });
var images = require("../models/images.js");
var items = require("../models/items.js");
var categories = require("../models/categories.js");
// var friends = require("./app/data/friends.js");
// const PORT = 3000;
// var burger = require("../models/burger.js");
// const PORT = process.env.PORT || 3000;
var app = express();
var router = express.Router();

var exphbs = require("express-handlebars");
// Set Handlebars as the default templating engine.
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

router.get('/', function(req, res) {
    // res.send('Hello from api GET all burgers route.');
    res.sendFile(path.join(__dirname, "./../public/index.html"));
    // burger.all(function(data) {
    //           var dataObj = {
    //             burger: data
    //           };
    //           console.log(dataObj);
    //           res.render("index", {
    //             foods: dataObj.burger,
    //             eater: "Gilles"
    //         });
    //   });
    });

router.get('/login', function(req, res) {
  // res.send('Hello from api GET all burgers route.');
  res.sendFile(path.join(__dirname, "./../public/login.html"));
  });

router.get('/postitem/page', function(req, res) {
  // res.send('Hello from api items route.');
  res.sendFile(path.join(__dirname, "./../public/postitem.html"));
    // items.get(function(data) {
    //           console.log(data);
    //           res.send(data);
    //   });
  });

router.get('/categories', function(req, res) {
  // res.send('Hello from api items route.');
  // res.sendFile(path.join(__dirname, "./../public/assets/index.html"));
    categories.get(function(data) {
              console.log(data);
              res.send(data);
      });
  });

router.get('/images', function(req, res) {
  // res.send('Hello from api images route.');
  // res.sendFile(path.join(__dirname, "./../public/assets/index.html"));
    images.get(function(data) {
              // var dataObj = {
              //   images: data
              // };
              // console.log(dataObj);
              console.log(data);
              res.send(data);
              // res.send(dataObj);
            //   res.render("index", {
            //     images: dataObj.images
            // });
      });
  });

router.get('/images/:imageId', function(req, res) {
  // res.send('Hello from api images route.');
  // res.sendFile(path.join(__dirname, "./../public/assets/index.html"));
    images.getId(req.params.imageId,function(data) {
              // var dataObj = {
              //   images: data
              // };
              // console.log(dataObj);
              console.log(data);
              res.send(data);
              // res.send(dataObj);
            //   res.render("index", {
            //     images: dataObj.images
            // });
      });
  });  

router.get('/items/form', function(req, res) {
  // res.send('Hello from api items route.');
  res.sendFile(path.join(__dirname, "./../public/itemsForm.html"));
    // items.get(function(data) {
    //           console.log(data);
    //           res.send(data);
    //   });
  });

  router.get('/items/form/:itemId', function(req, res) {
    // res.send('Hello from api items route.');
    res.sendFile(path.join(__dirname, "./../public/itemsForm.html"));
      // items.get(function(data) {
      //           console.log(data);
      //           res.send(data);
      //   });
    });

router.get('/items', function(req, res) {
  // res.send('Hello from api items route.');
    items.get(function(data) {
              console.log(data);
              res.send(data);
      });
  });

router.get('/items/owned', function(req, res) {
  // res.send('Hello from api items route.');
    items.getOwned(function(data) {
                  console.log(data);
                  res.send(data);
      });
  });

router.get('/items/page', function(req, res) {
  // res.send('Hello from api items route.');
  res.sendFile(path.join(__dirname, "./../public/items.html"));
    // items.get(function(data) {
    //           console.log(data);
    //           res.send(data);
    //   });
  });

router.get('/items/:itemId', function(req, res) {
  // res.send('Hello from api images route.');
  // res.sendFile(path.join(__dirname, "./../public/assets/index.html"));
    items.getId(req.params.itemId,function(data) {
              // var dataObj = {
              //   images: data
              // };
              // console.log(dataObj);
              console.log(data);
              res.send(data);
              // res.send(dataObj);
            //   res.render("index", {
            //     images: dataObj.images
            // });
      });
  });  

router.get('/items/image/:imageId', function(req, res) {
  // res.send('Hello from api images route.');
  // res.sendFile(path.join(__dirname, "./../public/assets/index.html"));
    items.getPending(function(data){
      console.log("Pending="+data[0].ID);
      connection.query("UPDATE ITEMS SET IMAGE_ID = ?, PENDING = FALSE WHERE ID = ?", [req.params.imageId,data[0].ID], function(err, result) {
        if (err) {
          throw err;
          return res.status(500).end();
        }
        // res.send(data);
        // res.redirect("/items/"+data[0].ID);         
        res.redirect("/items/page");         
        // Send back the ID of the new todo
        // res.json({ id: result.insertId });
        // console.log({ id: result.insertId });
      });      
    });

  });  

router.post('/items', function(req, res) {
//  res.send('Hello from api POST items route.');
  console.log(req.body);

  if (req.body.pending === '1'){
    var queryString = "INSERT INTO ITEMS (ITEM_NAME, DESCRIPTION, CATEGORY_ID, OWNER_ID, PENDING) VALUES (?,?,?,?,TRUE)";
  }
  else {
    var queryString = "INSERT INTO ITEMS (ITEM_NAME, DESCRIPTION, CATEGORY_ID, OWNER_ID, PENDING) VALUES (?,?,?,?,FALSE)";
  }
  connection.query(queryString, [req.body.item_name,req.body.description,req.body.categoryId,1], function(err, result) {
    if (err) {
      throw err;
      return res.status(500).end();
    }
    // Send back the ID of the new todo
    // res.json({ id: result.insertId });
    console.log({ id: result.insertId });
  });

  // res.sendFile(path.join(__dirname, "./../public/assets/index.html"));
    // items.get(function(data) {
    //           console.log(data);
    //           res.send(data);
    //   });
  });

router.post('/images', upload.single('avatar'), function (req, res, next) {
console.log(req.file.filename);
  var addImage = function (req) {
    // some process with dataBase
    var userPromise = new Promise(function(resolve, reject) {
        if (req.file != null){
          connection.query("INSERT INTO IMAGES (NAME,PATH,ORIGINALNAME,MIMETYPE,DESTINATION,SIZE) VALUES (?, ?, ?, ? ,? ,? )", [req.file.filename,req.file.path,req.file.originalname,req.file.mimetype,req.file.destination,req.file.size]
          , function(err, result) {
            if (err) {
              // console.log("Grosse error!!!");
              throw err;
            }
      console.log(result.insertId);
            resolve(result);
          });
        }
        else{
          reject();
        }
    });
    return userPromise;
  };

  var resultPromise = addImage(req); 

  resultPromise
    .then(function(result){
    var imageId = result.insertId;
    console.log(imageId);
    // res.redirect("/items");
    // res.redirect("/images/"+imageId); // Redirects to a page that will do a put to items with the image id as a parameter
res.redirect("/items/image/"+imageId); // Redirects to a page that will do a put to items with the image id as a parameter
    // res.sendStatus(200);
    })
    .catch(function(){
      res.sendStatus(500);
    // res.redirect("/items"); 
    });
  });

router.post('/profile', upload.single('avatar'), function (req, res, next) {
  // req.file is the `avatar` file
  // req.body will hold the text fields, if there were any

  var addImage = function (req) {
    // some process with dataBase
    var userPromise = new Promise(function(resolve, reject) {
        connection.query("INSERT INTO IMAGES (NAME,PATH,ORIGINALNAME,MIMETYPE,DESTINATION,SIZE) VALUES (?, ?, ?, ? ,? ,? )", [req.file.filename,req.file.path,req.file.originalname,req.file.mimetype,req.file.destination,req.file.size]
        , function(err, result) {
          if (err) {
            throw err;
          }
          // console.log(result.insertId);
          resolve(result);
        });
    });
    return userPromise;
  };

  var resultPromise = addImage(req); 

  resultPromise
   .then(function(result){
    var imageId = result.insertId;
    console.log(imageId);
    res.redirect("/");
    });

  // var imageId = 0;
  // console.log(req.file);
  // connection.query("INSERT INTO IMAGES (NAME,PATH,ORIGINALNAME,MIMETYPE,DESTINATION,SIZE) VALUES (?, ?, ?, ? ,? ,? )", [req.file.filename,req.file.path,req.file.originalname,req.file.mimetype,req.file.destination,req.file.size]
  // , function(err, result) {
  //   if (err) {
  //     throw err;
  //   }
  //   console.log(result.insertId);
  //   imageId = result.insertId;
  // });
  // // res.send("Uploaded File");
  // res.redirect("/");
});

router.post('/upload', upload.array('photos', 12), function (req, res, next) {
// req.files is array of `photos` files
// req.body will contain the text fields, if there were any
  res.send("Uploaded File");
});   

// app.post("/burger", function(req, res) {
//   connection.query("INSERT INTO BURGERS (burger_name) VALUES (?)", [req.body.burger_name], function(err, result) {
//     if (err) {
//       throw err;
//       return res.status(500).end();
//     }
//     // Send back the ID of the new todo
//     res.json({ id: result.insertId });
//     console.log({ id: result.insertId });
//   });
// });

// app.put("/devourBurger/:burgerId", function(req, res) {
//   console.log("params="+req.params.burgerId);
//   console.log("body="+req.body.isDevoured);
//   connection.query("UPDATE BURGERS SET DEVOURED = ? WHERE ID = ?", [req.body.isDevoured, req.params.burgerId]
//    , function(err, result) {
//     if (err) {
//       // If an error occurred, send a generic server failure
//       throw err;
//       return res.status(500).end();
//     }
//     else if (result.changedRows === 0) {
//       // If no rows were changed, then the ID must not exist, so 404
//       return res.status(404).end();
//     }
//     res.status(200).end();

//   //  burger.updateOne(req.body.devoured,req.params.burgerId);

//     });  
//   });

module.exports = router;