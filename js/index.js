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


    if ( $document.scrollTop() >= 1024 ) {
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

/* CONTACT.JS */

$(function () {
    // Validate the contact form
    $('#contactform').validate({
        // Specify what the errors should look like
        // when they are dynamically added to the form
        errorElement: "label",
        wrapper: "td",
        errorPlacement: function (error, element) {
            error.insertBefore(element.parent().parent());
            error.wrap("<tr class='error'></tr>");
            $("<td></td>").insertBefore(error);
        },

        // Add requirements to each of the fields
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            email: {
                required: true,
                email: true
            },
            message: {
                required: true,
                minlength: 10
            }
        },

        // Specify what error messages to display
        // when the user does something horrid
        messages: {
            name: {
                required: "",
                minlength: jQuery.format("")
            },
            email: {
                required: "",
                email: ""
            },
            message: {
                required: "",
                minlength: jQuery.format("")
            }
        },

        // Use Ajax to send everything to processForm.php
        submitHandler: function (form) {
            $("#send").attr("value", "Sending...");
            $(form).ajaxSubmit({
                success: function (responseText, statusText, xhr, $form) {
                    $(form).slideUp("fast");
                    $("#response").html(responseText).hide().slideDown("fast");
                }
            });
            return false;
        }
    });
});

$(".click_img").click(function (event) {
    //$(".popup_content").attr("src", "portfolio_contents/" + $(this).attr('data-name') + ".html");
    var filename = "portfolio_contents/" + $(this).attr('data-name') + ".html",
        element = $('.popup').load(filename);
    $(".popup").fadeIn();
});


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

$('.btn.experience').click(function() {
    var top = $('#experience').offset().top;
    $('html,body').animate({scrollTop: top}, 200);
});

$('.btn.contact').click(function() {
    var top = $('#contact').offset().top;
    $('html,body').animate({scrollTop: top}, 200);
});