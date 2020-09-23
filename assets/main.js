/*
Navigation/Link jQuery smooth scrolling function.
*/

function getScrollPosition(link, navHeight) {
	let scrollTo = 0;
	let isToggleVisible = $('.navbar-toggler').is(':visible');  //Check if navbar-toggler is visible, if so we're on mobile or collapsed view.
	let openNavHeight = $('nav').outerHeight();
	let closedNavHeight = '56';
	// Get the top offset for whatever object we clicked on, minus the height of the nav bar. If we're on mobile/collapsed view, hide the navbar menu after clicking a link and adjust heights to scroll to correct location.

			if (!isToggleVisible) {
				return scrollTo = $(link).offset().top - openNavHeight;
			}
				
			$(".navbar-collapse").collapse('hide');
			return scrollTo = $(link).offset().top - closedNavHeight;
}

function scroll(link) {
	// Check if the window scrollbar location is already at the position we want to go to. If not, move to the position we want.
	scrollTo = getScrollPosition(link);

	if ($(window).scrollTop() != scrollTo) {
		$('html, body').stop().animate({scrollTop: scrollTo}, 1000);
		window.location.hash = link.attr('href');  // Change URL to hash of clicked link.
	}
}

// Make sure document is ready
$(document).ready(function() {
	$('[data-toggle="tooltip"]').tooltip();  // Make tooltips work on the page
	$('#contact-button').hide();
	$('.navbar-nav li a, .scroll-link').on('click', function(e) {  // When navbar or scroll-link hyperlinks are clicked, prevent default # action and instead use function scroll.
		clickedLink = $(this).attr('href').replace('#', '.');

		e.preventDefault();  // Prevent default click/hash feature.
		scroll(clickedLink);
	});
});

$('#contact-form').submit(function(e) {
	e.preventDefault();
	$('#alert-box').removeClass('hide').addClass('alert alert-success alert-dismissible fade show');
	$('#contact-button').show();
	$('#alert-message').html('<strong>Message sent successfully!</strong>');
	$('#modal').modal('show');
});

/*
jQuery Return to Top button function.
*/

$(window).scroll(function() {
	loc = $(this).scrollTop();
	
	if (loc >= 500) {
		$('#to-top').css('visibility', 'visible');
		$('#to-top').fadeIn(200);
	} else {
		$('#to-top').fadeOut(200);
	}
});

$('#to-top').click(function() { // Check for arrow being clicked, when it has been:
    $('body,html').animate({ scrollTop : 0 }, 1000);  // Scroll back to the top of the page.
});


