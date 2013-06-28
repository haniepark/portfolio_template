$(document).ready(function(){

	$('#container, #top').hide();
		
	$('#top-container').on('click', 'a', function(){

		
		var seeker = $(this).data('nav');
		
		$('#top-container').addClass('transition');
		
		$('#container, #top').show(1300, function(){
			$('html,body').animate({
			scrollTop: $(seeker).offset().top - 50
			}, 'slow');
		
			$(document).on('click', '#top a', function(){
				var moveTop = $('#top a').data('nav');
				$('html,body').animate({
					scrollTop: $(moveTop).offset().top 
					}, 'slow');	
			});	
		});
	});
	



// nivo-slider function

	$(window).load(function() {
   		 $('#slider').nivoSlider();   		 	 		 
   	});
	
			
});