function getItems() {
  var queryURL = '/items/owned';
  console.log(queryURL);
  $.ajax({
    url: queryURL,
    method: 'GET'
  }).then(function(response) {
    // Printing the entire object to console
    console.log(response);
    // $("#query-div").empty();
    // $("#query-table").empty();
    // $('#items-data').empty();
    $('#row').empty();
    for (var i = 0; i < response.length; i++) {
      // var newH = $("<h3>");
      // newH.text(response[i].ITEM_NAME);
      // $('#items-data').append(newH);
      var newDiv1 = $("<div>");
      newDiv1.addClass("column");
      var newDiv2 = $("<div>");
      newDiv2.addClass("ui centered card three wide column");
      var newDivContent1 = $("<div>");
      newDivContent1.addClass("content");
      var newDivContent2 = $("<div>");
      newDivContent2.addClass("content");  
      var newDivContent3 = $("<div>");
      newDivContent3.addClass("content");         
      var newDiv3 = $("<div>");
      newDiv3.addClass("left floated meta");
      newDiv3.text("Owned");
      var newSpan1= $("<span>");
      newSpan1.addClass("left floated");
      newSpan1.text(response[i].DESCRIPTION);
      var newSpan2= $("<span>");
      newSpan2.addClass("right floated");
  
      var newButton = $("<button>");
      newButton.addClass("circular ui blue button");
      newButton.text("Borrow");
      newButton.attr("id", response[i].ITEM_NAME);

      var newA = $("<a>");
      newA.attr("href","/items/page");         
      // var newH = $("<h3>");
      // newH.text(response[i].ITEM_NAME);
      var newImage = $("<img>");
      if (response[i].IMAGE_PATH){
        newImage.attr("src", "./../"+response[i].IMAGE_PATH);
        newImage.attr("width", "200");
        newImage.attr("height", "200");
        // newImage.addClass("auth-image");
        // newImage.attr("alt", response[i].ITEM_NAME);
        newA.append(newImage);
      }
      else {
        newImage.attr("src", "/image/stuffer");
        newImage.attr("width", "200");
        newImage.attr("height", "200");
        // newImage.addClass("auth-image");
        // newImage.attr("alt", response[i].ITEM_NAME);
        newA.append(newImage);         
      }
      newDivContent1.append(newDiv3);
      newDivContent1.append(newA);
      newDivContent2.append(newSpan1); 
      newSpan2.append(newButton);
      newDivContent3.append(newSpan2);
      newDiv2.append(newDivContent1);
      newDiv2.append(newDivContent2);
      newDiv2.append(newDivContent3);
      newDiv1.append(newDiv2);
      // newDiv.append(newH);
      $('#row').append(newDiv1);

      // <div class="column">
      //   <div class="ui centered card three wide column">
      //         <div class="content">
      //                 <div class="left floated meta">Owned</div>
      //                 <img src="https://images.homedepot-static.com/productImages/a7e66f32-ae9c-440c-bb2c-53628ff60672/svn/milwaukee-power-tool-combo-kits-2997-23po-64_1000.jpg" width="200" height="200"/>
      //         </div>
              
      //         <div class="content">
      //             <span class="left floated" id="Description"> 
      //                 Description
      //             </span> 
      //         </div>
              
      //         <div class="content">
      //             <span class="right floated">
      //                 <button class="circular ui blue button" id="borrowButton">Borrow</button>
      //             </span>
      //         </div>
      //     </div>
      // </div>

    }
  });
}

$(document).ready(function() {
    $("#searchButtonContainer").on("click", function(){
      // alert("Clicked search button");
      getItems();
      // location.address("/postitem/page");
    //   location.replace("/postitem/page");
    });
});