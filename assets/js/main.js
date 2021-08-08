/* -----------------------------------------------
                    Js Main
--------------------------------------------------

Table of Content

    . Auto-generate Posts
    . Preloader
    . Navigation
    . Back-top
    . Carousel-hero
    
----------------------------------- */

/* -----------------------------------
        Auto-generate Posts
----------------------------------- */

function add_div(oid, imgSrc) {
    var e = document.getElementById("details");
    var div = document.createElement("div");
    div.className = "card";
    div.id = oid;
    div.innerHTML = e.innerHTML;
    div.getElementById("imgSrc").src = imgSrc;
    document.getElementById("form").appendChild(div);
}

function index_onload() {
    
    $.ajax({
        type: 'GET',
        dataType: 'json',
        contentType: "application/json",
        url: "https://dog-partner-app.herokuapp.com/api/agora",
        crossDomain: true,
        success: function (data) {
            var dataObj = JSON.parse(data);
            for (var i = 0; i < 16; i++) {
                var oid = dataObj[i].oid;
                var imgSrc = dataObj[i].image_url;
                add_div(oid, imgSrc);
            }
        },
        error: function () {
            alert("failed");
        }
    })
}

(function ($) {
    "use strict";

    /* -----------------------------------
            Preloader
    ----------------------------------- */
    $('.loading').delay(500).fadeOut(500);


    /* -----------------------------------
            Navigation
    ----------------------------------- */
    $(window).on('scroll', function () {
        if ($(".navbar").offset().top > 50) {
            $(".navbar").addClass("navbar-scroll");
        } else {
            $(".navbar ").removeClass("navbar-scroll");
        }
    });

    $('.navbar-toggler').on('click', function () {
        $('.navbar-collapse').collapse('show');
    });


    /* -----------------------------------
           Back-top
    ----------------------------------- */
    $(window).on("scroll", function () {
        if ($(window).scrollTop() > 250) {
            $('.back-top').fadeIn(300);
        } else {
            $('.back-top').fadeOut(300);
        }
    });

    $('.back-top').on('click', function (event) {
        event.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, 300);
        return false;
    });

    /* -----------------------------------
       Carousel-hero
    -----------------------------------*/
    $(".carousel-hero .owl-carousel").owlCarousel({
        loop: true,
        stagePadding: 0,
        margin: 0,
        nav: true,
        autoplay: true,
        center: false,
        dots: false,
        mouseDrag: true,
        touchDrag: true,
        smartSpeed: 1000,
        autoplayHoverPause: false,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            768: {
                items: 1,
            },
            1200: {
                items: 1,
            },
        }
    });

})(jQuery);


