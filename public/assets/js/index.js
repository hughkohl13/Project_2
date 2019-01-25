
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
  $("#button-signup").on("click", function(){
    // alert("Clicked signup");
    // location.address("/postitem/page");
    location.replace("/signup/page");
  });
  window.onload = function(){
    if(localStorage.userId) {
        // this will only work if the token is set in the localStorage
        // $("h3").text("Welcome Back " + localStorage.first);
        $("#greetingOne").text("Welcome to");
         $("#greeting").attr("class","header2");
        $("#greetingTwo").text(localStorage.first);
        // $("#greeting").text("Welcome to Stuffer "+localStorage.first);

        // $("#input-username").hide();
        // $("#input-firstname").hide();
        // $("#input-lastname").hide();
        // $("label").hide();
        // $("#button-submit").hide();
    }
   }  
});
