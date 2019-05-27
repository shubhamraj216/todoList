$("ul").on("click","li",function(){
    $(this).toggleClass("read");
});

$("ul").on("click","i",function(event){
    $(this).parent().fadeOut(function(){
        $(this).remove();
    });
    event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
    if(event.which === 13)
    {
        var text=$(this).val();
        $(this).val("");
        $("ul").append("<li><i class='fa fa-trash'></i> "+text+"</li>");
    }
});

$(".plus").click(function(){
    $("input[type='text']").toggleClass("inputfade");
});