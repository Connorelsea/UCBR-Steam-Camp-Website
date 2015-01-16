/*

Custom Javascript by Elsea Labs

See the source of the index.html page to
view more information about the  company
and its copyrights.

*/

// On Document Load

$(document).ready(function() {

	// Update the position of the header
	positionHeader();

});

// On Resize

$(window).resize(function() {

	// Update the position of the header
	positionHeader();

});

// This function executes all  of  the  necessary
// code for the header of the page to be re-sized

function positionHeader() {

	// Set  the  height  of  the top  bar  and   the
	// content  div's  distance  from the top of the
	// page to the height of the logo, which changes
	// automatically based on window size.

	var logoHeight = parseFloat($(".website-header .logo").css("height"));

	if (logoHeight >= 120) logoHeight = 120;

	$(".website-header").css({
		"height":logoHeight, "max-height":logoHeight, "min-height":logoHeight
	});
	$(".content").css("top", logoHeight);

	// Set the size of the church logo elements

	var chaliceHeight = logoHeight - 30.0;
	var chaliceFromTop = parseFloat($(".website-header").css("height")) - chaliceHeight;

	var wordHeight = logoHeight / 2;

	$(".website-header .church-logo").css({
		"height":chaliceHeight, "max-height":chaliceHeight, "min-height":chaliceHeight,
		"top":chaliceFromTop
	});

	$(".website-header .church-name").css({ "top":wordHeight });

	if (parseFloat($(".website-header").css("width")) < 600)
		$(".website-header .church-name").css({ "display":"none" })
	else
		if ($(".website-header .church-name").css("display") == "none")
			$(".website-header .church-name").fadeIn(2000);

}