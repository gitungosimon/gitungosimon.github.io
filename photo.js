var image = document.querySelectorAll("img");
for (var i = 0; i < image.length; i++) {

	image[i].addEventListener("mouseover",function(){
		this.style.opacity = "0.6"
	});
}
for (var i = 0; i < image.length; i++) {

	image[i].addEventListener("mouseout",function(){
		this.style.opacity = "1"
	});
}
var img = {
	height:20%,
	width:30%,
	float:"left",
	display:block
};
$("img").css(img);
