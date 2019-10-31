/*
Navigation/Link jQuery smooth scrolling function
*/

// Create Scroll Function:
function Scroll(link, navHeight) {
	// Get the href attribute from clicked link and replace the # with .
	let linkClass = link.attr('href').replace('#', '.');
	let scrollTo = 0;
	// Get the top offset for whatever object we clicked on, minus the height of the nav bar
		if (linkClass != '.top') {
			scrollTo = $(linkClass).offset().top;
		}
	// Check if the window scrollbar location is already at the position we want to go to. If not, move to the position we want
		if ($(window).scrollTop() != scrollTo) {
			$('html, body').stop().animate({scrollTop: scrollTo}, 1000);
		}
}

// Make sure document is ready. On click of navigation link, call the Scroll function to scroll the page:
$( document ).ready(function() {
	$('a.scroll-link').on('click', function(e) {
		Scroll($(this), $('nav').outerHeight());
	});
});
