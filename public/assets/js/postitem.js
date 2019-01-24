function getImages() {
  var resImageName;
  var queryURL = '/images';
  console.log(queryURL);
  $.ajax({
    url: queryURL,
    method: 'GET'
  }).then(function(response) {
    // Printing the entire object to console
    console.log(response);
    // $("#query-div").empty();
    // $("#query-table").empty();
    $('#images-data').empty();
    for (var i = 0; i < response.length; i++) {
      // Constructing HTML containing the artist information
      // var resDepName = $("<h2>").text(response[i].department_name);
      // newRow = $("<tr>");
      // resFriendName = $("<td>").text(response[i].name);

      // newRow = $('<h4>').text(response[i].ORIGINALNAME);
//   <div class="work"> 
//   <a href="https://github.com/gillesleroy/liri-node-app.git">
//     <img src="assets/images/ScreenShot_1.png" alt="Liri Node App">
//   </a>  
//   <h3>Liri</h3>
//  </div>          
      var newDiv = $("<div>");
      newDiv.addClass("work");
      var newH = $("<h3>");
      newH.text(response[i].ORIGINALNAME);
      var newImage = $("<img>");
      newImage.addClass("auth-image");
      newImage.attr("alt", response[i].ORIGINALNAME);
      newImage.attr("src", response[i].PATH);
      newDiv.append(newImage);
      newDiv.append(newH);

  // <img class="bio-images" src="uploads/cbc602872fb63792d2b8af1d3c8ffc05" alt="image">

      // newRow.append(resFriendName);
      // $('#images-data').append(newRow);
      // $('#images-data').append(newImage);
      $('#images-data').append(newDiv);
    }
  });
}

function getItem() {
  var queryURL = '/items/owned';
  console.log(queryURL);
  $.ajax({
    url: queryURL,
    method: 'GET'
  }).then(function(response) {
    // Printing the entire object to console
    console.log(response);
    // $('#item-name').text(response[i].ITEM_NAME);
    $("#item-name").val(response[0].ITEM_NAME);
    $("#description").val(response[0].DESCRIPTION);
    // $("#query-div").empty();
    // $("#query-table").empty();
    // $('#items-data').empty();
    // for (var i = 0; i < response.length; i++) {

    // for (var i = 0; i < 1; i++) {
    //   $('#item-name').text(response[i].ITEM_NAME);
    // }

    
  });
}

function getCategories() {
  var queryURL = '/categories';
  console.log(queryURL);
  $.ajax({
    url: queryURL,
    method: 'GET'
  }).then(function(response) {
    // Printing the entire object to console
    console.log(response);
    // $("#query-div").empty();
    // $("#query-table").empty();
    $('#select-category').empty();
    for (var i = 0; i < response.length; i++) {
      var newO = $("<option>");

      newO.attr("value", response[i].ID);
      newO.text(response[i].NAME);

      // <option value=""></option>
      //       <option value="1">1 (Strongly Disagree)</option>
      //       <option value="2">2</option>
      //       <option value="3">3</option>
      //       <option value="4">4</option>
      //       <option value="5">5 (Strongly Agree)</option>
      $('#select-category').append(newO);
    }
  });
}

$(document).ready(function() {
  getCategories();
  // getImages();
  // getItem();
});

document.onsubmit = function(event) {
// alert("Submitting");
// event.preventDefault();

if (document.getElementById('input-file').files[0])
{
  var isPending = "1";
}
else {
  var isPending = "0";
}

var itemData = {item_name: $("#item-name").val(),
                description: $("#description").val(),
                categoryId: $("#select-category").val(),
                pending: parseInt(isPending)
              };

      // AJAX post the data 
$.post("/items", itemData, function(err,data) {
 if (err) {
   throw err;
 }
  // $("#results-modal").modal("toggle");
  console.log("Inserted item "+data);
  // alert("Done image id="+imageId);
  // Grab the result from the AJAX post so that the best match's name and photo are displayed.
  // $("#match-name").text(data.name);
  // $("#match-img").attr("src", data.photo);
  // // Show the modal with the best match
  // $("#results-modal").modal("toggle");
});

// if ($("#input-file").val()){
if (document.getElementById('input-file').files[0])
{
  //alert("Adding item "+$("#item-name").val());
  submit();
}
else {
  event.preventDefault();
  location.reload();
}

// alert("imageId="+imageId);
  //  .then(function back(){

    // });
}