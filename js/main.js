/*
Navigation/Link jQuery smooth scrolling function
*/

// Create Scroll Function:
function Scroll(link, navHeight) {
	// Get the href attribute from clicked link. Check if navbar-toggler is visible, if so we're on mobile or collapsed view
	let linkClass = link.attr('href').replace('#', '.');
	let scrollTo = 0;
	let toggleVisible = $('.navbar-toggler').is(':visible');
	let closedNavHeight = '56';

	// Get the top offset for whatever object we clicked on, minus the height of the nav bar. If we're on mobile/collapsed view, hide the navbar menu after clicking a link and adjust heights to scroll to correct location.
		if (linkClass != '.top') {
			if (toggleVisible) {
			scrollTo = $(linkClass).offset().top - closedNavHeight;
			$(".navbar-collapse").collapse('hide');
			} else {
			scrollTo = $(linkClass).offset().top - navHeight;
			}
		}
	// Check if the window scrollbar location is already at the position we want to go to. If not, move to the position we want
		if ($(window).scrollTop() != scrollTo) {
			$('html, body').stop().animate({scrollTop: scrollTo}, 1000);
			// Change URL to hash of clicked link
			window.location.hash = link.attr('href');
		}
}

// Make sure document is ready. On click of navigation link, call the Scroll function to scroll the page:
$( document ).ready(function() {
	$('.navbar-nav li a, .scroll-link').on('click', function(e) {
		// Prevent default click/hash feature
		e.preventDefault();
		Scroll($(this), $('nav').outerHeight());
	});
});


/*
jQuery Return to Top button function
*/

$(window).scroll(function() {

    if ($(this).scrollTop() >= 500) {        // Check if page has been scrolled more than 500px
        $('#to-top').fadeIn(200);    // Use fadeIn to make the arrow visible
    } else {
        $('#to-top').fadeOut(200);   // Else, we are less than 500px so make the arrow invisible
    }
});

$('#to-top').click(function() {      // Check for arrow being clicked, when it has been:
    $('body,html').animate({
        scrollTop : 0                       // Scroll back to the top of the page
    }, 1000);
});

// Fade the 'scroll down to see more' text in and out
$(window).scroll(function() {
	if ($(this).scrollTop() >= 300) {
		$('.scrollmargin').fadeOut(60);
	} else {
		$('.scrollmargin').fadeIn(200);
	}
});