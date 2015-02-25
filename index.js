/*

Custom Javascript by Elsea Labs

See the source of the index.html page to
view more information about the  company
and its copyrights.

*/

// On Document Load

setTimeout(function() { positionHeader() }, 100);

$(document).ready(function() {

	// Update the position of the header
	positionHeader();
	positionBottom();
	updatePictureSize();
	registerButton();
	setup_registerButton();
	setTimeout(function() { changePicture() }, 5000)

});

// On Resize

$(window).resize(function() {

	// Update the position of the header
	positionHeader();
	positionBottom();
	updatePictureSize();
	registerButton();

});

var pics = new Array("diverse-one.jpg", "diverse-two.jpg", "pic-one-crop.jpg")
var array_length = 3;
var array_current = 1;
var image = $("#slider")

var changingimage = false

function changePicture() {

	changingimage = true;
	array_current += 1

	console.log(array_current)

	$("#slider").fadeOut("slow", function() {
		console.log("Going to " + pics[array_current] + " at " + array_current)
		$("#slider").attr("src", pics[array_current])
		$("#slider").fadeIn("fast")
	})

	if (array_current == array_length) array_current = 0
	setTimeout(function() { changePicture() }, 5000)
	
	changingimage = false;
}

function updatePictureSize() {
	var height = $(".bar-one .image").height()
	if (changingimage = false)
		$(".bar-one .image").css({ "min-height":height, "max-height":height, "height":height})
}

// This function executes all  of  the  necessary
// code for the header of the page to be re-sized

function positionHeader() {

	// Set  the  height  of  the top  bar  and   the
	// content  div's  distance  from the top of the
	// page to the height of the logo, which changes
	// automatically based on window size.

	var logoHeight = parseFloat($(".website-header .logo").css("height"));

	// Ensure that the height does not get  huge  on
	// wide displays

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

	// Remove or add the church name accordingly
	// based on the width of the page

	if (parseFloat($(".website-header").css("width")) < 600)
		$(".website-header .church-name").css({ "display":"none" })
	else
		if ($(".website-header .church-name").css("display") == "none")
			$(".website-header .church-name").fadeIn(2000);

}

function positionBottom() {
	var header_pos = $(".bar-five .registration h1").position()
	$(".bar-five .registration h3").css({ "top":header_pos.top - 40 })

	// if ($(".bar-five .registration h1").width() > 300)
	// 	$(".bar-five .registration h1").css({ "max-width":300 });
	// else
	// 	$(".bar-five .registration h1").css({})

	var size_box = $(".bar-five .registration").width()
	var button_size = size_box - 40
	var button_offset = 10
	$(".bar-five .button").css({ "width":button_size, "left":button_offset })

	if ($( document ).width() < 750) $(".bar-five .button").text("Register >")
	else $(".bar-five .button").text("Click to Register Now")
}

var expanded = false;

function setup_registerButton() {

	$(".registration-box .expand").css({ "display":"none" })

	$(".button-container").hover(

		function() {
			$(".registration-box .expand").slideDown("slow")
		},

		function() {
			$(".registration-box .expand").slideUp("slow")
		}

	)

	$("#choice_adult").on("click", function() {
		window.location.href = "http://goo.gl/forms/xKmM6KPbQP"
	})

	$("#choice_child").on("click", function() {
		window.location.href = "https://docs.google.com/forms/d/1f7qpIMdPDIjQnUKZhSaBdAbnnjaI-H9DCecWRtqpHpg/viewform?c=0&w=1"
	})

}

function registerButton() {

	var button_width  = $(".registration-box .button-container .button").width()
	var button_margin = $(".registration-box .button-container .button").css("marginLeft")
	var regbox_height = $(".registration-box").height() - 110

	$(".registration-box .expand").css({
		"width":button_width,
		"margin-left":button_margin,
		"height":regbox_height,
	})
	
}