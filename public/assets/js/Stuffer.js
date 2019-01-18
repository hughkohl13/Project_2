$(function() {

    $(".new-item-form").on("submit", function(event) {
        event.preventDefault();
        
        var newItem = {
            item_name: $("#ite").val().trim()
        };
    
        $.ajax("api/Stuffer/", {
            type: "POST",
            data: newItem
        }).then(function() {
            console.log("Added!");
            location.reload();
        })
    })
    
    })
