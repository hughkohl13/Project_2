$("#button-register").on("click", function(event) {
  event.preventDefault();
  // alert("Clicked Register");
  var userName = $("#input-email").val().trim();
  var firstName = $("#input-firstname").val().trim();
  var lastName = $("#input-lastname").val().trim();

  localStorage.setItem("user", userName);
  localStorage.setItem("first", firstName);
  localStorage.setItem("last", lastName);

  var userData = {
    email: userName,
    first_name: firstName,
    last_name: lastName
  };

  $.post("/users", userData, function(data) {
    // if (err) {
    //   throw err;
    // }
     // $("#results-modal").modal("toggle");
     console.log("Inserted User Id:"+data.id);
     localStorage.setItem("userId", data.id);
     window.location.href = "/";
   // location.reload();
     // alert("Done image id="+imageId);
     // Grab the result from the AJAX post so that the best match's name and photo are displayed.
     // $("#match-name").text(data.name);
     // $("#match-img").attr("src", data.photo);
     // // Show the modal with the best match
     // $("#results-modal").modal("toggle");
   });

});