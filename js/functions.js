/* ------------------------------------------------------------------------ */
/* Javascripts
/* ------------------------------------------------------------------------ */

jQuery(document).ready(function($){
    
     // Clear Input Fields value
	 $('input[type=text]').each(function() {
		var default_value = this.value;
		$(this).focus(function(){
		   if(this.value == default_value) {
		           this.value = '';
		   }
		});
		$(this).blur(function(){
		       if(this.value == '') {
		               this.value = default_value;
		       }
		});
	});
	
	/* ------------------------------------------------------------------------ */
	/* Image Hovers */
	/* ------------------------------------------------------------------------ */

	$(".entry-image a, .entry-gallery a, #portfolio-slider li a").hover(function(){
		$(this).has('img').append('<div class="overlay"></div>');
		$(this).find('.overlay').animate({opacity : '1'}, 300);
	}, function(){
		$(this).find('.overlay').animate({opacity : '0'}, 300 ,function(){ 
			$(this).remove(); 
		});
	});
	
	$('.portfolio-post').hover(function() {
		$(this).find('.portfolio-overlay').stop().animate({'opacity' : 1}, 200/*, 'easeOutSine'*/);
		$(this).find('.overlay-link, .overlay-lightbox').stop().animate({'top' : $(this).height()/2-54, 'opacity' : 1}, 160/*, ', 'easeOutSine'*/);
	}, function(){
		$(this).find('.portfolio-overlay').stop().animate({'opacity' : 0}, 300/*, 'easeInSine'*/);
		$(this).find('.overlay-link, .overlay-lightbox').stop().animate({'top' : -25, 'opacity' : 0}, 260/*, ', 'easeOutSine'*/);
	});
	
	$('.portfolio-post-one .portfolio-picwrap').hover(function() {
		$(this).find('.portfolio-overlay').stop().animate({'opacity' : 1}, 200, 'easeOutSine');
		$(this).find('.overlay-link, .overlay-lightbox').stop().animate({'top' : $(this).height()/2-24, 'opacity' : 1}, 160, 'easeOutSine');
	}, function(){
		$(this).find('.portfolio-overlay').stop().animate({'opacity' : 0}, 300, 'easeInSine');
		$(this).find('.overlay-link, .overlay-lightbox').stop().animate({'top' : -25, 'opacity' : 0}, 260, 'easeOutSine');
	});
	
	$('.blog-item').hover(function() {
		$(this).find('.blog-overlay').stop().animate({'opacity' : 1}, 200, 'easeOutSine');
		$(this).find('.entry-icon').stop().animate({'top' : 45, 'opacity' : 1}, 160, 'easeOutSine');
	}, function(){
		$(this).find('.blog-overlay').stop().animate({'opacity' : 0}, 300, 'easeInSine');
		$(this).find('.entry-icon').stop().animate({'top' : -25, 'opacity' : 0}, 260, 'easeOutSine');
	});
	
	/* ------------------------------------------------------------------------ */
	/* Back To Top */
	/* ------------------------------------------------------------------------ */

	$(window).scroll(function(){
		if($(window).scrollTop() > 200){
			$("#back-to-top").fadeIn(200);
		} else{
			$("#back-to-top").fadeOut(200);
		}
	});
	
	$('#back-to-top, .back-to-top').click(function() {
		  $('html, body').animate({ scrollTop:0 }, '800');
		  return false;
	});
	

});
/* ------------------------------------------------------------------------ */
/* EOF
/* ------------------------------------------------------------------------ */