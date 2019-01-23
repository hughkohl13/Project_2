
$(document).ready(function() {
  $("#button-post").on("click", function(){
    // alert("Clicked post");
    // location.address("/postitem/page");
    location.replace("/postitem/page");
  });
  $("#button-borrow").on("click", function(){
    alert("Clicked Borrow");
    // location.address("/postitem/page");
    location.replace("/borrowitem/page");
  });
});
