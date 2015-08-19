//HOME BUTTON CLICK ALERT

$(document).ready(function(){
	$('#joinButton').click(function() {
		alert( "You made the right decision. Yezzus will save us all!" );
	});
});

//HOME BACKGROUND GALLERY

$( window ).load(function() {
	$('#homeHero').hide();

		function anim() {
    		$("#wrap #homeHero").first().appendTo('#wrap').fadeOut(2000);
    		$("#wrap #homeHero").first().fadeIn(5000); 
    	setTimeout(anim, 10000);
	}
anim();
});


//DONATE PAGE
$(document).ready(function () {
  $("#slider").scroll(function () {
    $(".topBar").slide(1000);
  });
});

