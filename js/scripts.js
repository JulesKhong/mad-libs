$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var blanks = ["person1", "person2", "place", "transportation", "exclamation", "adjective", "animal"];

    blanks.forEach(function(blank) {
      var userInput = $("input#" + blank).val();
      $("." + blank).text(userInput);
    });



    // var person1Input = $("input#person1").val();
    // var person2Input = $("input#person2").val();
    // var placeInput = $("input#place").val();
    // var transportationInput = $("input#transportation").val();
    // var exclamationInput = $("input#exclamation").val();
    // var adjectiveInput = $("input#adjective").val();
    // var animalInput = $("input#animal").val();
    //
    // $(".person1").text(person1Input);
    // $(".person2").text(person2Input);
    // $(".place").text(placeInput);
    // $(".transportation").text(transportationInput);
    // $(".exclamation").text(exclamationInput);
    // $(".adjective").text(adjectiveInput);
    // $(".animal").text(animalInput);

    $("#story").show();

    event.preventDefault();

  });
});
