$(document).ready(function(){

	$('#container').hide();
	
/*	$('#top-container').on('click', 'a', function(){
		
		var seeker = $(this).attr('href');
		
		$('#top-container').addClass('transition');
		$('#container').show(1300);
		$('html,body').animate({
			scrollTop: $("#port").offset().top
			}, 'slow');

	});*/

	
	
	$('#top-container').on('click', 'a', function(e){
		e.preventDefault();	
		var seeker = $(this).data('nav');
		
		$('#top-container').addClass('transition');
		$('#container').show(1300, function(){
			$('html,body').animate({
			scrollTop: $(seeker).offset().top - 150
			}, 'slow');
		});
				
	});



	$(window).scroll(function (e) {
		e.preventDefault();
    	var seeker = $(this).data('nav');
    	
    	if ($(window).scrollTop() > 100) {
        	$('#top-container').addClass("fix");

   		} else {
	    	$('#top-container').removeClass("fix");
		}
	});

	
/*	
	$("li a").click(function(e){
    	 e.preventDefault();
		 $(this).addClass("active");
		 $("li a.active").removeClass("active");
		 $(this).addClass("active");
	});*/
	
	
	
	
});