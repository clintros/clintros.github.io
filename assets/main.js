/*
Navigation/Link jQuery smooth scrolling function
*/

function getScrollPosition(link, navHeight) {
	let linkClass = link.attr('href').replace('#', '.');  // Get the href attribute from clicked link.
	let scrollTo = 0;
	let isToggleVisible = $('.navbar-toggler').is(':visible');   //Check if navbar-toggler is visible, if so we're on mobile or collapsed view.
	let closedNavHeight = '56';

	// Get the top offset for whatever object we clicked on, minus the height of the nav bar. If we're on mobile/collapsed view, hide the navbar menu after clicking a link and adjust heights to scroll to correct location.
		if (linkClass != '.top') {
			if (!isToggleVisible) {
				return scrollTo = $(linkClass).offset().top - navHeight;
			}
				
			$(".navbar-collapse").collapse('hide');
			return scrollTo = $(linkClass).offset().top - closedNavHeight;
		}
}

function scroll(link) {
	// Check if the window scrollbar location is already at the position we want to go to. If not, move to the position we want
	scrollTo = getScrollPosition(link);

	if ($(window).scrollTop() != scrollTo) {
		$('html, body').stop().animate({scrollTop: scrollTo}, 1000);
		window.location.hash = link.attr('href');  	// Change URL to hash of clicked link.
	}
}

// Make sure document is ready
$(document).ready(function() {
	$('[data-toggle="tooltip"]').tooltip();  // Make tooltips work on the page
	$('.navbar-nav li a, .scroll-link').on('click', function(e) {  // When navbar or scroll-link hyperlinks are clicked, prevent default # action and instead use function Scroll
		e.preventDefault();  // Prevent default click/hash feature
		scroll($(this), $('nav').outerHeight());
	});
});


/*
jQuery Return to Top button function
*/

$(window).scroll(function() {
	loc = $(this).scrollTop();
	
	if (loc <= 200) {
		$('#to-top').fadeOut(200);
		$('.navbar').css('background-color', 'transparent');
	} 
	
	if (loc >= 500) {
		$('#to-top').css('visibility', 'visible');
		$('#to-top').fadeIn(200);
		$('.navbar').css('background-color', '#202020');
	} 
});

$('#to-top').click(function() { // Check for arrow being clicked, when it has been:
    $('body,html').animate({ scrollTop : 0 }, 1000);  // Scroll back to the top of the page
});

// // Fade the 'scroll down to see more' text in and out
// $(window).scroll(function() {
// 	if ($(this).scrollTop() > 500) {
// 		$('.scrollmargin').fadeOut(300);
// 	} else {
// 		$('.scrollmargin').fadeIn(300);
// 	}
// });


