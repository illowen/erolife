$(document).ready(function () {
    /* меню ***********************************/

    $(".menu_mob_btn").click(function () {
        $(this).toggleClass("active");
        $(".menu_wrap").toggleClass("active");
    });

    $(".menu_mob_close").click(function () {
        $(".menu_wrap").toggleClass("active");
    });

    $('.banner_slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                }
            },
        ]
    });

    $(window).scroll(function() {

        var header = $('.header').offset().top;
        if(header > 100){
            $('header').addClass('fixed');
        } else{
            $('header').removeClass('fixed');
        }

    });
})