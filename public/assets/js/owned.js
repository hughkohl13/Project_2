function getItems(categoryId,searchText) {
  if (searchText){
    var queryURL = '/items/owned/text/'+searchText;  
    // alert("Search by text!");
   }
  else
   {
    if (categoryId){
      var queryURL = '/items/owned/'+categoryId;  
     }
    else{
       var queryURL = '/items/owned';
    }
  }
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
      // newDiv3.text("Owned");
      var newSpan1= $("<span>");
      newSpan1.addClass("left floated");
      newSpan1.text(response[i].CATEGORY_NAME);    
      var newSpan2= $("<span>");
      newSpan2.addClass("left floated");
      newSpan2.text(response[i].DESCRIPTION);
      var newSpan3= $("<span>");
      newSpan3.addClass("right floated");     
      newSpan3.text(response[i].ITEM_NAME);             
      // var newSpan2= $("<span>");
      // newSpan2.addClass("right floated");
  
      // var newButton = $("<button>");
      // newButton.addClass("circular ui blue button");
      // newButton.text("Borrow");
      // newButton.attr("id", response[i].ITEM_NAME);

      var newA = $("<a>");
      newA.attr("href","/items/page");         
      // var newH = $("<h3>");
      // newH.text(response[i].ITEM_NAME);
      var newImage = $("<img>");
      if (response[i].IMAGE_PATH){
        newImage.attr("src", "./../"+response[i].IMAGE_PATH);
        newImage.attr("width", "260");
        newImage.attr("height", "200");
        // newImage.addClass("auth-image");
        // newImage.attr("alt", response[i].ITEM_NAME);
        newA.append(newImage);
      }
      else {
        newImage.attr("src", "/image/stuffer");
        newImage.attr("width", "260");
        newImage.attr("height", "200");
        // newImage.addClass("auth-image");
        // newImage.attr("alt", response[i].ITEM_NAME);
        newA.append(newImage);         
      }
      newDivContent1.append(newDiv3);
      newDivContent1.append(newA);
      newDivContent2.append(newSpan1); 
      newDivContent2.append(newSpan3); 
      // newSpan2.append(newButton);
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
  
    $("#searchButtonContainer").on("click", function(){
      // alert("Clicked search button");
      getItems();
    //   location.replace("/postitem/page");
    });
    $("#select-category").on("change", function(){
      // alert("Changed Category to "+$("#select-category").val());
      getItems($("#select-category").val());
      // location.replace("/postitem/page");
    // $("#select-category").val(),
    });   
    $("#search-text").on("keyup", function(){
      // alert("Key is Up!"+$("#search-text").val());
      var categoryId;
      getItems(categoryId,$("#search-text").val());
    //   location.replace("/postitem/page");
    });
    getCategories();
});