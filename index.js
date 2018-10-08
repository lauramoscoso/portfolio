$(document).ready(function() {

//When you click on the before image, fade that image in
	
	$(".before").click(function(){

		$(".before").fadeOut(2000);



});



//When you click on the after image, fade the bofere image back in

	$(".after").click(function(){

		$(".before").fadeIn(2000);


 });
    
});
