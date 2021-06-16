$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault()
    const person = $("input#name").val();
    const foods = $("#favoriteFood").val();
    const music =$("input:radio[name=music]:checked").val();
    const dob =$("#born").val();

    $(".name").text(person); 
    $(".favoriteFood").text(foods);
    $(".music").text(music);
    $(".born").text(dob);
    
    $("#survey").show();
  });
});

