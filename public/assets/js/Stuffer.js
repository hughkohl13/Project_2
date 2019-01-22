$(function() {

    $(".new-item-form").on("submit", function(event) {
        event.preventDefault();
        
        var newItem = {
            item_name: $("#ite").val().trim()
        };
    
        $.ajax("api/item/", {
            type: "GET",
            data: newItem
        }).then(function() {
            console.log("Added!");
            location.reload();
        })
    })
    
    })

