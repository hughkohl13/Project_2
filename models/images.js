var orm = require("../config/orm.js");

//orm.selectAll();

// Find a pet in the pets table by an animal_name of Rachel.
// orm.insertOne("burger");

// Find the buyer with the most pets.
// orm.updateOne(1);

var images = {
  get: function(cb) {
      orm.selectAllImages( function(res) {
        cb(res);
      });
  },
  getId: function(imageId,cb) {
    orm.selectImageId(imageId, function(res) {
      cb(res);
    });
  }
  // getAvailable: function(cb) {
  //   orm.selectAllAvailable( function(res) {
  //     cb(res);
  //   });
  // },
  // getBorrowed: function(burg) {
  //   orm.allBorrowed(burg);   
  // }
}
module.exports = images;