// java script for pscottzero.github.io
$(document).ready(function(){
	if ($(window).width() > 700) {
		
		// changes appearance of buttons when hovered over
		$("input").mouseover(function(){
			$(this).toggleClass('buttonSelected');
		}).mouseout(function(){
			$(this).toggleClass('buttonSelected')
		});

		// moves link image upward when hovered over
		$("#link_container img").mouseover(function(){
			$(this).animate({height: '3em'}, 100);
		}).mouseout(function(){
			$(this).animate({height: '2.5em'}, 100);
		});

		// adds drop shadow to header if not at top
		$(window).scroll(function() {
			if ($(document).scrollTop() == 0) {
				$("#header").css({boxShadow: 'none'})
			} else {
				$("#header").css({boxShadow: '0 2px 10px rgba(0, 0, 0, 0.25)'})
			}
		});
	}
});