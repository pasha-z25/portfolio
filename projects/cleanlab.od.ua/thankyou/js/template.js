/*-----------------------------------------------------------------------------------------------*/
new WOW().init(); // Иницализация функции WOW (которая отвечает за анимацию)

$('.wow').mouseenter(function () {
    if ($(this).hasClass('animated')) {
        $(this).addClass('shake')
    } else {
        $(this).addClass('animated shake')
    }
});
$('.wow').mouseleave(function () {
    $(this).removeClass('shake')
});
/*-----------------------------------------------------------------------------------------------*/
$(function() {  // Быстрый счётчик чисел на странице
    var target_block = $(".experience");  // Общий блок ".experience"
    var blockStatus = true;
    $(window).scroll(function() {
        var scrollEvent = ($(window).scrollTop() > (target_block.position().top - $(window).height()));
        if(scrollEvent && blockStatus) {
            blockStatus = false;
            $(".exper_numb").each(function(){ // Число которое будет расти ".exper_numb"
                $(this).prop('experience-card',0).animate({ // Контейнер '.experience-card' в котором находится само число
                    Counter:$(this).text()
                },{
                    duration: 2000,
                    easing: 'swing',
                    step:function(now){
                        $(this).text(Math.ceil(now));
                    }
                });
            });
        };
    });
});
/*-----------------------------------------------------------------------------------------------*/
var body = $('html,body'); // Кнопка "Скролл вверх"
var scrollTopBtn = $('.btn-scroll');

$(window).on('scroll', function (e) {
    var scrolled = $(window).scrollTop();
    scrolled > 500
        ? scrollTopBtn.addClass('visible')
        : scrollTopBtn.removeClass('visible');
});

$('.btn-scroll').click (function () {
    body.animate({
        scrollTop: 0,
    }, 1500);
});
/*-----------------------------------------------------------------------------------------------*/
$(".footer-link").click(function() { // Переход (скролл) с меню футера к нужному блоку
    var id_section = $(this).attr("href");
    $([document.documentElement, document.body]).animate({
        scrollTop: $(id_section).offset().top
    }, 1500);
});
/*-----------------------------------------------------------------------------------------------*/
$('.detail-link, .hide-link').click(function () { // Текст "Подробнее"/"Скрыть"
    $('.detail-block').slideToggle();
    $('.detail-link').toggle();
    $('.hide-link').toggle();
    return false;
});
/*-----------------------------------------------------------------------------------------------*/