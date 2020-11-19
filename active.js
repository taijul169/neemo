$(document).ready(function () {
    // owl-carousel-activation
  $('.testimonial').owlCarousel({
        loop: true,
        margin: 5,
        autoPlay:true,
        responsiveClass: true,
        animateOut: 'fadeOut',
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            500: {
                items: 2,
                nav:false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 2,
                loop: false
               
            }
        }
  });
    //brand-carousel-active
  $('.brand').owlCarousel({
        loop: true,
        margin: 5,
        autoPlay:true,
        responsiveClass: true,
        animateOut: 'fadeOut',
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            500: {
                items: 2,
                nav:true
            },
            600: {
                items: 3,
                nav: false
            },
            1000: {
                items: 6,
                loop: false
               
            }
        }
  });  
       // sticky nav-area-start
    $(window).scroll(function () {
        var topPosition = $(document).scrollTop();
        if (topPosition > 50) {
            $('#header').addClass("fixedNav");
        }
        else {
            $('#header').removeClass("fixedNav");
        }
    });
    // responsive-navbar-toggle
    $('.threebarBtn').click(function () {
        $('.nav-header').toggleClass('displayNav');
    });


    // top-scroll-button-active
    $(window).scroll(function () {
        if ($(window).scrollTop() > 200) {
            $(".scroll-top-indicator").fadeIn();
            
        }
        else {
            $(".scroll-top-indicator").fadeOut();
        }
    });
    $(".scroll-top-indicator").click(function () {
        $("html").animate({ scrollTop: 0 },2000);
    });

});