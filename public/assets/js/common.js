$("#logo").on("click", function(event) {
  event.preventDefault();
  window.location.replace("/");
  // location.reload();
});
$("#button-signup").on("click", function(){
  // alert("Clicked signup");
  // location.address("/postitem/page");
  location.replace("/signup/page");
});
$("#button-post").on("click", function(){
  // alert("Clicked post");
  // location.address("/postitem/page");
  location.replace("/postitem/page");
});
$("#search-owned").on("click", function(){
  // alert("Clicked signup");
  // location.address("/postitem/page");
  // location.replace("/search/page");
  location.replace("/owned/page");
});
$("#search-borrowed").on("click", function(){
  // alert("Clicked signup");
  // location.address("/postitem/page");
  location.replace("/borrowed/page");
});