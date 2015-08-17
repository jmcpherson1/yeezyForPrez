$(document).ready(function(){
	$('#joinButton').click(function() {
		alert( "You made the right decision. Yezzus will save us all!" );
	});
});

$(".box").bgswitcher({
  images: ["pic1.jpg", "pic2.jpg", "pic3.jpg"], // Background images
  effect: "fade" // fade, blind, clip, slide, drop, hide
});

$(".box").bgswitcher({
  images: ["pic1.jpg", "pic2.jpg", "pic3.jpg"], // Background images
  effect: "fade", // fade, blind, clip, slide, drop, hide
  interval: 5000, // Interval of switching
  loop: true, // Loop the switching
  shuffle: false, // Shuffle the order of an images
  duration: 5000, // Effect duration
  easing: "swing" // Effect easing
});