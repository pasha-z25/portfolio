$(document).ready(function () {
    $('#partners-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        margin: 10,
        nav: false,
        dots: true,
        responsive:{
            0:{
                items: 1,
                slideBy: 1,
            },
            550:{
                items: 2,
                slideBy: 2,
            },
            900:{
                items: 3,
                slideBy: 3,
            },
            1200:{
                items: 4,
                slideBy: 4,
            },
        },
    });
    $(".go-to-block").click(function() {
        event.preventDefault();
        var id_section = $(this).attr("href");
        $([document.documentElement, document.body]).animate({
            scrollTop: $(id_section).offset().top
        }, 1500);
    });
    $('.burger-menu').click(function () {
        $(this).toggleClass('open');
        $('.header .menu').slideToggle();
        if ($(this).hasClass("open")){
            $('body').css('overflow', 'hidden');
        }
        else {
            $('body').css('overflow', 'auto');
        }
    });
    $('.header .menu .item-link').click(function () {
        if ($(window).width() < 992) {
            $('.burger-menu').toggleClass('open');
            $('.header .menu').slideToggle();
            if ($(this).hasClass("open")){
                $('body').css('overflow', 'hidden');
            }
            else {
                $('body').css('overflow', 'auto');
            }
        }
    });
    $(function() {  // Быстрый счётчик чисел на странице
        var target_block = $(".principles");  // Общий блок ".experience"
        var blockStatus = true;
        $(window).scroll(function() {
            var scrollEvent = ($(window).scrollTop() > (target_block.position().top - $(window).height()));
            if(scrollEvent && blockStatus) {
                blockStatus = false;
                $(".counter").each(function(){ // Число которое будет расти ".exper_numb"
                    $(this).prop('.wrapper',0).animate({ // Контейнер '.experience-card' в котором находится само число
                        Counter:$(this).text()
                    },{
                        duration: 3500,
                        easing: 'swing',
                        step:function(now){
                            $(this).text(Math.ceil(now));
                        }
                    });
                });
            };
        });
    });
});