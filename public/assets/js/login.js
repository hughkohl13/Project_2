$(document).ready(function() {
    // $("#button-post").on("click", function(){
    //   // alert("Clicked post");
    //   // location.address("/postitem/page");
    //   location.replace("/postitem/page");
    // });
    $("#logo").on("click", function(){
      // alert("Clicked Borrow");
      // location.address("/postitem/page");
      location.replace("/");
    });
    $("#button-signup").on("click", function(){
      // alert("Clicked signup");
      // location.address("/postitem/page");
      location.replace("/signup/page");
    });
    $('#home-redirect').on("click", function(){
      // alert("Clicked login");
      location.replace("/home");
    });
  });