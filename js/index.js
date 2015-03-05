$(document).ready(function () {
    $(".scroll").click(function (event) {
        event.preventDefault();
        $('html,body').animate({scrollTop: $(this.hash).offset().top}, 500);
    });
});

$(".scrollTop").click(function () {
    $("html, body").animate({
        scrollTop: 0
    }, 500);
});
var navToggleClsName = "navi_toggle_active";
<!-- NAVIGATION TOGGLE -->
$("#navigation_box ul li").click(function () {
    $("#whiteout").delay(500).fadeOut(300),
        $("#navigation_box").stop().delay(500).animate({right: '-400px'}, 250).fadeOut(300),
        $("#navi_toggle").delay(500).removeClass(navToggleClsName);
});

$("#whiteout").click(function () {
    $("#whiteout").fadeOut(300),
        $("#navi_toggle").removeClass(navToggleClsName),
        $("#navigation_box").stop().animate({right: '-400px'}, 250).fadeOut(300);
});

$("#navi_toggle").click(function () {
    if ( $document.scrollTop() >= 67) {
        navToggleClsName ="navi_toggle_changed_active";
    } else {
        navToggleClsName ="navi_toggle_active";
    }

    if ($("#navi_toggle").hasClass(navToggleClsName)) {
        $("#navigation_box").stop().animate({right: '-400px'}, 250).fadeOut(300),
            $("#whiteout").fadeOut(300);
    } else {
        $("#whiteout").fadeIn(300),
            $("#navigation_box").stop().fadeIn(0).animate({right: '0px'}, 250);
    }
});

document.querySelector("#navi_toggle")
    .addEventListener("click", function () {
        this.classList.toggle(navToggleClsName);
    });

<!-- BURGER MENU TOGGLE -->
var $document = $(document),
    windowHeight = $(window).height(),
    windowWidth = $(window).width();

$document.scroll(function () {
    //console.log("scrolltop : " + window.innerHeight + " == " + $document.scrollTop());


    if ( $document.scrollTop() >= 690 ) {
        console.log(">>> change");
        $(".navi_toggle").removeClass("navi_toggle").addClass("navi_toggle_changed");
    } else {
        $(".navi_toggle_changed").removeClass("navi_toggle_changed").addClass("navi_toggle");
    }


    if ($document.scrollTop() >= (windowHeight * 0.8)) {
        // user scrolled 50 pixels or more;
        // do stuff
        $(".home_link_projects").fadeIn(300),
            $(".about_availability").fadeIn(300);
    }
    else {
        $(".home_link_projects").fadeOut(300),
            $(".about_availability").fadeOut(300);
    }
});

$(window).resize(function () {
    if ($document.scrollTop() >= (windowHeight * 0.8)) {
        // user scrolled 50 pixels or more;
        // do stuff
        $(".home_link_projects").fadeIn(300),
            $(".about_availability").fadeIn(300);
    }
    else {
        $(".home_link_projects").fadeOut(300),
            $(".about_availability").fadeOut(300);
    }
});



$(".click_img").click(function (event) {
    //$(".popup_content").attr("src", "portfolio_contents/" + $(this).attr('data-name') + ".html");
	var name = $(this).attr('data-name');
    var filename = "portfolio_contents/" + name + ".html",
        element = $('.popup').load(filename);
    $(".popup").fadeIn();
	$(".popup").attr("data-name",name);
});

$('.popup .next').clcik(function(e){
	var item = $('.popup').attr('data-name');
	var item2 = $('.click_img[data-name='+item+']').next().attr('data-name');
	var filename = "portfolio_contents/" + item2 + ".html";
	$('.popup').load(filename);

});


function closePopup() {
    $(".popup").fadeOut();
}




var hidePopup = function () {
    $(".popup").fadeOut();
};

$('.btn.home').click(function() {
    $('html,body').animate({scrollTop: 0}, 200);
});

$('.btn.portfolio').click(function() {
   var top = $('#portfolio').offset().top;
    $('html,body').animate({scrollTop: top}, 200);
});

$('.btn.about').click(function() {
    var top = $('#about').offset().top;
    $('html,body').animate({scrollTop: top}, 200);
});

$('.btn.travel').click(function() {
    var top = $('#travel').offset().top;
    $('html,body').animate({scrollTop: top}, 200);
});

$('.btn.contact').click(function() {
    var top = $('#contact').offset().top;
    $('html,body').animate({scrollTop: top}, 200);
});