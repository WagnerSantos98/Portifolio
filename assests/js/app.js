//Menu mobile-nav
document.addEventListener('DOMContentLoaded', function(){
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
});

$('.right hide-on-med-and-down a[href^="#"]').on('click', function(e) {
	e.preventDefault();
	var id = $(this).attr('href'),
			targetOffset = $(id).offset().top;
			
	$('html, body').animate({ 
		scrollTop: targetOffset - 100
	}, 500);
});

//Back to top button
var btn = $('#button');

$(window).scroll(function(){
    if($(window).scrollTop() > 300){
        btn.addClass('show');
    }else{
        btn.removeClass('show');
    }
});

btn.on('click', function(e){
    e.preventDefault();
    $('html, body').animate({scrollTop:0},'500');
});