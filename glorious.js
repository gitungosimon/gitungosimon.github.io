$(".displaytext").hide();

$("img").on("click",function(){
	$(this).fadeOut(2000,function(){
		alert("Hurray!!!!");
	});

});