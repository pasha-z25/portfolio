$(document).ready(function () {

    var body = $('html,body');
    var scrollTopBtn = $('.btn-scroll');
    $(window).on('scroll', function (e) { //появление кнопки "Вверх"
        var scrolled = $(window).scrollTop();
        scrolled > 500
            ? scrollTopBtn.addClass('visible')
            : scrollTopBtn.removeClass('visible');
    });
    $('.btn-scroll').click (function () { //скролл вверх при нажатии кнопки
        body.animate({
            scrollTop: 0,
        }, 1500);
    });
    $(".scroll-block").click(function() { //скролл к следующему блоку
        var id_section = $(this).attr("href");
        $([document.documentElement, document.body]).animate({
            scrollTop: $(id_section).offset().top
        }, 1000);
        return false;
    });
    $(".footer-link").click(function() { //скролл с меню футера к нужному блоку
        var id_section = $(this).attr("href");
        $([document.documentElement, document.body]).animate({
            scrollTop: $(id_section).offset().top
        }, 1500);
        return false;
    });
// -------------------------------------------------------------------------------------------
    $('#phone-list').click(function () { //сменна номера для звонка (в header)
        let vall = $(this).val();
        $('#head-phone').attr('href', vall);
    });

    new WOW().init(); //иницализация анимации
// -------------------------------------------------------------------------------------------
    $('.general-cleaning-btn').mouseenter(function () { //анимация (подсветка) главного слайда
        $('.redline').toggleClass('visible');
        $('.greenline').toggleClass('visible');
    });
    $('.general-cleaning-btn').mouseleave(function () {
        $('.redline').toggleClass('visible');
        $('.greenline').toggleClass('visible');
    });
    $('.regular-cleaning-btn').mouseenter(function () {
        $('.greenline').toggleClass('visible');
    });
    $('.regular-cleaning-btn').mouseleave(function () {
        $('.greenline').toggleClass('visible');
    });
    $('.general-cleaning-btn').click(function () {
        if ($('.regular-cleaning-btn').hasClass('upper')) {
            $('.regular-cleaning-btn').removeClass('upper');
            $('.redline').removeClass('upper');
            $('.greenline').removeClass('upper');
            $(this).toggleClass('upper');
            $('.redline').toggleClass('upper');
            $('.greenline').toggleClass('upper');
        } else {
            $(this).toggleClass('upper');
            $('.redline').toggleClass('upper');
            $('.greenline').toggleClass('upper');
        }
    });
    $('.regular-cleaning-btn').click(function () {
        if ($('.general-cleaning-btn').hasClass('upper')) {
            $('.general-cleaning-btn').removeClass('upper');
            $('.redline').removeClass('upper');
            $('.greenline').removeClass('upper');
            $(this).toggleClass('upper');
            $('.greenline').toggleClass('upper');
        } else {
            $(this).toggleClass('upper');
            $('.greenline').toggleClass('upper');
        }
    });
// -------------------------------------------------------------------------------------------
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
            }
        });
    });
// -------------------------------------------------------------------------------------------
    const roomcost = 100;
    const wcroomcost = 100;
    const metrcost = 40;
    var room_1 = parseFloat($("#1-room-val").text());
    var wc_1 = parseFloat($("#1-wc-val").text());
    var room_2 = parseFloat($("#2-room-val").text());
    var wc_2 = parseFloat($("#2-wc-val").text());

    $('.room-val-add-1').click(function () {
        if (room_1 == 5) {
            console.log('максимальное значение');
        } else {
            room_1++;
            $("#1-room-val").text(room_1);
            return room_1;
        }
    });
    $(".room-val-rem-1").click(function () {
        if (room_1 == 1) {
            console.log('минимальное значение');
        } else {
            room_1 = room_1 - 1;
            $("#1-room-val").text(room_1);
            return room_1;
        }
    });
    $('.wc-val-add-1').click(function () {
       if (wc_1 == 3) {
           console.log('максимальное значение');
       } else {
           wc_1++;
           $('#1-wc-val').text(wc_1);
           return wc_1;
       }
    });
    $('.wc-val-rem-1').click(function () {
       if (wc_1 == 1) {
           console.log('минимальное значение');
       }  else {
           wc_1 = wc_1 - 1;
           $('#1-wc-val').text(wc_1);
           return wc_1;
       }
    });

    $('.room-val-add-2').click(function () {
        if (room_2 == 5) {
            console.log('максимальное значение');
        } else {
            room_2++;
            $("#2-room-val").text(room_2);
            return room_2;
        }
    });
    $(".room-val-rem-2").click(function () {
        if (room_2 == 1) {
            console.log('минимальное значение');
        } else {
            room_2 = room_2 - 1;
            $("#2-room-val").text(room_2);
            return room_2;
        }
    });
    $('.wc-val-add-2').click(function () {
        if (wc_2 == 3) {
            console.log('максимальное значение');
        } else {
            wc_2++;
            $('#2-wc-val').text(wc_2);
            return wc_2;
        }
    });
    $('.wc-val-rem-2').click(function () {
        if (wc_2 == 1) {
            console.log('минимальное значение');
        }  else {
            wc_2 = wc_2 - 1;
            $('#2-wc-val').text(wc_2);
            return wc_2;
        }
    });

    $('#form1').click(function () {
        var phone_1 = $('#1-phone-field').val();
        var f_cost = 250 + (roomcost * room_1) + (wcroomcost * wc_1);
        $('#final-cost').text(f_cost);
        // $('#client-tel').text(phone_1);
        $('#client-phone').val(phone_1);
        console.log(room_1);
        $('#room').text(room_1);
        $('#wc_room').text(wc_1);
        $('#category').text('поддерживающая уборка');
    });

    $('#form2').click(function () {
        var window_cl = 0;
        var furniture = 0;
        if ($('#checkBox01').is(':checked')) {
            window_cl = 150;
            $('#window').text('Да');
        }
        if ($('#checkBox02').is(':checked')) {
            furniture = 500;
            $('#clean').text('Да');
        }
        var square_1 = $('#1-square').val();
        var phone_2 = $('#2-phone-field').val();
        var f_cost = (metrcost * square_1) + window_cl + furniture;
        $('#final-cost').text(f_cost);
        // $('#client-tel').text(phone_2);
        $('#client-phone').val(phone_2);
        $('#square').text(square_1);
        $('#category').text('генеральная уборка');
    });

    $('#form3').click(function () {
        var square_2 = $('#2-square').val();
        var phone_3 = $('#3-phone-field').val();
        var f_cost = metrcost * square_2;
        $('#final-cost').text(f_cost);
        // $('#client-tel').text(phone_3);
        $('#client-phone').val(phone_3);
        $('#square').text(square_2);
        $('#category').text('уборка офиса');
    });

    $('#form4').click(function () {
        var window_cl = 0;
        var furniture = 0;
        if ($('#checkBox03').is(':checked')) {
            window_cl = 150;
            $('#window').text('Да');
        }
        if ($('#checkBox04').is(':checked')) {
            furniture = 500;
            $('#clean').text('Да');
        }
        var square_3 = $('#3-square').val();
        var phone_4 = $('#4-phone-field').val();
        var f_cost = (metrcost * square_3) + window_cl + furniture;
        $('#final-cost').text(f_cost);
        // $('#client-tel').text(phone_4);
        $('#client-phone').val(phone_4);
        $('#square').text(square_3);
        $('#category').text('генеральная уборка');
    });

    $('#form5').click(function () {
        var phone_5 = $('#5-phone-field').val();
        var f_cost = 250 + (roomcost * room_2) + (wcroomcost * wc_2);
        $('#final-cost').text(f_cost);
        // $('#client-tel').text(phone_5);
        $('#client-phone').val(phone_5);
        $('#room').text(room_2);
        $('#wc_room').text(wc_2);
        $('#category').text('поддерживающая уборка');
    });
// -------------------------------------------------------------------------------------------

    $(window).on('load resize',windowSize);
    function windowSize(){
        var winsize = $(window).width();
        // if ($(window).width() <= '995'){
        //     $('#shelf').show(10);
        // } else {
        //     $('#shelf').hide(10);
        // }
        $('.modal_close, #modal-substrate').click( function(){ // лoвим клик пo крестику или пoдлoжке
            $('#modal-vacancy, #modal-calc')
                .animate({opacity: 0, top: '45%'}, 200,  // плaвнo меняем прoзрaчнoсть нa 0 и oднoвременнo двигaем oкнo вверх
                    function(){ // пoсле aнимaции
                        $(this).css('display', 'none'); // делaем ему display: none;
                        $('#modal-substrate, #modal-vacancy, #modal-calc, #modal-public').fadeOut(400); // скрывaем пoдлoжку
                        // $('body').css('overflow', 'auto');
                    }
                );
        });
        $('#vacancy-btn').click(function (event) {
            event.preventDefault(); // выключaем стaндaртную рoль элементa
            $('#modal-substrate').fadeIn(400, // снaчaлa плaвнo пoкaзывaем темную пoдлoжку
                function(){ // пoсле выпoлнения предъидущей aнимaции
                    if (winsize <= '765') {
                        $('#modal-vacancy')
                            .css('display', 'block') // убирaем у мoдaльнoгo oкнa display: none;
                            .animate({opacity: 1, top: '5%'}, 200); // плaвнo прибaвляем прoзрaчнoсть oднoвременнo сo съезжaнием вниз
                        // $('body').css('overflow', 'hidden');
                    } else {
                        $('#modal-vacancy')
                            .css('display', 'block') // убирaем у мoдaльнoгo oкнa display: none;
                            .animate({opacity: 1, top: '50%'}, 200); // плaвнo прибaвляем прoзрaчнoсть oднoвременнo сo съезжaнием вниз
                        // $('body').css('overflow', 'hidden');

                    }
                });
        });
        $('#public-modal').click(function (event) {
            event.preventDefault(); // выключaем стaндaртную рoль элементa
            $('#modal-substrate').fadeIn(400, // снaчaлa плaвнo пoкaзывaем темную пoдлoжку
                function(){ // пoсле выпoлнения предъидущей aнимaции
                    if (winsize <= '765') {
                        $('#modal-public')
                            .css('display', 'block') // убирaем у мoдaльнoгo oкнa display: none;
                            .animate({opacity: 1, top: '5%'}, 200); // плaвнo прибaвляем прoзрaчнoсть oднoвременнo сo съезжaнием вниз
                        // $('body').css('overflow', 'hidden');
                    } else {
                        $('#modal-public')
                            .css('display', 'block') // убирaем у мoдaльнoгo oкнa display: none;
                            .animate({opacity: 1, top: '5%'}, 200); // плaвнo прибaвляем прoзрaчнoсть oднoвременнo сo съезжaнием вниз
                        // $('body').css('overflow', 'hidden');

                    }
                });
        });
        $('#form1, #form2, #form3, #form4, #form5').click(function (event) {
            event.preventDefault(); // выключaем стaндaртную рoль элементa
            $('#modal-substrate').fadeIn(400, // снaчaлa плaвнo пoкaзывaем темную пoдлoжку
                function(){ // пoсле выпoлнения предъидущей aнимaции
                    if (winsize <= '765') {
                        $('#modal-calc')
                            .css('display', 'block') // убирaем у мoдaльнoгo oкнa display: none;
                            .animate({opacity: 1, top: '5%'}, 200); // плaвнo прибaвляем прoзрaчнoсть oднoвременнo сo съезжaнием вниз
                        // $('body').css('overflow', 'hidden');
                    } else {
                        $('#modal-calc')
                            .css('display', 'block') // убирaем у мoдaльнoгo oкнa display: none;
                            .animate({opacity: 1, top: '50%'}, 200); // плaвнo прибaвляем прoзрaчнoсть oднoвременнo сo съезжaнием вниз
                        // $('body').css('overflow', 'hidden');
                    }
                });
        });
    }
});