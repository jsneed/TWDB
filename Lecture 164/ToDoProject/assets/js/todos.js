//Check off todos by clicking
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});

//Click to delete ToDo
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
    if(event.which === 13)
    {
        var newTodo = $(this).val();
        $(this).val("");

        //Create a new LI and add to UL
        $("ul").append("<li><span><i class=\"fa fa-trash\"></i></span> " + newTodo + "</li>");
    }
});

$(".fa-plus").click(function(){
    $("input[type='text']").fadeToggle();
});
