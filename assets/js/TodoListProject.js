//check on specific todo by clicking
// $("li").click(function(){
//   $(this).css("color", "gray");
//   $(this).css("text-decoration", "line-through");
// })

$("ul").on("click", "li", function(){
  $(this).toggleClass("completed");
})

//click on x to delete to do
$("ul").on("click", "span", function(event){
  $(this).parent().fadeOut(500, function() {
    $(this).remove();
  });
    event.stopPropagation();
});

$("input[type = 'text']").keypress(function(event){
  if (event.which === 13) {
    //grabing new text from input
    var todoText = $(this).val();
    $(this).val("");
    //create a new li and add to the ul
    $("ul").append("<li><span><i class='fa fa-trash' aria-hidden='true'></i></span> " + todoText + "</li>");
  }
});

$(".fa-pencil").click(function(){
  $("input[type = 'text']").fadeToggle();
});
