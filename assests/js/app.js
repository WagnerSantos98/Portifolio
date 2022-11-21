//Menu mobile-nav
document.addEventListener('DOMContentLoaded', function(){
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
});

$("body").css("paddingTop", $(".nav-wrapper").innerHeight());

$(function(){
    $(".nav-wrapper li a").click(function(e){
        "use strict";
        e.preventDefault();
        $("html, body").animate(
            {
                scrollTop: $("#" + $(this).data("scroll")).offset().top + 1,
            },
            1000
        );
    });

        $(this)
        .addClass("active")
        .parent()
        .siblings()
        .find("a")
        .removeClass("active");

        $(window).scroll(function(){
        $(".block").each(function(){
            if($(window).scrollTop() >= $(this).offset().top){
                var blockId = $(this).attr("id");
                $(".nav-wrapper a").removeClass("active");
                $('.nav-wrapper li a[data-scroll="' + blockId + '"]').addClass("active");
            }
        });
    });
});

$("body").css("paddingTop", $(".sidenav").innerHeight());


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