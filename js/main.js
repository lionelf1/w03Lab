$('.signin').on('click',function() { //open signin

	$('.modal').fadeIn(1000);
});

$('.close').on('click',function() { //close

	$('.modal').fadeOut(1000);
});

$('.submit').on('click',function() { //click submit error
	$('input').addClass ('error');
});

$('.submit').on('mouseover',function() {
	$('input').removeClass ('error');
});

$('input').on('click',function() { //error hover
	$(this).removeClass('error');
});