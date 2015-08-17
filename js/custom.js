$(document).ready(function(){
	$('#joinButton').click(function() {
		alert( "You made the right decision. Yezzus will save us all!" );
	});
});



$( window ).load(function() {
	$('#homeHero').hide();

		function anim() {
    		$("#wrap #homeHero").first().appendTo('#wrap').fadeOut(2000);
    		$("#wrap #homeHero").first().fadeIn(5000); 
    	setTimeout(anim, 10000);
	}
anim();
});