/*

Custom Javascript by Elsea Labs

See the source of the index.html page to
view more information about the  company
and its copyrights.

*/

/* On Document Load */

$(document).ready(function() {

	// Perform the same changes done on resize when
	// the page is initially loaded.
	
	var logoHeight = $(".website-header .logo").css("height");
	$(".website-header 	").css({
		"height":logoHeight, "max-height":logoHeight, "min-height":logoHeight
	});
	$(".content").css("top", logoHeight);

});

/* On Resize */

$(window).resize(function() {

	// Set  the  height  of  the top  bar  and   the
	// content  div's  distance  from the top of the
	// page to the height of the logo, which changes
	// automatically based on window size.

	var logoHeight = $(".website-header .logo").css("height");
	$(".website-header 	").css({
		"height":logoHeight, "max-height":logoHeight, "min-height":logoHeight
	});
	$(".content").css("top", logoHeight);

});