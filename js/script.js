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

    $(".page_catalog_nav_btn").click(function () {
        let _parent = $(this).closest(".page_catalog_nav_block");

        $('.page_catalog_nav_btn').removeClass('active');
        $('.page_catalog_nav_list').removeClass('active');
        $('.page_catalog_nav_btn', _parent).addClass('active');
        $('.page_catalog_nav_list', _parent).addClass('active');
    });

    $(".page_catalog_filter_btn").click(function () {
        let _parent = $(this).closest(".page_catalog_filter_block");

        $('.page_catalog_filter_btn', _parent).toggleClass('active');
        $('.page_catalog_filter_price', _parent).toggleClass('active');
        $('.page_catalog_filter_list', _parent).toggleClass('active');
    });

    $(".filter_btn").click(function () {
        $(this).toggleClass('active');
    });

    $(".page_catalog_sorting_price").click(function () {
        $(this).toggleClass('active');
    });

    $(".filter_btn").click(function () {
        let _parent = $(this).closest(".page_catalog_sorting_list");

        $('.filter_btn', _parent).removeClass('active');
        $('.filter_btn', _parent).addClass('active');
    });

    $(".page_catalog_sorting_list").each(function (i, e) {
        $('.filter_btn', e).click(function(evet) {
            $('.filter_btn').removeClass('active');
            $(this).addClass('active');

            $('.page_catalog_sorting_item').text($(this).text());

            $('.page_catalog_sorting_list').removeClass('active');
            $('.page_catalog_sorting_item').removeClass('active');
        });
    });

    $(".page_catalog_sorting_item").click(function () {
        $(this).toggleClass('active');
        $('.page_catalog_sorting_list').toggleClass('active');
    });

    $(".page_products_payments_btn").click(function () {
        $(this).toggleClass('active');
        $('.page_products_payments_list').toggleClass('active');
    });

    $(".page_catalog_filter_list").mCustomScrollbar({
        axis: "y",              // вертикальный скролл
        theme: "rounded-dark",  // тема
        scrollInertia: "280",   // продолжительность прокрутки, значение в миллисекундах
        setHeight: "100%",      // высота блока (переписывает CSS)
        mouseWheel: {
            deltaFactor: 100    // кол-во пикселей на одну прокрутку колёсика мыши
        }
    });

    /* product gallery */

    $('.products_gallery').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.products_gallery_thumb',
        arrows: false,
        dots: false,
        infinite: true,
        focusOnSelect: true,
        fade: true,
        cssEase: 'linear',
    });

    $('.products_gallery_thumb').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        infinite: true,
        asNavFor: '.products_gallery',
        focusOnSelect: true,
        centerMode: false,
    });

    /* products related */

    $('.products_related_wrap').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        infinite: false,
        responsive: [
            {
                breakpoint: 1180,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 2,
                }
            },
        ]
    });
})
