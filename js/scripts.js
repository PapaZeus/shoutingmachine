$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var textInput = $("input#text").val();


    $(".text").text(textInput.toUpperCase());


    $("#story").show();


    event.preventDefault();
  });
});
